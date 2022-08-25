class MovesController < ApplicationController


    def index
        render json: Move.all
    end

    def show
        render json: find_move
    end

    def create
        render json: Move.create!(moves_params), status: :created
    end

    def show_by_pkmn
        byebug
        pokemon = Pokemon.find(params[:id])
        render json: pokemon
    end

    def destroy
        find_move.destroy
        head :no_content
    end


    private

    def find_move
        Move.find(params[:id])
    end
    
    def moves_params
        params.permit(:name, :move_type, :flavor_text, :power, :accuracy, :pp, :pokemon_id)
    end
end
