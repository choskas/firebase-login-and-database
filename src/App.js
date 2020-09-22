import React, {useState, useEffect} from 'react';
import './App.css';
import {AuthComponent} from './components/AuthComponent'
import firebase from 'firebase'
import {config} from './firebase/config'

firebase.initializeApp(config)
function App() {
  const [name, setName] = useState('');
  const [picture, setPicture] = useState(null)
  const [uploadValue, setUploadValue] = useState(0);
  const [message, setMessage] = useState('');

  const handleOnChange = async (event) => {
    const file = event.target.files[0]
 
    const storageRef = firebase.storage().ref(`pictures/${file.name}`)
    const task = storageRef.put(file)
    console.log(task)
    task.on('state_changed', (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setUploadValue(percentage);
    }, (error) => {
      setMessage('ha ocurrido un error')
    }, async () => {
      const imageUrl =  await task.snapshot.ref.getDownloadURL();
      console.log(imageUrl, 'adsjhasdj')
      setPicture(imageUrl)
    })
    alert('pass')
  }
  useEffect(()=>{
    const nameRef = firebase.database().ref().child('object').child('name');

    nameRef.on('value', (snapshot) => {

      setName(snapshot.val())
    })
  },[name])
  console.log(picture, 'picturer')
  return (
    <div className="App">
HOLA {name}
<input type="file" onChange={(event) => {
  console.log(event)
 handleOnChange(event)
}}></input>
<img src={picture} height="200px" width="300px"></img> <progress max="100" value={uploadValue}></progress>
<h2>Autenticacion</h2>
<AuthComponent />
    </div>
  );
}

export default App;
