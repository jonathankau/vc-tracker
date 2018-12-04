import React from 'react';

import FundraisingStageSelect from './FundraisingStageSelect';

const CreateInvestorTargetForm = ({
  onFieldChange,
  fullName,
  email,
  fundraisingStage,
  firmName
}) => (
  <div>
    <div className="field">
      <div className="label">Full name <span className="has-text-danger">*</span></div>
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
      <div className="label">Venture firm</div>
      <div className="control">
        <input
          value={firmName}
          onChange={onFieldChange}
          className="input"
          name="firmName"
          type="text"
          placeholder="Benchmark Capital"
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
      <div className="label">
        How far along are you with this investor? <span className="has-text-danger">*</span>
      </div>
      <FundraisingStageSelect
        fundraisingStage={fundraisingStage}
        onChange={onFieldChange}
      />
    </div>
  </div>
);

export default CreateInvestorTargetForm;
