import React, { Component } from 'react';
import { Modal } from 'react-bulma-components/full';

import CreateInvestorTargetForm from './CreateInvestorTargetForm';
import CreateInvestorTargetButton from './CreateInvestorTargetButton';
import { FUNDRAISING_STAGE_LABELS } from '../constants';

const INITIAL_MODAL_STATE = {
  fullName: '',
  email: '',
  fundraisingStage: Object.keys(FUNDRAISING_STAGE_LABELS)[0],
  firmName: ''
};

class CreateInvestorTargetModal extends Component {
  state = INITIAL_MODAL_STATE;

  onFieldChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onFormSubmit = () => {
    this.setState(INITIAL_MODAL_STATE);
    this.props.hideModal();
  };

  render() {
    const { isVisible, hideModal } = this.props;
    const { fullName, email, fundraisingStage, firmName } = this.state;

    return (
      <Modal show={isVisible} onClose={hideModal} showClose={false} closeOnBlur>
        <Modal.Card>
          <Modal.Card.Head onClose={hideModal}>
            <Modal.Card.Title>Track a new investor</Modal.Card.Title>
          </Modal.Card.Head>

          <Modal.Card.Body>
            <CreateInvestorTargetForm
              onFieldChange={this.onFieldChange}
              fullName={fullName}
              email={email}
              fundraisingStage={fundraisingStage}
              firmName={firmName}
            />
          </Modal.Card.Body>

          <Modal.Card.Foot>
            <CreateInvestorTargetButton
              onSubmit={this.onFormSubmit}
              fullName={fullName}
              email={email}
              fundraisingStage={fundraisingStage}
              firmName={firmName}
            />
          </Modal.Card.Foot>
        </Modal.Card>
      </Modal>
    );
  }
}

export default CreateInvestorTargetModal;
