 import 'bootstrap/dist/css/bootstrap.min.css';
 import "../styles/form.scss";
 import React, {useState} from 'react'; 
 import {Button, Form} from 'react-bootstrap'
 import { database, storage } from '../firebase'
 import { useHistory } from "react-router-dom";



 export default function QuestForm() {

    const [topic, setTopic] = useState("")
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState()

    function submitQuest() {
        database.topics.add({
            topic,
            desc,
            file
        })
    }

    async function imgUpload(event) {
        let selected = event.target.files[0];
        const types = ["image/png", "image/jpeg", "image/jpg"];
        if (selected && types.includes(selected.type)) {
          const path = `topics/${selected.name}`;
          const ref = storage.ref(path);
          try {
            await ref.getDownloadURL().then((url) => {
              setFile(url);
            });
          } catch (err) {
            const uploadTask = storage.ref(path).put(selected);
            uploadTask.on(
              "state_changed",
              (snapshot) => {},
              () => {},
              () => {
                uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                  //  console.log(url);
                  setFile(url);
                });
              }
            );
          }
        } else if (selected === null) {
          setFile(null);
        }
      }

    // function dummySubmitQuest(a, b){
    //     console.log('done dummy');
    //     database.topics.add({
    //         a,
    //         b,
    //     })
    // }

    const history = useHistory();
    return(
        <Form className = "form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Topic</Form.Label>
                <Form.Control type="" placeholder="Enter Topic" value={topic} onChange={(event) => setTopic(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} value={desc} onChange={(event) => setDesc(event.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Picture</Form.Label>
                <Form.Control type="file" onChange={imgUpload} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={submitQuest}>
                Submit
            </Button>
            <Button variant="secondary" type="submit" className="form-secondary-button" onClick= {() => history.push("/map")}>
                go back
            </Button>
        </Form>
    );
 }