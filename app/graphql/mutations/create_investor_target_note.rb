module Mutations
  class CreateInvestorTargetNote < GraphQL::Schema::Mutation
    field :note, Types::InvestorTargetNoteType, null: true
    field :errors, [String], null: false

    argument :investor_target_id, ID, required: true
    argument :body, String, required: true

    def resolve(investor_target_id:, body:)
      investor_target = InvestorTarget.find(investor_target_id)
      note = investor_target.notes.new(body: body)

      if note.save
        {
          note: note,
          errors: []
        }
      else
        {
          note: nil,
          errors: note.errors.full_messages
        }
      end
    end
  end
end
