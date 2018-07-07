class CreateTrades < ActiveRecord::Migration[5.0]
  def change
    create_table :trades do |t|
      t.string :status, default: "proposed"
      t.timestamps
    end
  end
end
