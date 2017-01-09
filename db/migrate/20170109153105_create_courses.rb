class CreateCourses < ActiveRecord::Migration[5.0]
  def change
    create_table :courses, id: false do |t|
        t.string :name
        t.string :full_name


        t.timestamps
    end
    add_index :courses, [:name], name: "index_courses_on_name", unique: true
  end
end
