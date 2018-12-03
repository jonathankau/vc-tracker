import React from 'react';

import FundraisingStageSelect from './FundraisingStageSelect';

const CreateInvestorTargetForm = ({
  onFieldChange,
  fullName,
  email,
  fundraisingStage
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
      <FundraisingStageSelect
        fundraisingStage={fundraisingStage}
        onChange={onFieldChange}
      />
    </div>
  </div>
);

export default CreateInvestorTargetForm;
