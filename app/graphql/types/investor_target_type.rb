module Types
  class InvestorTargetType < Types::BaseObject
    field :id, ID, null: false

    field :fundraising_step, Int, null: false
    field :next_follow_up_at, String, null: true

    field :investor, InvestorType, null: false
  end
end
