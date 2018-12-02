class CreateInvestorTargets < ActiveRecord::Migration[5.1]
  def change
    create_table :investor_targets do |t|
      t.references :investor, foreign_key: true
      t.integer :fundraising_stage
      t.datetime :next_follow_up_at

      t.timestamps
    end
  end
end
