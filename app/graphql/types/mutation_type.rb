module Types
  class MutationType < Types::BaseObject
    field(
      :create_investor_target,
      mutation: Mutations::CreateInvestorTarget,
      description: 'Create a new investor target.'
    )
    field(
      :edit_investor_target,
      mutation: Mutations::EditInvestorTarget,
      description: 'Edit an existing investor target.'
    )
  end
end
