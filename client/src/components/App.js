import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import React from 'react';
import { ApolloProvider, Query } from 'react-apollo';

import '../styles/App.css';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

const SampleQueryComponent = () => (
  <Query
    query={gql`
      {
        investorTargets {
          id
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading</p>;
      if (error) return <p>Error</p>;

      console.log(data);
      return <p>Done</p>;
    }}
  </Query>
);

const App = () => (
  <ApolloProvider client={client}>
    <SampleQueryComponent />
  </ApolloProvider>
);

export default App;
