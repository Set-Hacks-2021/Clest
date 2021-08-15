import React,{useEffect, useState} from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'

import { Add, Search } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { database } from "../firebase";
import { useAuth } from "../authcontext"

const useStyles = makeStyles({
  drawer: {
    width: "190px"
  }
});


function QuestList({ style }){

  const [quests, setQuests] = useState();
  const { currentUser } = useAuth();

  useEffect(() => {
    async function fetchData() {
      const snapshot = await database.topics.get()
      console.log(snapshot.docs.map(doc => doc.data()))
      setQuests(snapshot.docs.map(doc => doc.data()))
      return
    }

    fetchData();
    
    return () => {
      setQuests([]);
    };
  }, []);

  console.log(quests);

  function QuestCard({topic, desc, image}){
    // will display side bar for now
  
  
    return (
      <div style={{margin: '1rem'}}>
        <img src={image} />

        <div>
          <Card >
            <Card.Body>
              <Card.Title>{topic}</Card.Title>
              <Card.Text>
                {desc}
              </Card.Text>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Complete Quest" />
              </Form.Group>

            </Card.Body>
          </Card>
        </div>
      
      </div>
    );
  }
    

  return (
    <div style={{display: 'column'}, style} >
      <h1 style={{margin: '1rem'}}>Quests</h1>
      {quests && quests.map(doc => <QuestCard topic={doc.topic} desc={doc.desc} image={doc.image} />) }
    </div>
  );
}




function Quest() {
  const history = useHistory();
  const classes = useStyles();
  const [quests, setQuests] = useState();
  const { currentUser } = useAuth();

  useEffect(() => {
    async function fetchData() {
      const snapshot = await database.topics.get()
      console.log(snapshot.docs.map(doc => doc.data()))
      setQuests(snapshot.docs.map(doc => doc.data()))
      return
    }

    fetchData();
    
    return () => {
      setQuests([]);
    };
  }, []);


  const itemsList = [
    {
      text: "Quests",
      icon: <Search />,
      // onClick:  
    },
    {
      text: "Add Quest",
      icon: <Add />,
      onClick: () => history.push("/form")
    },


  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>

    </MUIDrawer>
  );
};

export {Quest, QuestList};