const express = require('express');
const ApolloServer = require('apollo-server-express').ApolloServer;
const schema = require('./schema');
const resolvers = require('./resolvers');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.app.use(cors());
    this.initApolloServer();
    this.startExpressServer();
  }

  initApolloServer() {
    let apolloServer = new ApolloServer({
      typeDefs: schema,
      resolvers: resolvers,
      context: {
        token: 'dummytoken'
      }
    });
    apolloServer.applyMiddleware({
      app: this.app,
      path: '/graphql'
    });
  }

  startExpressServer() {
    this.app.listen(8000, (err, data) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
      console.log(`Server is listening on http://localhost:8000`);
    });
  }
}

new Server();