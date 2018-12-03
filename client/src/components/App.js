import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import React from 'react';
import { ApolloProvider, Query } from 'react-apollo';

import {
  Container,
  Heading,
  Box,
  Content,
  Media,
  Image,
  Progress,
  Columns
} from 'react-bulma-components/full';

import '../styles/App.scss';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

const AllInvestorTargetsQueryComponent = () => (
  <Query
    query={gql`
      {
        investorTargets {
          id
          fundraisingStage
          nextFollowUpAt

          investor {
            person {
              fullName
              email
              signalProfileUrl
            }

            firm {
              name
            }
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading</p>;
      if (error) return <p>Error</p>;

      return data.investorTargets.map(({
        id,
        fundraisingStage,
        nextFollowUpAt,
        investor
      }) => (
        <Box>
          <Media>
            <Media.Item renderAs="figure" position="left">
              <Image renderAs="p" size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
            </Media.Item>

            <Media.Item>
              <Columns>
                <Columns.Column>
                  <Content>
                    <strong>{investor.person.fullName}</strong>
                    <p>
                      { investor.firm ? investor.firm.name : 'Individual/Angel' }<br />
                      { investor.person.email ? <span>{investor.person.email}<br /></span> : null }
                    </p>
                  </Content>
                </Columns.Column>

                <Columns.Column>
                  <div className="is-pulled-right">
                    {fundraisingStage}
                    <Progress style={{ width: 200 }} max={100} value={15} color="warning"/>
                  </div>
                </Columns.Column>
              </Columns>

            </Media.Item>
          </Media>
        </Box>
      ));
    }}
  </Query>
);

const App = () => (
  <ApolloProvider client={client}>
    <Container id="app-container" className="has-text-centered">
      <Heading>Investor Tracker</Heading>

      <AllInvestorTargetsQueryComponent />
    </Container>
  </ApolloProvider>
);

export default App;
