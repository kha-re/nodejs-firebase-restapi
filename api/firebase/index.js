const firebase = require("./init")

const db = firebase.database()
const users = db.ref().child('users')
const expenses = db.ref().child("expenses")
const groups = db.ref().child("groups")

module.exports.DB = db;
module.exports.Users = users;
module.exports.Expenses = expenses;
module.exports.Groups = groups;
