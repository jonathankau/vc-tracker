import React from 'react';
import { Mutation } from 'react-apollo';
import { Button } from 'react-bulma-components/full';

import { INVESTOR_TARGET_NOTES_QUERY, CREATE_INVESTOR_TARGET_NOTE_MUTATION } from '../graphql';

const CreateNoteButton = ({
  onSubmit,
  investorTargetId,
  body
}) => {
  const variables = {
    investorTargetId,
    body
  };

  const onUpdateStore = (store, { data: { createInvestorTargetNote: { note } } }) => {
    const data = store.readQuery({
      query: INVESTOR_TARGET_NOTES_QUERY,
      variables: { id: investorTargetId }
    });

    data.investorTargetNotes.unshift(note);

    store.writeQuery({
      query: INVESTOR_TARGET_NOTES_QUERY,
      variables: { id: investorTargetId },
      data
    });
  };

  return (
    <Mutation
      mutation={CREATE_INVESTOR_TARGET_NOTE_MUTATION}
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

export default CreateNoteButton;
