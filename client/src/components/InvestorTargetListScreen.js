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
        <div
          className="is-flex"
          style={{ marginBottom: '1rem', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Heading size={5} style={{ marginBottom: 0 }}>Fundraising Tracker</Heading>
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
