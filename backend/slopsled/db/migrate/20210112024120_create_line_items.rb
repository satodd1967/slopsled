class CreateLineItems < ActiveRecord::Migration[6.0]
  def change
    create_table :line_items do |t|
      t.belongs_to :order, null: false, foreign_key: true
      t.belongs_to :dish, null: false, foreign_key: true

      t.timestamps
    end
  end
end
