class AddIdsToTrades < ActiveRecord::Migration[5.0]
  def change
    add_column :trades, :proposer_id, :integer
    add_column :trades, :acceptor_id, :integer
  end
end
