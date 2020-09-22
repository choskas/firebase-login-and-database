import firebase from 'firebase'
const authWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
  
    firebase.auth().signInWithPopup(provider).then(result => {
        console.log(result);
        
    })
    .catch((error)=>{
        alert(1)
        console.log(error, 'error mija')
    }) 
}

const authWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error,' error')
    })
}

export {authWithFacebook, authWithGoogle }