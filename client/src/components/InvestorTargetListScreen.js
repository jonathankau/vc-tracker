import React, { Component } from 'react';

import InvestorTargetSectionList from './InvestorTargetSectionList';
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
          buttonOnClick={() => this.setState({ showCreateTargetModal: true })}
        />

        <InvestorTargetSectionList />
        <CreateInvestorTargetModal
          isVisible={this.state.showCreateTargetModal}
          hideModal={() => this.setState({ showCreateTargetModal: false })}
        />
      </div>
    );
  }
}

export default InvestorTargetListScreen;
