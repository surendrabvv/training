// Third party modules
const { GraphQLServer } = require('graphql-yoga');
const cors = require('cors');

// Internal modules
const config = require('./config');
const resolvers = require('./resolvers');
const typeDefs = require('./types');

// Other constants
const port = config.get('port');

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

const options = {
  port
};

// Enabling cors on development environment
if (config.get('env') === 'development') {
  server.express.use(cors());
}

server.start(options, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});