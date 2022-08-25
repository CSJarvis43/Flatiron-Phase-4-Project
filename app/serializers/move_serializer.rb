class MoveSerializer < ActiveModel::Serializer
  attributes :id, :name, :flavor_text, :power, :pp, :accuracy, :move_type, :pokemon_id
end
