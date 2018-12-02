class CreateFirms < ActiveRecord::Migration[5.1]
  def change
    create_table :firms do |t|
      t.string :name

      t.timestamps
    end
  end
end
