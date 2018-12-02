module Types
  class MutationType < Types::BaseObject
    field :create_investor_target, mutation: Mutations::CreateInvestorTarget
  end
end
