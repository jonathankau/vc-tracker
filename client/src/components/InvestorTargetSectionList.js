import _ from 'lodash';
import React from 'react';
import { Query } from 'react-apollo';
import { Box } from 'react-bulma-components/full';

import InvestorTargetCard from './InvestorTargetCard';
import { ALL_INVESTOR_TARGETS_QUERY } from '../graphql';

const InvestorTargetSection = ({ sectionTitle, investorTargets }) => {
  if (investorTargets.length === 0) return null;

  return (
    <div>
      <p style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>{sectionTitle}</p>
      {investorTargets.map(t => <InvestorTargetCard key={t.id} investorTarget={t} />)}
    </div>
  );
};

const InvestorTargetSectionList = () => (
  <Query query={ALL_INVESTOR_TARGETS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading</p>;
      if (error) return <p>Error</p>;

      if (data.investorTargets.length === 0) return (
        <Box className="has-text-centered has-text-grey-light">
          Start tracking your company's fundraising process by adding an investor you're interested in!
        </Box>
      );

      const [ doneTargets, inProgressTargets ] = _.partition(
        data.investorTargets,
        t => [ 'CLOSED_INVESTMENT', 'TERMINATED' ].includes(t.fundraisingStage)
      );

      const [
        targetsWithoutFollowup,
        targetsWithFollowup
      ] = _.partition(inProgressTargets, t => t.nextFollowUpAt === null);

      return (
        <div>
          <InvestorTargetSection
            sectionTitle="Follow-ups"
            investorTargets={targetsWithFollowup}
          />

          <InvestorTargetSection
            sectionTitle="In progress"
            investorTargets={targetsWithoutFollowup}
          />

          <InvestorTargetSection
            sectionTitle="Done"
            investorTargets={doneTargets}
          />
        </div>
      );
    }}
  </Query>
);

export default InvestorTargetSectionList;
