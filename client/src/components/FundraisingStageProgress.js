import React from 'react';
import { Progress } from 'react-bulma-components/full';

import { FUNDRAISING_STAGE_PROGRESS_VALUES } from '../constants';

const FundraisingStageProgress = ({ fundraisingStage }) => {
  let color;
  if (fundraisingStage === 'CLOSED_INVESTMENT') {
    color = 'success';
  } else if (fundraisingStage === 'TERMINATED') {
    color = 'danger';
  } else {
    color = 'warning';
  }

  return (
    <Progress
      style={{ width: 200, marginTop: '1rem' }}
      max={100}
      value={FUNDRAISING_STAGE_PROGRESS_VALUES[fundraisingStage]}
      color={color}
    />
  );
};

export default FundraisingStageProgress;
