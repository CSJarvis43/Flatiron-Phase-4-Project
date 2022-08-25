class PokemonsController < ApplicationController


    def index
        pokemon = Pokemon.all
        render json: pokemon, include: :moves
    end

    def show
        render json: find_pokemon, include: :moves
    end

    def create
        render json: Pokemon.create!(pokemons_params), status: :created
    end

    def destroy
        find_pokemon.destroy
        head :no_content
    end

    def moves
        pokemon = find_pokemon
        render json: pokemon.moves
    end



    private

    def find_pokemon
        Pokemon.find(params[:id])
    end

    def pokemons_params
        params.permit(:name, :entry_number, :ability, :sprite, :user_id)
    end
end
