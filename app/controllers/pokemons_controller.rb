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

    def new_move
        move = Move.create!(moves_params)
        render json: move
    end



    private

    def find_pokemon
        Pokemon.find(params[:id])
    end

    def pokemons_params
        params.permit(:name, :entry_number, :ability, :sprite, :user_id)
    end

    def moves_params
        params.permit(:name, :accuracy, :power, :pp, :move_type, :flavor_text, :pokemon_id)
    end
end
