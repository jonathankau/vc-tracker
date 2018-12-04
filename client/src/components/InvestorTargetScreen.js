import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Query } from 'react-apollo';

import InvestorTargetCard from './InvestorTargetCard';
import { SINGLE_INVESTOR_TARGET_QUERY } from '../graphql';

const LoadedInvestorTargetCard = ({ investorTargetId }) => (
  <Query query={SINGLE_INVESTOR_TARGET_QUERY} variables={{ id: investorTargetId }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading</p>;
      if (error) return <p>Investor not found</p>;

      const target = data.investorTarget;
      return <InvestorTargetCard key={target.id} investorTarget={target} />;
    }}
  </Query>
);

class InvestorTargetScreen extends Component {
  render() {
    const { id: investorTargetId } = this.props.match.params;

    return (
      <div>
        <p className="has-text-centered" style={{ marginBottom: '1rem' }}>
          <Link to="/" className="is-size-5">
            Back to list
          </Link>
        </p>

        <LoadedInvestorTargetCard investorTargetId={investorTargetId} />
      </div>
    );
  }
}

export default withRouter(InvestorTargetScreen);
