const firebase = require("firebase-admin");

const serviceAccount = require("../../firebase-server-key.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://nodefire-amit.firebaseio.com"
});


module.exports = firebase;