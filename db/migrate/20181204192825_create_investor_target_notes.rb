class CreateInvestorTargetNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :investor_target_notes do |t|
      t.text :body
      t.references :investor_target, foreign_key: true

      t.timestamps
    end
  end
end
