module Types
  class InvestorTargetType < Types::BaseObject
    field :id, ID, null: false

    field :fundraising_stage, FundraisingStage, null: false
    field :next_follow_up_at, String, null: true

    field :investor, InvestorType, null: false
  end
end
