import React, { Component } from 'react';
import { Modal, Button } from 'react-bulma-components/full';

import CreateInvestorTargetForm from './CreateInvestorTargetForm';

class CreateInvestorTargetModal extends Component {
  state = {
    fullName: '',
    email: '',
    fundraisingProgress: ''
  };

  onFieldChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { isVisible, onClose } = this.props;
    const { fullName, email, fundraisingProgress } = this.state;

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
              fundraisingProgress={fundraisingProgress}
            />
          </Modal.Card.Body>

          <Modal.Card.Foot>
            <Button color="info">Save</Button>
          </Modal.Card.Foot>
        </Modal.Card>
      </Modal>
    );
  }
}

export default CreateInvestorTargetModal;
