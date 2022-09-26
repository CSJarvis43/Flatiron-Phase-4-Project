class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :entry_number, :sprite, :ability, :user_id
  
end
