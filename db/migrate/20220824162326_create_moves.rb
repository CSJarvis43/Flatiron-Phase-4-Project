class CreateMoves < ActiveRecord::Migration[7.0]
  def change
    create_table :moves do |t|
      t.string :name
      t.string :flavor_text
      t.integer :power
      t.integer :pp
      t.integer :accuracy
      t.string :move_type
      t.integer :pokemon_id

      t.timestamps
    end
  end
end
