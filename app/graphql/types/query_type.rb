module Types
  class QueryType < Types::BaseObject
    field(
      :investor_targets,
      [InvestorTargetType],
      null: false,
      description: 'Retrieve all investor targets.'
    )

    field :investor_target, InvestorTargetType, null: true do
      description 'Find an investor target by ID.'
      argument :id, ID, required: true
    end

    field :investor_target_notes, [InvestorTargetNoteType], null: true do
      description 'Find all notes for an investor target by ID.'
      argument :id, ID, required: true
    end

    def investor_targets
      InvestorTarget
        .order(created_at: :desc)
        .includes(:investor, investor: [ :person, :firm ])
    end

    def investor_target(id:)
      InvestorTarget.find(id)
    end

    def investor_target_notes(id:)
      target = InvestorTarget.find(id)
      target.notes
    end
  end
end
