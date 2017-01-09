class Course < ApplicationRecord
    self.primary_key = 'name'

    has_many :unit
end
