import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "../config/firebase.config";


try {
    firebase.initializeApp(firebaseConfig);
}
catch (e) {
    console.error(e.stack)
}

const db = firebase.firestore();

export function readDoc () {
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.name}`);
        });
    });
}
export function SignUpFunc (Name,Pass){
    if ( db.collection("users"))
    db.collection("users").add({
        name: Name,
        password: Pass
    })
    .then(function(docRef) {
        console.log("User ID: ", docRef.id);
        alert ("Dang ki thanh cong")
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        alert ("Dang ki chua thanh cong")
    });
    
}