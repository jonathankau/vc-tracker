module Types
  class PersonType < Types::BaseObject
    field :id, ID, null: false

    field :full_name, String, null: false
    field :email, String, null: true
    field :signal_profile_url, String, null: true
  end
end
