import React, { Component } from 'react';

import {
  Button,
  Heading
} from 'react-bulma-components/full';

import InvestorTargetList from './InvestorTargetList';
import CreateInvestorTargetModal from './CreateInvestorTargetModal';

class InvestorTargetListScreen extends Component {
  state = {
    showCreateTargetModal: false
  };

  render() {
    return (
      <div>
        <div className="is-flex" style={{ justifyContent: 'center' }}>
          <Heading>Investor Tracker</Heading>
          <Button
            color="info"
            style={{ marginLeft: '1rem' }}
            onClick={() => this.setState({ showCreateTargetModal: true })}
          >
            Add an investor
          </Button>
        </div>

        <InvestorTargetList />
        <CreateInvestorTargetModal
          isVisible={this.state.showCreateTargetModal}
          hideModal={() => this.setState({ showCreateTargetModal: false })}
        />
      </div>
    );
  }
}

export default InvestorTargetListScreen;
