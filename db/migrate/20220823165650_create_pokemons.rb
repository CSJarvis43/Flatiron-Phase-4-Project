class CreatePokemons < ActiveRecord::Migration[7.0]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.integer :entry_number
      t.string :ability
      t.string :sprite
      t.integer :user_id


      t.timestamps
    end
  end
end
