import React, { Component } from 'react';
import { Modal } from 'react-bulma-components/full';

import CreateInvestorTargetForm from './CreateInvestorTargetForm';
import CreateInvestorTargetButton from './CreateInvestorTargetButton';
import { FUNDRAISING_STAGE_LABELS } from '../constants';

class CreateInvestorTargetModal extends Component {
  state = {
    fullName: '',
    email: '',
    fundraisingStage: Object.keys(FUNDRAISING_STAGE_LABELS)[0]
  };

  onFieldChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { isVisible, onClose } = this.props;
    const { fullName, email, fundraisingStage } = this.state;

    return (
      <Modal show={isVisible} onClose={onClose} showClose={false} closeOnBlur>
        <Modal.Card>
          <Modal.Card.Head onClose={onClose}>
            <Modal.Card.Title>Track a new investor</Modal.Card.Title>
          </Modal.Card.Head>

          <Modal.Card.Body>
            <CreateInvestorTargetForm
              onFieldChange={this.onFieldChange}
              fullName={fullName}
              email={email}
              fundraisingStage={fundraisingStage}
            />
          </Modal.Card.Body>

          <Modal.Card.Foot>
            <CreateInvestorTargetButton
              closeModal={onClose}
              fullName={fullName}
              email={email}
              fundraisingStage={fundraisingStage}
            />
          </Modal.Card.Foot>
        </Modal.Card>
      </Modal>
    );
  }
}

export default CreateInvestorTargetModal;
