import React, { Component } from 'react';
import { Modal } from 'react-bulma-components/full';

import CreateNoteButton from './CreateNoteButton';

const INITIAL_MODAL_STATE = {
  noteBody: ''
};

class CreateNoteModal extends Component {
  state = INITIAL_MODAL_STATE;

  onFieldChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onFormSubmit = () => {
    this.setState(INITIAL_MODAL_STATE);
    this.props.hideModal();
  };

  render() {
    const { investorTargetId, isVisible, hideModal } = this.props;
    const { noteBody } = this.state;

    return (
      <Modal show={isVisible} onClose={hideModal} showClose={false} closeOnBlur>
        <Modal.Card>
          <Modal.Card.Head onClose={hideModal}>
            <Modal.Card.Title>Add a new note</Modal.Card.Title>
          </Modal.Card.Head>

          <Modal.Card.Body>
            <div className="field">
              <div className="control">
                <textarea
                  value={noteBody}
                  onChange={this.onFieldChange}
                  className="textarea"
                  name="noteBody"
                  type="text"
                  placeholder="Ex: Need to follow up with cohort analysis charts."
                />
              </div>
            </div>
          </Modal.Card.Body>

          <Modal.Card.Foot>
            <CreateNoteButton
              onSubmit={this.onFormSubmit}
              investorTargetId={investorTargetId}
              body={noteBody}
            />
          </Modal.Card.Foot>
        </Modal.Card>
      </Modal>
    );
  }
}

export default CreateNoteModal;
