import React,{useEffect, useState} from 'react';
import './App.css';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input,setInput]=useState('');
  const [messages,setMessages]=useState([]);
  const [username,setUsername]=useState('');


  useEffect(()=>{
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>({id:doc.id,message:doc.data()})))
    })
  },[])
  


  useEffect(()=>{
    setUsername(prompt("Enter name"))
  },[])
  const sendMessages=(event)=>{
    event.preventDefault();
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    
   /*  setMessages([...messages,{username:username,message:input}]); */
    setInput('');
  }
  
  return (
    <div className="App">
     <img className="image" src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"/>
      <h1 className="header_one">Messenger-clone</h1>
      <h2 className="header_two">Welcome {username}</h2>
      <form className="app_form">
      <FormControl className="app_Formcontrol">
        
         <Input className="app_input" value={input} onChange={event=>setInput(event.target.value)} placeholder="Enter a message"/>
         <IconButton className="app_iconButton" disabled={!input} variant="contained" color="primary"type="submit" onClick={sendMessages}>
         <SendIcon />
         </IconButton>
         
         
        </FormControl>
      
      

      </form>

      <FlipMove>
      
      {messages.map(({id,message})=>(
        <Message key={id} username={username} message={message} />
       
       
      ))}
      </FlipMove>
     
    </div>
  );
}

export default App;
