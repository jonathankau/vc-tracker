import moment from 'moment';
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Button } from 'react-bulma-components/full';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { EDIT_INVESTOR_TARGET_MUTATION } from '../graphql';

const TODAY_DATE = new Date();

class FollowupDatePicker extends Component {
  state = {
    nextFollowUpAt: this.props.nextFollowUpAt
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.nextFollowUpAt !== prevState.nextFollowUpAt) {
      return { nextFollowUpAt: nextProps.nextFollowUpAt};
    }

    return null;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.nextFollowUpAt !== this.props.nextFollowUpAt) {
      this.setState({ nextFollowUpA: this.props.nextFollowUpAt });
    }
  }

  render() {
    const { investorTargetId } = this.props;
    const { nextFollowUpAt } = this.state;

    return (
      <Mutation mutation={EDIT_INVESTOR_TARGET_MUTATION}>
        {mutate => (
          <div>
            <DatePicker
              selected={nextFollowUpAt && moment(nextFollowUpAt).toDate()}
              minDate={TODAY_DATE}
              onChange={date => mutate({
                variables: {
                  id: investorTargetId,
                  attributes: { nextFollowUpAt: moment(date).toISOString() }
                }
              })}
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="input"
            />

            <Button
              style={{ marginLeft: '0.5rem' }}
              onClick={() => mutate({
                variables: {
                  id: investorTargetId,
                  attributes: { nextFollowUpAt: null }
                }
              })}
            >
              Clear
            </Button>
          </div>
        )}
      </Mutation>
    );
  }
}

export default FollowupDatePicker;
