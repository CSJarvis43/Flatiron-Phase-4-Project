class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :entry_number, :url
end
