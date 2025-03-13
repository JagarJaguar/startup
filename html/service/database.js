const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('jagarchat');
const userCollection = db.collection('user');
const messageCollection = db.collection('messages');

(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connected to database!`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addMessage(message) {
  return messageCollection.insertOne(message);
}

async function getMessages() {
    const found_messages = messageCollection.find().toArray();
    return found_messages;
}


module.exports = {
    getUser,
    getUserByToken,
    addUser,
    updateUser,
    addMessage,
    getMessages,
  };