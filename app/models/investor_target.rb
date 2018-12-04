class InvestorTarget < ApplicationRecord
  belongs_to :investor, validate: true
  has_many :investor_target_notes
  alias_attribute :notes, :investor_target_notes

  validates :fundraising_stage, presence: true

  enum fundraising_stage: {
    researching: 0,
    contacted: 1,
    initial_meeting: 2,
    partner_meetings: 3,
    received_term_sheet: 4,
    due_diligence: 5,
    closed_investment: 6,
    terminated: 7
  }
end
