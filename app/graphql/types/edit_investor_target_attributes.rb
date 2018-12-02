module Types
  class EditInvestorTargetAttributes < BaseInvestorTargetAttributes
    argument :full_name, String, required: false
    argument :fundraising_stage, FundraisingStage, required: false
  end
end
