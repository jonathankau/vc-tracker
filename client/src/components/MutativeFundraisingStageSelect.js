import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import FundraisingStageSelect from './FundraisingStageSelect';

const EDIT_INVESTOR_TARGET_MUTATION = gql`
  mutation EditInvestorTarget($id: ID!, $attributes: EditInvestorTargetAttributes!) {
    editInvestorTarget(id: $id, attributes: $attributes) {
      investorTarget {
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
  }
`;

const MutativeFundraisingStageSelect = ({ investorTarget }) => (
  <Mutation mutation={EDIT_INVESTOR_TARGET_MUTATION}>
    {mutate => (
      <FundraisingStageSelect
        fundraisingStage={investorTarget.fundraisingStage}
        onChange={event => mutate({
          variables: {
            id: investorTarget.id,
            attributes: { fundraisingStage: event.target.value }
          }
        })}
      />
    )}
  </Mutation>
);

export default MutativeFundraisingStageSelect;
