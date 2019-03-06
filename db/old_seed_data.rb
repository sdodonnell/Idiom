seneca = User.create!(
    username: "Seneca",
    fullname: "Seneca",
    email: "seneca@essaysbyseneca.com",
    password: "tantastultitia"
)
plutarch = User.create!(
    username: "Plutarch",
    fullname: "Plutarch",
    email: "plutarch@essaysbyplutarch.com",
    password: "worldcitizen"
)
erasmus = User.create!(
    username: "DesideriusErasmus",
    fullname: "Erasmus",
    email: "erasmus@essaysbyerasmus.com",
    password: "praiseroffolly"
)
montaigne = User.create!(
    username: "MichelDeMontaigne",
    fullname: "Michel de Montaigne",
    email: "michel@essaysbymichel.com",
    password: "cannibalsrule"
)
twain = User.create!(
    username: "MarkTwain",
    fullname: "Mark Twain",
    email: "mark@essaysbytwain.com",
    password: "samuelclemens"
    )
thoreau = User.create!(
    username: "HenryDavidThoreau",
    fullname: "Henry David Thoreau",
    email: "henry@essaysbythoreau.com",
    password: "civildisobedience"
)
emerson = User.create!(
    username: "RalphWaldoEmerson",
    fullname: "Ralph Waldo Emerson",
    email: "ralph@essaysbyemerson.com",
    password: "civildisobedience"
)
shaw = User.create!(
    username: "AnnaHowardShaw",
    fullname: "Anna Howard Shaw",
    email: "anna@essaysbyshaw.com",
    password: "votingrights4women"
)
muir = User.create!(
    username: "JohnMuir",
    fullname: "John Muir",
    email: "john@essaysbymuir.com",
    password: "goforawalk"
)
zs = User.create!(
    username: "ZitkalaSa",
    fullname: "Zitkálá-Šá",
    email: "zs@essaysbyzs.com",
    password: "cannibalsrule"
)
wilde = User.create!(
    username: "OscarWilde",
    fullname: "Oscar Wilde",
    email: "oscar@essaysbywilde.com",
    password: "mysteryoflove"
    )
dubois = User.create!(
    username: "WEBDuBois",
    fullname: "W.E.B. DuBois",
    email: "william@essaysbydubois.com",
    password: "freedomdawns"
)
goldman = User.create!(
    username: "EmmaGoldman",
    fullname: "Emma Goldman",
    email: "emma@essaysbygoldman.com",
    password: "freespeech"
)
beerbohm = User.create!(
    username: "MaxBeerbohm",
    fullname: "Max Beerbohm",
    email: "max@essaysbybeerbohm.com",
    password: "tothemax"
    )
woolf = User.create!(
    username: "VirginiaWoolf",
    fullname: "Virginia Woolf",
    email: "virginia@essaysbywoolf.com",
    password: "aroomofmyown"
    )            
gandhi = User.create!(
    username: "MohandasKGandhi",
    fullname: "Mahātmā Gandhi",
    email: "mohandas@essaysbygandhi.com",
    password: "satyagraha"
)
fanon = User.create!(
    username: "FrantzFanon",
    fullname: "Frantz Fanon",
    email: "frantz@essaysbyfanon.com",
    password: "peaunoir"
)

seneca_story_1 = 
    Story.create!({    
        title: "On Crowds",
        body: seneca_body_1,
        user_id: User.find_by(username: "Seneca").id
    })

seneca_story_2 = 
    Story.create!({    
        title: "On Progress",
        body: seneca_body_2,
        title_preview: "On Progress",
        body_preview: "Would you know what makes men greedy for the future? It is because no one has yet found himself.",
        user_id: User.find_by(username: "Seneca").id
    })

seneca_story_1.images.attach(io: open(IMAGES[0]), filename: IMAGES[0].remove(aws_path))
seneca_story_1.save

seneca_story_2.images.attach(io: open(IMAGES[1]), filename: IMAGES[1].remove(aws_path))
seneca_story_2.save

plutarch_stories = [ 
    Story.create!({    
        title: "Whether Virtue Can Be Taught",
        body: plutarch_body_1,
        title_preview: "Whether Virtue Can Be Taught",
        body_preview: "Men learn to play on the harp, and to dance, and to read, and to farm, and to ride on horseback; but what of virtue?",
        user_id: User.find_by(username: "Plutarch").id
    }),
    Story.create!({ 
        title: "On Fortune",
        body: plutarch_body_2,
        title_preview: "On Fortune",
        body_preview: "So wisdom is neither gold, nor silver, nor fame, nor wealth, nor health, nor strength, nor beauty. What is it then?",
        user_id: User.find_by(username: "Plutarch").id
    })
]

plutarch_stories[0].images.attach(io: open(IMAGES[2]), filename: IMAGES[2].remove(aws_path))
plutarch_stories[0].save!

plutarch_stories[1].images.attach(io: open(IMAGES[3]), filename: IMAGES[3].remove(aws_path))
plutarch_stories[1].save!

erasmus_stories = Story.create([
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: User.find_by(username: "DesideriusErasmus")
    },
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: User.find_by(username: "DesideriusErasmus")
    }
])
montaigne_stories = [
    Story.create!({    
        title: "On Friendship",
        body: 
        title_preview: "Of Friendship",
        body_preview: "For the rest, what we commonly call friends and friendships, are nothing but acquaintance and familiarities. But in the friendship I speak of, they mix and work themselves into one piece, with so universal a mixture, that there is no more sign of the seam by which they were first conjoined.",
        user_id: User.find_by(username: "MichelDeMontaigne").id
    }),
    Story.create!({    
        title: "Of Solitude",
        body: montaigne_body_1,
        title_preview: "Of Solitude",
        body_preview: "Let us tell ambition that it is she herself who gives us a taste of solitude; for what does she so much avoid as society?",
        user_id: User.find_by(username: "MichelDeMontaigne").id
    })
]

montaigne_stories[0].images.attach(io: open(IMAGES[4]), filename: IMAGES[4].remove(aws_path))
montaigne_stories[0].save!

montaigne_stories[1].images.attach(io: open(IMAGES[5]), filename: IMAGES[5].remove(aws_path))
montaigne_stories[1].save!

twain_stories = Story.create([
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 5
    },
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 5
    }
])
thoreau_stories = Story.create([
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 6
    },
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 6
    }
])
emerson_stories = Story.create([
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 7
    },
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 7
    }
])
shaw_stories = Story.create([
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 8
    },
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 8
    }
])
muir_stories = Story.create([
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 9
    },
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 9
    }
])
zitkalasa_stories = Story.create([
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 10
    },
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 10
    }
])
wilde_stories = Story.create([
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 11
    },
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 11
    }
])
dubois_stories = Story.create([
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 12
    },
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 12
    }
])
goldman_stories = [
    Story.create!({    
        title: "The Tragedy of Woman's Emancipation",
        body: "I BEGIN with an admission: Regardless of all political and economic theories, treating of the fundamental differences between various groups within the human race, regardless of class and race distinctions, regardless of all artificial boundary lines between woman's rights and man's rights, I hold that there is a point where these differentiations may meet and grow into one perfect whole.\n With this I do not mean to propose a peace treaty. The general social antagonism which has taken hold of our entire public life today, brought about through the force of opposing and contradictory interests, will crumble to pieces when the reorganization of our social life, based upon the principles of economic justice, shall have become a reality.\n Peace or harmony between the sexes and individuals does not necessarily depend on a superficial equalization of human beings; nor does it call for the elimination of individual traits and peculiarities. The problem that confronts us today, and which the nearest future is to solve, is how to be one's self and yet in oneness with others, to feel deeply with all human beings and still retain one's own characteristic qualities. This seems to me to be the basis upon which the mass and the individual, the true democrat and the true individuality, man and woman, can meet without antagonism and opposition. The motto should not be: Forgive one another; rather, Understand one another. The oft-quoted sentence of Madame de Staël: 'To understand everything means to forgive everything,' has never particularly appealed to me; it has the odor of the confessional; to forgive one's fellow-being conveys the idea of pharisaical superiority. To understand one's fellow-being suffices. The admission partly represents the fundamental aspect of my views on the emancipation of woman and its effect upon the entire sex.\n Emancipation should make it possible for woman to be human in the truest sense. Everything within her that craves assertion and activity should reach its fullest expression; all artificial barriers should be broken, and the road towards greater freedom cleared of every trace of centuries of submission and slavery.\n This was the original aim of the movement for woman's emancipation. But the results so far achieved have isolated woman and have robbed her of the fountain springs of that happiness which is so essential to her. Merely external emancipation has made of the modern woman an artificial being, who reminds one of the products of French arboriculture with its arabesque trees and shrubs, pyramids, wheels, and wreaths; anything, except the forms which would be reached by the expression of her own inner qualities. Such artificially grown plants of the female sex are to be found in large numbers, especially in the so-called intellectual sphere of our life.\n Liberty and equality for woman! What hopes and aspirations these words awakened when they were first uttered by some of the noblest and bravest souls of those days. The sun in all his light and glory was to rise upon a new world; in this world woman was to be free to direct her own destiny--an aim certainly worthy of the great enthusiasm, courage, perseverance, and ceaseless effort of the tremendous host of pioneer men and women, who staked everything against a world of prejudice and ignorance.\n My hopes also move towards that goal, but I hold that the emancipation of woman, as interpreted and practically applied today, has failed to reach that great end. Now, woman is confronted with the necessity of emancipating herself from emancipation, if she really desires to be free. This may sound paradoxical, but is, nevertheless, only too true.\n What has she achieved through her emancipation? Equal suffrage in a few States. Has that purified our political life, as many well-meaning advocates predicted? Certainly not. Incidentally, it is really time that persons with plain, sound judgment should cease to talk about corruption in politics in a boarding school tone. Corruption of politics has nothing to do with the morals, or the laxity of morals, of various political personalities. Its cause is altogether a material one. Politics is the reflex of the business and industrial world, the mottos of which are: 'To take is more blessed than to give'; 'buy cheap and sell dear'; 'one soiled hand washes the other.' There is no hope even that woman, with her right to vote, will ever purify politics.\n Emancipation has brought woman economic equality with man; that is, she can choose her own profession and trade; but as her past and present physical training has not equipped her with the necessary strength to compete with man, she is often compelled to exhaust all her energy, use up her vitality, and strain every nerve in order to reach the market value. Very few ever succeed, for it is a fact that women teachers, doctors, lawyers, architects, and engineers are neither met with the same confidence as their male colleagues, nor receive equal remuneration.\n And those that do reach that enticing equality, generally do so at the expense of their physical and psychical well-being. As to the great mass of working girls and women, how much independence is gained if the narrowness and lack of freedom of the home is exchanged for the narrowness and lack of freedom of the factory, sweat-shop, department store, or office? In addition is the burden which is laid on many women of looking after a 'home, sweet home' --cold, dreary, disorderly, uninviting--after a day's hard work. Glorious independence! No wonder that hundreds of girls are so willing to accept the first offer of marriage, sick and tired of their 'independence' behind the counter, at the sewing or typewriting machine. They are just as ready to marry as girls of the middle class, who long to throw off the yoke of parental supremacy. A so-called independence which leads only to earning the merest subsistence is not so enticing, not so ideal, that one could expect woman to sacrifice everything for it. Our highly praised independence is, after all, but a slow process of dulling and stifling woman's nature, her love instinct, and her mother instinct.\n Nevertheless, the position of the working girl is far more natural and human than that of her seemingly more fortunate sister in the more cultured professional walks of life teachers, physicians, lawyers, engineers, etc., who have to make a dignified, proper appearance, while the inner life is growing empty and dead.\nThe narrowness of the existing conception of woman's independence and emancipation; the dread of love for a man who is not her social equal; the fear that love will rob her of her freedom and independence; the horror that love or the joy of motherhood will only hinder her in the full exercise of her profession--all these together make of the emancipated modern woman a compulsory vestal, before whom life, with its great clarifying sorrows and its deep, entrancing joys, rolls on without touching or gripping her soul. \n Emancipation, as understood by the majority of its adherents and exponents, is of too narrow a scope to permit the boundless love and ecstasy contained in the deep emotion of the true woman, sweetheart, mother, in freedom.\n The tragedy of the self-supporting or economically free woman does not lie in too many, but in too few experiences. True, she surpasses her sister of past generations in knowledge of the world and human nature; it is just because of this that she feels deeply the lack of life's essence, which alone can enrich the human soul, and without which the majority of women have become mere professional automatons. \n That such a state of affairs was bound to come was foreseen by those who realized that, in the domain of ethics, there still remained many decaying ruins of the time of the undisputed superiority of man; ruins that are still considered useful. And, what is more important, a goodly number of the emancipated are unable to get along without them. Every movement that aims at the destruction of existing institutions and the replacement thereof with something more advanced, more perfect, has followers who in theory stand for the most radical ideas, but who, nevertheless, in their every-day practice, are like the average Philistine, feigning respectability and clamoring for the good opinion of their opponents. There are, for example, Socialists, and even Anarchists, who stand for the idea that property is robbery, yet who will grow indignant if anyone owe them the value of a half-dozen pins.\nThe same Philistine can be found in the movement for woman's emancipation. Yellow journalists and milk-and-water litterateurs have painted pictures of the emancipated woman that make the hair of the good citizen and his dull companion stand up on end. Every member of the woman's rights movement was pictured as a George Sand in her absolute disregard of morality. Nothing was sacred to her. She had no respect for the ideal relation between man and woman. In short, emancipation stood only for a reckless life of lust and sin; regardless of society, religion, and morality. The exponents of woman's rights were highly indignant at such misrepresentation, and, lacking humor, they exerted all their energy to prove that they were not at all as bad as they were painted, but the very reverse. Of course, as long as woman was the slave of man, she could not be good and pure, but now that she was free and independent she would prove how good she could be and that her influence would have a purifying effect on all institutions in society. True, the movement for woman's rights has broken many old fetters, but it has also forged new ones. The great movement of true  emancipation has not met with a great race of women who could look liberty in the face. Their narrow, Puritanical vision banished man, as a disturber and doubtful character, out of their eniotional life. Man was not to be tolerated at any price, except perhaps as the father of a child, since a child could not very well come to life without a father. Fortunately, the most rigid Puritans never will be strong enough to kill the innate craving for motherhood. But woman's freedom is closely allied with man's freedom, and many of my so-called emancipated sisters seem to overlook the fact that a child born in freedom needs the love and devotion of each human being about him, man as well as woman. Unfortunately, it is this narrow conception of human relations that has brought about a great tragedy in the lives of the modern man and woman.\nAbout fifteen years ago appeared a work from the pen of the brilliant Norwegian Laura Marholm, called Woman, a Character Study. She was one of the first to call attention to the emptiness and narrowness of the existing conception of woman's emancipation, and its tragic effect upon the inner life of woman. In her work Laura Marholm speaks of the fate of several gifted women of international fame: the genius Eleonora Duse; the great mathematician and writer Sonya Kovalevskaia; the artist and poet nature Marie Bashkirtzeff, who died so young. Through each description of the lives of these women of such extraordinary mentality runs a marked trail of unsatisfied craving for a full, rounded, complete, and beautiful life, and the unrest and loneliness resulting from the lack of it. Through these masterly psychological sketches one cannot help but see that the higher the mental development of woman, the less possible it is for her to meet a congenial mate who will see in her, not only sex, but also the human being, the friend, the comrade and strong individuality, who cannot and ought not lose a single trait of her character.\nThe average man with his self-sufficiency, his ridiculously superior airs of patronage towards the female sex, is an impossibility for woman as depicted in the Character Study  by Laura Marholm. Equally impossible for her is the man who can see in her nothing more than her mentality and her genius, and who fails to awaken her woman nature.\nA rich intellect and a fine soul are usually considered necessary attributes of a deep and beautiful personality. In the case of the modern woman, these attributes serve as a hindrance to the complete assertion of her being. For over a hundred years the old form of marriage, based on the Bible, 'till death doth part,' has been denounced as an institution that stands for the sovereignty of the man over the woman, of her complete submission to his whims and commands, and absolute dependence on his name and support. Time and again it has been conclusively proved that the old matrimonial relation restricted woman to the function of man's servant and the bearer of his children. And yet we find many emancipated women who prefer marriage, with all its deficiencies, to the narrowness of an unmarried life: narrow and unendurable because of the chains of moral and social prejudice that cramp and bind her nature.\nThe explanation of such inconsistency on the part of many advanced women is to be found in the fact that they never truly understood the meaning of emancipation. They thought that all that was needed was independence from external tyrannies; the internal tyrants, far more harmful to life and growth--ethical and social conventions--were left to take care of themselves; and they have taken care of themselves. They seem to get along as beautifully in the heads and hearts of the most active exponents of woman's emancipation, as in the heads and hearts of our grandmothers.\nThese internal tyrants, whether they be in the form of public opinion or what will mother say, or brother, father, aunt, or relative of any sort; what will Mrs. Grundy, Mr. Comstock, the employer, the Board of Education say? All these busybodies, moral detectives, jailers of the human spirit, what will they say? Until woman has learned to defy them all, to stand firmly on her own ground and to insist upon her own unrestricted freedom, to listen to the voice of her nature, whether it call for life's greatest treasure, love for a man, or her most glorious privilege, the right to give birth to a child, she cannot call herself emancipated. How many emancipated women are brave enough to acknowledge that the voice of love is calling, wildly beating against their breasts, demanding to be heard, to be satisfied.\nThe French writer Jean Reibrach, in one of his novels, New Beauty, attempts to picture the ideal, beautiful, emancipated woman. This ideal is embodied in a young girl, a physician. She talks very cleverly and wisely of how to feed infants; she is kind, and administers medicines free to poor mothers. She converses with a young man of her acquaintance about the sanitary conditions of the future, and how various bacilli and germs shall be exterminated by the use of stone walls and floors, and by the doing away with rugs and hangings. She is, of course, very plainly and practically dressed, mostly in black. The young man, who, at their first meeting, was overawed by the wisdom of his emancipated friend, gradually learns to understand her, and recognizes one fine day that he loves her. They are young, and she is kind and beautiful, and though always in rigid attire, her appearance is softened by a spotlessly clean white collar and cuffs. One would expect that he would tell her of his love, but he is not one to commit romantic absurdities. Poetry and the enthusiasm of love cover their blushing faces before the pure beauty of the lady. He silences the voice of his nature, and remains correct. She, too, is always exact, always rational, always well behaved. I fear if they had formed a union, the young man would have risked freezing to death. I must confess that I can see nothing beautiful in this new beauty, who is as cold as the stone walls and floors she dreams of. Rather would I have the love songs of romantic ages, rather Don Juan and Madame Venus, rather an elopement by ladder and rope on a moonlight night, followed by the father's curse, mother's moans, and the moral comments of neighbors, than correctness and propriety measured by yardsticks. If love does not know how to give and take without restrictions, it is not love, but a transaction that never fails to lay stress on a plus and a minus.\nThe greatest shortcoming of the emancipation of the present day lies in its artificial stiffness and its narrow respectabilities, which produce an emptiness in woman's soul that will not let her drink from the fountain of life. I once remarked that there seemed to be a deeper relationship between the old-fashioned mother and hostess, ever on the alert for the happiness of her little ones and the comfort of those she loved, and the truly new woman, than between the latter and her average emancipated sister. The disciples of emancipation pure and simple declared me a heathen, fit only for the stake. Their blind zeal did not let them see that my comparison between the old and the new was merely to prove that a goodly number of our grandmothers had more blood in their veins, far more humor and wit, and certainly a greater amount of naturalness, kind-heartedness, and simplicity, than the majority of our emancipated professional women who fill the colleges, halls of learning, and various offices. This does not mean a wish to return to the past, nor does it condemn woman to her old sphere, the kitchen and the nursery.\nSalvation lies in an energetic march onward towards a brighter and clearer future. We are in need of unhampered growth out of old traditions and habits. The movement for woman's emancipation has so far made but the first step in that direction It is to be hoped that it will gather strength to make another. The right to vote, or equal civil rights, may be good demands, but true emancipation begins neither at the polls nor in courts. It begins in woman's soul. History tells us that every oppressed class gained true liberation from its masters through its own efforts. It is necessary that woman learn that Iesson, that she realize that her freedom will reach as far as her power to achieve her freedom reaches. It is, therefore, far more important for her to begin with her inner regeneration, to cut loose from the weight of prejudices, traditions, and customs. The demand for equal rights in every vocation of life is just and fair; but, after all, the most vital right is the right to love and be loved. Indeed, if partial emancipation is to become a complete and true emancipation of woman, it will have to do away with the ridiculous notion that to be loved, to be sweetheart and mother, is synonymous with being slave or subordinate. It will have to do away with the absurd notion of the dualism of the sexes, or that man and woman represent two antagonistic worlds.\nPettiness separates; breadth unites. Let us be broad and big. Let us not overlook vital things because of the bulk of trifles confronting us. A true conception of the relation of the sexes will not admit of conqueror and conquered; it knows of but one great thing: to give of one's self boundlessly, in order to find one's self richer, deeper, better. That alone can fill the emptiness, and transform the tragedy of woman's emancipation into joy, limitless joy.\n",
        title_preview: "The Tragedy of Woman's Emancipation",
        body_preview: "Emancipation should make it possible for woman to be human in the truest sense. Everything within her that craves assertion and activity should reach its fullest expression; all artificial barriers should be broken, and the road towards greater freedom cleared of every trace of centuries of submission and slavery.",
        user_id: User.find_by(username: "EmmaGoldman").id
    }),
    Story.create!({    
        title: "Anarchism: What it Really Stands For",
        body: "THE history of human growth and development is at the same time the history of the terrible struggle of every new idea heralding the approach of a brighter dawn. In its tenacious hold on tradition, the Old has never hesitated to make use of the foulest and cruelest means to stay the advent of the New, in whatever form or period the latter may have asserted itself. Nor need we retrace our steps into the distant past to realize the enormity of opposition, difficulties, and hardships placed in the path of every progressive idea. The rack, the thumbscrew, and the knout are still with us; so are the convict's garb and the social wrath, all conspiring against the spirit that is serenely marching on.\n  	Anarchism could not hope to escape the fate of all other ideas of innovation. Indeed, as the most revolutionary and uncompromising innovator, Anarchism must needs meet with the combined ignorance and venom of the world it aims to reconstruct.\n  	To deal even remotely with all that is being said and done against Anarchism would necessitate the writing of a whole volume. I shall therefore meet only two of the principal objections. In so doing, I shall attempt to elucidate what Anarchism really stands for.\n  	The strange phenomenon of the opposition to Anarchism is that it brings to light the relation between so-called intelligence and ignorance. And yet this is not so very strange when we consider the relativity of all things. The ignorant mass has in its favor that it makes no pretense of knowledge or tolerance. Acting, as it always does, by mere impulse, its reasons are like those of a child. 'Why?' 'Because.' Yet the opposition of the uneducated to Anarchism deserves the same consideration as that of the intelligent man.\n  	What, then, are the objections? First, Anarchism is impractical, though a beautiful ideal. Second, Anarchism stands for violence and destruction, hence it must be repudiated as vile and dangerous. Both the intelligent man and the ignorant mass judge not from a thorough knowledge of the subject, but either from hearsay or false interpretation.\n  	A practical scheme, says Oscar Wilde, is either one already in existence, or a scheme that could be carried out under the existing conditions; but it is exactly the existing conditions that one objects to, and any scheme that could accept these conditions is wrong and foolish. The true criterion of the practical, therefore, is not whether the latter can keep intact the wrong or foolish; rather is it whether the scheme has vitality enough to leave the stagnant waters of the old, and build, as well as sustain, new life. In the light of this conception, Anarchism is indeed practical. More than any other idea, it is helping to do away with the wrong and foolish; more than any other idea, it is building and sustaining new life.\n  	The emotions of the ignorant man are continuously kept at a pitch by the most blood-curdling stories about Anarchism. Not a thing too outrageous to be employed against this philosophy and its exponents. Therefore Anarchism represents to the unthinking what the proverbial bad man does to the child,--a black monster bent on swallowing everything; in short, destruction and violence.\n  	Destruction and violence! How is the ordinary man to know that the most violent element in society is ignorance; that its power of destruction is the very thing Anarchism is combating? Nor is he aware that Anarchism, whose roots, as it were, are part of nature's forces, destroys, not healthful tissue, but parasitic growths that feed on the life's essence of society. It is merely clearing the soil from weeds and sagebrush, that it may eventually bear healthy fruit.\n  	Someone has said that it requires less mental effort to condemn than to think. The widespread mental indolence, so prevalent in society, proves this to be only too true. Rather than to go to the bottom of any given idea, to examine into its origin and meaning, most people will either condemn it altogether, or rely on some superficial or prejudicial definition of non-essentials.\n  	Anarchism urges man to think, to investigate, to analyze every proposition; but that the brain capacity of the average reader be not taxed too much, I also shall begin with a definition, and then elaborate on the latter.\nANARCHISM:--The philosophy of a new social order based on liberty unrestricted by man-made law; the theory that all forms of government rest on violence, and are therefore wrong and harmful, as well as unnecessary.\n  	The new social order rests, of course, on the materialistic basis of life; but while all Anarchists agree that the main evil today is an economic one, they maintain that the solution of that evil can be brought about only through the consideration of every phaseof life,--individual, as well as the collective; the internal, as well as the external phases.\n  	A thorough perusal of the history of human development will disclose two elements in bitter conflict with each other; elements that are only now beginning to be understood, not as foreign to each other, but as closely related and truly harmonious, if only placed in proper environment: the individual and social instincts. The individual and society have waged a relentless and bloody battle for ages, each striving for supremacy, because each was blind to the value and importance of the other. The individual and social instincts,--the one a most potent factor for individual endeavor, for growth, aspiration, self-realization; the other an equally potent factor for mutual helpfulness and social well-being.\n  	The explanation of the storm raging within the individual, and between him and his surroundings, is not far to seek. The primitive man, unable to understand his being, much less the unity of all life, felt himself absolutely dependent on blind, hidden forces ever ready to mock and taunt him. Out of that attitude grew the religious concepts of man as a mere speck of dust dependent on superior powers on high, who can only be appeased by complete surrender. All the early sagas rest on that idea, which continues to be the Leitmotiv of the biblical tales dealing with the relation of man to God, to the State, to society. Again and again the same motif, man is nothing, the powers are everything. Thus Jehovah would only endure man on condition of complete surrender. Man can have all the glories of the earth, but he must not become conscious of himself. The State, society, and moral laws all sing the same refrain: Man can have all the glories of the earth, but he must not become conscious of himself.\n  	Anarchism is the only philosophy which brings to man the consciousness of himself; which maintains that God, the State, and society are non-existent, that their promises are null and void, since they can be fulfilled only through man's subordination. Anarchism is therefore the teacher of the unity of life; not merely in nature, but in man. There is no conflict between the individual and the social instincts, any more than there is between the heart and the lungs: the one the receptacle of a precious life essence, the other the repository of the element that keeps the essence pure and strong. The individual is the heart of society, conserving the essence of social life; society is the lungs which are distributing the element to keep the life essence--that is, the individual--pure and strong.\n  	'The one thing of value in the world,' says Emerson, 'is the active soul; this every man contains within him. The soul active sees absolute truth and utters truth and creates.' In other words, the individual instinct is the thing of value in the world. It is the true soul that sees and creates the truth alive, out of which is to come a still greater truth, the re-born social soul.\n  	Anarchism is the great liberator of man from the phantoms that have held him captive; it is the arbiter and pacifier of the two forces for individual and social harmony. To accomplish that unity, Anarchism has declared war on the pernicious influences which have so far prevented the harmonious blending of individual and social instincts, the individual and society.\n  	Religion, the dominion of the human mind; Property, the dominion of human needs; and Government, the dominion of human conduct, represent the stronghold of man's enslavement and all the horrors it entails. Religion! How it dominates man's mind, how it humiliates and degrades his soul. God is everything, man is nothing, says religion. But out of that nothing God has created a kingdom so despotic, so tyrannical, so cruel, so terribly exacting that naught but gloom and tears and blood have ruled the world since gods began. Anarchism rouses man to rebellion against this black monster. Break your mental fetters, says Anarchism to man, for not until you think and judge for yourself will you get rid of the dominion of darkness, the greatest obstacle to all progress.\n  	Property, the dominion of man's needs, the denial of the right to satisfy his needs. Time was when property claimed a divine right, when it came to man with the same refrain, even as religion, 'Sacrifice! Abnegate! Submit!' The spirit of Anarchism has lifted man from his prostrate position. He now stands erect, with his face toward the light. He has learned to see the insatiable, devouring, devastating nature of property, and he is preparing to strike the monster dead.\n  	'Property is robbery,' said the great French Anarchist Proudhon. Yes, but without risk and danger to the robber. Monopolizing the accumulated efforts of man, property has robbed him of his birthright, and has turned him loose a pauper and an outcast. Property has not even the time-worn excuse that man does not create enough to satisfy all needs. The A B C student of economics knows that the productivity of labor within the last few decades far exceeds normal demand. But what are normal demands to an abnormal institution? The only demand that property recognizes is its own gluttonous appetite for greater wealth, because wealth means power; the power to subdue, to crush, to exploit, the power to enslave, to outrage, to degrade. America is particularly boastful of her great power, her enormous national wealth. Poor America, of what avail is all her wealth, if the individuals comprising the nation are wretchedly poor? If they live in squalor, in filth, in crime, with hope and joy gone, a homeless, soilless army of human prey.\n  	It is generally conceded that unless the returns of any business venture exceed the cost, bankruptcy is inevitable. But those engaged in the business of producing wealth have not yet learned even this simple lesson. Every year the cost of production in human life is growing larger (50,000 killed, 100,000 wounded in America last year); the returns to the masses, who help to create wealth, are ever getting smaller. Yet America continues to be blind to the inevitable bankruptcy of our business of production. Nor is this the only crime of the latter. Still more fatal is the crime of turning the producer into a mere particle of a machine, with less will and decision than his master of steel and iron. Man is being robbed not merely of the products of his labor, but of the power of free initiative, of originality, and the interest in, or desire for, the things he is making.\n  	Real wealth consists in things of utility and beauty, in things that help to create strong, beautiful bodies and surroundings inspiring to live in. But if man is doomed to wind cotton around a spool, or dig coal, or build roads for thirty years of his life, there can be no talk of wealth. What he gives to the world is only gray and hideous things, reflecting a dull and hideous existence,--too weak to live, too cowardly to die. Strange to say, there are people who extol this deadening method of centralized production as the proudest achievement of our age. They fail utterly to realize that if we are to continue in machine subserviency, our slavery is more complete than was our bondage to the King. They do not want to know that centralization is not only the death-knell of liberty, but also of health and beauty, of art and science, all these being impossible in a clock-like, mechanical atmosphere.\n  	Anarchism cannot but repudiate such a method of production: its goal is the freest possible expression of all the latent powers of the individual. Oscar Wilde defines a perfect personality as 'one who develops under perfect conditions, who is not wounded, maimed, or in danger.' A perfect personality, then, is only possible in a state of society where man is free to choose the mode of work, the conditions of work, and the freedom to work. One to whom the making of a table, the building of a house, or the tilling of the soil, is what the painting is to the artist and the discovery to the scientist,--the result of inspiration, of intense longing, and deep interest in work as a creative force. That being the ideal of Anarchism, its economic arrangements must consist of voluntary productive and distributive associations, gradually developing into free communism, as the best means of producing with the least waste of human energy. Anarchism, however, also recognizes the right of the individual, or numbers of individuals, to arrange at all times for other forms of work, in harmony with their tastes and desires.\n  	Such free display of human energy being possible only under complete individual and social freedom, Anarchism directs its forces against the third and greatest foe of all social equality; namely, the State, organized authority, or statutory law,--the dominion of human conduct.\n  	Just as religion has fettered the human mind, and as property, or the monopoly of things, has subdued and stifled man's needs, so has the State enslaved his spirit, dictating every phase of conduct. 'All government in essence,' says Emerson, 'is tyranny.' It matters not whether it is government by divine right or majority rule. In every instance its aim is the absolute subordination of the individual.\n  	Referring to the American government, the greatest American Anarchist, David Thoreau, said: 'Government, what is it but a tradition, though a recent one, endeavoring to transmit itself unimpaired to posterity, but each instance losing its integrity; it has not the vitality and force of a single living man. Law never made man a whit more just; and by means of their respect for it, even the well disposed are daily made agents of injustice.'\n  	Indeed, the keynote of government is injustice. With the arrogance and self-sufficiency of the King who could do no wrong, governments ordain, judge, condemn, and punish the most insignificant offenses, while maintaining themselves by the greatest of all offenses, the annihilation of individual liberty. Thus Ouida is right when she maintains that 'the State only aims at instilling those qualities in its public by which its demands are obeyed, and its exchequer is filled. Its highest attainment is the reduction of mankind to clockwork. In its atmosphere all those finer and more delicate liberties, which require treatment and spacious expansion, inevitably dry up and perish. The State requires a taxpaying machine in which there is no hitch, an exchequer in which there is never a deficit, and a public, monotonous, obedient, colorless, spiritless, moving humbly like a flock of sheep along a straight high road between two walls.'\n  	Yet even a flock of sheep would resist the chicanery of the State, if it were not for the corruptive, tyrannical, and oppressive methods it employs to serve its purposes. Therefore Bakunin repudiates the State as synonymous with the surrender of the liberty of the individual or small minorities,--the destruction of social relationship, the curtailment, or complete denial even, of life itself, for its own aggrandizement. The State is the altar of political freedom and, like the religious altar, it is maintained for the purpose of human sacrifice.\n  	In fact, there is hardly a modern thinker who does not agree that government, organized authority, or the State, is necessary only to maintain or protect property and monopoly. It has proven efficient in that function only.\n  	Even George Bernard Shaw, who hopes for the miraculous from the State under Fabianism, nevertheless admits that 'it is at present a huge machine for robbing and slave-driving of the poor by brute force.' This being the case, it is hard to see why the clever prefacer wishes to uphold the State after poverty shall have ceased to exist.\n  	Unfortunately, there are still a number of people who continue in the fatal belief that government rests on natural laws, that it maintains social order and harmony, that it diminishes crime, and that it prevents the lazy man from fleecing his fellows. I shall therefore examine these contentions.\n  	A natural law is that factor in man which asserts itself freely and spontaneously without any external force, in harmony with the requirements of nature. For instance, the demand for nutrition, for sex gratification, for light, air, and exercise, is a natural law. But its expression needs not the machinery of government, needs not the club, the gun, the handcuff, or the prison. To obey such laws, if we may call it obedience, requires only spontaneity and free opportunity. That governments do not maintain themselves through such harmonious factors is proven by the terrible array of violence, force, and coercion all governments use in order to live. Thus Blackstone is right when he says, 'Human laws are invalid, because they are contrary to the laws of nature.'\n  	Unless it be the order of Warsaw after the slaughter of thousands of people, it is difficult to ascribe to governments any capacity for order or social harmony. Order derived through submission and maintained by terror is not much of a safe guaranty; yet that is the only 'order' that governments have ever maintained. True social harmony grows naturally out of solidarity of interests. In a society where those who always work never have anything, while those who never work enjoy everything, solidarity of interests is non-existent; hence social harmony is but a myth. The only way organized authority meets this grave situation is by extending still greater privileges to those who have already monopolized the earth, and by still further enslaving the disinherited masses. Thus the entire arsenal of government--laws, police, soldiers, the courts, legislatures, prisons,--is strenuously engaged in 'harmonizing' the most antagonistic elements in society.\n  	The most absurd apology for authority and law is that they serve to diminish crime. Aside from the fact that the State is itself the greatest criminal, breaking every written and natural law, stealing in the form of taxes, killing in the form of war and capital punishment, it has come to an absolute standstill in coping with crime. It has failed utterly to destroy or even minimize the horrible scourge of its own creation.\n  	Crime is naught but misdirected energy. So long as every institution of today, economic, political, social, and moral, conspires to misdirect human energy into wrong channels; so long as most people are out of place doing the things they hate to do, living a life they loathe to live, crime will be inevitable, and all the laws on the statutes can only increase, but never do away with, crime. What does society, as it exists today, know of the process of despair, the poverty, the horrors, the fearful struggle the human soul must pass on its way to crime and degradation. Who that knows this terrible process can fail to see the truth in these words of Peter Kropotkin:\n  	'Those who will hold the balance between the benefits thus attributed to law and punishment and the degrading effect of the latter on humanity; those who will estimate the torrent of depravity poured abroad in human society by the informer, favored by the Judge even, and paid for in clinking cash by governments, under the pretext of aiding to unmask crime; those who will go within prison walls and there see what human beings become when deprived of liberty, when subjected to the care of brutal keepers, to coarse, cruel words, to a thousand stinging, piercing humiliations, will agree with us that the entire apparatus of prison and punishment is an abomination which ought to be brought to an end.'\n  	The deterrent influence of law on the lazy man is too absurd to merit consideration. If society were only relieved of the waste and expense of keeping a lazy class, and the equally great expense of the paraphernalia of protection this lazy class requires, the social tables would contain an abundance for all, including even the occasional lazy individual. Besides, it is well to consider that laziness results either from special privileges, or physical and mental abnormalities. Our present insane system of production fosters both, and the most astounding phenomenon is that people should want to work at all now. Anarchism aims to strip labor of its deadening, dulling aspect, of its gloom and compulsion. It aims to make work an instrument of joy, of strength, of color, of real harmony, so that the poorest sort of a man should find in work both recreation and hope.\n     To achieve such an arrangement of life, government, with its unjust, arbitrary, repressive measures, must be done away with. At best it has but imposed one single mode of life upon all, without regard to individual and social variations and needs. In destroying government and statutory laws, Anarchism proposes to rescue the self-respect and independence of the individual from all restraint and invasion by authority. Only in freedom can man grow to his full stature. Only in freedom will he learn to think and move, and give the very best in him. Only in freedom will he realize the true force of the social bonds which knit men together, and which are the true foundation of a normal social life.\n  	But what about human nature? Can it be changed? And if not, will it endure under Anarchism?\n  	Poor human nature, what horrible crimes have been committed in thy name! Every fool, from king to policeman, from the flatheaded parson to the visionless dabbler in science, presumes to speak authoritatively of human nature. The greater the mental charlatan, the more definite his insistence on the wickedness and weaknesses of human nature. Yet, how can any one speak of it today, with every soul in a prison, with every heart fettered, wounded, and maimed?\n  	John Burroughs has stated that experimental study of animals in captivity is absolutely useless. Their character, their habits, their appetites undergo a complete transformation when torn from their soil in field and forest. With human nature caged in a narrow space, whipped daily into submission, how can we speak of its potentialities?\n  	Freedom, expansion, opportunity, and, above all, peace and repose, alone can teach us the real dominant factors of human nature and all its wonderful possibilities.\n  	Anarchism, then, really stands for the liberation of the human mind from the dominion of religion; the liberation of the human body from the dominion of property; liberation from the shackles and restraint of government. Anarchism stands for a social order based on the free grouping of individuals for the purpose of producing real social wealth; an order that will guarantee to every human being free access to the earth and full enjoyment of the necessities of life, according to individual desires, tastes, and inclinations.\n  	This is not a wild fancy or an aberration of the mind. It is the conclusion arrived at by hosts of intellectual men and women the world over; a conclusion resulting from the close and studious observation of the tendencies of modern society: individual liberty and economic equality, the twin forces for the birth of what is fine and true in man.\n  	As to methods. Anarchism is not, as some may suppose, a theory of the future to be realized through divine inspiration. It is a living force in the affairs of our life, constantly creating new conditions. The methods of Anarchism therefore do not comprise an iron-clad program to be carried out under all circumstances. Methods must grow out of the economic needs of each place and clime, and of the intellectual and temperamental requirements of the individual. The serene, calm character of a Tolstoy will wish different methods for social reconstruction than the intense, overflowing personality of a Michael Bakunin or a Peter Kropotkin. Equally so it must be apparent that the economic and political needs of Russia will dictate more drastic measures than would England or America. Anarchism does not stand for military drill and uniformity; it does, however, stand for the spirit of revolt, in whatever form, against everything that hinders human growth. All Anarchists agree in that, as they also agree in their opposition to the political machinery as a means of bringing about the great social change.\n  	'All voting,' says Thoreau, 'is a sort of gaming, like checkers, or backgammon, a playing with right and wrong; its obligation never exceeds that of expediency. Even voting for the right thing is doing nothing for it. A wise man will not leave the right to the mercy of chance, nor wish it to prevail through the power of the majority.' A close examination of the machinery of politics and its achievements will bear out the logic of Thoreau.\n  	What does the history of parliamentarism show? Nothing but failure and defeat, not even a single reform to ameliorate the economic and social stress of the people. Laws have been passed and enactments made for the improvement and protection of labor. Thus it was proven only last year that Illinois, with the most rigid laws for mine protection, had the greatest mine disasters. In States where child labor laws prevail, child exploitation is at its highest, and though with us the workers enjoy full political opportunities, capitalism has reached the most brazen zenith.\n  	Even were the workers able to have their own representatives, for which our good Socialist politicians are clamoring, what chances are there for their honesty and good faith? One has but to bear in mind the process of politics to realize that its path of good intentions is full of pitfalls: wire-pulling, intriguing, flattering, lying, cheating; in fact, chicanery of every description, whereby the political aspirant can achieve success. Added to that is a complete demoralization of character and conviction, until nothing is left that would make one hope for anything from such a human derelict. Time and time again the people were foolish enough to trust, believe, and support with their last farthing aspiring politicians, only to find themselves betrayed and cheated.\n  	It may be claimed that men of integrity would not become corrupt in the political grinding mill. Perhaps not; but such men would be absolutely helpless to exert the slightest influence in behalf of labor, as indeed has been shown in numerous instances. The State is the economic master of its servants. Good men, if such there be, would either remain true to their political faith and lose their economic support, or they would cling to their economic master and be utterly unable to do the slightest good. The political arena leaves one no alternative, one must either be a dunce or a rogue.\n  	The political superstition is still holding sway over the hearts and minds of the masses, but the true lovers of liberty will have no more to do with it. Instead, they believe with Stirner that man has as much liberty as he is willing to take. Anarchism therefore stands for direct action, the open defiance of, and resistance to, all laws and restrictions, economic, social, and moral. But defiance and resistance are illegal. Therein lies the salvation of man. Everything illegal necessitates integrity, self-reliance, and courage. In short, it calls for free, independent spirits, for 'men who are men, and who have a bone in their backs which you cannot pass your hand through.'\n  	Universal suffrage itself owes its existence to direct action. If not for the spirit of rebellion, of the defiance on the part of the American revolutionary fathers, their posterity would still wear the King's coat. If not for the direct action of a John Brown and his comrades, America would still trade in the flesh of the black man. True, the trade in white flesh is still going on; but that, too, will have to be abolished by direct action. Trade-unionism, the economic arena of the modern gladiator, owes its existence to direct action. It is but recently that law and government have attempted to crush the trade-union movement, and condemned the exponents of man's right to organize to prison as conspirators. Had they sought to assert their cause through begging, pleading, and compromise, trade-unionism would today be a negligible quantity. In France, in Spain, in Italy, in Russia, nay even in England (witness the growing rebellion of English labor unions), direct, revolutionary, economic action has become so strong a force in the battle for industrial liberty as to make the world realize the tremendous importance of labor's power. The General Strike, the supreme expression of the economic consciousness of the workers, was ridiculed in America but a short time ago. Today every great strike, in order to win, must realize the importance of the solidaric general protest.\n  	Direct action, having proven effective along economic lines, is equally potent in the environment of the individual. There a hundred forces encroach upon his being, and only persistent resistance to them will finally set him free. Direct action against the authority in the shop, direct action against the authority of the law, direct action against the invasive, meddlesome authority of our moral code, is the logical, consistent method of Anarchism.\n  	Will it not lead to a revolution? Indeed, it will. No real social change has ever come about without a revolution. People are either not familiar with their history, or they have not yet learned that revolution is but thought carried into action.\n  	Anarchism, the great leaven of thought, is today permeating every phase of human endeavor. Science, art, literature, the drama, the effort for economic betterment, in fact every individual and social opposition to the existing disorder of things, is illumined by the spiritual light of Anarchism. It is the philosophy of the sovereignty of the individual. It is the theory of social harmony. It is the great, surging, living truth that is reconstructing the world, and that will usher in the Dawn.\n",
        title_preview: "Anarchism: What it Really Stands For",
        body_preview: " THE history of human growth and development is at the same time the history of the terrible struggle of every new idea heralding the approach of a brighter dawn.",
        user_id: User.find_by(username: "EmmaGoldman").id
    })
]

goldman_stories[0].images.attach(io: open(IMAGES[6]), filename: IMAGES[6].remove(aws_path))
goldman_stories[0].save!

goldman_stories[1].images.attach(io: open(IMAGES[7]), filename: IMAGES[7].remove(aws_path))
goldman_stories[1].save!

beerbohm_stories = Story.create([
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 14
    },
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 14
    }
])
woolf_stories = Story.create([
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 15
    },
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 15
    }
])
gandhi_stories = Story.create([
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 16
    },
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 16
    }
])
fanon_stories = Story.create([
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 17
    },
    {    
        title: "",
        body: "",
        title_preview: "",
        body_preview: "",
        user_id: 17
    }
])
