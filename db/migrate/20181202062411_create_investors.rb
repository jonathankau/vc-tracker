class CreateInvestors < ActiveRecord::Migration[5.1]
  def change
    create_table :investors do |t|
      t.references :person, foreign_key: true
      t.references :firm, foreign_key: true

      t.timestamps
    end
  end
end
