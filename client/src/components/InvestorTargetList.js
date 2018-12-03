import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import InvestorTargetCard from './InvestorTargetCard';

const InvestorTargetList = () => (
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

      return data.investorTargets.map(target => (
        <InvestorTargetCard investorTarget={target} />
      ));
    }}
  </Query>
);

export default InvestorTargetList;
