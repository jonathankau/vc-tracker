import _ from 'lodash';
import moment from 'moment';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Query } from 'react-apollo';

import { Table } from 'react-bulma-components/full';

import InvestorTargetCard from './InvestorTargetCard';
import HeaderButtonGroup from './HeaderButtonGroup';

import { SINGLE_INVESTOR_TARGET_QUERY, INVESTOR_TARGET_NOTES_QUERY } from '../graphql';

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

const LoadedNotesList = ({ investorTargetId }) => (
  <Query query={INVESTOR_TARGET_NOTES_QUERY} variables={{ id: investorTargetId }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading</p>;
      if (error) return <p>Investor not found</p>;

      const sortedNotes = _.sortBy(data.investorTargetNotes, n => n.createdAt).reverse();

      return (
        <Table bordered>
          <tbody>
            {sortedNotes.map(n => (
              <tr>
                <td>
                  {n.body}<br />
                  <strong className="is-pulled-right">{moment(n.createdAt).format("MMM D")}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      );
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
            Back to all investors
          </Link>
        </p>

        <LoadedInvestorTargetCard investorTargetId={investorTargetId} />

        <HeaderButtonGroup
          headerTitle="Notes"
          buttonText="Add a note"
          buttonOnClick={() => console.log('Adding a note')}
          style={{ marginTop: '3rem' }}
        />

        <LoadedNotesList investorTargetId={investorTargetId} />
      </div>
    );
  }
}

export default withRouter(InvestorTargetScreen);
