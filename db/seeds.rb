# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


Pokemon.destroy_all
User.destroy_all
Move.destroy_all

puts 'Seeding Users'

u1 = User.create(username: 'charlie', password: 'Flatiron')
u2 = User.create(username: 'jeff', password: 'Flatiron')
u3 = User.create(username: 'laura', password: 'Flatiron')
u4 = User.create(username: 'grant', password: 'Flatiron')
u5 = User.create(username: 'stacy', password: 'Flatiron')

puts 'Seeding Pokemon'

p1 = Pokemon.create(name: 'blastoise', entry_number: 9, ability: 'torrent', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/9.png', user_id: u1.id)
p2 = Pokemon.create(name: 'charizard', entry_number: 6, ability: 'blaze', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/6.png', user_id: u1.id)
p3 = Pokemon.create(name: 'spheal', entry_number: 363, ability: 'thick-fat', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/363.png', user_id: u1.id)
p4 = Pokemon.create(name: 'rayquaza', entry_number: 384, ability: 'air-lock', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/384.png', user_id: u1.id)
p5 = Pokemon.create(name: 'tyranitar', entry_number: 248, ability: 'sand-stream', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/248.png', user_id: u1.id)
p6 = Pokemon.create(name: 'metagross', entry_number: 376, ability: 'clear-body', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/376.png', user_id: u1.id)

puts 'Seeding Moves'

m1 = Move.create(name: 'flamethrower', flavor_text: "An attack that may\ninflict a burn.", power: 90, pp: 15, accuracy: 100, move_type: 'fire', pokemon_id: p2.id)
m2 = Move.create(name: 'fire-fang', flavor_text: "The user bites with\nflame-cloaked fangs.\nIt may also make the\nfoe flinch or sustain\na burn.", power: 65, pp: 15, accuracy: 95, move_type: 'fire', pokemon_id: p2.id)
m3 = Move.create(name: 'ice-beam', flavor_text: "An attack that may\nfreeze the foe.", power: 90, pp: 10, accuracy: 100, move_type: 'ice', pokemon_id: p1.id)
m4 = Move.create(name: 'hydro-cannon', flavor_text: "Powerful, but leaves the\nuser immobile the next turn.'", power: 150, pp: 5, accuracy: 90, move_type: 'water', pokemon_id: p1.id)
m5 = Move.create(name: 'hyper-beam', flavor_text: "1st turn: Attack\n2nd turn: Rest", power: 150, pp: 5, accuracy: 90, move_type: 'normal', pokemon_id: p5.id)
m6 = Move.create(name: 'earthquake', flavor_text: "Tough but useless\nvs. flying foes.", power: 100, pp: 10, accuracy: 100, move_type: 'ground', pokemon_id: p5.id)
m7 = Move.create(name: 'extreme-speed', flavor_text: 'A powerful first-\nstrike move.', power: 80, pp: 15, accuracy: 100, move_type: 'normal', pokemon_id: p4.id)
m8 = Move.create(name: 'outrage', flavor_text: "Works 2-3 turns\nand confuses user.", power: 120, pp: 10, accuracy: 100, move_type: 'dragon', pokemon_id: p4.id)
m9 = Move.create(name: 'icy-wind', flavor_text: "A chilling attack that\nlowers the foe’s SPEED.", power: 55, pp: 15, accuracy: 90, move_type: 'ice', pokemon_id: p3.id)
m10 = Move.create(name: 'signal-beam', flavor_text: "A strange beam attack that\nmay confuse the foe.", power: 75, pp: 15, accuracy: 100, move_type: 'bug', pokemon_id: p3.id)
m11 = Move.create(name: 'psychic', flavor_text: "An attack that may\nlower SPCL.DEF.", power: 90, pp: 10, accuracy: 100, move_type: 'psychic', pokemon_id: p6.id)
m12 = Move.create(name: 'meteor-mash', flavor_text: "Fires a meteor-like punch.\nMay raise ATTACK.", power: 90, pp: 10, accuracy: 90, move_type: 'steel', pokemon_id: p6.id)


puts 'Done Seeding!'
