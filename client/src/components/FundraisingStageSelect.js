import React from 'react';
import { FUNDRAISING_STAGE_LABELS } from '../constants';

const FundraisingStageSelect = ({ fundraisingStage, onChange }) => (
  <div className="control">
    <div className="select">
      <select
        value={fundraisingStage}
        onChange={onChange}
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
        }}
        name="fundraisingStage"
      >
        {Object.keys(FUNDRAISING_STAGE_LABELS).map(stage => (
          <option key={stage} value={stage}>
            {FUNDRAISING_STAGE_LABELS[stage]}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default FundraisingStageSelect;
