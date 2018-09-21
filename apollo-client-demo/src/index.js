import React from 'react';
import { render } from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';

// Creating apollo client
const apolloClient = new ApolloClient({
  uri: `http://localhost:8000/graphql`
});

apolloClient.query({
  query: gql`
    {
      users {
        id
        username
        city
      }
    }
  `
}).then(result => console.log("dummy"));

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <User></User>
    </ApolloProvider>
  )
}

let query = gql`
{
  users {
    id
    username
    city
  }
}
`;

const User = () => {
  return (
    <Query query={query}>
      {
        ({ loading, error, data }) => {
          if (loading) return 'Loading...';
          return (
            <ul>
              {
                data.users.map((user) => (
                  <li>{user.username}</li>
                ))
              }
            </ul>
          );
        }
      }
    </Query>
  )
}

render(<App />, document.getElementById('root'));
registerServiceWorker();
