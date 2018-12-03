import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Container } from 'react-bulma-components/full';

import '../styles/App.scss';
import InvestorTargetListScreen from './InvestorTargetListScreen';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

const App = () => (
  <ApolloProvider client={client}>
    <Container id="app-container">
      <InvestorTargetListScreen />
    </Container>
  </ApolloProvider>
);

export default App;
