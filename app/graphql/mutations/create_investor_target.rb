module Mutations
  class CreateInvestorTarget < GraphQL::Schema::Mutation
    field :investor_target, Types::InvestorTargetType, null: true
    field :errors, [String], null: false

    argument :attributes, Types::CreateInvestorTargetAttributes, required: true

    def resolve(attributes:)
      person = Person.new(
        email:              attributes.email,
        full_name:          attributes.full_name,
        signal_profile_url: attributes.signal_profile_url
      )

      firm     = attributes.firm_name ? Firm.new(name: attributes.firm_name) : nil
      investor = Investor.new(person: person, firm: firm)

      investor_target = InvestorTarget.new(
        investor:          investor,
        fundraising_stage: attributes.fundraising_stage,
        next_follow_up_at: attributes.next_follow_up_at
      )

      if investor_target.save
        {
          investor_target: investor_target,
          errors: []
        }
      else
        {
          investor_target: nil,
          errors: investor_target.errors.full_messages
        }
      end
    end
  end
end
