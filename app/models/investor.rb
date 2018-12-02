class Investor < ApplicationRecord
  belongs_to :person, validate: true
  belongs_to :firm, optional: true
end
