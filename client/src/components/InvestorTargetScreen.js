import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Query } from 'react-apollo';

import InvestorTargetCard from './InvestorTargetCard';
import HeaderButtonGroup from './HeaderButtonGroup';
import NotesList from './NotesList';
import CreateNoteModal from './CreateNoteModal';
import FollowupDatePicker from './FollowupDatePicker';

import { SINGLE_INVESTOR_TARGET_QUERY } from '../graphql';

const LoadedInvestorTargetSection = ({ investorTargetId }) => (
  <Query query={SINGLE_INVESTOR_TARGET_QUERY} variables={{ id: investorTargetId }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading</p>;
      if (error) return <p>Investor not found</p>;

      const target = data.investorTarget;
      return (
        <div>
          <InvestorTargetCard key={target.id} investorTarget={target} />

          <div className="control has-text-centered" style={{ marginTop: '1rem' }}>
            <div className="label">Set your next follow-up reminder:</div>

            <FollowupDatePicker
              investorTargetId={target.id}
              nextFollowUpAt={target.nextFollowUpAt}
            />
          </div>
        </div>
      );
    }}
  </Query>
);

class InvestorTargetScreen extends Component {
  state = {
    showCreateNoteModal: false
  };

  render() {
    const { id: investorTargetId } = this.props.match.params;

    return (
      <div>
        <p className="has-text-centered" style={{ marginBottom: '2rem' }}>
          <Link to="/" className="is-size-5">
            Back to all investors
          </Link>
        </p>

        <LoadedInvestorTargetSection investorTargetId={investorTargetId} />

        <hr style={{ margin: '2rem 0' }} />

        <HeaderButtonGroup
          headerTitle="Notes"
          buttonText="Add note"
          buttonOnClick={() => this.setState({ showCreateNoteModal: true })}
        />

        <NotesList investorTargetId={investorTargetId} />

        <CreateNoteModal
          isVisible={this.state.showCreateNoteModal}
          investorTargetId={investorTargetId}
          hideModal={() => this.setState({ showCreateNoteModal: false })}
        />
      </div>
    );
  }
}

export default withRouter(InvestorTargetScreen);
