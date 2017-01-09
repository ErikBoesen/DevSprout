class Unit < ApplicationRecord
    belongs_to :course
    has_many :lesson

end
