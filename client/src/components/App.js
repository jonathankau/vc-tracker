import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Container } from 'react-bulma-components/full';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../styles/App.scss';
import InvestorTargetListScreen from './InvestorTargetListScreen';
import InvestorTargetScreen from './InvestorTargetScreen';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

const App = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Container id="app-container">
        <Switch>
          <Route exact path="/" component={InvestorTargetListScreen} />
          <Route exact path="/investors/:id" component={InvestorTargetScreen} />
        </Switch>
      </Container>
    </ApolloProvider>
  </BrowserRouter>
);

export default App;
