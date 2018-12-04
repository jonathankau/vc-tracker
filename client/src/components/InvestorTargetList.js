import React from 'react';
import { Query } from 'react-apollo';

import InvestorTargetCard from './InvestorTargetCard';
import { ALL_INVESTOR_TARGETS_QUERY } from '../graphql';

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
