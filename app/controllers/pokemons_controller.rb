class PokemonsController < ApplicationController


    def index
        render json: Pokemon.all
    end

    def show
        render json: find_pokemon
    end

    def create
        render json: Pokemon.create!(pokemons_params), status: :created
    end

    def destroy
        find_pokemon.destroy
        head :no_content
    end



    private

    def find_pokemon
        Pokemon.find(params[:id])
    end

    def pokemons_params
        params.permit(:name, :entry_number, :ability, :sprite, :user_id)
    end
end
