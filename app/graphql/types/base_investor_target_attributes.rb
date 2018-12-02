module Types
  class BaseInvestorTargetAttributes < Types::BaseInputObject
    argument :email, String, required: false
    argument :signal_profile_url, String, required: false
    argument :firm_name, String, required: false
    argument :next_follow_up_at, GraphQL::Types::ISO8601DateTime, required: false
  end
end
