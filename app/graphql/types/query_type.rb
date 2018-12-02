module Types
  class QueryType < Types::BaseObject
    field :investor_targets, [InvestorTargetType], null: false
    field :investor_target, InvestorTargetType, null: true

    def investor_targets
      []
    end

    def investor_target
    end
  end
end
