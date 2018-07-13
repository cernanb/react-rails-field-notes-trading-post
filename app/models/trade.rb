class Trade < ApplicationRecord
  has_many :user_notebooks
  belongs_to :proposer, :class_name => 'User', :foreign_key => 'proposer_id', optional: true
  belongs_to :acceptor, :class_name => 'User', :foreign_key => 'acceptor_id', optional: true

  def finalize
  end
  
  def proposer_notebooks
    self.user_notebooks.where(user_id: proposer.id)
  end
  
  def acceptor_notebooks
    self.user_notebooks.where(user_id: acceptor.id)
  end
end
