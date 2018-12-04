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
    field(
      :create_investor_target_note,
      mutation: Mutations::CreateInvestorTargetNote,
      description: 'Create a new note relating to an investor target.'
    )
  end
end
