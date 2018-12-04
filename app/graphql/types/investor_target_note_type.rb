module Types
  class InvestorTargetNoteType < Types::BaseObject
    field :id, ID, null: false
    field :body, String, null: false
    field :createdAt, GraphQL::Types::ISO8601DateTime, null: false
  end
end
