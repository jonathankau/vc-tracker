import React from 'react';

const CreateInvestorTargetForm = () => (
  <div>
    <div className="field">
      <div className="label">Full name</div>
      <div className="control">
        <input className="input" type="text" placeholder="Sarah Tavel" />
      </div>
    </div>

    <div className="field">
      <div className="label">Email</div>
      <div className="control">
        <input className="input" type="email" placeholder="sarah@benchmark.com" />
      </div>
    </div>

    <div className="field">
      <div className="label">Fundraising Progress</div>
      <div className="control">
        <div class="select">
          <select>
            <option>Researching</option>
            <option>Contacted</option>
            <option>Initial meeting</option>
            <option>Partner meeting</option>
            <option>Received term sheet</option>
            <option>Due diligence</option>
            <option>Closed investment</option>
            <option>Terminated</option>
          </select>
        </div>
      </div>
    </div>
  </div>
);

export default CreateInvestorTargetForm;
