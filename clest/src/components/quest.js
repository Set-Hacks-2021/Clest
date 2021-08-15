import React,{useEffect, useState} from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Add, Search } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { database } from "../firebase";
import { useAuth } from "../authcontext"

const useStyles = makeStyles({
  drawer: {
    width: "190px"
  }
});


export default function QuestList(){

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
      <div>
        <img src={image} />

        <div>
          <h3>{topic}</h3>
          <p>{desc}</p>
        </div>
      
      </div>
    );
  }
    

  return (
    <div style={{display: 'column'}}>
      {quests && quests.map(doc => <QuestCard topic={doc.topic} desc={doc.desc} image={doc.image} />) }
    </div>
  );
}




export default function Quest() {
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
    {
      text: '',
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
      <List>
        {}
      </List>
    </MUIDrawer>
  );
};