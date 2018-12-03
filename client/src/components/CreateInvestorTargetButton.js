import React from 'react';
import { Mutation } from 'react-apollo';
import { Button } from 'react-bulma-components/full';
import gql from 'graphql-tag';

const CREATE_INVESTOR_TARGET_MUTATION = gql`
  mutation CreateInvestorTarget($attributes: CreateInvestorTargetAttributes!) {
    createInvestorTarget(attributes: $attributes) {
      investorTarget {
        id
      }
    }
  }
`;

const CreateInvestorTargetButton = ({ fullName, email, fundraisingStage }) => {
  const variables = {
    attributes: { fullName, email, fundraisingStage }
  };

  return (
    <Mutation mutation={CREATE_INVESTOR_TARGET_MUTATION} variables={variables}>
      {createMutation => (
        <Button onClick={createMutation} color="info">Save</Button>
      )}
    </Mutation>
  );
};

export default CreateInvestorTargetButton;
