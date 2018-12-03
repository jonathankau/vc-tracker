module Mutations
  class EditInvestorTarget < GraphQL::Schema::Mutation
    field :investor_target, Types::InvestorTargetType, null: true
    field :errors, [String], null: false

    argument :id, ID, required: true
    argument :attributes, Types::EditInvestorTargetAttributes, required: true

    def resolve(id:, attributes:)
      investor_target = InvestorTarget.find(id)

      investor = investor_target.investor

      attributes.to_h.each do |key_value_pair|
        case key_value_pair.first
        when :fundraising_stage, :next_follow_up_at
          investor_target.assign_attributes([ key_value_pair ].to_h)
        when :firm_name
          firm_name = key_value_pair.last

          if investor.firm
            investor.firm.name = firm_name
          else
            investor.firm = Firm.new(name: firm_name)
          end
        when :email, :signal_profile_url, :full_name
          investor.person.assign_attributes([ key_value_pair ].to_h)
        end
      end

      if (investor.firm.nil? || investor.firm.save) &&
          investor.person.save &&
          investor.save &&
          investor_target.save
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
