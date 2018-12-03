import React from 'react';
import { FUNDRAISING_PROGRESS_STAGE_LABELS } from '../constants';

const CreateInvestorTargetForm = ({
  onFieldChange,
  fullName,
  email,
  fundraisingProgress
}) => (
  <div>
    <div className="field">
      <div className="label">Full name</div>
      <div className="control">
        <input
          value={fullName}
          onChange={onFieldChange}
          className="input"
          name="fullName"
          type="text"
          placeholder="Sarah Tavel"
        />
      </div>
    </div>

    <div className="field">
      <div className="label">Email</div>
      <div className="control">
        <input
          value={email}
          onChange={onFieldChange}
          className="input"
          name="email"
          type="email"
          placeholder="sarah@benchmark.com"
        />
      </div>
    </div>

    <div className="field">
      <div className="label">Fundraising Progress</div>
      <div className="control">
        <div className="select">
          <select
            value={fundraisingProgress}
            onChange={onFieldChange}
            name="fundraisingProgress"
          >
            {Object.keys(FUNDRAISING_PROGRESS_STAGE_LABELS).map(stage => (
              <option value={stage}>{FUNDRAISING_PROGRESS_STAGE_LABELS[stage]}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  </div>
);

export default CreateInvestorTargetForm;
