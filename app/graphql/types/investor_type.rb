module Types
  class InvestorType < Types::BaseObject
    field :id, ID, null: false

    field :person, PersonType, null: false
    field :firm, FirmType, null: false
  end
end
