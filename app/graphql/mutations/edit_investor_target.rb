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

      potentially_changed_entities = [
        investor.firm,
        investor.person,
        investor,
        investor_target
      ].compact

      resolved_data = nil

      ActiveRecord::Base.transaction do
        potentially_changed_entities.each { |entity| entity.save! }

        resolved_data = {
          investor_target: investor_target,
          errors: []
        }
      rescue ActiveRecord::RecordInvalid => e
        resolved_data = {
          investor_target: nil,
          errors: e.record.errors.full_messages
        }

        raise ActiveRecord::Rollback
      end

      resolved_data
    end
  end
end
