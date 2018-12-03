import React from 'react';
import { Mutation } from 'react-apollo';
import { Button } from 'react-bulma-components/full';
import gql from 'graphql-tag';

import { ALL_INVESTOR_TARGETS_QUERY } from './InvestorTargetList';

const CREATE_INVESTOR_TARGET_MUTATION = gql`
  mutation CreateInvestorTarget($attributes: CreateInvestorTargetAttributes!) {
    createInvestorTarget(attributes: $attributes) {
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

const CreateInvestorTargetButton = ({ onSubmit, fullName, email, fundraisingStage }) => {
  const variables = {
    attributes: { fullName, email, fundraisingStage }
  };

  const onUpdateStore = (store, { data: { createInvestorTarget: { investorTarget } } }) => {
    const data = store.readQuery({ query: ALL_INVESTOR_TARGETS_QUERY });
    data.investorTargets.push(investorTarget);
    store.writeQuery({
      query: ALL_INVESTOR_TARGETS_QUERY,
      data
    });
  };

  return (
    <Mutation
      mutation={CREATE_INVESTOR_TARGET_MUTATION}
      variables={variables}
      onCompleted={onSubmit}
      update={onUpdateStore}
    >
      {createMutation => (
        <Button onClick={createMutation} color="info">Save</Button>
      )}
    </Mutation>
  );
};

export default CreateInvestorTargetButton;
