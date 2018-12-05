import _ from 'lodash';
import moment from 'moment';

import React from 'react';
import { Query } from 'react-apollo';
import { Table } from 'react-bulma-components/full';

import { INVESTOR_TARGET_NOTES_QUERY } from '../graphql';

const NotesList = ({ investorTargetId }) => (
  <Query query={INVESTOR_TARGET_NOTES_QUERY} variables={{ id: investorTargetId }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading</p>;
      if (error) return <p>Investor not found</p>;

      const sortedNotes = _.sortBy(data.investorTargetNotes, n => n.createdAt).reverse();
      const emptyStateRow = (
        <tr>
          <td className="has-text-centered has-text-grey-light">
            Your notes will show up here!
          </td>
        </tr>
      );

      return (
        <Table bordered>
          <tbody>
            {sortedNotes.length > 0 ? sortedNotes.map(n => (
              <tr key={n.id}>
                <td>
                  {n.body}<br />
                  <strong className="is-pulled-right">{moment(n.createdAt).format("MMM D")}</strong>
                </td>
              </tr>
            )) : emptyStateRow}
          </tbody>
        </Table>
      );
    }}
  </Query>
);

export default NotesList;
