import React, { Component } from 'react';

import {
  Button,
  Heading
} from 'react-bulma-components/full';

import InvestorTargetList from './InvestorTargetList';

class InvestorTargetListScreen extends Component {
  render() {
    return (
      <div>
        <div className="is-flex" style={{ justifyContent: 'center' }}>
          <Heading>Investor Tracker</Heading>
          <Button className="is-info" style={{ marginLeft: '1rem' }}>Add an investor</Button>
        </div>

        <InvestorTargetList />
      </div>
    );
  }
}

export default InvestorTargetListScreen;
