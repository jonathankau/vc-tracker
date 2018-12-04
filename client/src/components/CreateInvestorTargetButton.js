import React from 'react';
import { Mutation } from 'react-apollo';
import { Button } from 'react-bulma-components/full';

import { ALL_INVESTOR_TARGETS_QUERY, CREATE_INVESTOR_TARGET_MUTATION } from '../graphql';

const CreateInvestorTargetButton = ({
  onSubmit,
  fullName,
  email,
  fundraisingStage,
  firmName
}) => {
  const variables = {
    attributes: { fullName, email, fundraisingStage, firmName }
  };

  const onUpdateStore = (store, { data: { createInvestorTarget: { investorTarget } } }) => {
    const data = store.readQuery({ query: ALL_INVESTOR_TARGETS_QUERY });
    data.investorTargets.unshift(investorTarget);
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
      {mutate => (
        <Button onClick={mutate} color="info">Save</Button>
      )}
    </Mutation>
  );
};

export default CreateInvestorTargetButton;
