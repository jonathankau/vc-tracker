module Types
  class CreateInvestorTargetAttributes < BaseInvestorTargetAttributes
    argument :full_name, String, required: true
    argument :fundraising_stage, FundraisingStage, required: true
  end
end
