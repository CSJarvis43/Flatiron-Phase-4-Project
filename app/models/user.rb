class User < ApplicationRecord
    has_secure_password
    has_many :pokemons
    has_many :moves, through: :pokemons
end
