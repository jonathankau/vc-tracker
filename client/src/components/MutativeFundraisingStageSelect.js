import React from 'react';
import { Mutation } from 'react-apollo';

import FundraisingStageSelect from './FundraisingStageSelect';
import { EDIT_INVESTOR_TARGET_MUTATION } from '../graphql';

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
