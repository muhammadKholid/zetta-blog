// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://zetta-test:<password>@cluster0.3lmcz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const { MongoClient} = require('mongodb');

const dbName = 'zetta-db';
const url = `mongodb+srv://zetta-test:${"zettabyte"}@cluster0.3lmcz.mongodb.net/${dbName}?retryWrites=true&w=majority`;


const client = new MongoClient(url, { useNewUrlParser : true, useUnifiedTopology : true});
let db;

const server = () => {
  return new Promise ((resolve, reject) => {
  client.connect()
    .then(() => {
    db = client.db(dbName);

    console.log('connected to the database');
    resolve(true);
  })
  .catch(err => {
    console.log(err)
    reject(false);
  })
  })
}

function getDatabase () {
  return client.db(dbName);
}

module.exports = {
  server,
  db : getDatabase
};


