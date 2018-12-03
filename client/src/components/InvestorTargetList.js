import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import InvestorTargetCard from './InvestorTargetCard';

export const ALL_INVESTOR_TARGETS_QUERY = gql`
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
`;

const InvestorTargetList = () => (
  <Query query={ALL_INVESTOR_TARGETS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading</p>;
      if (error) return <p>Error</p>;

      return data.investorTargets.map(target => (
        <InvestorTargetCard key={target.id} investorTarget={target} />
      ));
    }}
  </Query>
);

export default InvestorTargetList;
