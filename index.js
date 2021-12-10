const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const graphQlSchema = require("./src/schema")
const graphQlResolvers = require("./src/resolvers")
const mongoose = require("mongoose")
const cors = require('cors');

const app = express()

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
  })
)
const dbName = 'zetta-db-2';
const url = `mongodb+srv://zetta-test:${"zettabyte"}@cluster0.3lmcz.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// const url = 'mongodb://127.0.0.1:27017';
// const dbName = 'boba-server';

const uri = `${url}/${dbName}`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose
  .connect(uri, options)
  .then(() => app.listen(8080, console.log("Server is listening on 8080")))
  .catch(error => {
    console.log(error);
    throw error
  })


