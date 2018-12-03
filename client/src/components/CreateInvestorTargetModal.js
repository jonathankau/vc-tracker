import React from 'react';
import { Modal, Button } from 'react-bulma-components/full';

import CreateInvestorTargetForm from './CreateInvestorTargetForm';

const CreateInvestorTargetModal = ({ isVisible, onClose }) => (
  <Modal show={isVisible} onClose={onClose} showClose={false} closeOnBlur>
    <Modal.Card>
      <Modal.Card.Head onClose={onClose}>
        <Modal.Card.Title>Track a new investor</Modal.Card.Title>
      </Modal.Card.Head>

      <Modal.Card.Body>
        <CreateInvestorTargetForm />
      </Modal.Card.Body>

      <Modal.Card.Foot>
        <Button color="info">Save</Button>
      </Modal.Card.Foot>
    </Modal.Card>
  </Modal>
);

export default CreateInvestorTargetModal;
