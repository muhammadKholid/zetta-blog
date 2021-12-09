const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { graphqlHTTP } = require("express-graphql")
const graphQlSchema = require("./src/schema")
const graphQlResolvers = require("./src/resolvers")

const app = express();
const {server} = require('./src/config/database.config');


server()
.then((resp) => {
if(resp){
    // app.use(bodyParser.urlencoded({extended : true}));
    // app.use(bodyParser.json())
    // app.use(express.json());
    // app.use(express.urlencoded({ extended: false }));
    app.use(
      "/graphql",
      graphqlHTTP({
          schema: graphQlSchema,
          rootValue: graphQlResolvers,
          graphiql: true,
      })
    )

    // app.use('/', require('./routers/index'));
    app.listen(8080, () => {
      console.log('listening on port : ', 8080);
    })
    }
})
.catch(err => {
  console.log(err)
})


