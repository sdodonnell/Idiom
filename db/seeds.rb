# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Story.destroy_all


User.create!(
    username: "Seneca",
    fullname: "Seneca"
    email: "seneca@essaysbyseneca.com",
    password: "tantastultitia"
)
User.create!(
    username: "Plutarch",
    fullname: "Plutarch"
    email: "plutarch@essaysbyplutarch.com",
    password: "worldcitizen"
)
User.create!(
    username: "DesideriusErasmus",
    fullname: "Erasmus"
    email: "erasmus@essaysbyerasmus.com",
    password: "praiseroffolly"
)
User.create!(
    username: "MichelDeMontaigne",
    fullname: "Michel de Montaigne"
    email: "michel@essaysbymichel.com",
    password: "cannibalsrule"
)
User.create!(
    username: "MarkTwain",
    fullname: "Mark Twain"
    email: "mark@essaysbytwain.com",
    password: "samuelclemens"
    )
User.create!(
    username: "HenryDavidThoreau",
    fullname: "Henry David Thoreau"
    email: "henry@essaysbythoreau.com",
    password: "cannibalsrule"
)
User.create!(
    username: "RalphWaldoEmerson",
    fullname: "Ralph Waldo Emerson"
    email: "ralph@essaysbyemerson.com",
    password: "civildisobedience"
)
User.create!(
    username: "AnnaHowardShaw",
    fullname: "Anna Howard Shaw"
    email: "anna@essaysbyshaw.com",
    password: "votingrights4women"
)
User.create!(
    username: "JohnMuir",
    fullname: "John Muir"
    email: "john@essaysbymuir.com",
    password: "goforawalk"
)
User.create!(
    username: "ZitkalaSa",
    fullname: "Zitkálá-Šá"
    email: "zs@essaysbyzs.com",
    password: "cannibalsrule"
)
User.create!(
    username: "OscarWilde",
    fullname: "Oscar Wilde"
    email: "oscar@essaysbywilde.com",
    password: "mysteryoflove"
    )
User.create!(
    username: "WEBDuBois",
    fullname: "W.E.B. DuBois"
    email: "william@essaysbydubois.com",
    password: "freedomdawns"
)
User.create!(
    username: "MaxBeerbohm",
    fullname: "Max Beerbohm"
    email: "max@essaysbybeerbohm.com",
    password: "tothemax"
    )
User.create!(
    username: "VirginiaWoolf",
    fullname: "Virginia Woolf"
    email: "virginia@essaysbywoolf.com",
    password: "aroomofmyown"
    )            
User.create!(
    username: "MohandasKGandhi",
    fullname: "Mahātmā Gandhi"
    email: "mohandas@essaysbygandhi.com",
    password: "satyagraha"
)
User.create!(
    username: "FrantzFanon",
    fullname: "Frantz Fanon"
    email: "frantz@essaysbyfanon.com",
    password: "peaunoir"
)

Story.create