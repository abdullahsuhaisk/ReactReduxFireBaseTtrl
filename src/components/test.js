import React, { Component } from 'react';
import firebase from 'firebase';


export default class Test extends Component {
  render() {
     const firestore = firebase.firestore();
    const db = firestore;

    // firestore.collection('kullanicilar').add({
    //     first:'Suha',
    //     last:'isik',
    //     middle:'Apo',
    //     born:1993
    // }).then((docRef)=> {
    //     console.log('Document written by ID: ',docRef.id)
    // }).catch(function(error) {
    //     console.error("Error adding document: ", error);
    // });
  //   firestore.collection("cities").doc("LA").set({
  //     name: "Los Angeles",
  //     state: "CA",
  //     country: "USA"
  // })
  // .then(function() {
  //     console.log("Document successfully written!");
  // })
  // .catch(function(error) {
  //     console.error("Error writing document: ", error);
  // });
//   var cityRef = db.collection('cities').doc('BJ');

// var setWithMerge = cityRef.set({
//     capital: true,
//     name:"?"
// }, { merge: true });
  
    // firestore.collection('kullanicilar').get().then((querySnapshot)=>{
    //     querySnapshot.forEach((doc)=> {
    //         console.log(`${doc.id} => ${doc.data()}`)
    //     })
    // })
    // Add a new document with a generated id.
// db.collection("cities").add({
//   name: "Tokyo",
//   country: "Japan"
// })
// .then(function(docRef) {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//   console.error("Error adding document: ", error);
// });
// var washingtonRef = db.collection("cities").doc("DC");

// // Set the "capital" field of the city 'DC'
// return washingtonRef.update({
//     capital: true
// })
// .then(function() {
//     console.log("Document successfully updated!");
// })
// .catch(function(error) {
//     // The document probably doesn't exist.
//     console.error("Error updating document: ", error);
// });
// var frankDocRef = db.collection("users").doc("frank");
// frankDocRef.set({
//     name: "Frank",
//     favorites: { food: "Pizza", color: "Blue", subject: "recess" },
//     age: 12
// });

// // To update age and favorite color:
// db.collection("users").doc("frank").update({
//     age: 13,
//     "favorites.color": "Red"
// })
// .then(function() {
//     console.log("Document successfully updated!");
// });
// var washingtonRef = db.collection("cities").doc("istanbul");

// // Atomically add a new region to the "regions" array field.
// washingtonRef.update({
//     regions: firebase.firestore.FieldValue.arrayRemove("kadıkoy")
// });
// db.collection("cities").doc('istanbul').set({
//     "name":"istanbul",
//     country:'Turkey',
//     regions:["Umraniye"]
// })
// var citiesRef = db.collection("cities");

// citiesRef.doc("SF").set({
//     name: "San Francisco", state: "CA", country: "USA",
//     capital: false, population: 860000,
//     regions: ["west_coast", "norcal"] });
// citiesRef.doc("LA").set({
//     name: "Los Angeles", state: "CA", country: "USA",
//     capital: false, population: 3900000,
//     regions: ["west_coast", "socal"] });
// citiesRef.doc("DC").set({
//     name: "Washington, D.C.", state: null, country: "USA",
//     capital: true, population: 680000,
//     regions: ["east_coast"] });
// citiesRef.doc("TOK").set({
//     name: "Tokyo", state: null, country: "Japan",
//     capital: true, population: 9000000,
//     regions: ["kanto", "honshu"] });
// citiesRef.doc("BJ").set({
//     name: "Beijing", state: null, country: "China",
//     capital: true, population: 21500000,
//     regions: ["jingjinji", "hebei"] });

var docRef = db.collection("cities").doc("SF");

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
    return (
      <div>
        <p>Firebase Deneme içerikleri</p>
      </div>
    )
  }
}
