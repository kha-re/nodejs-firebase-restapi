const firebase = require("firebase-admin");

const serviceAccount = require("./nodefire-amit-firebase-adminsdk-lrlpf-7a301e333a.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://nodefire-amit.firebaseio.com"
});


module.exports = firebase;