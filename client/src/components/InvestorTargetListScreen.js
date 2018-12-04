import React, { Component } from 'react';

import InvestorTargetList from './InvestorTargetList';
import CreateInvestorTargetModal from './CreateInvestorTargetModal';
import HeaderButtonGroup from './HeaderButtonGroup';

class InvestorTargetListScreen extends Component {
  state = {
    showCreateTargetModal: false
  };

  render() {
    return (
      <div>
        <HeaderButtonGroup
          headerTitle="Fundraising Tracker"
          buttonText="Add an investor"
          onClick={() => this.setState({ showCreateTargetModal: true })}
        />

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
