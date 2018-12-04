import moment from 'moment';
import React, { Component } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TODAY_DATE = new Date();

class FollowupDatePicker extends Component {
  state = {
    nextFollowUpAt: this.props.nextFollowUpAt
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.nextFollowUpAt !== prevState.nextFollowUpAt) {
      return { someState: nextProps.nextFollowUpAt};
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.nextFollowUpAt !== this.props.nextFollowUpAt) {
      this.setState({ nextFollowUpA: this.props.nextFollowUpAt });
    }
  }

  render() {
    const { nextFollowUpAt } = this.state;

    return (
      <DatePicker
        selected={nextFollowUpAt && moment(nextFollowUpAt).toDate()}
        minDate={TODAY_DATE}
        onChange={date => this.setState({ nextFollowUpAt: moment(date).toISOString() })}
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className="input"
      />
    );
  }
}

export default FollowupDatePicker;
