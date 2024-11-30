import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    menu: {
      navigation: {
        game: 'Game',
        about: 'About'
      }
    },
    about: {
      title: 'What is Leela?',
      description: {
        first: `Leela, also known as "Leela Chakra" or "The Game of Self-Knowledge," is an ancient Indian 
      board game based on yogic philosophy. It’s designed to symbolize the journey of life, with 
      the goal of achieving self-realization. Originally created by Hindu saints, Leela represents 
      the different stages of spiritual progression, karmic influences, and life experiences. It 
      combines elements of both Snakes and Ladders and a philosophical guide to self-awareness. 
      The game is intended not only to entertain but also to offer insights into one's spiritual 
      and personal growth.`,
        second: `The aim of Leela is to reach the top square, which represents ultimate self-realization or 
      "Moksha." Players move through different squares representing aspects of life, virtues, 
      vices, chakras, and spiritual experiences. The game teaches about the cycle of rebirth, 
      karmic consequences, and the path toward enlightenment.`
      },
      rules: {
        title: 'The rules of the game',
        description: {
          first: `To begin the cycle of spiritual growth, a player must first feel a true, inner desire to 
          embark on the journey—signifying the readiness of consciousness to experience a new 
          beginning—and then roll a six. When a question is asked with sincere intent, a warm sense of 
          confidence often arises in the heart, signaling a blessing from a higher power. This feeling 
          reassures the player, allowing them to roll for a six with trust. Rolling a 6 represents the 
          "awakening" needed to gather the momentum for the journey. Only with a 6 can a player move 
          from Square 68 to Square 1, where the journey of progression officially begins. This 
          symbolizes the divine timing required to advance spiritually. If a player does not roll a 6, 
          they remain on Square 68, waiting. This waiting period serves as a chance for players to 
          reflect on their intentions for the game and to center their mindset, preparing for the path 
          ahead.`,
          second: `Each square has a unique significance, marked by symbols or descriptions.`
        },
        ladders: {
          title: `Ladders`,
          description: `Some squares act as ladders (positive virtues, states of 
        consciousness, etc.), allowing the player to move up to a higher square immediately.`
        },
        snakes: {
          title: `Snakes`,
          description: `Some squares have snakes (representing vices, negative karma, or 
        challenges), which cause the player to move down to a lower square.`
        },
        objective: {
          title: `The objective`,
          description: `The objective is to progress by understanding the lesson of each square you 
        land on.`
        },
        understandingSquares: {
          title: `Understanding Squares`,
          description: `Each square represents a symbolic aspect of life or spiritual teaching. When a player lands 
        on a square, they should take a moment to read or interpret the significance of that square, 
        reflecting on its meaning. This self-reflection is an essential part of the game, as Leela 
        is intended to be a journey of introspection.`
        },
        chakras: {
          title: `Reaching Higher Chakras`,
          description: `Many Leela boards incorporate the seven chakras, with each chakra associated with particular 
        squares on the board. Players experience different stages of self-awareness, moving from 
        lower chakras (root or basic consciousness) to higher chakras (crown, representing 
        enlightenment). If a player reaches a square associated with a higher chakra, they are 
        encouraged to pause and reflect on the associated spiritual insights.`
        },
        winning: {
          title: `Winning the Game`,
          description: `The player who reaches the final square, representing "Moksha" or liberation, wins the game. 
        Reaching Moksha signifies transcending the cycle of life and death, representing a 
        metaphorical release from earthly desires and ego.`
        },
        karmicLessons: {
          title: `Karmic Lessons`,
          description: `The game encourages players to reflect on their life journey, virtues, and challenges. When 
        landing on certain squares, players may draw cards (if the game includes a deck) or consult 
        the game’s guidebook to understand the karmic or spiritual lesson relevant to that square.`
        }
      }
    },
    gameView: {
      smallScreen: 'Please use a screen with a size of at least 816px to play the game.'
    },
    dice: {
      winMessage: 'Congratulations! You have reached the Cosmic Conscience.',
      playAgain: 'Click here to play again. The history will be cleared.',
      lastGameLine: 'You need to throw ${maxAllowedNumber} or less to continue',
      startWithSix: 'Throw 6 to start the game'
    },
    history: {
      historyTitle: 'Game History'
    },
    cards: {
      1: {
        title: '1. Genesis (Janma)',
        text:
          'Birth is entry into the karmic play. The die is the karmic player, and the individual self a symbol that moves from house to house, wherever the die determines. Before taking birth one is beyond the game. Once birth is taken, one is bound by the law of karma. This world is karmaland.\n' +
          '\n' +
          'Desire leads the player to accept the bondage of karma. If one has no desire to play, one will not be attracted toward the game. But play is in the nature of consciousness. In the beginning there was no play; but the playful nature of consciousness could not remain motionless, without playing. So . . . “Let there be light." Let there be play. The Absolute became many from One, to play the game.\n' +
          '\n' +
          'When the player decides to enter the game he is re-enacting the primordial creation, when the Absolute stirred from inaction and began the macrocosmic play in which we are all but microcosms. Once the decision to play is made, the player must abide by the rules (dharma), the bondage of the karma die.\n' +
          '\n' +
          'It is here that the player first enters into the game after throwing a six. When the five subtle elements (ether, air, fire, water, and earth) and one consciousness unite, these six initiate the movement of the players symbol across the board. Each birth is the opening of a new game, and the object of attainment in each game is the same Cosmic Consciousness. There is no other directive, no other goal, no other purpose in playing the game. The game is just to complete the cycle. Birth is the key. It opens the doors of the game, and the player begins to vibrate as he starts on the eternal voyage, his journey toward completion.\n' +
          '\n' +
          'One is the unity responsible for all manifestation. Like all odd numbers it belongs to the sun family. One especially denotes the sun, which is the unity responsible for the birth of this planet. One represents independent personality, independent decision, independent life, the search for something new, novelty, originality.'
      },
      2: {
        title: '2. Illusion (Maya)',
        text:
          'When one accepts entry into the game as a player, awareness of unity is lost in the obsession (fascination) of play. This taking over of consciousness is the fun of play. The One becomes many, to play a game of cosmic hide-and-seek with itself. To fulfill his ego, the player sets up the game and its rules and commits himself to playing them out to the end.\n' +
          '\n' +
          'The One is reality. Multiplicity is illusion. This illusion of multiplicity is created by the veiling power of the One (the Supreme Consciousness). This veiling power is called Maya Shakti, or maya. This veiling power creates the illusion of me and mine, or thee and thine, which creates ignorance in the individual consciousness. Those who realize this ignorance call it avidya (a = no; vidya = knowledge; thus ignorance, or absence of knowledge). So maya is also called avidya by yogis. This ignorance comes to individual consciousness through the mind; that is why yoga is a practical device to stop the modifications of mind, and yoga’s aim is to arrest mind, to stop the inner dialogue, to go beyond the mind and realize one’s true nature, beyond the illusion of me and mine.\n' +
          '\n' +
          'The world of names and forms is maya. Maya is the stage and setting within which the player enacts his microcosmic tragicomedy. Maya is the play itself, presenting the player with situations and patterns that offer him subtle clues to the understanding of his own true nature.\n' +
          '\n' +
          'This illusion can be seen at every level. The human body itself is not a unit of existence, but is composed of countless numbers of cells and micelles. If each cell starts growing a sense of me and mine, each hu­man body will become a subcontinent. It is the individual ego (ahamkara) that creates separate units of existence — but this in itself is maya (illusion). Ego cannot function without mind, as mind cannot without sensory organs. So it is only after the mind is brought to a suppressed state that the sense of me and mine can be completely annihilated. By yoga alone can this state be achieved and an end brought to this illusory sense of being an independent unit. After realization of truth through a direct experience of reality in samadhi, Maya Shakti can be understood and the human psycho-drama can be observed as divine play, as Leela.\n' +
          '\n' +
          'Maya Shakti is the power that brings forth the evolution of the phenomenal world. It makes this possible by an interplay of the three gunas: sattva, rajas, and tamas.\n' +
          '\n' +
          'Cosmic Consciousness becomes individual consciousness by its own maya. In Hindu literature maya has been described in very many contexts, and yet it is impossible to explain all about it — it is as infinite as Cosmic Consciousness itself.\n' +
          '\n' +
          'The only job confronting the player is the realization that he is a player, that the sense of separation he feels is illusory. All that the player perceives of the phenomenal world exists within himself in the form of sensory input and is illusory. Modern sciences that try to investigate the nature of truth verify this statement. Both modern science and ancient wisdom believe in a single primordial substance to which the various forms of matter can be reduced. All phenomenal existence is but one of the many manifestations of the same underlying unity. The elements are varied forms of this one substance. The variety of our experience is due to the permutation and combination of atoms of the matter into which this primordial energy materializes. This diversity in unity is illusion and is caused by the veiling power of the Supreme Consciousness. All that the player perceives of the phenomenal world exists within himself. One takes birth to play the game, to discern the subtle principles at work within the gross. The game is to reach unity, to end duality.\n' +
          '\n' +
          'The number 2 signifies duality, which is illusion. Two comes into being when 1 repeats itself. Two is maya, because both were present in the One. The two are the internal and the external world; the unmanifested and the manifested, Shiva and Shakti, male and female, sun and moon, gross and subtle, Absolute and maya, noumenon and phenomenon. Two is therefore the number of maya. Two is an even number and, in common with all even numbers, is a member of the moon family; it is especially related to the moon and lunar energy.'
      },
      3: {
        title: '3. Anger (Krodh)',
        text:
          'An understanding of the nature of ego is essential to the comprehension of anger. The ego is that which identifies itself as me and mine. Man is a being who grows through a process of successive identifications. After taking birth, the child first identifies himself as a separate being when he begins to sense separation from his mother. Next comes identification with the other members of his family, adopting their behavior patterns and thought forms as his own. Then the child begins to associate with peers of the same sex. Later in life he seeks his identity in members of the opposite sex.\n' +
          '\n' +
          'The end of his journey comes when his ego makes its final identification with the Absolute and merges into Cosmic Consciousness.\n' +
          '\n' +
          'Ego works with intellect in the identification process. The intellect stores the information received in the identification process, especially the value judgments received from those with whom the being identifies most closely. The real Self within knows that all realities are contained within itself. However, the identifying self excludes these aspects adjudged evil by those with whom it identifies.\n' +
          '\n' +
          'Anger is the emotional/chemical reaction produced when the ego is confronted with an aspect of self that it has rejected and judged as evil. The existence of this negative aspect is experienced as a threat to exis­tence. Indeed, the existence of the current self-identification does face a genuine threat. The ego then projects the rejected aspect of self onto the other through whom it is manifested, and directs its energy toward removing the undesirable aspect. This is the nature of anger.\n' +
          '\n' +
          'Anger is a manifestation of multiplicity, of weakness. It is the tail of the snake of egotism. It is a downward projection of energy, which brings the player to the first chakra. When the ego is hurt one feels anger. Anger is insecurity—the basic first-chakra obsession.\n' +
          '\n' +
          'Anger is a great obstacle in the path of spiritual growth. Ir produces fire and heat, and burns everything. But whenever this anger is produced without any personal feelings, and is impersonal, it purifies. Anger is a quality of Rudra, the lord of destruction. His anger is not based on personal reasons, and so it destroys not him but the evil that causes disharmony and disbalance. Anger aroused by personal reasons cats the gentle qualities of the self, and brings energy down. Anger aroused by impersonal reasons destroys its own cause, which is evil. Anger is the other side of love. We cannot be angry with those with whom we do not identify. Anger excites the nervous system and suspends the rational mind completely for the time it stays with the system. In one way it purifies the body and is very similar to fire-cleaning, but the cost is too high because it brings a person too low, and he has to start once again from the first row of the game.\n' +
          '\n' +
          'Anger can be expressed in two ways: violence or nonviolence. When nonviolence is adopted as a means of expressing anger, it creates great moral strength and becomes satyagrah (satya - truth; agrah - persistence). This is possible only when the player remains calm, even though he really is experiencing anger. This anger is impersonal. It is against evil. It is based on love: love of good, love of truth. This anger helps spiritual growth and is divine.\n' +
          '\n' +
          'Three is the number of creativity, expression, and stability. A member of the family of odd numbers, 3 is dynamic, and positive; it establishes a pattern. It signifies the fire element, which in human beings is manifested as anger. On the positive side, the same element can become zeal. Thus power and determination are characteristics of number 3. Three is the number of the planet Jupiter. Jupiter is a symbol of boldness, courage, power, strength, labor, energy, knowledge, wisdom, and spirituality.'
      },
      4: {
        title: '4. Greed (Lobh)',
        text:
          'The feeling of separateness brought about by taking birth creates a craving for fulfillment. In order to function in the world, the player must first make certain his physical needs are met. In order to join the game the player must eat, have a place to rest, and have clothing to wear. Material survival is the primary concern in the first chakra.\n' +
          '\n' +
          'Greed arises when the player confuses his sense of unfulfillment with the need for material survival. Having attained the basic necessities of life, he still feels empty. All he has learned is how to maintain his physical existence. So he employs these basic survival skills to acquire more and more material belongings in the hope of fulfilling himself.\n' +
          '\n' +
          'The more he acquires, the deeper his compulsion becomes. His sense of emptiness reaches the level of panic as his actions become increasingly desperate. The legend of King Midas and his touch of gold is a classic Western tale of the consequences of greed. This craving for material success is also the root cause of all military conquest.\n' +
          '\n' +
          'Greed comes from insecurity, and insecurity from misidentification of Self. When a player does not believe in God, he does not believe in providence. Greed is the rail-end of the snake of jealousy. Greed makes a player short-sighted. He does not realize that greed is ultimately pointless. In the end, all material possessions are left behind, whether willingly or by the intercession of death. But greed can prove an asset in spiritual growth if one becomes greedy for spiritual experiences, knowledge, and love.\n' +
          '\n' +
          'The player who falls into greed also opens the gates to maya, anger, and all other first-chakra problems.\n' +
          '\n' +
          'Four is symbolized as a square representing the four dimensions, the four directions. It symbolizes the earth element. As a member of the family of even numbers, 4 tends toward completion. The impetus for completion, carried to its extreme on the material plane, becomes greed. In numerology, the number 4 is ruled by mbit, the north node of the moon, also known as the Dragon’s 1 lead. In western numerology, 4 is ruled by Uranus. In occultism, it is always written as 4-1 and as such is considered to be related to the sun as well.'
      },
      5: {
        title: '5. Physical Plane (Bhu-Loka)',
        text:
          'A portion of unmanifested reality transforms itself into the world of names and forms. The world of names and forms exists in seven different lokas, or levels, which exist in an ascending scale.\n' +
          '\n' +
          'These lokas mark the stages of evolution of the consciousness of the individual. As he evolves, so he moves and undergoes modifications in his nature. Through these planes the consciousness is able to realize its true nature.\n' +
          '\n' +
          'Each of these lokas, or planes, is a definite region, marked off by the nature of the matter of which it is composed. (See square 42, plane of balance.)\n' +
          '\n' +
          'These lokas form the spine of the game board. They are all in their definite order in the central row of vertical squares.\n' +
          '\n' +
          'As it is in the macrocosm, so is it in the microcosm. The lokas are located in the human body along the spine, at the chakras, the psychic centers. With the evolution in the psyche from level to level comes evolu­tion in the man himself.\n' +
          '\n' +
          'The physical plane is located at the base of the spine, the site of the first chakra in the human body — and on earth in the phenomenal world. The name bhu-loka in Sanskrit explains it: him means earth and loka means plane. Earth is made of five elements, which exist in solid, liquid, and gaseous forms — as radiant, etheric, and superetheric matter — the various stages of existence of atoms of matter, whether defined as form or undefined. The earth element, under all conditions in all circumstances, is dominant in them, and they materialize as earth slowly and gradually.\n' +
          '\n' +
          'Other planes mentioned in the game board each fall in a certain horizontal row and belong to these seven lokas. The lokas, other than the seven seated in the spine of the game board, are special regions situated within the seven — like cities in provinces, provinces in countries, and countries in continents.\n' +
          '\n' +
          'The physical plane encompasses genesis, maya, anger, greed, delusion, conceit, avarice, and the sensual plane — its right and left sides, its positive and negative aspects.\n' +
          '\n' +
          'When the player moves on to the physical plane he becomes trapped by the lower self. This is just one phase of the game. No one stays in the same place all the time. Each throw of the die is an opening to a new world.\n' +
          '\n' +
          'On the physical plane the player is mostly concerned with material achievements. Money, house, vehicle, food, and physical power arc common themes. His recreation is bodily involvement, sports involving competition and physical contact. His fun can too often include violence. His major achievement is craft.\n' +
          '\n' +
          'The physical plane is related to earth, matter, and mother. It is the storehouse of energy, the dwelling place of kundalini — the psychic energy the yogi seeks to raise up through the seven chakras. Without realization of the physical plane, realization of all other planes is impossible. There are no arrows leading from this plane, this horizontal level. All players must pass through it before reaching the other dimensions. Seven snakes lead here from other planes, demonstrating the primary importance of realizing the nature of the grossest level of manifestation.\n' +
          '\n' +
          'The number of subtle elements is five — ether, air, fire, water, and earth. Five also are the work organs man employs in the creation of karmashands, feet, mouth, genitals, and anus. And there are five sensory organs for five sensations — ears for sound, skin for touch, eyes for sight of form and color, tongue for taste, and nose for smell. Five is the number of balance — 1 with 2 on each side. The ruling planet of number 5 is Mercury. Mercury is gentle, the high thinker, scholar, and lover of entertainment, and also is connected with business and physical comforts.'
      },
      6: {
        title: '6.  Delusion (Moha)',
        text:
          'Moha in Sanskrit means attachment. This attachment is the real cause of bondage, bringing the player time and again to the phenomenal world through a series of births and rebirths. It is said in scriptures that four obsessions lead the individual consciousness into a downward flow of energy; they are obstacles in spiritual growth. These four are called\n' +
          '\n' +
          'Kama: desires, sensuality\n' +
          'Krodh: anger, aggression, violence\n' +
          'Lobh: greed, dissatisfaction\n' +
          'Moha: attachment, delusion\n' +
          'While illusion, maya, is the phenomenal world itself, delusion is attachment to the phenomenal as the only possible manifestation of reality. Delusion beclouds the mind, rendering it unfit to perceive truth. Delusion is the product of irreligiosity —   religion meaning here not a code of conduct and morals (ethics) but a life lived in harmony with the laws of the universe.\n' +
          '\n' +
          '“Whatever should be adopted, that is dharma," advises an old Sanskrit saying. Dharma is the nature, the essence, the truth of phenomenal existence. When a player does not follow the law of his own nature, which is beyond all illusion and delusion, he becomes mired in delusion. One has but to understand that existence is a game. With thisrealization, the delusion of being a self-directed player vanishes. And with the disappearance of the delusion, bad karma too vanishes.\n' +
          '\n' +
          'Delusion is the first square on which the player lands after throwing the six he needs to enter the game. In entering play, the player accepts temporary bondage to the material realm. After the player is born, he is conditioned to accept the particular circumstances of time and place as binding. The reality of the moment is perceived as the reality of all moments. Change is inconceivable. He has fallen into delusion.\n' +
          '\n' +
          'However he gets here, by taking birth or by falling prey to the snake of irreligiosity (the use of bad means, selfish measures), the player inevitably passes through delusion. Once he sees his dharma and recognizes that change is not only possible but necessary, he is ready to move on. But as long as he sees his own way of perceiving the world as closed and complete, he is destined to return here again and again. \n' +
          '\n' +
          'Because of its nature as a combination of two odd numbers and two even numbers (two 3s and three 2s, or five combinations of pairs), 6 is a perfectly balanced number. Related to inventiveness, creativity, and the fine arts, six is a moon-family member and is associated with the planet Venus. Venus is the most shining and brilliant of all the planets and can be seen by the naked eye as the morning star. In Hindu mythology, Venus is the teacher of demons. Those who dwell in delusion love sensual pleasures, spend their energy in the fulfillment of desires, arc victims of anger and greed, act against the law of dharma, and are irreligious and extremely  selfish.'
      },
      7: {
        title: '7. Conceit (Mada)',
        text:
          'Conceit is self-deception, false pride, building castles in the air. The word mada in Sanskrit means self-intoxication. The player is intoxicated by false vanity, pride, power, possessions, accomplishments, or achievements. When he has any kind of delusion about himself, he is taken over by mada.\n' +
          '\n' +
          'After entry into the game the player becomes subject to mada, conceit, false identification of all kinds. Pride and vanity are two great intoxicants — and one drinks them in bad company. Bad company, the outcome of delusion and greed, is the snake that leads the player to conceit. In this space the player is completely trapped by his own game. The bad company he keeps is a manifestation of evil desires.\n' +
          '\n' +
          'Everyone plays his own game and throws his own die. Once the die is cast he has no option. A player with no desires does not seek out company. But since desire is in the nature of the game, the seeking out of company is inevitable at some point in his development. The player needs a group to reinforce new identifications. The danger comes when the player is overwhelmed by his desires. His behavior patterns alter radically. The right no longer seems right, nor the wrong improper. His desire must be sated at any cost, and thus he creates bad karmas and keeps bad company — those who support him in his wrongdoing. As a man is known by the company he keeps, the player can stop generating bad karmas by seeking out good company.\n' +
          '\n' +
          'A sun-family member, 7 is associated with Saturn and the principle of darkness. Seven are the days, the notes of the musical scale, the days of the week, and the chakras. One with two odd numbers (two 3s) on either side, seven is the number of the problems of adjustment. Seven is lonely in nature, and aspires for completion.\n' +
          '\n' +
          'Seven is associated with ketu, the south node of the moon, also known as the dragon’s tail. In modern Indian numerology, the number 7 is ruled by Varuna, the deity presiding over water, which is related to the planet Neptune in Western numerology. Seven is the number of writers and painters, who, when not evolved, live in false pride and are famous for building castles in the air and being always anxious about the future. They dislike following the beaten track and have very peculiar ideas about religion. They create a religion of their own and spend their life in amusement.'
      },
      8: {
        title: '8. Avarice (Matsar)',
        text:
          'Conceit lends the player to feel envious of others. He is so obsessed with the delusion of being a separate reality that no means of fulfilling his desire seems unjustifiable. After all, thinks the conceited player, 1 am so much better than others that 1 deserve what they have. So in this game avarice is linked with the snake of envy—for it is the envy created by conceit that leads to avarice.\n' +
          '\n' +
          'In the state of avarice the player has an active dislike of other players. He is too good for them, and what they have is also too good for them. Therefore, he reasons, what they have should be his. He becomes spiteful and lusts after the material belongings of his fellows. This contrasts with greed, where only the material is seen. Avarice is greed coupled with envy. As he becomes more avaricious his thirst for wealth increases, and all the other first-chakra problems begin to plague him.\n' +
          '\n' +
          'Eight is a number that decreases when multiplied: 8x1 =8; 8x2 = 16=1 + 6 = 7; 8x3 = 24 = 6; 8x4 = 32 = 5; 8x5 = 40 = 4; 8x6 = 48 = 3; 8 x 7 = 56 = 2; 8 x 8 = 64 = 1. When eight realizes 9 — thus 8x9 = 72 — it becomes 9, and on the next cycle it returns to its original state, 8 x 10 = 80 = 8. This phenomenon is synonymous with the cyclical nature of all reality and the process of human existence. The subtle diminishes as the gross increases, until the heart of the gross is penetrated and becomes subtle again. Thus every increase decreases; every decrease increases. Nothing is ever lost. Only the nature of manifestation changes.\n' +
          '\n' +
          'Among the moon-family numbers, 8 represents the octave, the eight dimensions, the eightfold maya (three gunas and the five subtle elements). In numerology, 8 is the moon’s north node, and it is associated with the planet Saturn. This is a complex planet, difficult to understand. It has many ups and downs, and terrible struggles. It is an “airy" planet, associated with darkness, and is symbolized as a silent thinker or a ser­vant, introspective and materialistically minded. People born under the number 8 collect wealth as a hobby and are subject to addiction and vice. But they are wise and experienced and have a special ability to judge people.'
      },
      9: {
        title: '9. Sensual Plane (Kama-Loka)',
        text:
          'This is the ninth square of the first row. Nine is a complete number, an odd number, and marks the completion of the first row. It is a ladder leading to the second level of consciousness, which begins with purification. After taking birth into the game, the player has to pass through the sensual plane before he can enter into the second level.\n' +
          '\n' +
          'Kama in Sanskrit means desire, desire of any kind and every kindfor name, fame, wealth, success, family, position, accomplishment. Any kind of desire, ambition, or noble or nonnoble aim is kama. And kama is the first stage in evolution. If there were no desire there would not be any creation.\n' +
          '\n' +
          'So kama-loka is a plane of desires. But since all desires have their origin in man’s sensual nature, this is known as the sensual plane. It is directly linked with ignorance, the lack of knowledge. One may come here through the mouth of the snake of ignorance or through the gradual exploration of the first chakra. Nine, a member of the family of odd numbers, signifies completion and perfection. It represents force and energy. Multiplied by any other number, it retains its identity and integrity; thus: 9x 1 =9; 9x2 = 18 = 1 + 8 = 9; 9x3 = 27 = 9; 9x4 = 36 = 9; and 9 x 23 = 207 = 9; 9 x 376 = 3,384 = 9; 9 x 280 = 7,380 = 9. There are nine gates of the body through which the vital energy, prana, leaves at the time of death: the mouth, the two nostrils, the two eyes, the two ears, the anus, and the sex organ. During a day of twentyfour hours a man breathes 21,600 times, which reduces to 9. The day contains 1,440 minutes, also reducing to 9. The normal duration of the dominance of one hemisphere or one nostril is about 900 breaths (60 x 15), reducing to 9. There are nine major nerves of the body. Nine goddesses, navdurgas. are worshipped in Hindu religion. There are 72,000 nerves in the body, called nadis. These are carriers of prana, the vital life-force, and their total also reduces to 9. There are nine planets in the solar system influencing life on planet earth, known as Navgrahas. In numerology 9 is the number of Mars, which shines in the sky with a beautiful red glitter.'
      },
      10: {
        title: '10. Purification (Shuddhi)',
        text:
          'For a time, the player feels comfortable on the sensual plane. But soon the downward flow saps his vital energy, leaving behind feelings of emptiness and confusion. At this moment purification draws his attention. Purification is the first arrow of the game and provides the opportunity to transcend all second-chakra problems. If after passing through the first chakra he lands on purification, the player purifies himself of all first- and second-chakra problems and rises immediately to the celestial plane.\n' +
          '\n' +
          'Purification always refers to an increase in the vibrational level of the being, which causes energy to flow in an upward direction. Purification can be achieved through altering the behavior of the sensory organs, the work-organs, and the normal pattern of daily existence. There are five windows in the castle of consciousness. Through these windows, the enemies (impurities) enter into the castle and attempt to destroy the king. By closing these windows, or by maintaining a proper watch, the player can keep the castle pure.\n' +
          '\n' +
          'Purification of the ears is accomplished by withdrawing the power of hearing from the outside and attending to inner sounds. Purification of the eyes comes when they are closed, and all attention is focused on the third eye, at the center of the forehead just above the brow line. Purification of the tongue, the window of taste, can be attained by eliminating sweet and salty tastes from the diet. Purification of smell is done through closing the nostrils and retaining the breath in the lungs for as long as possible (this also helps develop the habit of deep, slow breathing). Rubbing ashes on the skin purifies the sense of touch, making the player immune to sensations from the epidermal nerves.\n' +
          '\n' +
          'Through the process of sleep-fasting—going without sleep day and night for one day or several—the player can purify himself of inertia, dullness, drowsiness, stupidity, and ignorance. By speech-fasting—going without littering a sound for extended periods—the thought process becomes purified. Food-fasting purifies the body chemistry. In addition, going through hardships purifies the player’s personality, listening to scriptures and divinely inspired poetry purifies his inner self, humming purifies his nerves, and concentration and meditation purify both mind and body. Celibacy also is one of the methods of purification, a hard but very effective way of changing the vibrational pattern.\n' +
          '\n' +
          '\n' +
          '\n' +
          "This version of the 'Purification' (Shuddhi) artwork focuses on the metaphor of the mind as a castle with five windows, each symbolizing a different sensory organ. This representation visually conveys the concept of purification and transition to higher consciousness."
      },
      11: {
        title: '11. Entertainment (Gandharvas)',
        text:
          'It is said in scriptures that gandharvas are “God\'s" musical notes. The word gandharvas in English can be translated as celestial musicians. They come under the eight kinds of creation that cannot be perceived by the normal eye; but they have the power to adopt a form at will. They are not composed of gross material particles, for they dwell on the astral plane. Their wives are called apsaras (nymphs), and together in every manner they entertain God and those who have by their evolution reached this plane. They have surrendered themselves for the entertainment of the gods of the celestial plane. As celestial musicians they live in harmony with divine music. In the stories of the Puranas there are numerous references to the acts of gandharvas and apsaras. They are initially free from the cycle of birth and death—but if they do not act in harmony with their state of being, they fall to earth from heaven, and take birth as human beings. But wherever they exist, they provide entertainment.\n' +
          '\n' +
          'The player enters into the state of entertainment after purification. This space is an expression of inward joy, a feeling of rhythm, a sense of harmony. Entertainment makes him light and provides the incentive for recreation and amusement. Entertainment brightens mundane existence and provides new avenues, new vistas, new horizons. All the fine arts are a product of this state, which belongs to the second row of the game and is an attribute of vibration in the second chakra. But entertainment exists at all levels. This game board, Leela or Gyan Chaupad, is an entertainment for the saints.\n' +
          '\n' +
          'Life is based on the principle of entertainment—fun. And life can be perceived as entertainment when the player has transcended the level of the first chakra (security). The essence of spirit is entertainment. The whole of the creation is an entertainment of energy—by Shakti, the mother principle, the Absolute, God ... or whatever the Supreme Player, who playeth not, may be called. If the Divine Play (entertainment) were not itself involved in the game, then the One would not choose to become many. It is in the process of entertainment that the One becomes many. To entertain is to accept. To accept is to surrender. And to surrender is to dissolve and become One.'
      },
      12: {
        title: '12. Envy (Eirsha)',
        text:
          'Envy is the first snake of the game. Its bite brings the player down from the second chakra to avarice and to all else that comes with vibrating in the first chakra. Time and again this little snake catches the player and brings him down. When he lands in envy he feels a lack of confidence in himself and resorts to first-chakra strategies for overpowering his desire. In the process of the game, this serpent helps the player to purify his thought process.\n' +
          '\n' +
          'In the game of life, energy moves from below to above. The player wants to leave the lower planes and reach the summit, forever abandoning the problems he encountered below. But this attitude runs contrary to the very essence of the game. He has to play in all the planes, below and above—wherever his karma die leads him.\n' +
          '\n' +
          'But nobody wants to remain low. When the player does not vibrate correctly the snakes get hold of him. And by his own throw of the die the player comes and goes, up and down. Envy is felt when the energy is down. The player has only by karmic chance reached a higher plane and really does not deserve to stay there. He cannot, in fact, remain there, because negative vibrations are still present in his being. At such times he feels envious of those he sees who are able to remain steadily on the higher planes. This envy is a negative reaction, which draws his energy back down to the first chakra, where he must work out more karmas.\n' +
          '\n' +
          '\n' +
          "The artwork captures the essence of envy in a spiritual context. The snake, symbolizing envy, coils at the base of an ascending spiral, which represents the journey through the chakras. The dark and murky colors at the base illustrate the first chakra, the primal state where envy resides. The serpent's eyes, both captivating and malevolent, emphasize its seductive and destructive nature. As the spiral rises, it transitions into bright, harmonious colors, signifying the higher chakras and an enlightened state. Scattered dice around the spiral symbolize the karmic game of life and the randomness of our spiritual paths. This visual contrast between the darkness of lower vibrations and the lightness of higher spiritual planes expresses the struggle to overcome negative emotions like envy and ascend to a higher state of consciousness."
      },
      13: {
        title: '13. Nullity (Antariksha)',
        text:
          'Antariksha is the space between the physical plane, which is earth, and the celestial plane, swarga, which is heaven, the kingdom of God. This space is neither on earth nor in heaven, it is between the two planes. Neither here nor there, no-where: nullity.\n' +
          '\n' +
          'Nullity is a state directly linked with the unstable negative intellect. When a player lacks awareness of the purpose of his being, feelings of meaninglessness (existential angst) and futility flow through his consciousness. He has no sense of purpose, leading him to seek out the company of his fellows. But the lack of vital energy creates such feelings of futility that he does not stay in any one place, though he dwells continually in negativity.\n' +
          '\n' +
          'Nullity is a manifestation of the second chakra and the cause of inactivity, instability, and restlessness. Everything loses meaning. Nothing excites. The identification of personality is completely lost, resulting in an imbalance of the mental state. All this happens because the player lacks the energy necessary to function in the higher planes. The depletion of energy in the pursuit of sensory objects is the fundamental trap of the second chakra. The player may land in nullity after first hitting entertainment, the sensual plane, conceit, or avarice. If he comes here from the first chakra he has experienced the joys of purification and entertainment but has expended his limited energy too rapidly. Now he is confused. The goals he saw before are still there, but what is the use? What use is anything?\n' +
          '\n' +
          'But nullity is not a permanent state, and soon he begins to regain his energies. He is ready to play again by the time the die comes around.'
      },
      14: {
        title: '14. Astral Plane (Bhuvar-Loka)\n',
        text:
          'Bhuvar-loka, the plane next to the physical plane, is closely related to it but composed of finer matter. We have already explained (in the description of bhu-loka, the fifth square of the first row of the game board) the presence of seven lokas and have explained that each loka is a state of being in the process of inner growth, the grossest being the physical plane (bhu-loka). In bhuvar-loka the water element is predominant, as it is in the second chakra. As the second chakra is situated in the spine adjacent to the first chakra, so is the astral plane directly above the physical plane in the spine of the game board.\n' +
          '\n' +
          'This is the plane of dreams and fantasy, where the human imagination begins to soar. The player who lands here becomes aware of the immense diversity of the phenomenal world. The world literally comes alive with possibilities. There are so many things he can be, so many goals he can pursue. This awareness of possibilities creates excitement, and he begins to take a more active interest in life. He has met his survival needs, and now he sees that there is far more to life than he could ever have imagined while he was still worried about where his next meal would come from.\n' +
          '\n' +
          'Now he is materially secure, and his success is assured. And with this surge of self-reliance his creative imagination takes flight. But fantasies consume more energy than any other human activity. The player diverts his entire energy resources to building castles in the air. He strives to get away from the physical world through the pursuit of enjoyment, pleasure, and identification with others. Enjoyment of the sensory organs is the impelling force of his life so long as he vibrates here. This is the plane of wine, women, and song. Sexuality becomes a primary means of selfexpression — which can be a tremendous drain on the vital energies.\n' +
          '\n' +
          'The player dwells in the worlds of feeling, emotion, idea, and meaning and uses them as the basis of his fantasies. Thus the second chakra is the starring point of all the creative arts. Fantasy is the power behind creativity.\n' +
          '\n' +
          'The astral plane is the dimension of psychic space midway between heaven and earth. The player has dwelt on the lower levels, and his imagination brings the possibility of heaven within reach. The danger is that he may let himself be carried away by his fantasies, which drain his energy and leave him exhausted.\n' +
          '\n'
      },
      15: {
        title: '15. Plane of Fantasy (Naga-Loka)',
        text:
          'Naga-loka was supposed to be the underworld. As there are seven lokas above, so are there seven below. l.okas below are situated under water. The ruler of each underworld is a different kind of being. One of these seven is Patal. The rulers of one region are serpents (nagas). In mythology these nagas are supposed to be semidivine beings with a human face and the tail of a dragon. Nagas also exist as a sect of initiate hermits who are masters of great wisdom: nothing is hidden or could be hidden from them. Thus naga-loka is the plane of fantasy. It is not above the physical plane but below—submerged under water in accordance with the nature of fantasy.\n' +
          '\n' +
          'The player who lands here enters fully into the realm of the fantastic.\n' +
          '\n' +
          'Here his imagination soars wholly beyond the physical plane and into the infinite potentialities of human existence. He sees no limits on his nature. There is nothing he cannot do. He pours his energies into exploring his fantasies; emerging with works of art and new ideas and inventions. He explores the world his senses present to him, seeking ever more stimulation for his imagination. He uses his sensory input to create new combinations never before experienced. Here is the plane of speculation, of “What if?” No restraints are placed on the bounds of the imagination. Nothing is too fantastic or bizarre to be considered.\n' +
          '\n' +
          'In entertainment the player became aware of possibilities. On the plane of fantasy he is immersed in them. Many of the finest works of art have come from this surrender to the unrestrained imagination. But if the imagination is allowed to soar too high and too long, the player loses contact with the reality of his everyday life — and the snake of jealousy lurks just ahead, to catch him if he becomes too caught up in the fantastic to see what lies before him.\n' +
          '\n' +
          'In Sanskrit naga means snake. Thus the plane of fantasy is also the snake plane. The snake is synonymous with energy. The kundalini, which the yogi seeks to raise through his efforts, is often called the serpent power. The devil often appears in the guise of a snake. The snake is the embodiment of movement and the animal that best represents the nature of the player vibrating in the second chakra. It implies flexibility and the protean ability to change form. As the snake seeks shelter in the hollows of the earth, so does the player who lands in the second chakra.'
      },
      16: {
        title: '16. Jealousy (Dwesh)',
        text:
          'When the player allows his fantasies to carry him away, the resulting loss of energy can bring him to the square of jealousy — the basic secondchakra problem. Jealousy is a condition of mental imbalance resulting from suspicion and the fear of rivalry and unfaithfulness. It is a form of insanity, which troubles the mind of the self-intoxicated player. His ability to fantasize allows him to swell his ego out of all proportion. He loses the ability to distinguish between what is possible and what is. His confusion stems from his overindulgence in the fantastic.\n' +
          '\n' +
          'He begins to suspect others when they fail to conform ro his own self-image. In love he is jealous and fearful of rivals. His self-doubts grow, and soon his energy is drawn back to the first chakra, where he becomes caught up in greed. Jealousy nurtured his lack of self-confidence, which bore fruit as insecurity, the basic first-chakra character trait. His lack of self-confidence also leads to self-hatred, which is then projected outward as the hatred of others.\n' +
          '\n' +
          'To regain his sense of self-confidence he must reexperience the first chakra, where he can lose his insecurity and again raise his vibrations.'
      },
      17: {
        title: '17. Mercy (Daya)',
        text:
          'Mercy is a divine attribute present in the player, holding such power that it moves him directly from the second chakra to the eighth, and the Absolute plane. Mercy is a surrender to compassion of such potency that the ego is swept aside in an outrush of feeling so intense that the eyes fill with tears of joy and the heart pulses in exultation and cosmic love. For the moment he is at one with the Divine.\n' +
          '\n' +
          'Mercy is the most positive face of the second-chakra ability to imagine possibilities. The state of mercy is created when compassion is extended to one through whom the player’s self-identification was injured. Instead of striking back, taking an “I for an I,” the player turns the other cheek.\n' +
          '\n' +
          'The ability to imagine gives the player insight into the motivations of others. The player sees that it was he himself who allowed the hurt, that the other was not responsible. He knows that both he and the other are players in a cosmic game far beyond their present level of comprehension. He sees that he too could have caused the injury to another. He recognizes that there are higher levels of vibration, and that only one who attains the insights gained in vibrating on those planes can judge another. He extends this, the essence of compassion, to the other player in the form of forgiveness. This very realization frees his consciousness from self-identification, and he soars up to the Absolute plane.\n' +
          '\n' +
          'In Sanskrit there is a saying: daya (mercy) is the foundation-stone of dharma (righteousness). Without mercy a truly religious nature is not possible. Mercy, kindness, forbearance, temperance — all in time enrich the good in man and help him in the refining of his emotions, the formation of his character, and his ethical development. The barrier of personality is swept away, and his mind becomes a reflection of the Divine. Mercy is a surrender. However, an act of mercy cannot eliminate all past karmas, so the player must roll until the snake of tamoguna bites him. Then he is swallowed and taken back to earth to fulfill his mission.'
      },
      18: {
        title: '18. Plane of Joy (Harsha-Loka)',
        text:
          'Here at the end of the second row, the second plane, the second chakra, comes a feeling of deep satisfaction. The player knows he has moved away from envy, nullity, and jealousy. He is moving away from the realm of fantasy to encounter the real world, the stage of karma yoga. He does not know how soon he will reach his goal. Cosmic Consciousness, but he knows that the levels of being can be transcended, that the energy can be raised. The feeling of anticipation for his encounter with the world quickens him, and he begins to feel deeply on every level of being. There is a challenge ahead of him, but there is also the abiding satisfaction that comes with completion. One phase has ended; another is about to begin. It is at this moment of transcendence that the spirit of joy pervades his being.\n' +
          '\n' +
          'He has passed the first chakra; there is no fear, no insecurity. He has completed the second chakra; he has risen above sensual desires. What lies ahead is the joyous task of karma yoga. He feels on top of himself and the world. He is fired by the spirit of the quest. The sense of time disappears. Joy is always eternal, however brief its duration. The awareness of space passes away. Joy knows no limits. But the joy cannot last forever. Soon the forces of karma begin to work, and the task of moving through the third level begins.'
      },
      19: {
        title: '19. Plane of Action (Karma-Loka)',
        text:
          'This, the plane of action, begins the third row of the game and the exploration of the third chakra. The only desire that remains true for all times and places is the desire for fulfillment. All other desires are manifestations of that one desire: the desire for completion, for self-realization. So on whatever level the player vibrates, on that level does he seek fulfillment.\n' +
          '\n' +
          'In the first and second chakras the desire was manifested as the pursuit of money and sex. In the third chakra the dominant concern becomes identification of the ego and achievement of power. First-chakra people work neither for themselves nor on themselves. They are usually employed in aiding the fulfillment of some third-chakra person. In the second chakra, desire flows in the direction of the senses, and the exploration of the sensual realm consumes the energy. It is in the third chakra that the player becomes conscious of the social and political influences on the development of his personality. Thus the player becomes self-conscious. Egotism becomes the impetus of action, as the ego seeks to extend its influence in ever-broadening circles. In this fashion karma-loka makes one face reality from a more realistic perspective. Second-chakra fantasies fall before the practicalities of the world. It is a moment of sobriety. At this point one becomes aware of the law of karma.\n' +
          '\n' +
          'Each thing is in a constant state of interaction with all other things. On the level of energy, karma determines the frequency of vibration, which on the gross level is manifested as the player’s behavior patterns. Karma is the cause of the cycle of birth and rebirth. And karma alone can win for the player liberation from the cycle, creating both bondage and liberation.\n' +
          '\n' +
          'Basically, the player has karmic responsibility for his self. This self can be divided into manifested and unmanifested, body and being. So there are karmas toward the body and karmas toward consciousness. Body is world: body contains all the elements of gross manifestation. So karmas toward the body are karmas toward the whole world. Consciousness is the essence of the world; so karmas toward consciousness also cover the whole world.'
      },
      20: {
        title: '20. Charity (Daan)',
        text:
          'Those karmas that raise the vibrational level are known as virtues; those that lower it are vices. Charity is a human virtue that exists on the third-chakra level. It lifts the player above the problems of the third chakra and transports him to the fourth level of the game, the plane of balance.\n' +
          '\n' +
          'As a virtue, charity is a manifestation of the Divinity, which is the essence of consciousness. When the player lands on this square, he identifies with the Divinity — present in all — and performs acts of charity without desiring any personal benefit from his karma.\n' +
          '\n' +
          'A feeling of elation is experienced during the performance of the act of charity. This is the raising of energy from a lower level to a higher one. That is why all human religions have stressed the significance of charity and included charitable acts in their rituals. The reality of need and the desire to share are the two factors at work at the base of the game. Charity satisfies the developing ego and breaks the bondage of third chakra.\n' +
          '\n' +
          'Charity is one of the most important pillars of the plane of karma. It is the motivating force behind man’s highest institutionalized activities — the mergence of compassion with the third-chakra penchant for organization.'
      },
      21: {
        title: '21. Atonement (Saman Paap)',
        text:
          'When the player has risen above the press of material and sensual desires, he gains the awareness that in the course of gratifying his lower needs he has caused harm to others. He has acted blindly in his search for fulfillment, without awareness of the consequences of his actions. When he lands on the plane of atonement he sees that by the use of wrong actions and wrong means he has created wrong vibrations within himself, which prevent the attainment of inner peace.\n' +
          '\n' +
          'In search of that inner peace he lands in atonement to make up for the wrongs he has done, to make up for errors in conduct, to atone for his follies. It is a time of great emotional turmoil. There is a keen and pressing desire to rectify the negative karmas, the vices he has entertained.\n' +
          '\n' +
          'Atonement is also the square for second-chakra personalities who have landed in the third chakra and feel guilty for their inability to adjust to vibrating at a higher level. In both cases, atonement produces positive results and helps in the upward flow of energy. The player atones by following the law of dharma, which is the true nature of everything. Atonement puts one in tune with dharma—which is the next square of the game.'
      },
      22: {
        title: '22. Plane of Dharma (Dharma-Loka)',
        text:
          'Dharma is whatever is right. Dharma is an ever-evolving, ever-flowing principle. Dharma is an atemporal, aspatial force working in human existence. Dharma is constant, but its form varies from situation to situation. It lives in the depths of reality. The player who finds the stream of dharma dwells in reality and becomes at one with it (at-one-ment follows atonement).\n' +
          '\n' +
          'Conscious action is dharma — conscious action in accord with the reality of the moment. Learning to act consciously is learning to act in accord with the principles of the cosmos. So dharma is that action which accords with cosmic knowledge.\n' +
          '\n' +
          'There are ten signposts of dharma, all of which must be present if the action is to accord with the law of dharma: firmness, forgiveness, self-command, restraint (nonstealing), cleanliness (purity), control of the sensory and work organs, intellect, right knowledge, truth, and absence of anger.\n' +
          '\n' +
          'Whatever you feel is genuinely good for yourself is good for others. There is no dharma like doing good for others. There is no adharma, vice, worse than causing harm to another. Dharma can best be understood when related to conduct. Yet it is far more than a code of conduct, of morality and ethics. These are attributes of dharma but not all of dharma. Ethics is a reflection of dharma, not dharma itself.\n' +
          '\n' +
          'The dharma of fire is to burn. The dharma of water is to quench. It is the dharma of water to create taste, as it is the dharma of fire to create color and form. The innate, essential nature of a thing is its dharma. And there is no escape from dharma. The moment there is a deviation the energy flows downward, drawing the player down with it. The arrows on this board are dharmas, virtues; the snakes adharmas, vices.\n' +
          '\n' +
          'Though dharma exists always, beyond form, it assumes a special form for each player. It is the dharma of the player who lives in a cold climate to wear warm clothing. It is the dharma of the hungry man to take nourishment. It is the dharma of the student to meditate and partake of sadhana, spiritual discipline. It is the dharma of the child to play freely, without care for the world of the spirit. It is the dharma of the elderly to dwell in the realm of spirit. Dharma is the truth that holds all existence in proper relationship.\n' +
          '\n' +
          'Dharma is the scaffolding on which is constructed the edifice of the self. As long as the building is not complete, the scaffolding holds the structure erect. The minute the building becomes self-supporting the scaffolding is removed and used for other unstable, evolving new buildings.'
      },
      23: {
        title: '23. Celestial Plane (Swarga-Loka)',
        text:
          'Swarga-loka, the heaven world, is the third loka of the seven planes of existence. These three—bhu-loka, bhuvar-loka, and swarga-loka belong to a category of planes that perish at the end of a day of creationa day of the Creator, Brahma—and are reborn with the dawn of the succeeding day. On bhu-loka, the physical plane, all exists on a physical level; on bhuvar-loka, the astral plane, the desires are at work; and on swarga-loka, the celestial plane, work is carried out at the level of thoughts. On this plane the fire element is the ruling power, and all that exists on this level of existence is made up of particles of fire — luminous, lustrous particles of light — and that is why the beings in swarga-loka are self luminous. Shining angels and gods are mentioned everywhere in all mythologies.\n' +
          '\n' +
          'In the first chakra the player longed for security and sought possessions that would protect and nurture him. In the second chakra he explored the world of the senses and strove for sensual gratification. On reaching the level of the third chakra he begins to see beyond the material and sensual realms and to fathom the nature of his ego, his personal identity. So here the concern is that of providing immortality for his identity-construct.\n' +
          '\n' +
          'Once this desire for ego-immortality springs into his heart, the celestial laws attract his attention as he tries to fashion for himself a heaven from his own desires. The heaven he conceives is a plane full of all that his self requires for pleasure, joy, and happiness. He realistically sees the world as full of pain and suffering, rises and falls. He craves a pleasure that is infinite, without cessation or variation. This is the space known as heaven, nurtured by the religions of all peoples. Even Marx, that atheistic third-chakra philosopher, could not do without a heaven. He called his ultimate goal the classless society.\n' +
          '\n' +
          'Heaven is a manifestation of third-chakra desire. If we detach ourselves from value judgments we can see it as a genuinely higher plane, one attained from the second chakra by purification. Heaven is the lure used to sway errant first- and second-chakra sheep back into the spiritual fold, and it has been used by saints and prophets of all religions to raise the spiritual level of the masses.\n' +
          '\n' +
          'In the Hindu tradition heaven is the domain of Indra. He is the one who has mastered his indryas. the five organs of perception and the five organs of action. One who masters these organs becomes lord of Heaven and dwells in this space. Heaven is the dwelling place of saints, bhaktas (spiritual devotees), high karma-yogis, and the celestial dancers and musicians (see square 11).\n' +
          '\n' +
          'To one who has mastered his organs of perception and action, everything exists as it does on the physical plane but in harmonious and divine form. There are no lower desires, no violence, no attachment, no greed, no jealousy, no avarice, no anger, no sensuality, no nullity. There exist instead purification, recreation, mercy, joy, and an infinite life to enjoy. Heaven is the edifice constructed with the scaffolding of dharma.'
      },
      24: {
        title: '24. Bad Company (Ku-Sang-Loka)',
        text:
          'In the search for ego identification that characterizes third-chakra activities, the player seeks out groups to support him in his quest. He is aware that alone he lacks the strength to fulfill his desire, and he seeks others on a similar path to form a mutually supporting group.\n' +
          '\n' +
          'If he is vibrating wrongly, he may find himself in a group that does not act in accord with dharma. Then he finds himself in bad company, a snake that bites him and takes him down to the first chakra and conceit.\n' +
          '\n' +
          'In bad company his wrong character traits are either ignored or extolled. The power generated by group activities may cause his ego to swell and his selfishness to grow. He deceives himself into thinking his actions are in accord with dharma. The further he deviates from the path, the greater his conceit grows. He soon finds himself back in the first chakra and must seek purification or entertainment.\n' +
          '\n' +
          'In bad company, personal problems are seen as caused by others. The terrorist, the political conspirator who resorts to any means to attain his aim, is the extreme example. He is deluded by those in his circle into thinking that assassination is correct, he feels that by killing another he can fulfill the desire within himself. He sees his own aims as the right aims for everyone. This deviation from dharma, this gross abuse of personal power, is a characteristic third-chakra problem. This abuse draws his energy down.\n' +
          '\n' +
          'Bad company is adharma. Only by acting in accord with dharma can the player extricate himself from this trap.'
      },
      25: {
        title: '25. Good Company (Su-Sang-Loka)',
        text:
          'The player who begins to follow the path of dharma in the third chakra soon begins to find himself in the company of others who are seeking to realize that which is best in themselves. Within this group, the player finds his energies raised by the affirmation that comes from knowing others are seeking the same goal. His third-chakra quest, extending his ego, takes a new turn. This positive association, this good company, is su-scmi>.\n' +
          '\n' +
          'For the one who seeks to realize spiritual values within himself, su-sang usually rakes the form of an organic fellowship formed around the person and teachings of a fourth- or fifth-chakra person. Bad company usually revolves around a charismatic third-chakra leader. The player and those in his group cooperate to emulate their teacher, to incorporate what the teacher gives into their own identities.\n' +
          '\n' +
          'In good company vices are not extolled. The players, with the aid of the master, serve as mirrors for each other so that both good and bad tendencies can be observed and acted upon. While conceit is the outcome of bad company, compassion develops from good company.\n' +
          '\n' +
          'Good company is essential for the player. It provides him with the opportunity to grow away from old identifications in an atmosphere of trust and compassion. Vestiges of first- and second-chakra problems gradually disappear as he learns to confront and work with all aspects of his self.\n' +
          '\n' +
          'Good company is the positive side of the third-chakra drive for affiliation and identification. There are no more traps to bar his way to the fourth level of the game, the plane of cosmic mind and balance.'
      },
      26: {
        title: '26. Sorrow (Dukh)',
        text:
          'Sorrow is the term used to describe the alteration in body chemistry created by a loss. This loss of energy (or pressure) creates a state of depression in the organism. Sorrow and joy represent two ends of the emotional continuum. Joy is a state of expansion, extroversion, and elevated vibrations; sorrow is a state of contraction, introversion, and depressed vibrations. In both, the sense of time vanishes, and the moment seems eternal.\n' +
          '\n' +
          'In sorrow the breathing is constricted and repressed. The blood is drawn inward to the vital organs. The complexion is one of pallor. In joy the breathing is unrestrained and fluid. The heart opens and blood courses throughout the body. The complexion is glowing, vibrant, vital.\n' +
          '\n' +
          'Sorrow is a blanket, which wraps the player in its folds and blinds his vision. He cannot see anything outside the blanket. No ray of hope and no light can penetrate. The more the player fights to extricate himself, the deeper he finds himself entangled. He feels himself weak, helpless. He is torn between his intellect, which tells him there is a way out, and his feelings, which proclaim the state eternal.\n' +
          '\n' +
          'All that is required of him is to stand up and throw off the blanket once and for all. There is clear sky outside; but within the heavy woolly karmic blanket there exists only confusion and the complexes created by fantasy. Like a child afraid of the dark, cowering under his blanket, he imagines dark terrors lurking just outside, ready to consume him if he but shows himself.\n' +
          '\n' +
          'Sorrow can be a temporary state, as in the sorrow created by the seemingly senseless murder of a child, the innocents slaughtered in war. Or it can become the way of being, a permanent imbalance in body chemistry created through the mechanism of suppression.\n' +
          '\n' +
          'When suppression is at work, the player knows there is an aspect of himself he does not choose to confront. Confronting it means loss of identity, acceptance of the unacceptable. Yet suppression creates pain. The blocked energy must express itself, and pain becomes the medium. Here sorrow is the dragon that swallows its own tail. Expression of the inexpressible would create pain and loss of identity. Nonexpression also brings pain, confusion, and the loss of identity.\n' +
          '\n' +
          'In sadhana, following a spiritual discipline, sorrow can be a manifestation of the awareness of separation between devotee and deity. The third chakra is the plane of identification. The aspirant seeks to identify with his deity. Repeated failure brings him to sorrow. The player feels an awareness of the Divine, and craves nothing more than the realization of that Divinity within himself. Yet the separation seems an impassable chasm. He sees the first -  and second - chakra problems that repeatedly trap his energy. He senses the Divine yet feels himself unworthy, unable to know it.\n' +
          '\n' +
          'There is a way out, and selfless service, the next square, offers hope.'
      },
      27: {
        title: '27. Selfless Service (Parmarth)',
        text:
          'Charity is an action, performed frequently or infrequently. Selfless service is an attitude, a mode of being. Parmarth is living without the self yet harmoniously with the world, while doing a right job and retaining consciousness of the moment.\n' +
          '\n' +
          'Parm means supreme. Arth is meaning, the purpose for which an action is performed. That which is done for the supreme is parmarth. Supreme may mean God, or it may mean a cause for which the player chooses to dedicate his existence. It is a giving up of self for a higher cause.\n' +
          '\n' +
          'When a player understands his role in the drama and knows that the individual self is but a vehicle for realization of the Supreme, all that he does ceases to concern him. He only does his duty and acts out his role in the play. He does not know what the final outcome of his actions will he. When he does his duty without thought of right or reward he becomes selfless. And then all his acts are parmarth.\n' +
          '\n' +
          'Living in parmarth is possible only when the player realizes that rights follow duty and that rewards are the fruits of action. Duty and honor (rewards) are byproducts of the game, not the final goal. As long as the player exists within a body with five organs of action, karmas are inevitable. The player’s choice is whether to become concerned about rewards and punishment, honor and humiliation, or to devote his life to understanding the nature of the game and living unconcerned with whatever happens, continuing to perform his duty.\n' +
          '\n' +
          'A reward is in nobody’s hand. Countless factors affect the outcome of every momentary situation. Whatever happens is whatever was possible at that time. If the player has no hopes and desires, every moment becomes an achievement. When he gets away from the false concepts of profit and loss, he enters on to the plane of selfless service.'
      },
      28: {
        title: '28. Apt Region (Sudharma)',
        text:
          'Sudharma, apt religion, means adoption of the course of action best suited to the player’s own self. Sudharma is living in harmony with the laws of the game. It is the course of action that allows the player to throw his die without care of where he lands.\n' +
          '\n' +
          'Sudharma literally means one’s own dharma. What is one’s dharma? What is one supposed to do? If dharma is a code of conduct, then it should be common to everyone. Then nobody would have to do any thinking. Everyone would adopt the same mode of living. But people are people, not machines. They have individual differences, and those differences are the products of numerous factors. Not everyone is born at the same time or of the same parents. Parentage, environment, atmosphere, latitude and longitude, and geographical, anthropological and sociological conditions differ from individual to individual. Everyone is born with a set of qualifications and disqualifications.\n' +
          '\n' +
          'Ideal is not real. No one can completely submerge himself in the law of dharma prescribed by a particular religion or individual. Everybody has to understand his role in the game. He has to follow his own path to liberation. The rise and fall in each individual life determines the course of play.\n' +
          '\n' +
          'Sudharma means to keep up the spirit that one is ever evolving while never adopting unfair means in the course of action. Sudharma is to believe in liberation, in merging with Cosmic Consciousness. Sudharma is nonattachment to the rise and fall of maya.\n' +
          '\n' +
          'If the player is a musician he will find his sudharma in music. A painter will find his through his own art. There are seven psychic centers in which the player vibrates. Wherever he feels comfortable, there he should try to evolve his energies into new patterns. This is the only sudharma. All religious codes of conduct are but external aids in the task of understanding ones true nature, one’s sudharma. Once the player begins to understand his sudharma, religion becomes internal, a way of life. Rituals lose their import. Life itself becomes an act of worship. The player is ready to move on to the plane of austerity.\n' +
          '\n' +
          'Until the player lands in the fourth chakra, dharma is a meaningless term. He has to identify with a group or ideology in the third chakra. In the second he identifies with his senses; in the first with his ability to ensure bodily survival.\n' +
          '\n' +
          'In the third chakra he understands karma, charity, the dharma aspect called ethics, good and bad company, atonement, the sorrows of life, and selfless service. But an understanding of his own role in the game starts only when he lands in the fourth chakra, in sudharma. Sudharma leads him to the plane of austerity and to hard penance and work on himself. Following the path of sudharma leads him directly to the sixth row of the game, the sixth chakra.'
      },
      29: {
        title: '29. Irreligiosity (Adharma)',
        text:
          'The player who lands in sudharma discovers his true role in the game and acts out his part without regard to the outcome of his actions. He knows that as long as he listens to the voice of his own inner nature he need fear nothing.\n' +
          '\n' +
          'Faith in accordance with the laws of nature is sudharma. Blind faith, which disregards the cosmic principles, leads to adharma. Adharmas are those actions which are contrary to the individual’s dharma. Adharmas lead him away from his true course and back into first chakra delusion, which is the essence of blind faith.\n' +
          '\n' +
          'Adharma is working contrary to the laws of existence. At sunrise everything on the planet changes. Winds, atmospheric pressures, and temperatures change. The tempo of life increases. Sleeping at this time is acting contrary to the laws of the planet. Thus it is adharma. Looting the earth for natural resources, which are then employed without concern for their negative effects on the environment and the future needs of the planet, is adharma against the earth. Similarly, there are adharmas related to one’s own physiology. To hold tension and not release it is adharma. But to release it by adopting unfair means is greater adharma.\n' +
          '\n' +
          'Adharma does not exist by itself. It is a negation of the law of dharma, an action contrary to the true inner nature. Denying one’s own self is adharma. Self-rejection and self-praise are both adharmas. To understand one’s position in the game is sndharma. All else is adharma.\n' +
          '\n' +
          'Adharma is best understood as an imbalance in the gunas, the three primary cosmic forces responsible for all manifestation. When either sattva (conscious energy), tamas (inertia), or rajas (motion) predominates, adharma takes birth. Self-destruction is the greatest adharma. It is a snake that takes one back to delusion, back to the start of the game.\n' +
          '\n' +
          'The danger of getting caught by adharma is greatest in the fourth chakra, the fourth row of the game. In the first three chakras energy was devoted to the physical, celestial, and astral planes. Now, in the fourth chakra, the player attains a degree of balance and begins to understand the importance of apt religion. While he seeks his own role in the game it is possible that he might ignore the existing dharmas and attempt to start his own way, ignoring planetary laws and the laws of existence. Here faith is the key.\n' +
          '\n' +
          'Faith is the essence of fourth chakra: faith, devotion, bhakti. This faith can lead the player—if he acts in harmony with his true nature, sudharma—to the plane of austerity. But if it is not in tune with his innermost vibrations, it can draw him back to delusion. This is adharma. Acting on faith alone is liable to create irrcligiosity. Faith alone, without a grounding in the laws of existence, is blind faith. And blind faith is the most frequent cause of energy loss in this plane. Faith in accordance with the laws of existence is sudharma, but faith alone is adharma.'
      },
      30: {
        title: '30. Good Tendencies (Uttam Gati)',
        text:
          'Uttam is good; gati is movement. Good tendencies flow spontaneously when the player moves in harmony with the laws of the macrocosm. When the player vibrates in the lower chakras, good tendencies do not develop. They are found here in the heart chakra, the fourth row of the game. Only when the player reaches a degree of balance within himself can good tendencies arise spontaneously. This balance enables the player to tune his own vibratory rate with that of the cosmos. Good tendencies are movements in the direction of increasingly finer tuning.\n' +
          '\n' +
          'In the fourth chakra, heart and breath play a significant role. By landing in good tendencies the player attains control over his own breath pattern and simultaneously his heart rate. Good tendencies therefore help in stabilizing the development of the fourth chakra, and breath is directly related to good tendencies.\n' +
          '\n' +
          'Any change in direction (or tendency) is registered by the prana, the life-force, psychic energy, or élan vital. On a gross level this change is experienced as a change in respiration. Each wrong breath pattern is an injury to the organism. Thus, when the player spoils his breathing cycle he simultaneously creates bad vibratory frequencies within himself. Good tendencies are a device to help the player keep vibrating correctly. They can be identified by observing one’s own breath pattern.\n' +
          '\n' +
          'The best tendencies are those that link the player ever more closely to the rhythm cycles of the planet and the cosmos. Begin by observing changes in the self at sunrise and sunset. Arise before dawn, in time to shower and change into clean clothes for sunrise meditation. Other good tendencies include the elimination of meat and eggs from the diet, the practice of hatha yoga asanas (postures and exercises), the regulation of breathing (see the lokas of prana, apana, and uyana), fasting, conscientious study of spiritual writings, and all the virtues contained in the game of Leela, the yoga of snakes and arrows.\n' +
          '\n' +
          'The practice of good tendencies helps the player stabilize his existence so that it flows rhythmically in positive directions and away from the energy-depleting distractions of the lower chakras.'
      },
      31: {
        title: '31. Plane of Sanctity (Yaksha-Loka)',
        text:
          'The player who lands on the plane of sanctity experiences divine grace through the understanding and knowledge of cosmic principles. Sanctity is a direct result of good tendencies. It is the fourth-chakra feeling of oneness with the presence of Divinity, and the ability to perceive the divine grace in all existence. This oneness passes beyond mere intellectual understanding and becomes an actual part of daily life.\n' +
          '\n' +
          'Yakshas were celestial beings who dwelt in heaven. According to Hindu cosmology, creation is divided into seven classes of being: devas, yakshas (or kinnaras), gandharvas, manushyas, asuras (or rakshas), bhootas, and pishachas. Pishachas represent the lowest type of consciousness, the essence of which is meanness and violence. Next are the bhootas, or ghosts. These are disincarnate beings unable to detach from the plane of earthly existence, living in the past. Then come the asuras, beings who do not believe in a code of ethical conduct and who live in search of sensual gratification — wine, women, and song. Then come the manushyas, who believe in the law of karma and responsibility for the consequences of their actions. Manushyas are aware of the future and of the nature of liberation. This is the plane of human existence. Then come the gandharvas, who are consciousness devoted to the service of the gods and living in harmony with the divine music. Gandharvas dedicate their existence to elevating people through sound and music. Then comes the class of yakshas, a kind of consciousness grounded in the knowledge and understanding of cosmic principles and direct experience of the divine grace. Lastly are the devas, the pure energy forms of the gods themselves.\n' +
          '\n' +
          'When the player lands in yaksha-loka, questions about the nature of divine existence draw his attention. He seeks to find the links between the divine and his daily life. Only on reaching the fourth chakra is the Divinity reached on an experiential level. Before then, it has been but an abstract concept. This curiosity about the Divine and its presence in all existence, this desire to confront reality, becomes the essence of the player.'
      },
      32: {
        title: '32. Plane of Balance (Maha-Loka)',
        text:
          'Mahar-loka is the fourth loka of the seven levels of existence. This loka is regarded as perishing at the Night of Brahma, the Creator. The first three lokas are those in which the jiva (individual consciousness) lives during the course of its evolution and is subject to the wheel of births and deaths. In this fourth loka the fire element is again predominant, but now it is not as elegant as in swarga-loka, where the bodies of its dwellers are luminous and flashing. Here the player is above the physical, desire, and thought levels. Individual consciousness is colored by desires (kama) and thoughts, but now that the player has reached the state of being desireless and thoughtless, he has transcended the third level and reached the fourth, the permanent invisible world. Those who dwell here are not absolutely free from transmigration, but they will not be reborn in this cycle of creation because they exist in balance.\n' +
          '\n' +
          'Three centers above and three below make this, the plane of the heart chakra, the balancing point of the spine of the game. From here, energy flows downward to the first three centers and upward to the higher three planes of being. Here is the center where the male and female energies are balanced. The player who vibrates in the fourth chakra speaks from the heart.\n' +
          '\n' +
          'He reaches maha-loka through the arrow of charity, or by passing through good tendencies and the plane of sanctity. Here the desires of the lower chakras are stilled, and energy is no longer exhausted in the pursuit of lower aims. From the heart begins the upward flow of energy.\n' +
          '\n' +
          'Here also the player transcends the intellectual understanding of Divinity that characterizes the third chakra and moves into a direct experience of the Divine within himself. Because of this sense of unity with the Absolute, it has also been called the plane of Cosmic Mind.\n' +
          '\n' +
          'The heart center has long been recognized as the most important seat of feeling in the body. The heart is the dwelling-place of the emotional self. Yoga physiology attributes this fact to the location of the ductless thymus gland in the heart region. This gland is responsible for the flow of electrical energy in the body — and the nature of sense perception is fundamentally electrical. Each change in emotional tone is registered by the heart, and the pattern in which the heart beats determines body chemistry. Each change in body chemistry is understood by the mind as a certain type of feeling or emotion.\n' +
          '\n' +
          'Thus the heart is more than a machine to pump pure blood into the body and convey waste-charged blood back to the lungs. It is also a center of feeling, a psychic center. The Sufi tradition also stresses the importance of opening the heart chakra through love, or mohabbat. From here poetry begins, the transformation of the personal into the impersonal. Poetry is full of heart — its vibrations, its different feelings. This center is also the source of all transpersonal psychic phenomena.\n' +
          '\n' +
          "By whatever path he lands here, the player now feels relaxed. His hands automatically start making the gestures (mudras) that help balance the flow of energy through his organism. His heart becomes filled with the devotional spirit, bhakti. He is able to begin to identify himself with the rest of creation, bringing on a sense of cosmic unity. Tender feelings and a sense of aesthetics become manifested in his behavior. The player's voice becomes softer and gentler as he starts to speak from the heart. His voice penetrates the hearts of others, and thus without any exertion of power he attracts to himself a group of admirers striving to reach the same vibrational patterns.\n" +
          '\n' +
          'The symbol of the plane of balance is a six-pointed star composed of two equilateral triangles, one pointing upward and the other pointing down. The upward-pointing triangle of this Star of David (as it has become known in the West) signifies male energy; the downward, female. This implies the balance between the two energies attained by the player who vibrates here.\n' +
          '\n' +
          "Hindu cosmology enumerates fourteen major planes, lokas, seven of which are regions rising above the earth. They are the planes of the seven chakras that constitute the spine of this game — as well as the player's own physical spine, first is bhu-loka, the physical plane. Second is bhuvar-loka, the astral plane. Third is swarga-loka, the celestial plane. Fourth is maha-loka, the plane of balance. Jana-loka, the human plane, is fifth, followed by tapa-loka, the plane of austerity, and satya-loka, the plane of reality. The lower regions descending from the earth are atal-loka, vital-loka, sutal-loka, rasatal-loka, talatal-loka, mahatal-loka, and patal-loka.\n" +
          '\n' +
          'In everyday Hindu worship (sandhya) the supplicant recites a mantra (chant), which enumerates each of the seven major lokas. As he voices the name of each plane he touches the part of the body with which it is associated. He chants Om bhu as with the moistened tip of the right ring-finger he touches the midpoint between anus and genitals, the seat of the kundalini. Then he chants Om bhuvah as he touches the root of the genitals, the seat of the second psychic center. The chant Om swah accompanies the touching of the navel. He intones Om maha as he touches his heart, Om janah for the base of the throat, and Om tapah for the third eye, the midpoint between the eyes and slightly above the eyebrows. Last is Om satyam. the top of the head.'
      },
      33: {
        title: '33. Plane of Fragrance (Gandha-Loka)',
        text:
          'Gandha means smell, and the sense of smell is linked with the earth and the physical plane. Once the player reaches the fourth level, however, the nature of the sense is transmuted and becomes the symbol of the Divine, carrying a strong emotional impact. In the course of sudharma the devotee offers scents to the deity, in the form of either flowers or incense. Thus the fourth chakra contains the plane of fragrance, gandha-loka.\n' +
          '\n' +
          'In the first chakra, odors like petroleum, paraffin, and alcohol attract the player. In the second chakra he is stimulated by strong-smelling synthetic preparations. In the third chakra these same artificial scents predominate, but they are now far more costly. When he reaches the plane of balance he realizes the futility of the inorganic, and avoids pungent, artificial odors.\n' +
          '\n' +
          'Here in gandha-loka he experiences divine fragrances in his meditation. The evolution of energy effects a change in body chemistry, and his organism ceases to produce bad odors, exuding instead a fragrance not unlike that of lotus flowers or sandalwood.\n' +
          '\n' +
          'As a measure of understanding, the sadhak (devotee) is asked to stop the use of artificial scents on his body so that he comes to know his own odors. When his body stops smelling bad, and when his stool, sweat, and breath produce no bad odors, he knows his energy has transcended the third chakra and entered into the plane of fragrance.\n' +
          '\n' +
          'Now there are only divine odors. Once and for all. the player has eliminated bad odors from his system.'
      },
      34: {
        title: '34. Plane of Taste (Rasa-Loka)',
        text:
          'While in the lower chakras the sense of taste was predominantly a mode of sensory perception, in the fourth chakra it becomes purified — taste in the aesthetic sense. One who lands in this plane is able to penetrate into the world of ideas and meanings. This penetration gives the player direct experiential knowledge of the essence of emotions and sentiments.\n' +
          '\n' +
          'Rasa is love, pleasure, grace, enjoyment, sentiment, taste, emotions, beauty, passion, spirit. It is the poetic sentiment, the essence ot poetry. Rasa is water in its purest form, the force that binds all creation together.\n' +
          '\n' +
          'Up to the third chakra, taste — in all its shades of meaning — is devoted to lower-level activities. In the first chakra the sense of taste is totally dominated by the desire to make money. Power foods (meat especially) and prepared foods (convenience products) are the basis of the player’s diet. He uses a great deal of salt and spice. By the second chakra the energies are diverted toward sensuality, especially sex. Here foods that increase sexual stamina, such as eggs, ginseng, and fish, are his concern. In the third chakra he indulges taste for its own sake, consuming foods for different flavors and textures. But in the fourth chakra, the heart plane, the sense of taste becomes purified. He leaves salt and sweet tastes to understand the real essence of the food he consumes.\n' +
          '\n' +
          'Once the player lands on the plane of taste, his taste improves in all dimensions. His tastes in food, music, and conversation are pleasing to all, regardless of their vibrational level. He becomes a master of good taste, appreciated by all. Thus he draws to himself a group of admirers who seek to vibrate in the same frequencies.'
      },
      35: {
        title: '35. Purgatory (Narka-Loka)',
        text:
          'Until the player reaches the level of the heart chakra he lacks understanding of sudharma, apt religion. Without sudharma, freedom of action is impossible. As the player attains freedom of action he becomes responsible for the fruits of his actions. Narka-loka is the place where he bears those consequences.\n' +
          '\n' +
          'In Hindu cosmology narka is a plane situated midway between earth and heaven. There are seven layers of narka-loka that the player must pass through before attaining heaven. His karmas are the vehicle, leading him up to the level where they vibrate. After passing through these narkas, if the player has performed good karmas he is ready to pass into heaven.\n' +
          '\n' +
          'The lord of narka is Yama, known as Dharmaraj — the lord of death. Violence leads the player to purgatory and to the most painful vibrational levels. Each action bears fruit. This is the law of karma, and it cannot be avoided as long as the player maintains a physical existence. When the player lands in narka-loka through bad karmas he is bound to this plane by karmic ties. This is not punishment but rather purification. Dharmaraj, the lord of narka, is not personally interested in the suffering of any player. He is not a sadistic devil. Rather, his job is to set wrong frequencies right so that future evolution of the spirit can take place.\n' +
          '\n' +
          'Narka is also the heart chakra itself. Attachment to feelings is narka. The feeling of attachment is narka. Narka is negative vibration. Those who vibrate negatively create a narka in their home, family, neighborhood, town, country, and world, according to their capacity. The player who lands in narka-loka without fourth chakra understanding sees it as failure, not as a record of negative karma. Only in the fourth chakra does the understanding of negative karmas on the experiential level come. The narka-loka is seen not as the result of personal ego failure but as the sign of an imperfection of action and the need to improve. In the fourth chakra comes recognition without valuation.'
      },
      36: {
        title: '36. Clarity of Consciousness (Swatch)',
        text:
          'Clarity of consciousness is the light that illuminates the player on his passage out of the fourth row of the game and on to the fifth, the plane where man becomes Man. Swatch in Sanskrit means clear, pure, transparent. This transparency results from the purification of the opacities of bad karmas the player undergoes in purgatory.\n' +
          '\n' +
          'Transparency offers no resistance to the passage of light. When doubts are clarified, the fog of blind intellect is dissolved to be replaced by the clear, strong light of inner feelings. The intellectual understanding, which dominates the consciousness up to the third chakra, does so no more. Reason here is considered an ailment, a disease of consciousness. For when consciousness identifies itself with understanding, at that time it suffers from the disease of reason, the chains of the intellect. By devotion and right faith the disease is overcome, and the player enters into the realm of Being.\n' +
          '\n' +
          'When the player lands here he becomes swatch — clear, pure, transparent. The doubts that assailed him took him to purgatory and irreligiosity. But from those experiences he gained an understanding of the nature of sudharma. He has developed good tendencies and sanctified his life. He has dwelt on the planes of fragrance and taste and is now ready to join the upward flow of energy in the fifth chakra.'
      },
      37: {
        title: '37. True Awareness (Jnana-Loka)',
        text:
          'Knowledge of the right, and insight into the proper means of realizing the right in daily existence, are the two essential attributes of gyana. Gyana is an uplifting force, an arrow that takes the player to the eighth row and the plane of bliss, beyond the chakras. The player who understands his role in the game, and the nature of the course of action that will enable him to fulfill that role, lives in bliss.\n' +
          '\n' +
          'The player realizes this wisdom only after the experience of clarity of consciousness. Only by suspending value judgments can the transmutation of energy that lifts him to the fifth chakra take place.\n' +
          '\n' +
          'Gyana is not liberation. The player has yet to free himself from all those things that have clouded his mind. But he does know that the blocks can be removed, that Cosmic Consciousness is an attainable goal. Some Hindu philosophers see gyana as the direct path to moksha. Cosmic Consciousness. But in this game it leads to bliss. The player must still realize the plane of cosmic good and needs a throw of two to escape the cycle of rebirth. But there is nothing wrong. He can return to earth and play the game again.\n' +
          '\n' +
          'Gyana then is awareness, not realization. Gyana is the understanding of the laws of existence and the awareness of a means to synchronize with them. The fourth chakra has already established balance; consciousness has been clarified. A true penetration into the world of concepts becomes possible. The player ceases to be attached to forms of expression and becomes drawn to the essence, the process of insight. Old relationships rake on entirely new perspectives when viewed through the clear light of unobstructed consciousness. The cause of bondage is maya. The cause of liberation from maya to bliss is gyana.\n' +
          '\n' +
          'As long as the player identifies himself as an individual, independent being he has karmas, and this is the cause of bondage. Gyana makes it clear that by reducing the scope and area of karma he can begin to establish himself in bliss. This is insight into the game itself.\n' +
          '\n' +
          'In the first three chakras the player has been lost in the realms of delusion, fantasy, and power, Each course of action that inspired hope in him left the player in the end tired and painful. Finally, in the fourth chakra, he began to establish a sense of balance within himself. Then, with clarity of consciousness, he waded into the upward flow of energy that lifted him from the fourth chakra into the fifth. With balance, he sees his goal as attainable and adjusts his life in accordance with his insight into the process of fulfillment.\n' +
          '\n' +
          'Gyana is a blank page. Whatever is written on its surface is only the illusion of ahamkara, ego.*  Illusion is ever changing and thus is temporal. Only the page itself lasts, is a temporal. The page that remains after the writing has long since faded is gyana. This is the wisdom that makes the player understand the karmic writing on that blank page. To the degree the player desires, it is he who inscribes writing on his page. What gyana dictates is that it be kept intact, handed over as it was given.\n' +
          '\n' +
          'Gyana is rightly placed in the fifth chakra, because here is the source of those billions of blank pages that are the essence of the world’s religious teachings. In the fifth chakra, communication with others becomes the main concern. The player seeks to convey the essence of his own insights into the game while simultaneously realizing the futility of the task.\n' +
          '\n' +
          "''The wisest course of action, then, would have been to leave this square blank. But there is an arrow in it. And, of course, the author feels the bliss of the experience, and he really cannot help expression, just as God could not when he said, “Let there he light.\""
      },
      38: {
        title: '38. Plane of Life Energy (Prana-Loka)',
        text:
          'Prana is élan vital, the life-force itself. In Sanskrit it is synonymous with life and is also the name of the lifebreath we take in with each inhalation. Prana is also the name of one of the five major airs in the body. As body air it is situated in the cavity of the mouth and enables food to pass through into the stomach. It resides normally in the area from the nostrils to the lungs, and its location near the heart preserves life from destruction.\n' +
          '\n' +
          'Prana maintains the other elements of the body in balance and controls their function. With the help of prana we are able to move, think, see, and hear. From birth to death prana plays a crucial role in our lives: at birth it is the air that gives energy during delivery; at death it collects all vital energy from the body and flows out, leaving a lifeless corpse behind.\n' +
          '\n' +
          'Prana is like a faithful servant, who fulfills all the demands of his master but in return does not demand any reward for his services. Like a true devotee, prana is devoted to the service ot the self, consciousness, twenty-four hours a day. Yet prana is also temperamental. A slight change in the attitude of the master affects his speed and rhythm cycle. A good master, understanding the devotion of his servant, must try to help prana evolve. The methods to accomplish this are called pranayama, one of the most essential yogic disciplines.\n' +
          '\n' +
          'In yoga, prana is of primary importance. With the practices of pranayama the yogi directs the flow of prana downward toward the pelvic plexus, where it mixes with apana, the air that resides in the lower intestines. When prana and apana flow together through sushumna, the central passage of the spinal column, to the top of the head, the experience of samadhi* takes place — the goal of all yogic practice.\n' +
          '\n' +
          'Prana is not to be confused with oxygen. The energy in the gross physical body feeds on oxygen. Prana maintains the existence of the physical body: prana is life. To understand prana, life and consciousness must be seen as distinct from each other. Life is a vehicle through which consciousness manifests, and prana is the energizing force of life. When life ceases, consciousness does not. This is evident from the many well-documented cases of rebirth.'
      },
      39: {
        title: '39. Plane of Elimination (Apana-Loka)',
        text:
          'While prana is the air that takes in energy from outside the system through the lungs and aids in conveying food energy to the stomach, apana serves the opposite function. Apana literally means downwards, and this is the air responsible for the elimination of energy from the body. It resides in the lower intestines; it expels the child from the womb and causes downward discharges of energy. Apana is the air responsible for urination, defecation, and ejaculation.\n' +
          '\n' +
          'The importance of apana is poorly understood in the West. The presence of intestinal gases is acknowledged, but they are not even listed in a separate category or class. Scores of patent remedies are available for conditions brought on by disturbances of apana, but there is no understanding of their cause.\n' +
          '\n' +
          'According to Indian medical science, apana is a great friend who aids in the cleansing of the system. The digestive process releases gases trapped in foods through the chemical interaction of the foods and digestive juices in the intestines. These gases are produced in greater quantity when the food is improperly digested, or when the circulation of juices has been disturbed (raw foods produce more gas, as do nuts and seeds). When, for whatever reason, the gases are disturbed, they start moving upward instead of down. This unbalances the chemical system of the organism. If the gases approach the heart they may produce high blood pressure, heart palpitations, and a heart attack. If they are driven still higher, disorders of the respiratory tract ensue. If the gases reach the head, schizophrenia results.\n' +
          '\n' +
          'When prana, which is charged with positive ions, is made to function with apana and forced to enter through the central canal into the spinal column, a great fusion takes place between the positive ions of prana and the negative ions of apana. This generates a great amount of energy, which helps the ascent of the dormant energy at the base of the spine, called kundalini. (Kundalini is the immobile support of all the activities in the body. It is the energy that is present, in static or kinetic form, in all manifested phenomena. This is the energy used by the organism for its survival.)\n' +
          '\n' +
          'By practice of the locks prescribed in yoga, apana is drawn upward. When it reaches the region of the navel it increases the gastric fire. Then apana combined with the fire of the third chakra pierces through the fourth chakra and mixes with prana. Prana is hot by nature. This causes a further increase in heat, and both airs rise upward, creating a vacuum. The scriptures say it is through this extreme heat, caused by fusion of prana with apana, that kundalini is awakened and enters into the central canal as a serpent enters its hole. This mixing of prana and apana rejuvenates the yogi, and he becomes a young man of sixteen, full of vitality, stamina, and power.\n' +
          '\n' +
          'So on this square the player becomes aware of the importance of apana in his life and learns to keep the airs of his body harmonized through proper diet and other practices.'
      },
      40: {
        title: '40. Plane of Circulation (Vyana-Loka)',
        text: 'Vyana takes pranic energy from the lungs and conveys it through all the bodily systems. It is the vital air responsible for blood flow, glandular secretions, upward and downward movements of the body, and the opening and closing of the eyelids. Vyana carries oxygen in the bloodstream into the capillaries throughout the system. Oxygen and pranic energy are absorbed by the tissues, and waste products are expelled into the blood. This deoxygenated blood is thrown out into the venous system by vyana. Vyana is also the force that carries this wasteladen blood back into the heart and lungs. Vyana produces sweating. We do not sweat only in certain special places but through each and every pore of the body. The only explanation for this is vyana. Sweat cannot move of itself. The air in the lungs cannot force it out, nor will the airs in the stomach, intestines, or anal region. What does, then? It is vyana — present throughout the body and crucial in balancing body chemistry through the processes of blood circulation, sweating, and coughing.'
      },
      41: {
        title: '41. Human Plane (Jana-Loka)',
        text:
          'Jana-loka is the fifth plane, the abode of siddhas (evolved beings who have powers by which they can do at will deeds that look like miracles to people who are on the lower planes) and saints, who are ever absorbed in contemplation on Hari (1). Jana-loka is also the region where inhabitants of swarga-loka and maha-loka seek refuge at the time of Great Dissolution of all existing phenomena, after which the universe is created anew. The element that predominates in this loka is air, and the bodies of the dwellers in jana-loka are composed of pure wisdom untouched by desire. This is the loka of divine wisdom, and those who dwell here are beings of divine wisdom.\n' +
          '\n' +
          'The player who lands in the fifth chakra, the human plane, devotes his life to synchronizing with divine laws to sustain the upward flow of energy within himself. To stabilize himself in his experience he feels the need to communicate it to others. Thus the fifth chakra is the source of all great teachings. Its location in the throat near the voice box underscores the importance of communication to the player who vibrates here.\n' +
          '\n' +
          'The player establishes himself here by a right understanding of the vital airs and by his passages through purgatory, clarity of consciousness, and gyana. His wisdom demands synchronization with planetary laws, and his understanding of the vital airs gives them the utmost significance. Imbalances in the airs are reflections of disharmony with planetary laws. Without the cooperation of these airs, synchronization is impossible.\n' +
          '\n' +
          'His understanding of the divine presence within all existence, gained in his passage through the fourth chakra, demands he seek the Divinity within himself. Thus his attention turns to sounds, which take on a new significance for him. He is now able to hear sounds within himself that were inaudible before, because his attention had been aimed at the phenomenal world. Turning inward with his senses, he hears the sounds of his heart and the blood coursing through his system. These sounds open his nerves, and he becomes able to apprehend more.\n' +
          '\n' +
          'While it has been said that all knowledge exists within, this becomes a reality only in the fifth chakra. The opening of the nerves produces sounds. These sounds in turn affect the psychic energy and result in changes in body chemistry. This produces a psychic state in which the player is opened to new dimensions of experience. The resultant understanding is known as knowledge.\n' +
          '\n' +
          'In the fourth chakra the player has experience without understanding. The increase in energy caused by the elevation from the fourth chakra to the fifth elevates consciousness, and new perspectives come into view.\n' +
          '\n' +
          'In the first chakra there are only four dimensions, called petals. In the second there are six. The transition from the second to the third chakra opens four new dimensions, and two more are added in the transition from the third to the fourth—a total of twelve. In the fifth chakra sixteen dimensions are functioning, giving a radically new perspective on the nature ot the game. From this perspective all great religious teachings flow.\n' +
          '\n' +
          'If the player who reaches the fifth chakra is part of a tradition, he becomes a new link in its development. Or he may leave and become an independent thinker, a seer, a prophet, or a saint.\n' +
          '\n' +
          'This is the plane on which he gains a true perspective on the nature of humanity, and it is often gained directly from the third chakra by the arrow of selfless service.'
      },
      42: {
        title: '42. Plane of Fire (Agni-Loka)',
        text:
          'Agni is a very clear manifestation of the eternal cyclic rebirth of the same divine essence, Fire is spirit, soul, and body at the same time. Our universe and what evolves within it, including man, are the products of the god Fire. In symbolic expressions he is shown with three faces, representing three fires — pavak, electrical fire; pavamana, fire produced by friction; and suchi, fire of the gods, also known in the Rig Veda as vaishnavara, the living magnetic fire that pervades all galaxies. The word vaishvanara is often used for the Self.\n' +
          '\n' +
          'The player who lands in Agni-loka is ready to assume form. Agni is the fire-god; the fire is a gross manifestation of energy. In the body, this fire is life itself. It is love and security. It was man’s security against the ravages of wild animals at the time when he lived in caves. But fire is but one manifestation of Agni. With air and water it is one of the three causes of the solidification of the earth and is thus the parent of forms. Fire is also the cause of light, which is a combination of colors. Thus fire is the cause of both color and form — the essence of the phenomenal world.\n' +
          '\n' +
          'Fire is the gross manifestation of energy, its vehicle. The player who lands here understands that his body also is just a vehicle. For this reason, fire is regarded as the link between man and God. All religious rituals include the presence of Agni, the eternal witness. And because this fire-god is but an expression of man’s innate nature, the player learns that self-deception is impossible. The witness is always there. The player who is about to take form does so with the knowledge that the role he assumes must conform to the dictates of planetary laws. Any deviation spells deception of the self, and a downward flow of energy inevitably follows self-deception.\n' +
          '\n' +
          'According to Hindu mythology, Agni decided to explore the creation. He assumed an air-like form and traveled across the face of the universe on a lotus leaf. But after a time he grew weary and sought a place to rest. Soon he saw a nest on the face of the eternal waters. In the nest he spread his fire. The waters were the wives of Varuna, another manifestation of Agni. The fire-god’s desire for these women flamed, and soon they were ready for union. His semen fell and became the earth. This is the fire he planted in the midst of the nest, and this planet is his offspring.\n' +
          '\n' +
          'Modern science (i.e., Western science) now believes the earth to have begun as a ball of fire (Agni). Water cooled the surface of the planet, enabling life to arise. Even now, fire remains at the planet’s core, as is demonstrated by the volcanoes that disgorge molten rock from the depths of the earth. Were this inner fire to die, life would vanish from the planet.'
      },
      43: {
        title: '43. Birth of Man (Manushya-Janma)',
        text:
          'Passage through the plane of Agni prepared the player for assuming form. Manushya-janma heralds the assumption of form. Conceived in the second chakra, nurtured and nourished in the third, filled with human emotions in the fourth, he now takes birth.\n' +
          '\n' +
          'This birth is never registered in courthouses and hospitals. Rather it is seen in those who encounter him, who afterwards say, “We saw a Man.” The player is now the son of nobody. Anyone could have been his father. He is the son of God only and belongs to no caste, creed, nation, or religion. He has no attachments and needs no identification papers or marks. He has found himself. Now he has taken birth. Now he can be felt. His presence is experienced strongly by those still taking birth. He has direct experience of truth, a face-to-face meeting with reality. He does not need to please anyone, because he has lost interest in cultivating a group of devotees and followers. He relates only with truth, and pleasing truth is his sole aim.\n' +
          '\n' +
          'Man is a rational being. This faculty of reason helps him relate to the truth. One who lives out of harmony with the law of truth cannot be rightly called a man. He is some other creature in a human body, striving to take birth as a man.'
      },
      44: {
        title: '44. Ignorance (Avidya)',
        text:
          'The player who lands in avidya forgets the illusory nature of existence and becomes attached to certain emotional states and sense perceptions. This snake draws his energy down to the first chakra and the sensual plane. Loss of understanding of the nature of maya causes suspension of the rational faculty of the mind and leads to identification with certain states.\n' +
          '\n' +
          "Vidya is knowledge; a means without. The absence of knowledge is ignorance. Knowledge is understanding one’s role in the game from wherever one is at the moment. The real avidya is within the mind. No avidya exists outside the mental realm. Our perceptions of reality are but reflections of our own selves. Bur while nothing exists outside the mind, this does not mean that only the player and his mind exist. The world of name and form exists also, but it is perceived differently by every player's mind from the place where he is vibrating at the moment.\n" +
          '\n' +
          'This same world is a place of enjoyment for some and a hell for others. Each mind receives the world in its own way and attaches importance to objects according to its own karmas. Real knowledge is to understand reality without assigning value judgments. Real knowledge is nonattachment to the objects of sense perception, which are always changing, temporary, and therefore not reality.\n' +
          '\n' +
          'If the player only keeps track of his inner sound — the sound of his self, his being — he will not fall prey to his own mind. Mind is like a tiger dwelling in the forest of desires, surrounded by a reality full of prey.\n' +
          '\n' +
          "This artwork vividly captures the concept of 'Ignorance' (avidya) in a spiritual context. It portrays a player entangled in the realm of avidya, where the illusory nature of existence is forgotten, and there is an attachment to emotional states and sense perceptions. The central figure in the artwork is drawn towards the sensual plane, depicted symbolically by the presence of a snake, representing the descent of energy and the loss of rational thought.\n" +
          '\n' +
          'The background of the piece reflects the mental realm, underscoring the idea that our perceptions of reality are mere reflections of ourselves. It highlights the variability in individual perceptions, with each person experiencing the world differently based on their mental state and position.\n' +
          '\n' +
          "The colors and composition of the artwork evoke the sense of a mind ensnared in a forest of desires, indicative of a reality that is constantly shifting and temporary. This scene illustrates the trap of becoming attached to impermanent objects of sense perception and the importance of maintaining focus on one's inner self, despite the distractions of the mind. The artwork conveys the essence of true knowledge as nonattachment and the recognition of the transient nature of the material world, urging an inward journey towards self-awareness and spiritual enlightenment."
      },
      45: {
        title: '45. Right Knowledge (Suvidhya)',
        text:
          'Whereas gyana is awareness of truth, right knowledge incorporates behavior (practice) with awareness, a combination that lifts the player to the eighth plane and the plane of cosmic good. He is now one square away from his goal. He attains the realization that he is a microcosm of the universe, an ocean in the form of a drop.\n' +
          '\n' +
          'According to Hindu tradition there are fourteen vidyas, spokes on the wheel of truth. These fourteen are the dimensions of knowledge and contain all that is required for man to know and understand reality. These are the four vedas, six shastras, dharma, nyaia (logic), mimansa (critical understanding), and the Puranas. In an industrial society, however, knowledge has assumed a new guise. Now what is called knowledge has been reduced to the level of information, capable of being programmed into a computer. But human consciousness is more than a computer. Right knowledge requires experience.\n' +
          '\n' +
          'Right knowledge adds to gyana a new dimension, the realization that past, present, and future are one; they are aspects of a single continuum. While wisdom can dictate one course of action, right knowledge can demand its opposite. Out of wisdom the disciples renounced Christ. Out of right knowledge Christ allowed his own death — knowing that subtle principles always outweigh the value of material forms.\n' +
          '\n' +
          'Right knowledge is the food of consciousness and saves it from the snakes of irreligiosity, sorrow, jealousy, envy, ignorance, violence, egotism, tamas, and the inert negative intellect. Right knowledge strengthens the inner voice. Suvidya tames the tiger of the mind and converts the forest of desires into a garden of interpersonal evolution.\n' +
          '\n' +
          'Vidya comes from the root vid, meaning to know. The most ancient form of knowing was the state of samadhi, in which the answer is obtained by undergoing a direct experience of reality. Thus all Hindu knowledge is known as darhan, meaning to see or to experience. Knowing is becoming one with the object to be known. This is vidya, right knowledge.\n' +
          '\n' +
          'With right knowledge comes the end of the fifth chakra, the fifth row of the game. The minute the player attains a full realization of the oneness of himself and the cosmos, he becomes one with the ultimate reality and reaches the plane of Rudra (Shiva), cosmic good.\n'
      },
      46: {
        title: '46. Conscience (Viveka)',
        text:
          'Whatever exists in the phenomenal world is not reality. The objects of sense perception change with the passage of time, evolving, growing, and decaying. But these sense-objects give every appearance of being real. Man assigns value to the objective world and develops the desire for identification with these sense-objects. Viveka, conscience, is the power that saves him from falling back into the desire for attachment with the material. It is the players own voice of inner wisdom that enables him to differentiate the subtle from the gross, to perceive noumenon in phenomenon.\n' +
          '\n' +
          'Viveka could come no earlier in the game. The first square of the sixth chakra, conscience follows the passage through right knowledge. If the player lands on the arrow of right knowledge he is immediately boosted to the plane of cosmic good. Otherwise he has to rake the help of his conscience in determining the course of play.\n' +
          '\n' +
          'The basic elements of the phenomenal world are found up to the fifth chakra. These are the building blocks of gross manifestation. The presence of these elements influences the player’s pattern of vibration as long as he operates from those chakras. But the sixth chakra is beyond the elements. Manifested maya now has little effect on consciousness.\n' +
          '\n' +
          'When the player lands on the square of conscience he is immediately transported to happiness, a happiness that is possible only in the seventh chakra. In the seventh chakra the player is beyond all violence, which is cause for true happiness. But this is the sixth chakra, and here conscience is important. The sixth chakra has traditionally been called the third eye. Conscience is the third eye. Our two eyes see only that which exists — what was in the past, and what is in the present. But the third eye gives the power to discern future possibilities in the game, and that is one of the assets of the sixth chakra: insight into the future. This is no fantasy, but the direct perception of what will be.\n' +
          '\n' +
          'Conscience is not something we grow in the course of a single, fleeting (by cosmic standards) lifetime. It contains the insights of the race in the form of the collective unconscious. The player has at his disposal a reservoir of experience within himself, which is now at the level of conscious awareness.\n' +
          '\n' +
          'Conscience is the teacher that sits at the top of every player’s head — the seventh chakra — guiding him throughout his life. The player can avoid social and political laws, but escape from the voice of conscience is ultimately impossible.\n' +
          '\n' +
          'Before the player reaches the sixth chakra the notion of conscience makes little sense. But passage through the sixth chakra is determined by the fall of the karma die and the promptings of the inner voice of Viveka.'
      },
      47: {
        title: '47. Plane of Neutrality (Saraswati)',
        text:
          'Psychic energy in the human organism flows through the central nerve canal of the spinal cord, Saraswati. According to yoga physiology, this energy flow begins in the first chakra and vibrates successively higher as the player advances from row to row. The ultimate goal of yoga is the raising of this energy to the seventh chakra, the crown of the head.\n' +
          '\n' +
          'There are three basic types of energy in the human body: electrical, magnetic, and neutral. Electrical energy is sun energy and dominates the right-hand half of the body. Magnetic energy is moon energy and dominates the left. In normal states either electrical or magnetic energy (positive or negative, sun or moon) predominates. The neutral or psychic energy results when sun and moon are balanced in the body, when it begins to flow up the spinal column. Below the sixth chakra, control of this energy was not possible. Brief surges could be produced during meditation, but at seemingly random times and beyond conscious control. In the sixth chakra the negative and positive fade away; only neutrality remains.\n' +
          '\n' +
          'When the player lands in Saraswati he comes into the realm of the goddess for whom it was named. He is surrounded by pure music and lives in a state of vidya, knowledge. The deity of learning and beauty graces him with the ability to stabilize himself beyond the influences of the electromagnetic field of existence. He has become a witness to the game.\n' +
          '\n' +
          'Three nerves, which meet in the brain in the region of the third eye (between and slightly above the eyebrows), are responsible for the flow of the three types of energy. These are pingala nadi, ida nadi, and sushumna nadi; sun, moon and neutral; magnetic, electrical, and neutral. This juncture of nerves is called prayag, a name often given the third eye. Sushumna remains invisible, while ida and pingala can be seen as the two eyes. In Indian mythology, one of the most important holy sites is Prayag-Raj, the juncture of the country’s three holiest rivers — the Ganges, the Yamuna, and the Saraswati. The Ganges and the Yamuna are ida and pingala. Both are visible, as are the two eyes. The river Saraswati is said to be invisible, flowing up to the prayag from the depths of the earth. This same symbolism is to be found in Greco-Roman mythology, in the form of the staff of Aesculapius, the divinity of healing. Two serpents twine around the central winged staff. The snakes are ida and pingala, the staff sushumna.'
      },
      48: {
        title: '48. Solar Plane (Yamuna)',
        text:
          'In the sixth chakra the player establishes a harmony between the male, solar principle and the female, lunar principle. This harmonious blending of the elements creates a witness-self, which is neither male nor female but a complete balance of both.\n' +
          '\n' +
          'The solar plane is the plane of male energy. As long as a player is either masculine or feminine he cannot accept the opposite nature in himself, just as a player in a team on the playing field is unable to judge his own actions because his personal attachment to the game denies the possibility of right perception. But the one acting as the referee is beyond personal involvement. He is not committed to any team. He is the witness-self who is able to see the fouls committed by the player.\n' +
          '\n' +
          'When the player vibrating in the lower chakras is tinted by the solar plane, his primary concern becomes destruction, power, identification of self — just as too much sunlight would burn the planet. To balance the sun, moon is needed. The player who lands here after passing through wisdom and right knowledge realizes this and learns to balance his own play of energies.\n' +
          '\n' +
          'Below the sixth chakra solar and lunar energies entwine each other; but in the sixth chakra they meet and become one. This sense of oneness characterizes the plane of austerity.\n' +
          '\n' +
          'To better understand the nature of solar and lunar energies and their function in the human organism, we have but to look at the example of the storage battery. Like a power cell, human beings have an anode and a cathode, positive and negative nodes. When both are placed in a solution capable of conducting a current, electricity is generated. The anode is positive and generally made of copper — which is red, a sun metal and aligned with the fire-sign Mars. For the cathode, zinc is used — a moon metal, bluish-white. The electrical charges gather around the anode, and through the anode we draw electricity. This electricity symbolizes the electrical (male) principle in the human organism.\n' +
          '\n' +
          'In the human body the pinguid nerve is synonymous with Yamuna, the solar plane. The solar energy is directly connected with the right nostril. When the right nostril is used, pingala dominates and there is a slight change in body chemistry, breath, and pulse. Pingala is the energy source for all creative actions and makes meditation impossible while the right nostril operates. In pranayama yoga techniques, the sun breath is often required. This simply means the aspirant should breathe through his right nostril.\n' +
          '\n' +
          'Yamuna is one of the three holy rivers that meet at Prayag-Raj (now Allahabad) in the Uttar Pradesh province of northern India. Krishna was born near the banks of the Yamuna.'
      },
      49: {
        title: '49. Lunar Plane (Ganga)',
        text:
          'The player who lands in Ganga finds himself at the source of magnetic female energy. He experiences the nerve ida nadi, located on the left side of his spinal column. Ida nadi is the source of the body’s nourishment, attributable to its feminine (nutritive) nature. The female is magnetic, attractive; the male is electric, forceful.\n' +
          '\n' +
          'The magnetic energy in man is closely related to psychic energy. The player who generates more psychic energy automatically develops a personal magnetism, which attracts to him those capable of being magnetized. Magnetism is actually a balance of polarity. Magnetic power is created by the interaction of the north and south poles of any substance capable of holding energy. The flow of energy from one pole to the other encounters no obstructions, and a magnetic field forms. In the same manner, an unobstructed flow of psychic energy becomes possible when meditation is practiced during those times when the left nostril, the moon nostril, is operating.\n' +
          '\n' +
          "Through meditation the player lands on the lunar plane. Here he gains understanding of the female principle. He learns that a high tide in human emotions is reached on the night of the full moon, just as the ocean's tides reach their peak during the full moon. Both are the effects of the magnetism of the moon working on the planet.\n" +
          '\n' +
          'Though the word lunacy was coined to note the relationship between lunar cycles and madness, the player who lands on the lunar plane of the sixth chakra need have no fears. At this level all energy is one, and female energy ceases to become destructive and becomes one of the most constructive squares of the game board. The left (lunar) nostril benefits not only meditation but music; dancing; enjoyment of poetry; removal of sorrow, pain, and depression; and restoration of consciousness. Ida nadi leads the player to the lunar plane, the plane of devotion and receptivity.\n' +
          '\n' +
          'As a general rule, the left nostril should operate during the day and the right at night. The moon is needed during the day to compensate for the predominance of solar energy; and the sun nostril to compensate for moon predominance at night. This is the yoga of nostril breathing.'
      },
      50: {
        title: '50. Plane of Austerity (Tapa-Loka)',
        text:
          'As knowledge was the main concern of the fifth chakra, hard work on the self — penance — characterizes the player who vibrates on the plane of austerity, the sixth chakra. Tapa means penance, mortification, burning and the practice of meditation on self-denial.\n' +
          '\n' +
          'Tapa-loka is the sixth of the seven major lokas. This region does not perish at the night of Brahma. Air is the element that predominates in this loka, hence all the combinations interpenetrate each other without any difficulty. Although the elements finish with the fifth chakra within the human organism, in certain lokas, special regions situated in space, the elements still exist. Those who evolve by their hard work on themselves go to these lokas, depending upon the state of their consciousness. Those who dwell in this loka called tapa-loka are high ascetics and yogis — those who have gone on the path of no return and who are still engaged in high penances in order to be able to cross this level of consciousness and reach the next, the satya-loka, the plane of reality.\n' +
          '\n' +
          'The developing witness-self recognizes the remaining karmas and sets about the arduous tasks necessary to burn them off. Hard penance is demanded. Karmas have become too heavy a burden to carry farther.\n' +
          '\n' +
          'The player reaches tapa-loka either directly, through the practice of fourth-chakra sudharma, or gradually as he progresses through the fifth chakra, develops conscience, and masters his sun/moon energy system.\n' +
          '\n' +
          'The experience of oneness with all reality strips the phenomenal, sensory world of its attractions. All the elements are now under the players command. His insight into the nature of the space-time continuum enables him to see the beginning and end of creation. Living in this limited body, he becomes unlimited. The player knows he is immortal spirit in a temporal body. Death ceases to inspire terror. Here the player understands the meaning of “I am That” or “That 1 am," known in Sanskrit as tattvamasi, or hamsa. The player now becomes known as paramhansa.\n' +
          '\n' +
          'Much is said in the West of the third eye. To understand this phenomenon, the player must undergo the rigors of the plane of austerity. He must do penance. He must get away from the identification with man or woman. His whole understanding of himself must change radically. He must recognize within himself the presence of the Divine. He must feel his own infinite nature. Here the sound Om becomes his mantra. This is the cosmic syllable that creates resonances throughout his system and helps raise his level of energy. Every hour of the day, every minute, he hears his inner sound. The sound grows more and more pervasive until it encompasses all the sounds in his environment, internal and external. Whoever is in his presence becomes calm and starts hearing the same high-frequency sounds generated by his own system.\n' +
          '\n' +
          'Each player has a specific effect on other players, depending on the level at which he is vibrating at the time. The presence of the first-chakra man assumes either a terrifying or a pitiable aspect. He aggressively seeks physical survival or laments his inability to attain it. The second-chakra man, concerned with sensual indulgence, seeks to charm and soothe. His voice is seductive, unctuous. The player vibrating in the third chakra issues challenges. He asserts his ego wherever and whenever possible in the search for ever broader identifications and for confirmation of the aspects he has already assumed. The fourth-chakra player inspires those around him. He has found an emotional center and produces no threatening vibrations. The player in the fifth chakra holds up a mirror crafted of his own experience, in which other players can see themselves reflected. The presence of the sixth-chakra man reveals the Divine. The other players lose their identities and inhibitions and try to merge their consciousness with that of the one who has established himself in the plane of austerity.'
      },
      51: {
        title: '51. Earth (Prithvi)',
        text:
          'Earth is the great mother principle, the stage on which consciousness enacts its eternal play, Leela. Here the player understands earth as Mother Earth, not “the earth.” The player discovers new patterns and harmonies, new ways of play, totally obscured before in the mists created by lower-chakra involvement.\n' +
          '\n' +
          'Both Indian tradition and modern science agree that earth had its genesis as a ball of fire. What remained after the flames finished their job became earth. Earth is not only a planet but a living organism, the great mother principle who has given birth to all that exist on her breast. And as a mother carries milk, so does the earth provide nourishment, vital life-force, food, and energy.\n' +
          '\n' +
          'Earth is the symbol of the sixth-chakra player. She is the product of great austerity. Her awesome birth by fire enabled her to give birth in turn to the live show of energy that is her mantle. She is the essence of tolerance and forbearance. Though her children blast her body and ignite her soul, she gives them in return diamonds, gold, and platinum. She follows the law of dharma selflessly and does not distinguish between high and low. Thus she is rightly placed in the sixth chakra. We see her body, the physical plane of the first chakra. What we cannot see is her spirit, her intelligence, her benevolence, her significance. This is the understanding that comes to the sixth-chakra player. He sees in her game the continual interplay of sun, moon, and neutral energies that mirrors the process always going on within his own microcosmic self.\n' +
          '\n' +
          'Seeing inner reality reflected in the great mother, the player attains insight into Leela and becomes the Player. He must still pass through the plane of violence to gain an understanding of how to be truly fluid. But once these tests have been passed he may get a direct link with Cosmic Consciousness by landing in spiritual devotion.\n' +
          '\n' +
          'Thus earth has nurtured her child-player to the point where he now has the ability to create his own game, to move higher or lower according to his karmas. Sometimes in the course of the game players rise up several levels as they experience the attributes of mercy, wisdom, and right knowledge. These arrows lift them to the highest plane. But since they really do not belong there, they are not assured of attaining Cosmic Consciousness. They have to make the trip anyway, and the game provides them with the snake of tamoguna to bring them back to earth, to make the effort anew. Each time the player goes higher and fails to attain the plane of Cosmic Consciousness, he must return home, to his Mother Earth — the cosmic playground.\n' +
          '\n' +
          'And the more the player experiences earth, the deeper he appreciates the delicate balances that maintain life on her surface. To first-chakra man she is but a coffer to pillage and loot as he chooses, without regard to consequences. Sixth-chakra man recognizes the peril of this attitude as he sees the planet he loves facing imminent danger and suffering possibly irremediable damage.'
      },
      52: {
        title: '52. Plane of Violence (Himsa-Loka)',
        text:
          'The player who attains the sixth chakra realizes the unity of all existence. Human bodies are but transient forms. The real essence of all players exists beyond the realm of name and form. The player knows that death is just a change in the life scenario. Hence arises the danger that the player will resort to violent means, knowing full well his actions ultimately harm no other players.\n' +
          '\n' +
          'But the world is the stage of Leela and karma. Each player has the opportunity of reaching Cosmic Consciousness within his present life. The law of karma dictates that all players must be allowed to enact their dramas to the end, to finish the play. Sixth-chakra acts of violence are not excepted from the omnipresent karmic principle. This makes the plane of violence a snake that draws the player down to fourth-chakra purgatory, where he must atone for his acts.\n' +
          '\n' +
          'It has been individuals vibrating here who throughout history have launched the crusades, jihads, and other “holy" wars. The perpetrators of these vast pageants of human suffering and death always see themselves as great reformers of consciousness. Better the other player be killed than suffer his soul to live in ignorance, runs the rationale of the sixth-chakra zealot. After all, nobody really dies. . . .\n' +
          '\n' +
          "Real violence is not possible before the sixth chakra. Acts of violence can be performed by players in lower chakras, but these are seen by the players as self-defense, as reactions to an external threat. In the sixth chakra players realize that no threat comes from outside. First-chakra violence arises over money and belongings. Second-chakra violence concerns sex and pleasure. The thirst for power creates violence in the third chakra. Fourth-chakra man kills to dispose of karma, to even old scores. Agnosticism is the fuel of fifth-chakra violence. In the sixth chakra establishment of a creed, cult, or religion inevitably provides the motivation for excessive force. Those responsible for man's unholy wars have been high ascetics, who have performed hard penances in order to gain powers. But if the karmas are bad, asceticism can lend itself to a sort of dangerous solipsism. The player believes he has all the truth that he is, in fact, God or his agent. Those who fail to agree are wrong; therefore any means is justifiable to convert them. Better they die with understanding than live in ignorance.\n" +
          '\n' +
          'In the lower chakras freedom of action is not present. In the sixth chakra the player becomes his own master and gains great powers through austerity and penance. Power in himsa-loka becomes violence. The player is violent with his own self before he can perform an act of violence on another. It requires perfect self-confidence to be violent. This self-confidence does not come before the sixth chakra. What had been reaction in the lower chakras is now nothing less than a sort of spiritual anarchy.\n' +
          '\n' +
          'The player’s lack of fluidity and spiritual devotion draw him down to even harder penances in purgatory, where he must truly repent from the heart to be able to go on with the game and seek the path of spiritual devotion.'
      },
      53: {
        title: '53. Liquid Plane (Jala-Loka)',
        text:
          'Water is cold by nature and absorbs heat, producing a sensation of coolness. The heat of the sixth chakra, austerity, makes the player violent. He has to pass through the pure waters of this, the liquid plane, to quench the burning energy of violence and convert it to the warm steadiness of spiritual devotion.\n' +
          '\n' +
          "Water, one of the five elements, is the binding material of existence. Man’s body weight consists primarily of water. In arid regions where water is either deep beneath the earth or nonexistent, the earth becomes brittle and fragmented, and we call it sand. Sand does not retain water. Water flows through quickly because the individual grains have no capacity to absorb moisture. The earth becomes barren, almost devoid of life. Water is therefore also responsible for fertility, germination, and growth. Growth itself is a process of heat, of fire. Heat provides color and form, and water adds stability. Water binds the form together and is the energy on which fire feeds. Thus fire “eats” water and provides the earth's vital energy, which is manifested as the life-forms of the planet’s surface.\n" +
          '\n' +
          'Water has no shape; it assumes its form according to the shape of the vessel. This is also the main attribute of the sixth-chakra player — the ability to become that which confronts the self. The real game starts when the player loses his identity as a player. Before the sixth chakra and the ability to become formless, the player has been caught up by money, sex, power, karma, and the search for knowledge. The game starts in the sixth chakra, when knowledge is obtained and the illusion of the form of identification of playerhood dissolves.'
      },
      54: {
        title: '54. Spiritual Devotion (Bhakti-Loka)',
        text:
          'Bhakti, or spiritual devotion, is based on the doctrine “Love is God, and God is love.” A bhakta-devotee is in love with his Deity. The Deity is the beloved, and the devotee is the lover. The bhakta or lover experiences separation and longs to meet or even just glimpse his beloved. Nothing else attracts him; nothing else holds his attention; all else is meaningless, food, sleep, sex, attachments, responsibilities — all are no longer important. He is dominated by his sense of separation and cries in ecstasy to have a glimpse of the Lord. When the bhakti is blessed by divine grace he feels an undivided union, and nondual consciousness prevails. He and his Lord then are one, and a Divine experience assures the devotee of grace that comes from the Divine.\n' +
          '\n' +
          'Bhakti is the most direct method, the shortest way to experience the Divine. All yoga and knowledge, gyana, rests on the foundation stone of true faith, true devotion, true bhakti. There is nothing higher than love, and bhakti is the religion of love. Love is indeed God. To kindle the candle of love with the spark of knowledge, and to do the yoga of love, is bhakti.\n' +
          '\n' +
          'In the final stage of the opening of the sixth chakra, when the player has become liquid and pure, he understands the real value of the game.\n' +
          '\n' +
          'He understands reality both as it exists and as it appears. He knows the necessity of the plane of austerity, and of gyana, right knowledge, and sudharma, selfless service. He sees too that anger, conceit, nullity, sorrow, and ignorance are all meaningful aspects of experience. He is beyond all valuations. Everything has equal meaning and validity. He knows that as long as he remains in the body his karma die will lead him on his journey, stage by stage, square by square. He knows he will fall victim to serpents along the way, just as he knows he will find arrows as well.\n' +
          '\n' +
          'All around himself the player sees the same game enacted by others, all passing through the same states at different rhythms and at varying intensities. He has attained stability in himself by mastering his will. For further development he now needs an emotional center for his life. To lose his identifications he can do nothing other than identify with the Divinity, in one form or all. One form becomes every form at this moment, the moment the player lands in bhakti-loka. In whatever form he finds the Divine, all other forms are magically present. The form literally becomes the Deity, which in turn becomes the devotee, an ecstatic bhakta. Earlier the player did not accept Leela — play — as his basic nature and remained caught in sixth-chakra vibrations until his energy accelerated too rapidly and became violent. But acceptance of Leela gives him devotion to the game itself.\n' +
          '\n' +
          'He experiences the squares as a play of divine energy, and he feels oneness with each of them. They are all manifestations of his Lord. True bhakti, therefore, comes in the sixth chakra. Knower and known, subject and object, deity and devotee — all become One. In the sixth chakra the player understands this, and thus the many become a whole.\n' +
          '\n' +
          'In the fourth chakra there is duality. Unity comes after knowledge is gained, in the fifth chakra. Without spiritual devotion the player begins to think in terms of an ocean. Spiritual devotion is the arrow that rakes the drop to the ocean, after the drop has first realized the presence of the ocean within itself.\n' +
          '\n' +
          'This is the only direct path to Cosmic Consciousness. The essence of Cosmic Consciousness could not be realized by sheer gyana or right knowledge. It is spiritual devotion that converts Cosmic Consciousness into a friend and gives a face-to-face realization of the Divine to the player. Knowledge and wisdom only provide an awareness of the cosmic principle. Devotion lets the player see the Absolute manifested in all experience. The Divine presence is everywhere, in everything.\n' +
          '\n' +
          'Gyana makes a wise man out of the player, while bhakti makes him a divine child, ever in the warm lap of his mother and under the benevolent protection of his father. A wise man has to travel a long distance to see God. The bhakta is continually surrounded by the Deity in his myriad names and forms, in the sum total of life experience.'
      },
      55: {
        title: '55. Egotism (Ahamkara)',
        text:
          'Aham means “I” or “1 am." Kara (from akar) means form. When the I assumes a form it becomes ahamkara. When the center of activities in the player’s individual self becomes his “1,” then his ahamkara gets trapped in the maya of me and mine. When ahamkara — which is actually the highest aspect of reality — fails to identify with the whole and becomes a lonely part, then ahamkara becomes egotism.\n' +
          '\n' +
          'When all the attentions of the player are directed solely toward attaining the object of his desire, the player becomes self-centered. Means are no longer important. The only good means are those, fair or foul, that hasten him to his goal. As long as he has humility and consideration, respect, and love for others, the means he adopts will have to make sense to him. He knows his own desires are not so important that they justify causing pain to another. But when desire overcomes the player’s psyche, and he can no longer identify with humility, love, patience, respect, and consideration, he becomes an agnostic. He loses all sight of values in the here-and-now, by involvement in the karmas of establishing his identity in the game.\n' +
          '\n' +
          'Melding with Cosmic Consciousness looks like a death to the ego. Old patterns, notions, and ideas must fall away if the player is to attain liberation. But ahamkara does not want to die. The ego wants to hold on to old identifications. This resistance increases the closer the player comes to attaining Cosmic Consciousness.\n' +
          '\n' +
          'Hindu seers believe that sound is the source of all creation. Sound is the subtlest gross form in which energy existed before the creation. There are fifty-two forms in which sound energy exists in manifested form (akar), and when the human organism evolved, these sounds localized themselves at the nerve endings of the psychic energy centers. The beginning sound is the simplest sound, aa. The last sound is ha. So all existence is from aa to ha. And the sense of identification that joins the aa to ha is ahamkara, the sense of being an individual self.\n' +
          '\n' +
          'Yogis recognize consciousness in the human organism as having four primary aspects or categories: manas, mind; buddhi, intellect; chitta, being; and ego, ahamkara. All that is received as sensory perception is mind. The understanding of sense perceptions — their categorization and evaluation — is buddhi. The enjoyment and feeling of the sense perceptions is registered upon chitta. He who thinks he is enjoying or receiving those sense perceptions as one person is the ego, ahamkara. When this ego becomes "the only one,” every other thing becomes a means for the player to fulfill himself. Thus when ahamkara is not joined to Cosmic Consciousness it becomes egotism.\n' +
          '\n' +
          'Ego is a direct effect of the feeling-self, chitta. In order to play the game, this feeling-self identifies with an object that moves from square to square, sometimes raised higher by arrows and at other times dropped precipitously by snakes. When the player totally identifies with the object, becoming elated with the arrow’s rise and depressed with the serpent’s bite, he is a victim of egotism. He is too attached to the object of play and has forgotten his own divine nature.\n' +
          '\n' +
          'This ahamkara does not exist before the fifth chakra, while the player is still in the process of taking birth. The fifth chakra is the plane of the birth of man, where ahamkara appears on the stage. The ego passes through ignorance and right knowledge and learns to hear the voice of his conscience as he enters the sixth chakra. But it is in the seventh chakra that the player really establishes his identity and begins to stabilize himself around an internal center. The player has found that he does not exist as a separate reality, that he is a manifestation of energy and must at some stage in his development merge with his source. It is here that the ego faces the danger of death and can turn into egotism.\n' +
          '\n' +
          'The seventh chakra is the highest plane in the microcosm of the player. Here he reaches the peak and attains all that he has striven for. There are only two possibilities when one has attained a summit: merging upward in pure vibration and becoming formless, or falling. And the higher the player rises the farther there is to fall. If ahamkara fights the flow of sudharma, anger is the inevitable result. This draws his energy down to the first chakra, where he must begin again his climb to the top.\n' +
          '\n' +
          'Ego becomes egotism when the player is too self-centered.\n' +
          '\n' +
          'In Hindu mythology the Puranas are filled with descriptions of this egotism, which was always reached after great penance and austerity. After the aspirant attained the boon of power, and became an egotist, he proclaimed himself to be God. This false identification drew him down to first-chakra anger, greed, delusion, vanity, and avarice. The whole planet became disturbed. Earth appeared as a cow before Vishnu and asked him to relieve her of the burden of egotism. At this point as described in the epics, Vishnu, the great protector of life, assumed a form by taking birth. In l.eela, the God then sets out to slay the dragon of egotism in the player, an egotism contrary to the principle of preservation. Ahamkara is the food of Vishnu. Cosmic Consciousness is his dwelling place.'
      },
      56: {
        title: '56. Primal Vibrations (Omkar)',
        text:
          'Om is the one sound present throughout the universe, manifest and unmanifest. It is the subtlest form in which energy exists. Omkar is the plane of the vibrations that produce this cosmic sound by remaining true to their dharma. The player who lands here discovers Om as the true sound of all being.\n' +
          '\n' +
          'In the beginning there was sound, the Word. And the Word was with God and was God. This same sound can be realized by the player who abandons the trap of desires, which is mind, and meditates while creating sound with his body.\n' +
          '\n' +
          'Om is the basis of all knowledge, all poetry, all the fine arts. Centering on Om opens to the player all the vast resources within himself, which were blocked out before by lower-chakra maya.\n' +
          '\n' +
          'This same sound is also a great device for relieving tension. It is a sound used by every player consciously or unconsciously. For Om is the sound of humming. Everybody hums. Poets and composers, especially, make use of this sound to inspire creativity.\n' +
          '\n' +
          'Om is at once Creator, Preserver, and Destroyer — the three aspects of Divinity. If the player finds himself associated with a disturbing element in his environment and wants to align himself with the harmonic rhythms of the planet, all he need do is start humming. The process makes him introverted, turning inward to unearth the vast treasures buried in the depths of consciousness, chitta.\n' +
          '\n' +
          'If poets and composers vibrate in the lower chakras, their humming brings forth works that relate to that level of vibration. If they vibrate higher, their works relate to that higher plane. The Hindus believe that all the Vedas came out of Om. And it is clear that the Vedas were written by saints and seers who were also poets and composers already vibrating on high planes, for their work is the highest form of poetry, touched with the spark of the Divine.\n' +
          '\n' +
          'The player who lands in Omkar has realized the need for creating calm in his life, for simplifying his existence. Worldly distractions have kept him away from Om and the cosmic wisdom it unearths. With the simplification of his existence, each action performed is performed consciously. The player ceases to be a slave of habit. As his being becomes more finely attuned to reality, he literally hums.\n' +
          '\n' +
          'The humming process is Om-ing. This same sound appears in discussion when one affirms one is paying attention to the speaker. One makes a humming sound—Hmm or Ah. In the form of a sigh, Om relieves both pain and tension, and changes the body chemistry by driving out bad chemicals.\n' +
          '\n' +
          'Humming vibrates the whole system, but most especially the top of the head — the seventh chakra. In the sixth chakra Om was the sound for meditation, for bringing the player into contact with reality. Here in the seventh chakra, Om is realized — a fact of existence.\n' +
          '\n' +
          'The Vedic claim that Om enables the player to discover knowledge never present in his embodied life experience was confirmed in a study at the University of Saskatchewan. A group of 200 students chanted Om while trying to discover the answer to a question that none in the group knew. At the end of less than an hour of chanting, one in ten had uncovered the answer from the storehouse of cosmic knowledge that 0m unlocks.'
      },
      57: {
        title: '57. Gaseous Plane (Vayu-Loka)',
        text:
          'Vayu-loka (literally, “the plane of air”) is located in the region of satyaloka, the plane of reality, in the seventh row of the game board. This vayu is not the same wind or air as found on the physical or earth plane. It is the essence of the physical element air.\n' +
          '\n' +
          'Marut is the ruler of this plane. He is also synonymous with Indra, the lord of Heaven (Indra is one who has obtained supremacy over his sensual nature). Vayu-loka is a plane where the player becomes a current of energy along which the whole atmosphere moves, obtaining supremacy over mass and weight. Those who dwell in this region are enlightened souls with a light body who have not yet reached the satya-loka, the plane of reality.\n' +
          '\n' +
          'The player who lands in vayu-loka has made his passage through Omkar and achieved, through his karmas, higher vibrational patterns. Maruts are friends and brothers of Indra, controlling the atmosphere of the physical plane. They bring rain and fill the earth with the vital life-force. They become pranic energy on the physical plane and the lifebreath of breathing souls. Air is synonymous with movement, inside and outside the body. All movements of fluids inside living organisms are due to air. Air is essential to life, and each and every cell has a vacuole (an air space). Air is thus present everywhere. The dweller in vayu-loka, being the life-force, life-breath, has the same quality as was found in the sixth chakra: his presence can be felt anywhere, or in several places simultaneously. He can now dissolve the essence of his being, the ego, assume a gaseous form, and float in the gaseous plane.\n' +
          '\n' +
          'In the sixth chakra came the liquid plane, but liquid still has a form. Gas, however, has no definite form at all. Liquid contains both mass and weight; gas does not. The player is no longer burdened but he has gained true freedom of action. He becomes weightless and formless.'
      },
      58: {
        title: '58. Plane of Radiation (Teja-Loka)',
        text:
          'Teja means light, and teja-loka is the plane of light. In the Upanishads, self or consciousness is said to have four states:\n' +
          '\n' +
          '1.The waking state, called jagrat, in which the self is known as vaishvanara.\n' +
          '\n' +
          '2. The dream state, called swapna, in which consciousness is known as taijas or tejas   — full of light, or made of light.\n' +
          '\n' +
          '3. The state of deep sleep, called sushupti, in which it is known as pragya.\n' +
          '\n' +
          '4. The altered state of consciousness called turiya: the unconscious/ conscious state in which it is known as Brahman, Cosmic Consciousness.\n' +
          '\n' +
          'Teja is the light that was created in the beginning. The world that we experience in the waking state is the phenomenal world that comes in the stage of creation before this. The phenomenal world is in the teja   —  in the light from which it materializes. It appears to be similar to the world of the dream state, but it is not. That state is completely made of light. The images we see in photographs look exactly like the real person, but they are different patterns of light, which vary to create an illusion of reality. Taijas is related to the astral body sukshma, which is composed of light and in which the player dwells when he dreams.\n' +
          '\n' +
          'To radiate is to emit light. Omkar is sound. After sound comes air, vayu-loka. And after air comes fire, teja, the subtle element responsible for all the forms of manifestation. Fire cannot exist without air, just as the player cannot land in teja-loka without first passing through the plane of air.\n' +
          '\n' +
          'Every substance has a combustion point, a temperature at which it bursts into flame in the presence of oxygen. Heat is the excitation of molecules. The faster the molecules move, the greater the heat. Fire comes when this movement is too fast to be contained by the material. As the player rises higher and higher his own level of vibration increases. In the seventh chakra he reaches the essence of vibration. Then, his vibrations fully raised, he passes through air and bursts into radiant flame, giving light to all those around him.\n' +
          '\n' +
          'When the player lands in teja-loka his light can be felt throughout the world. Though there are billions of stars in the sky, only a few are brilliant enough to be visible, and there is but one sun in each solar system. It is here that the player becomes light, illuminated. He becomes a sun, gathering around himself the astral bodies necessary to form a complete solar system.\n' +
          '\n' +
          'The plane of radiation is not directly attainable by any arrow. The player must reach it slowly and gradually, unless he attains illumination through the practice of spiritual devotion.'
      },
      59: {
        title: '59. Plane of Reality (Satya-Loka)',
        text:
          'Satya-loka is the last plane of the seven main lokas seated in the spine of the game board. In satya-loka, akash tattva predominates: the player here attains the Shabd-Brahman world and is on the verge of liberation from the cycle of births and rebirths. He has reached the highest plane, beyond which lies the vaikuntha, the abode of Cosmic Consciousness. This loka does not perish at the night of Brahma, the Creator. Shabda is the word, the aum, which is itself Brahman (Absolute Reality, Cosmic Consciousness). Shabd Brahman is the plane of primal vibrations — Omkar. After passing through the plane of primal vibrations the player is able to establish himself in reality.\n' +
          '\n' +
          'Satya is truth, reality, God. Here the player reaches his highest chakra and becomes reality, realized. Before this level the game is all a process of evolving toward this nature, his own true reality. The player who reaches here attains harmony, a balance with the forces of the cosmos. There are no obstructions to the flow of his energy.\n' +
          '\n' +
          'It is here that the player becomes satchitananda (sat = truth; chit = being; ananda = bliss). He realizes that bliss is the truth of being. He stays in the state of samadhi as a drop rests in the ocean. He dwells in an ocean of bliss. His presence becomes divine, and he confers grace on other players.\n' +
          '\n' +
          'Even here the player is not liberated. There are three snakes in the seventh row of the game. The first is egotism. The second is negative intellect. The third is tamas. By reaching the plane of reality the player has escaped one of these snakes, but two are left to contest his quest for liberation. If doubt or laziness remains, the snakes will pull him down.\n' +
          '\n' +
          'But it the player stays in positive intellect, and his karma die leads him successfully past the snake of tamas, there remain happiness and the planes of the eighth row — and Cosmic Consciousness. He is aware of the dangers he faces, and he knows he must still perform right karmas to attain his goal. This is his realization on the plane of Reality. He realizes that not simply by vibrating in the seventh chakra will he attain Cosmic Consciousness. There are more karmas, more tests. There are no more arrows ahead of him, no more sudden upward movements of energy. He has to make his way according to his karmas.'
      },
      60: {
        title: '60. Positive Intellect (Subuddhi)',
        text:
          'Subuddbi is right understanding, which comes only after reaching the plane of reality. After the player reaches satya-loka he attains perfect nondual consciousness and perceives the Divine in all phenomena. Nondual consciousness is real subuddbi.\n' +
          '\n' +
          'As long as the player is in the body, intellect plays its part. It discriminates, distinguishes, and evaluates. In the seventh chakra these value judgments no longer relate to the outside world but turn inward to discern the player’s own inner reality. Each judgment produces a change in body chemistry. These states are known as feelings.\n' +
          '\n' +
          'When the player reaches Cosmic Consciousness his symbol, the ring (which is his body), loses importance. But until the sixty-eighth square is reached, the four faculties of consciousness — buddhi, manas, chitta, and ahamkara — keep working. Ahamkara in its negative phase becomes egotism. Buddhi also assumes positive and negative forms. Chitta remains in constant action and interaction with the three gunas.\n' +
          '\n' +
          'Before reaching the plane of reality, buddhi does not become a selfexisting phenomenon, and this is true for ahamkara as well. After the experience of samadhi in the seventh chakra, and the realization that comes from direct experience of the noumenon, buddhi starts analyzing and categorizing the experience. Here the direction can be either positive or negative.\n' +
          '\n' +
          'The positive way of vibrating, subuddhi, is achieved by following the path of dharma, the source of the arrow that ends here. Positive intellect joined to the flow of the player’s dharma are two of the most potent tools in the game to aid the player in his quest for liberation.'
      },
      61: {
        title: '61. Negative Intellect (Durbuddhi)',
        text:
          'If the player does not follow the law of dharma, doubting the cosmic nature of existence and the divine presence in his every experience, he is caught by the snake of negative intellect and brought down to nullity.\n' +
          '\n' +
          'He can neither relate to the lower planes nor call on dharma for help. He has to pass through all the second-chakra planes of vibration unless the arrows of mercy or charity intervene. Unless he gets the aid of the arrows he must atone for his negativity and find dharma again, or else chart an entirely new course of action.\n' +
          '\n' +
          'Buddhi is at once a great trap and a great tool for liberation. As subuddhi it is a tool in the service of liberation. So durbuddhi is a downward spiraling vortex, which sucks the psychic energy back into the plane of the imagination.\n' +
          '\n' +
          'Durbuddhi represents the negative valuations in the player that cause him to shut out possibilities. In order to reach his goal, the player must be able to accept whatever the world presents to him. If he denies any aspect, if he doubts the presence of God in any single object, he denies God. For the Divine is reality. All is the manifestation of the One. Durbuddhi is negation, negation of the Divine. This is why the player who comes here dwells in nullity. All his energies drained in his denial of God, he finds himself in futility. Until he can accept what he has denied, until he finds dharma again, he has no hope of liberation.\n' +
          '\n' +
          'Bur nullity is a transient state. Cosmic Consciousness is the only absolute. And if the player reaches the seventh chakra again, his forced banishment to nullity can provide the insight necessary to maintain positive intellect and avoid the jaws of this serpent.'
      },
      62: {
        title: '62. Happiness (Sukh)',
        text:
          'A balance in body chemistry and psychic phenomena: that is happiness. Sukh, happiness, is a state the player attains through vivek, conscience, or by chanting Om, achieving samadhi and maintaining a positive intellect.\n' +
          '\n' +
          'Sukh comes to the player when his conscience tells him that he is very near his goal, giving him the certainty that he is nearing liberation. The feeling he experiences is ineffable, beyond the power of words to describe. He feels the happiness of the river merging for the last time with the ocean after a thousand-mile journey, a feeling of merging with his source.\n' +
          '\n' +
          'If in his state of happiness the player does not neglect his karmas and become lazy and inactive, there is a real chance of attaining Cosmic Consciousness within his lifetime. But if he is overwhelmed with the experience of happiness and fails to act, sensing his mission complete, the snake of tamas lurks just beside him, to swallow him and drain his energies back to the first chakra.\n' +
          '\n' +
          'The game tells us he still needs a six to reach his goal, just as he needed six to take birth. But if he becomes lazy, if he feels there is nothing left for him to do, there lurk tamas and illusion.\n' +
          '\n' +
          'True happiness is for the player who maintains his balance as he nears his goal. The game is important in its totality. His stable intellect enables him to discern patterns of flow, the current of dharma. He accepts whatever life presents to him. There is nothing he rejects. Even if he reaches the eighth plane and must come back again to earth, he feels the happiness that comes with knowing there is a goal that can be reached.'
      },
      63: {
        title: '63. Darkness (Tamas)',
        text:
          'In Sanskrit tamas means dark, relating to darkness. Darkness is an absence of light. Light is knowledge; dark is ignorance; ignorance is mind. And tamas has a second literal meaning in Sanskrit: it means snake. Tamas is a dark snake, the longest snake in the game, one that inexorably draws the player back into illusion and out of the illumination of the plane of reality.\n' +
          '\n' +
          'In the seventh chakra, tamas is the ignorance that comes from attaching importance to sense perceptions. This ignorance comes after one realizes happiness and thinks that it is the end of the performance of karmas. But the player cannot stop all karmas. From happiness, the highest karma is a six, the lowest a one. Action cannot stop entirely.\n' +
          '\n' +
          'Tamas is complete surrender to illusion. The player has lost sight of the never-ending nature of play. He has forgotten that until liberation is attained the game is not over. Inaction is an attempt to avoid the law of karma. Karma is dharma in action. The player who lands in tamas has forgotten that play does not stop in the seventh row and that by attaining samadhi he has not attained liberation. When movement slows in the upward direction, it must still be expressed—and the only direction from the highest chakra is down. The longest snake in the game awaits the player who neglects his karmas.\n' +
          '\n' +
          'Three factors are at work in any event. The first is dharma, the essence of action. The second is karma, the action itself. The third is inaction, inertia, resistance. Because of the nature of the game, inaction triggers a downward flow of energy. Karmas are unavoidable. Attempting to avoid them is a karma itself, an action. Attempting to avoid karma is a karma that draws the player back to the second space of the game, illusion.\n' +
          '\n' +
          'Tamas is synonymous with the state of deep sleep. When the sensory organs are completely withdrawn and awareness dissolves in sleep, the player is no better than a corpse, even though he is still breathing. In meditation, when all activities of the mind completely stop and the sense perceptions are drawn inward, it becomes easy for the player to slide ever so gently from the sattvic  actionless state into the hypnogogic state, ending in deep sleep. For this reason tamas  falls in the seventh row of the game.\n' +
          '\n' +
          'It is here that tamas becomes a snake. At other spaces where he has vibrated, tamas has been necessary for the player. But here, in the plane of meditation (a form of inaction), tamas is a snake that changes the entire course of energy flow, drawing the player back to illusion. An attribute of tamoguna, tamas is the manifestation of the guna in the microcosm. When the same force is discussed as an attribute of Prakriti, the phenomenal plane, it is known as tamoguna.\n' +
          '\n'
      },
      64: {
        title: '64. Phenomenal Plane (Prakriti-Loka)',
        text:
          'Sri Krishna in the Bhagavad Gita defines prakriti as twofold: both manifested and divine. Manifested prakriti is the phenomenal world, composed of earth, air, water, fire, and akash, plus mind (manas), intellect (buddhi), and ego (ahamkara). This prakriti is eightfold and gross. The Divine prakriti is Maya Shakti. Krishna says to Arjuna, after mentioning the eightfold manifested prakriti, “Know my other prakriti, the higher, the life of all existence by which the universe is upheld.” This is the imperishable prakriti, the will of the Supreme, everlasting and ever passing. This prakriti is beyond the seven lokas, beyond akash. The element predominant here is mahat. which is the source of all other elements: mind, intellect, and ego. Maha is “great,” and stands for tattva (element), so mahat is maha tattva—the great element—from which the eight lesser elements emerge.\n' +
          '\n' +
          'So therefore, gross, phenomenal existence comes from the divine prakriti. After the process of manifestation is complete, with the evolution of the individual self or man, a counter evolution starts—the self wants to reach back to the source. In this process the player starts from the physical plane (which he has reached in his journey from subtle to gross) and through karma and spiritual disciplines crosses the seven lokas. When he is able to overcome tamas he reaches prakriti-loka.\n' +
          '\n' +
          'Up to the seventh level of the game the player confronts manifestations of prakriti. But after crossing through these seven planes he has gained experience and perspective. He is able to see what lies behind the world of sense-objects, and that is prakriti. Every percept has a concept. Concept without percept is empty; percept without concept is blind. Now the player draws near the concept, equipped with the percepts of his experience. Now he understands the fountainhead of phenomenal existence.\n' +
          '\n' +
          'In Sanskrit prakriti means the original form of a thing, origin or source, material cause, the matter out of which anything is formed, a pattern, a woman, a mother. Prakriti is energy in its primordial form. It is energized consciousness, conscious energy in undifferentiated vibration. From this state develops the phase of consolidation of energy, of differentiation, of manifestation. Out of this state consolidated energy manifests itself in three primary dimensions:\n' +
          '\n' +
          '\n' +
          '1. The material content (which is also inertia, latent potential) that forms the body of the phenomenon.\n' +
          '\n' +
          '2. Action and interaction in the process of evolution.\n' +
          '\n' +
          '3. The purpose inherent within the phenomenon: the noumenon.\n' +
          '\n' +
          '\n' +
          'When the player lands in prakriti-loka after passing through the plane of reality, he is able to apprehend the three gunas and the five elements in their most essential form.'
      },
      65: {
        title: '65. Plane of Inner Space (Uranta-Loka)',
        text:
          'After crossing the seventh row of the game and realizing the existence of prakriti, the player begins to merge into the source of phenomena, the great unenergized consciousness. At the moment of mergence all duality ceases. The player receives the pure experience of his own vast dimensions, the infinite space that lies within the Self.\n' +
          '\n' +
          'Ur means the feeling self. Ant means end. Uranta-loka is the place where the feeling self ends, where all sense of separation ends. The player experiences the unfathomable depths within his own self. He finds the evolution and dissolution of all creation within the space of a single breath. He sees that all barriers are illusory. He has understood the nature of prakriti and realized the oneness that lies behind all manifestation. Now he is merging with that oneness.\n' +
          '\n' +
          'Here there are no feelings. The witness-self has become fully realized. There is no good or bad, no vice or virtue. The player is a clear lens, allowing the passage of all light without restriction.\n' +
          '\n' +
          'A description of uranta-loka can be found in the Puranas or Samhitas, works penned by seers and saints who experienced this space. They vividly described the cosmic knowledge that flowed through them. They became lenses of the lamp of pure knowledge, holding on to nothing, understanding everything.'
      },
      66: {
        title: '66. Plane of Bliss (Ananda-Loka)',
        text:
          'Consciousness is truth, being, and bliss—satchitananda. Ananda is the highest truth, the essence of being.\n' +
          '\n' +
          'In the process of manifestation the Self is slowly covered by five sheaths. The first and most subtle sheath is anandmayee kosh, the sheath of pure being, pure feelings of pure consciousness. This is the sheath of bliss (ananda). At the center is Cosmic Consciousness. During the period of manifestation this acts as the individual consciousness.\n' +
          '\n' +
          'The second is the level of ego and intellect. This sheath is called vigyanmayee kosh. Vigyan is a combination of vi and gyam. Vi means beyond, gyana knowledge, mayee engrossed, and kosh sheath. This sheath, which deals with the knowledge of the beyond, is ego (which perceives itself as a separate reality) and the intellect (the evaluator).\n' +
          '\n' +
          'The third is the sheath of the mind, the manomayee kosh {manas = mind). Mind works with the help of five sensory organs: the ear, the skin, the eye, the tongue, and the nose. From here comes all perception of the phenomenal world, the world of desires.\n' +
          '\n' +
          'The fourth is pranmayee kosh, the sheath of prana, the vital lifeforce, the energy that operates through the five work organs and systems inside the body, including the blood vascular system, the respiratory system, and the nervous system, through which karmas are performed.\n' +
          '\n' +
          'The fifth and most gross sheath is the annamayee kosha. Anna means the grain or food from which muscles, skin, teeth, blood cells, and semen are composed—the phenomenal person.\n' +
          '\n' +
          'In the evolution of the inner self this process is reversed. The player goes through the annamayee kosh to the pranmayee, and crossing the four sheaths establishes himself finally in the sheath of bliss, the anandmayee kosh. Ananda is the chief characteristic of consciousness. It differs from pleasure, happiness, joy, and delight. These others can be explained, observed, and evaluated. They are relative states, which intellect can evaluate and categorize. Buddbi leads to gyana, the arrow that leads to the plane of bliss. Ananda is the primordial feeling of which all others are but manifestations. It underlies feeling and always exists at the heart of the player’s being. But ananda can only be experienced directly, not observed in others. A deaf-mute cannot communicate the taste of a piece of candy in words. Only movements, gestures, and expressions can be employed. Ananda cannot be described or expressed; it can only be experienced.\n' +
          '\n' +
          'In uranta-loka the feeling-self ended. All feelings became one when the world of sense-objects became one, since feelings are based on sensory perceptions. And prakriti-loka gave the player the knowledge that all sense-objects arc but expressions of the one phenomenon.\n' +
          '\n' +
          'Here but one feeling remains, the feeling of bliss. The experience of bliss is difficult until one achieves wisdom and becomes realized. The only alternative is devoting full attention to dharma while making the gradual journey up through the planes, avoiding all the snakes.'
      },
      67: {
        title: '67. Plane of Cosmic Good (Rudra-Loka)',
        text:
          'Rudra is one of the names of Shiva. Creation is the start of a threefold activity. It is followed by preservation of manifested forms and finally their disintegration or destruction. Each existing phenomenon is therefore going through the cycle of creation, preservation, and destruction. These three processes arc ministered by the three powers of the one Creator, who is created by none and creates all. He creates from his will the Creator (Brahma), the Preserver (Vishnu), and the Destroyer (Shiva). The three are interrelated and interdependent. Creation is the divine will, and so are preservation and destruction. Without destroying the false identity—the concept of a separate reality, the individual ego—real union is not possible. Thus Shiva makes the individual consciousness one with Cosmic Consciousness.\n' +
          '\n' +
          'Rudra is the lord of the south in the phenomenal world and is the furious form of Shiva. He was known as Rudra because he took birth from the cry of the Creator, Brahma. By his grace the mortals live, enjoy the divine game, create, destroy, or pay back karmas—the physical plane or phenomenal world being the land of karma.\n' +
          '\n' +
          'Shiva also means good, good for all. He is cosmic good, alchemically changing magnetic into electrical energy and sending it back to the source. This evolution of individual consciousness is completed on the plane of Rudra. Here there is only one more step to union with Cosmic Consciousness. This is the loka, where the player’s final purification takes place. This plane is beyond the manifested universe and is composed of the same element as ananda-loka, the plane of bliss.\n' +
          '\n' +
          'Knowing, feeling, and doing are the three attributes of human consciousness. Knowing what? Truth. Feeling what? Beauty. And doing what? Good. For the player of the game, these three are the summum bonum of human existence. Good (being) is chit, truth is sat, beauty is ananda: satchitananda. By following the path of satyam shivam sundarum—truth, beauty, good—the player becomes satchitananda. These three aspects of consciousness are also known as bindu, bija, and nada, and they are worshipped as the three primary gods: Brahma, Vishnu, and Rudra.\n' +
          '\n' +
          'Doing good requires knowledge of the right. Right knowledge can lead the player to the experience of cosmic good directly from the fifth chakra. The player who reaches here offers no resistance to the flow of dharma. 1 le simply does his job, whatever the cosmic forces ask of him.\n' +
          '\n' +
          'Rudra-loka is one of the three central squares of the uppermost row of the game. These spaces are the dwelling-places of the Godforces responsible for all creation, the forces with which the aspirant tries to identify. The player who seeks to identify with knowledge of the right finds himself in the abode of Shiva. Here he realizes the right, cosmic good. The essence of cosmic good is truth, while its form is beauty.'
      },
      68: {
        title: '68. Cosmic Consciousness (Vaikuntha-Loka)',
        text:
          'Above and beyond all other lokas, in the region of the beyond, is Vaikuntha—the loka of Cosmic Consciousness, the prana of manifested reality. This loka is also composed of mahat, the “element” that is the source of elements and not an element by itself.\n' +
          '\n' +
          'Before the player starts to play the game, he accepts the importance and significance of this, the plane of Being, which is always his goal. Whatever desires lure him away from his path, this is always his highest desire—to attain moksha, liberation.\n' +
          '\n' +
          'Vaikuntha is the abode of Vishnu and the plane every Hindu hopes to realize after passing from the present form of existence. The dwelling-place of Vishnu is the plane of Cosmic Consciousness because Vishnu is truth, the great protector of consciousness throughout its upward climb.\n' +
          '\n' +
          'The karma die observes the vibrational level of the player at all times. The die determines where the player must be placed and what course of action is to be adopted. The player can follow ashtanga yoga, the eightfold yoga, and evolve path by path through the eight levels. Or he can follow dharma and become a bhakta, a spiritual devotee. All paths lead to the same place.\n' +
          '\n' +
          'Whatever his course of action among the limitless possibilities, the player has now arrived at the seat of Vishnu. And Vishnu is the essence of all creation. Cosmic Consciousness itself, truth. It is directly above the plane of reality because the highest reality is truth.\n' +
          '\n' +
          'The ring that symbolized the player goes back to the finger of the one who wore it: it has lost all meaning. The game stops. What happens now depends on the player. The nature of cosmic play is simple. It is to discover by what different combinations, with what new karmas, with which companions can the player reenter the game and strive anew to seek the state that is his real home. He can continue the game of hide-and-seek with himself, or he can remain beyond the game for ever. Or he can go back to earth to see if he can help others reach the goal, thus taking the role of the twice-born boddhisattva. The choice is his. No one else can choose.'
      },
      69: {
        title: '69. Absolute Plane (Brahma-Loka)',
        text:
          'On one side of Vaikuntha is the loka of Rudra, and on the other side is the loka of Brahma, forming the triad of Brahma, Vishnu, and Shiva in the middle of the game board, in the topmost row. This plane is higher than manifestation: the seven major and other minor planes mentioned and not mentioned on the game board. The predominant element is again mahat. Those who have established themselves in the truth dwell here without fear of going through karmic roles again, while those who practice mercy also reach the plane of Brahma, the Creator, and dwell there fearlessly.\n' +
          '\n' +
          'Brahma is the creator of phenomenal existence. He is the active principle of noumenon, the force that energizes consciousness into the countless patterns and forms. His abode is Brahma-loka. The player landing here merges with this Absolute, this subtle principle. Brahma is the cosmic organizer who decrees the laws of form.\n' +
          '\n' +
          'Though situated immediately adjacent to Cosmic Consciousness in the eighth row of the game, Brahma cannot liberate the player. Play must go on. Brahma decrees the form of the game, but there is more to the game than form. Truth alone can liberate the player. The three gunas await the player, and the serpent tamoguna must eventually take the player back to earth, the mother. He goes back to the sixth chakra, but not without the insight into the principles of the game that he attained in Brahma-loka. This insight can help him to his goal, and on earth spiritual devotion waits one throw of the die away.'
      },
      70: {
        title: '70. True Nature (Satoguna)',
        text:
          'Sat means truth. When liberated, truth is Cosmic Consciousness. But this same truth, linked to the karma die, becomes subject to the three gunas, the three primary aspects of consciousness (guna means attribute). Attributes are qualifications of the player who is still linked to the karmic die.\n' +
          '\n' +
          'Truth is the essence of existence. And in anything that exists the three gunas operate. Truth cannot exist of itself; it would then merge into Cosmic Consciousness. But the game is not finished; the ring is still there. So it is through these three gunas that consciousness will manifest itself for the remainder of the game. The player must return to earth and its game, both of which are products of the gunas.\n' +
          '\n' +
          'Sattva by itself will create a state of equilibrium. Activity is required, and material to be activated. Satoguna is synonymous with light, essence, true nature, and vibration at its highest frequencies. The undisturbed state of meditation that gives rise to samadhi comes about when sattva predominates.\n' +
          '\n' +
          'All that exists contains sattva, rajas, and tamas; yet nothing is purely sattvic, rajasic, or tamasic. As long as there is form, the creation of Brahma, all three are present. Only the proportions vary from moment to moment.\n' +
          '\n' +
          'In the waking state rajas is predominant, while sattva is in the background contributing understanding and knowledge and enabling the player to act out his role.\n' +
          '\n' +
          'In the dream state rajas is again predominant, and the dreaming self gets education from sattva. We never see darkness in our dreams; their light comes from sattva. Dreams are a process of purification, and in the dreaming state one is not bound by the laws of the physical plane. The player dwells in his astral body—away from and outside his physical body, yet connected with it by sattvic links.\n' +
          '\n' +
          'In the deep-sleep state tamas is predominant, while sattva and rajas go into the background.\n' +
          '\n' +
          'In turiya—the state of unconscious consciousness or samadhi, trance—the player dwells in pure sattva. When one is able to transcend the gunas, one is a realized being known as gunateet (beyond guna). These gunas are the dynamic forces that bring about changes in primordial prakriti and help the process of manifestation, becoming active when the cycle of creation starts. They are not three different entities but are interconvertible. Sattva during the process of evolution becomes tamas, creating sound, touch, sight, taste, and smell frequencies. The converting agent is rajas. Tamas in the evolution of consciousness becomes sattva in the same way, with the help of rajas. Sattva by itself is inactive and without the help of rajas cannot change. Sattva predominates on earth from twilight to three hours after sunrise.'
      },
      71: {
        title: '71. Activity (Rajoguna)',
        text:
          'Rajoguna is the activity in consciousness, or consciousness in activity. After reaching the eighth plane and failing to attain Cosmic Consciousness, the player is drawn on by karma, activity. This activity is the cause of all suffering. It predisposes one who is acting, and he is liable to fall prey to ambition and grow fond of rewards. Any obstacle in the course of pursuing a reward, or a desire, causes pain, suffering, and sorrow. When rajoguna dominates, pain and agony can be the result.\n' +
          '\n' +
          'In samadhi the player dissolves rajoguna into satoguna and becomes pure light, sattva. If rajoguna remains, the player cannot attain samadhi, and tamas drags him back to earth. Because karmas accumulate and generate frequencies of vibration, these patterns take on form and become subject to the game.\n' +
          '\n' +
          'As a guna, rajoguna balances sattva and tamas. Tamas tries to dominate sattva. Sattva tries to dominate tamas. Both are extremes of energy in guna form. Rajas tries to keep sattva and tamas in balance and makes the world of pleasure and pain, name and form, possible. No guna can exist by itself.\n' +
          '\n' +
          'Rajoguna is active from three hours after sunrise to the evening when the sun starts setting. During this period the planet earth becomes active, and all the karmas concerning the preservation of life are performed. Rajas makes the player perfectly extrovert—and when he ceases to be an extrovert, rajoguna becomes an internal dialogue. Without conversation of rajas into sattva, the achievement of higher states of consciousness is not possible. By employing rajoguna in sattvic jobs one can remain in sattva while active.'
      },
      72: {
        title: '72. Inertia (Tamoguna)',
        text:
          'After sunset tamoguna predominates until twilight and puts the whole world to sleep. As gunas, satoguna, rajoguna, and tamoguna remain in primordial prakriti. After creation starts, mahat comes into existence, in which satoguna predominates. From mahat comes buddhi (intellect); from buddhi comes ahamkar (ego), which becomes sattvic ahamkar, creating mind (manas), and rajasic ahamkar, creating indriyas (the sensory organs and work-organs) and tamasic ahamkar, creating the tanmatras. Tanmatra denotes that which is pure, not mixed. The tanmatras are five: sound, touch, color, taste, and smell. They correspond to the five great elements (maha bhutas): akash, air, fire, water, and earth. Combined, they create the individual self, in which these gunas are active in all four states of consciousness. Acting in the manifested world, they are not the pure gunas of primordial prakriti, for they have also become manifested. At that level, tamoguna becomes the greatest snake of the game board, tamas, at the end of the seventh chakra. In the eighth row the gunas are near the source and consequently purer.\n' +
          '\n' +
          'The last square of the board and the beginning of a new phase of cosmic play provides the form, the material for the player. It comes in the form of a snake that bites the player and brings him back to earth.\n' +
          '\n' +
          'Tamoguna is differentiated conscious energy. It contains light, but because of ignorance and lack of initiation it cannot evolve by itself. It needs rajas before the sattva within it will come out, reaching down to earth and taking form with the help of karma. Tamoguna veils the truth, making a serpent appear as a rope and a rope as a serpent. Darkness is the essential attribute of tamoguna, and inactivity its nature. The player who lands here immediately leaves the plane of cosmic forces and returns to earth to discover a new path to truth.\n' +
          '\n' +
          'What happens is known only to the player and to the One who is truth.'
      }
    }
  },
  ru: {
    menu: {
      navigation: {
        game: 'Игра',
        about: 'Об игре'
      }
    },
    about: {
      title: 'Что такое Лила?',
      description: {
        first: `Лила, также известная как "Лила Чакра" или "Игра самопознания", — это древняя индийская настольная игра, основанная на йогической философии. Она символизирует жизненный путь, цель которого — достижение самореализации. Изначально созданная индуистскими мудрецами, Лила представляет различные этапы духовного прогресса, кармические влияния и жизненный опыт. Игра сочетает элементы "Змей и лестниц" с философским руководством по самопознанию. Она предназначена не только для развлечения, но и для того, чтобы помочь в осознании своего духовного и личностного роста.`,
        second: `Цель игры Лила — достичь верхней клетки, которая символизирует окончательную самореализацию или "Мокшу". Игроки проходят через разные клетки, представляющие аспекты жизни, добродетели, пороки, чакры и духовный опыт. Игра учит о цикле перерождений, кармических последствиях и пути к просветлению.`
      },
      rules: {
        title: 'Правила игры',
        description: {
          first: `Чтобы начать цикл духовного роста, игрок должен сначала испытать искреннее, внутреннее желание отправиться в путешествие, что означает готовность сознания к новому началу, — и затем выбросить шестерку. Когда вопрос задается с искренним намерением, в сердце часто возникает теплое чувство уверенности, которое сигнализирует о благословении от высшей силы. Это ощущение успокаивает игрока, позволяя ему с доверием бросить кубик, чтобы выпало шесть. Выпавшая шестерка символизирует "пробуждение", необходимое для набора импульса для начала пути. Только выбросив шесть, игрок может перейти с клетки 68 на клетку 1, где официально начинается путешествие прогресса. Это символизирует божественное время, необходимое для духовного продвижения. Если игрок не выбрасывает шесть, он остается на клетке 68, ожидая. Этот период ожидания дает игроку возможность обдумать свои намерения в игре и сосредоточить свое сознание, готовясь к предстоящему пути.`
        },
        ladders: {
          title: `Лестницы`,
          description: `Некоторые клетки действуют как лестницы (положительные добродетели, состояния сознания и т. д.), позволяя игроку сразу перейти на более высокую клетку.`
        },
        snakes: {
          title: `Змеи`,
          description: `Некоторые клетки содержат змей (представляющих пороки, негативную карму или трудности), которые заставляют игрока спуститься на более низкую клетку.`
        },
        objective: {
          title: `Цель`,
          description: `Цель игры — продвигаться вперед, понимая урок, который дает каждая клетка, на которую вы попадаете.`
        },
        understandingSquares: {
          title: `Понимание клеток`,
          description: `Каждая клетка представляет собой символический аспект жизни или духовное учение. Когда игрок попадает на клетку, ему следует уделить время, чтобы прочитать или интерпретировать значение этой клетки, поразмыслив над ее смыслом. Эта саморефлексия является важной частью игры, так как Лила задумана как путь внутреннего осмысления.`
        },
        chakras: {
          title: `Достижение высших чакр`,
          description: `Многие игровые поля Лилы включают семь чакр, каждая из которых связана с определенными клетками на доске. Игроки проходят разные этапы самопознания, поднимаясь от нижних чакр (корневой или базового уровня сознания) к высшим чакрам (венечной, символизирующей просветление). Если игрок достигает клетки, связанной с высшей чакрой, ему предлагается остановиться и поразмышлять над соответствующими духовными прозрениями.`
        },
        winning: {
          title: `Победа в игре`,
          description: `Игрок, который достигает финальной клетки, символизирующей "Мокшу" или освобождение, выигрывает игру. Достижение Мокши означает выход за пределы цикла жизни и смерти, представляя собой метафорическое освобождение от земных желаний и эго.`
        },
        karmicLessons: {
          title: `Кармические уроки`,
          description: `Игра побуждает игроков размышлять о своем жизненном пути, добродетелях и трудностях. Когда игрок попадает на определенные клетки, он может тянуть карты (если игра включает колоду) или обращаться к руководству игры, чтобы понять кармический или духовный урок, связанный с этой клеткой.`
        }
      }
    },
    gameView: {
      smallScreen: 'Для игры используйте экран размером не менее 816 пикселей.'
    },
    dice: {
      winMessage: 'Поздравляем! Вы достигли Космического Сознания.',
      playAgain: 'Нажмите здесь, чтобы сыграть еще раз. История будет удалена.',
      lastGameLine: 'Чтобы продолжить, вам нужно выбросить ${maxAllowedNumber} или меньше.',
      startWithSix: 'Выбросьте 6 на кубике, чтобы начать игру.'
    },
    history: {
      historyTitle: 'История игры'
    },
    cards: {
      1: {
        title: '1. Бытие (Джанма)',
        text:
          'Рождение — это вступление в кармическую игру. Кубик — это кармический игрок, а индивидуальное "я" — символ, который перемещается от дома к дому, куда бы ни указывал кубик. До рождения человек находится вне игры. Как только рождается, он связан законом кармы. Этот мир — Кармаленд.\n' +
          '\n' +
          'Желание ведет игрока к принятию рабства кармы. Если у человека нет желания играть, он не будет привлекаться к игре. Но игра — это природа сознания. В начале не было игры; но игривое начало сознания не могло оставаться неподвижным, не играя. Так что… «Да будет свет». Да будет игра. Абсолют стал множеством из Единого, чтобы сыграть в игру.\n' +
          '\n' +
          'Когда игрок решает войти в игру, он воссоздает первобытное творение, когда Абсолют пробудился от бездействия и начал макрокосмическую игру, в которой мы все — лишь микрокосмы. Как только решение играть принято, игрок должен соблюдать правила (дхарму), рабство кармического кубика.\n' +
          '\n' +
          'Здесь игрок впервые вступает в игру после того, как выбрасывает шестерку. Когда пять тонких элементов (эфир, воздух, огонь, вода и земля) и одно сознание объединяются, эти шесть иницииируют движение символа игрока по доске. Каждое рождение — это начало новой игры, и цель в каждой игре одна и та же — Космическое Сознание. Нет другой директивы, другой цели, другого смысла в игре. Игра существует лишь для завершения цикла. Рождение — это ключ. Он открывает двери игры, и игрок начинает вибрировать, отправляясь в вечное путешествие, свой путь к завершению.\n' +
          '\n' +
          'Единица — это единство, ответственное за все проявления. Как все нечетные числа, она принадлежит солнечной семье. Единица особенно обозначает солнце, которое является единством, ответственным за рождение этой планеты. Единица представляет собой независимую личность, независимое решение, независимую жизнь, стремление к чему-то новому, новизне, оригинальности.'
      },
      2: {
        title: '2. Иллюзия (Майя)',
        text:
          'Когда человек принимает вступление в игру как игрок, осознание единства теряется в одержимости (очаровании) игрой. Это овладение сознанием и есть удовольствие от игры. Единое становится многим, чтобы сыграть в игру космического прятки с самим собой. Чтобы удовлетворить свое эго, игрок устанавливает игру и ее правила и обязуется играть по ним до конца.\n' +
          '\n' +
          'Единое — это реальность. Множественность — это иллюзия. Эта иллюзия множественности создается скрывающей силой Единого (Верховного Сознания). Эта скрывающая сила называется Майя Шакти, или майя. Эта скрывающая сила создает иллюзию "меня и моего", или "тебя и твоего", что порождает неведение в индивидуальном сознании. Те, кто осознает это неведение, называют его авидьей (a = нет; видья = знание; таким образом, неведение или отсутствие знания). Поэтому йоги также называют майю авидьей. Это неведение приходит в индивидуальное сознание через ум; поэтому йога — это практическое средство для остановки изменений ума, и цель йоги — остановить ум, прекратить внутренний диалог, выйти за пределы ума и осознать свою истинную природу, за пределами иллюзии "меня и моего".\n' +
          '\n' +
          'Мир имен и форм — это майя. Майя — это сцена и обстановка, в которых игрок разыгрывает свою микрокосмическую трагикомедию. Майя — это сама игра, представляющая игроку ситуации и шаблоны, которые дают ему тонкие подсказки для понимания своей истинной природы.\n' +
          '\n' +
          'Эту иллюзию можно увидеть на каждом уровне. Само человеческое тело не является единицей существования, а состоит из бесчисленного количества клеток и мицелл. Если каждая клетка начнет развивать ощущение "меня и моего", каждое человеческое тело станет субконтинентом. Это индивидуальное эго (ахамкара) создает отдельные единицы существования — но это и есть майя (иллюзия). Эго не может функционировать без ума, как и ум не может без органов чувств. Поэтому только после того, как ум приведен в подавленное состояние, ощущение "меня и моего" может быть полностью уничтожено. Только йогой можно достичь этого состояния и положить конец этой иллюзорной чувству независимой единицы. После осознания истины через прямой опыт реальности в самадхи, Майя Шакти может быть понята, и человеческая психодрама может быть воспринята как божественная игра, как Лила.\n' +
          '\n' +
          'Майя Шакти — это сила, которая порождает эволюцию феноменального мира. Это становится возможным через взаимодействие трех гун: саттвы, раджаса и тамаса.\n' +
          '\n' +
          'Космическое Сознание становится индивидуальным сознанием через свою собственную майю. В индийской литературе майя описана в самых разных контекстах, и все же невозможно объяснить все о ней — она бесконечна, как и само Космическое Сознание.\n' +
          '\n' +
          'Единственная задача, стоящая перед игроком, — осознание того, что он игрок, что ощущение разделенности, которое он испытывает, иллюзорно. Все, что игрок воспринимает о феноменальном мире, существует внутри него самого в виде сенсорного восприятия и является иллюзией. Современные науки, которые пытаются исследовать природу истины, подтверждают это утверждение. И современная наука, и древняя мудрость верят в единую первичную субстанцию, к которой можно свести различные формы материи. Все феноменальное существование — это всего лишь одно из многих проявлений этой единой сущности. Элементы — это различные формы этой одной субстанции. Разнообразие нашего опыта обусловлено перестановкой и сочетанием атомов материи, в которую материализуется эта первичная энергия. Это разнообразие в единстве — иллюзия, и оно вызвано скрывающей силой Верховного Сознания. Все, что игрок воспринимает о феноменальном мире, существует внутри него самого. Человек рождается, чтобы играть в игру, чтобы различить тонкие принципы, действующие внутри грубого. Игра заключается в том, чтобы достичь единства, чтобы положить конец дуальности.\n' +
          '\n' +
          'Число 2 означает дуальность, которая является иллюзией. Два возникает, когда единица повторяет себя. Два — это майя, потому что оба были присутствуют в Едином. Два — это внутренний и внешний мир; не проявленный и проявленный, Шива и Шакти, мужчина и женщина, солнце и луна, грубое и тонкое, Абсолют и майя, ноумен и феномен. Поэтому два — это число майи. Два — четное число и, как все четные числа, является членом лунной семьи; оно особенно связано с луной и лунной энергией.'
      },
      3: {
        title: '3. Гнев (Кродха)',
        text:
          'Понимание природы эго является необходимым для осознания гнева. Эго — это то, что идентифицирует себя как "я" и "мое". Человек — это существо, которое растет через процесс последовательных идентификаций. После рождения ребенок сначала идентифицирует себя как отдельное существо, когда он начинает ощущать разделение с матерью. Затем идет идентификация с другими членами семьи, принятие их моделей поведения и форм мышления как своих собственных. Затем ребенок начинает ассоциировать себя с сверстниками того же пола. Позже в жизни он ищет свою идентичность среди представителей противоположного пола.\n' +
          '\n' +
          'Конец его пути наступает, когда его эго делает окончательную идентификацию с Абсолютом и сливается с Космическим Сознанием.\n' +
          '\n' +
          'Эго работает с интеллектом в процессе идентификации. Интеллект сохраняет информацию, полученную в процессе идентификации, особенно ценностные суждения, полученные от тех, с кем существо наиболее близко идентифицируется. Настоящее "Я" внутри знает, что все реальности содержатся в нем самом. Однако идентифицирующее "Я" исключает эти аспекты, признанные злыми теми, с кем оно идентифицируется.\n' +
          '\n' +
          'Гнев — это эмоциональная/химическая реакция, возникающая, когда эго сталкивается с аспектом "я", который оно отвергло и признало злом. Существование этого негативного аспекта воспринимается как угроза существованию. Действительно, существование текущей самоидентификации действительно сталкивается с реальной угрозой. Тогда эго проецирует отвергнутый аспект "я" на другого, через которого он проявляется, и направляет свою энергию на устранение нежелательного аспекта. Это и есть природа гнева.\n' +
          '\n' +
          'Гнев — это проявление множественности, слабости. Это хвост змеи эгоизма. Это нисходящая проекция энергии, которая приводит игрока к первому чакре. Когда эго страдает, человек чувствует гнев. Гнев — это неуверенность — основная одержимость первой чакры.\n' +
          '\n' +
          'Гнев — это большое препятствие на пути духовного роста. Он производит огонь и жар, и сжигает все. Но когда этот гнев проявляется без личных чувств и является импersonalным, он очищает. Гнев — это качество Рудры, господина разрушения. Его гнев не основан на личных причинах, и поэтому он уничтожает не его самого, а зло, которое вызывает дисгармонию и дисбаланс. Гнев, вызванный личными причинами, затмевает нежные качества "я" и опускает энергию вниз. Гнев, вызванный импersonalными причинами, разрушает собственную причину, которое является злом. Гнев — это другая сторона любви. Мы не можем быть злыми на тех, с кем мы не идентифицируемся. Гнев возбуждает нервную систему и полностью приостанавливает рациональный ум на то время, пока он остается в системе. В одном смысле он очищает тело и очень похож на огненное очищение, но цена слишком высока, потому что он опускает человека слишком низко, и он должен начать снова с первого ряда игры.\n' +
          '\n' +
          'Гнев может быть выражен двумя способами: насилием или ненасилием. Когда ненасилие принимается как способ выражения гнева, оно создает большую моральную силу и становится сатяграхой (сатя - истина; аграха - настойчивость). Это возможно только когда игрок сохраняет спокойствие, даже если он действительно испытывает гнев. Этот гнев — импersonalный. Он направлен против зла. Он основан на любви: любви к добру, любви к истине. Этот гнев помогает духовному росту и является божественным.\n' +
          '\n' +
          'Три — это число творчества, выражения и стабильности. Член семьи нечетных чисел, 3 — динамичное и позитивное число; оно устанавливает паттерн. Оно символизирует элемент огня, который у людей проявляется как гнев. С положительной стороны тот же элемент может стать рвением. Таким образом, сила и решимость являются характеристиками числа 3. Три — это число планеты Юпитер. Юпитер является символом смелости, мужества, силы, энергии, труда, знания, мудрости и духовности.'
      },
      4: {
        title: '4. Жадность (Лобха)',
        text:
          'Чувство отделенности, возникшее с рождением, вызывает жажду удовлетворения. Чтобы функционировать в мире, игрок должен сначала удостовериться, что его физические потребности удовлетворены. Чтобы присоединиться к игре, игрок должен есть, иметь место для отдыха и одежду. Материальное выживание является основной заботой в первой чакре.\n' +
          '\n' +
          'Жадность возникает, когда игрок путает свое ощущение неудовлетворенности с потребностью в материальном выживании. Достигнув базовых жизненных потребностей, он все равно чувствует пустоту. Все, что он научился делать, это поддерживать свое физическое существование. Поэтому он использует эти базовые навыки выживания, чтобы приобретать все больше и больше материальных благ в надежде удовлетворить себя.\n' +
          '\n' +
          'Чем больше он приобретает, тем глубже становится его зависимость. Его чувство пустоты достигает уровня паники, и его действия становятся все более отчаянными. Легенда о царе Мидасе и его золотом прикосновении — классическая западная история о последствиях жадности. Эта жажда материального успеха также является коренной причиной всех военных завоеваний.\n' +
          '\n' +
          'Жадность происходит от неуверенности, а неуверенность — от неверной идентификации "Я". Когда игрок не верит в Бога, он не верит в провидение. Жадность — это конечная стадия змеи зависти. Жадность делает игрока недальновидным. Он не понимает, что жадность в конечном итоге бессмысленна. В конце концов, все материальные владения оставляются, будь то добровольно или по вмешательству смерти. Но жадность может стать полезной для духовного роста, если человек станет жадным к духовному опыту, знанию и любви.\n' +
          '\n' +
          'Игрок, который падает в жадность, также открывает ворота в майю, гнев и все другие проблемы первой чакры.\n' +
          '\n' +
          'Четыре символизируются как квадрат, представляющий четыре измерения, четыре направления. Это символизирует элемент земли. Как член семьи четных чисел, 4 стремится к завершению. Порыв к завершению, доведенный до предела на материальной плоскости, становится жадностью. В нумерологии число 4 находится под управлением Раху, северного узла Луны, также известного как Голова Дракона. В западной нумерологии 4 под управлением Урана. В оккультизме оно всегда пишется как 4-1 и таким образом считается связанным с Солнцем.'
      },
      5: {
        title: '5. Физический план (Бху-Лока)',
        text:
          'Часть неманифестированной реальности трансформируется в мир имен и форм. Мир имен и форм существует в семи различных локах, или уровнях, которые расположены по восходящей шкале.\n' +
          '\n' +
          'Эти локи обозначают этапы эволюции сознания индивида. По мере его эволюции, он движется и претерпевает изменения в своей природе. Через эти планы сознание может осознать свою истинную природу.\n' +
          '\n' +
          'Каждая из этих лок, или планов, является определенной областью, разделенной по природе вещества, из которого она состоит. (См. квадрат 42, план баланса.)\n' +
          '\n' +
          'Эти локи составляют позвоночник игрового поля. Все они находятся в своем определенном порядке в центральном ряду вертикальных квадратов.\n' +
          '\n' +
          'Как в макрокосме, так и в микрокосме. Локи расположены в человеческом теле вдоль позвоночника, в чакрах, психических центрах. С эволюцией психики от уровня к уровню приходит эволюция самого человека.\n' +
          '\n' +
          'Физический план расположен в основании позвоночника, в месте нахождения первой чакры в человеческом теле — и на Земле в феноменальном мире. Название bhu-loka на санскрите объясняет это: bhu означает земля, а loka — план. Земля состоит из пяти элементов, которые существуют в твердой, жидкой и газообразной формах — как в радиационном, эфирном и сверхэфирном веществе — различные стадии существования атомов материи, будь то определенные формы или неопределенные. Земной элемент при любых условиях и обстоятельствах доминирует в этих состояниях, и они материализуются как земля медленно и постепенно.\n' +
          '\n' +
          'Другие планы, упомянутые на игровом поле, каждый располагается в определенном горизонтальном ряду и принадлежат этим семи локам. Локи, кроме семи, расположенных в позвоночнике игрового поля, являются специальными регионами, находящимися внутри этих семи — как города в провинциях, провинции в странах, а страны в континентах.\n' +
          '\n' +
          'Физический план охватывает генезис, майю, гнев, жадность, заблуждение, гордость, жажду и чувственный план — его правые и левые стороны, его положительные и отрицательные аспекты.\n' +
          '\n' +
          'Когда игрок переходит на физический план, он оказывается пойманным в ловушку низшего «я». Это всего лишь один этап игры. Никто не остается в одном и том же месте постоянно. Каждый бросок кубика — это открытие нового мира.\n' +
          '\n' +
          'На физическом плане игрок в основном обеспокоен материальными достижениями. Деньги, дом, транспортное средство, еда и физическая сила — это общие темы. Его отдых — это телесное вовлечение, спорт, связанный с конкуренцией и физическим контактом. Его развлечение часто включает насилие. Его главное достижение — ремесло.\n' +
          '\n' +
          'Физический план связан с землей, материей и матерью. Это хранилище энергии, место обитания кундалини — психической энергии, которую йог ищет, чтобы поднять ее через семь чакр. Без осознания физического плана невозможно осознание всех других планов. Здесь нет стрел, ведущих из этого плана, этого горизонтального уровня. Все игроки должны пройти через него, прежде чем достичь других измерений. Семь змей ведут сюда из других планов, демонстрируя первостепенную важность осознания природы самого грубого уровня проявления.\n' +
          '\n' +
          'Количество тонких элементов равно пяти — эфир, воздух, огонь, вода и земля. Пять также являются рабочими органами человека, которые он использует в создании кармы: руки, ноги, рот, гениталии и анус. И есть пять сенсорных органов для пяти ощущений — уши для звука, кожа для осязания, глаза для восприятия формы и цвета, язык для вкуса и нос для запаха. Пять — это число баланса — 1 с 2 с каждой стороны. Планета, управляющая числом 5 — Меркурий. Меркурий — это мягкий, высоко мыслящий, ученый и любящий развлечение, а также связан с бизнесом и физическим комфортом.'
      },
      6: {
        title: '6. Заблуждение (Моха)',
        text:
          'Моха (Moha) на санскрите означает привязанность. Эта привязанность является реальной причиной рабства, вновь и вновь возвращая игрока в феноменальный мир через серию рождений и перерождений. В священных текстах говорится, что четыре одержимости ведут индивидуальное сознание в нисходящий поток энергии; они являются препятствиями на пути духовного роста. Эти четыре называются:\n' +
          '\n' +
          'Кама (Kama): желания, чувственность\n' +
          'Кродха (Krodh): гнев, агрессия, насилие\n' +
          'Лобха (Lobh): жадность, неудовлетворенность\n' +
          'Моха (Moha): привязанность, заблуждение\n' +
          '\n' +
          'В то время как иллюзия, майя, является самим феноменальным миром, заблуждение — это привязанность к феноменальному как единственному возможному проявлению реальности. Заблуждение затемняет ум, делая его неспособным воспринимать истину. Заблуждение — это результат нерелигиозности, при этом религия здесь означает не кодекс поведения и морали (этики), а жизнь в гармонии с законами вселенной.\n' +
          '\n' +
          '«Что следует принять, то и есть дхарма», — говорит древняя санскритская пословица. Дхарма — это природа, сущность, истина феноменального существования. Когда игрок не следует закону своей собственной природы, который находится за пределами иллюзий и заблуждений, он погружается в заблуждение. Нужно лишь понять, что существование — это игра. С этим осознанием заблуждение о том, что ты самоуправляемый игрок, исчезает. И с исчезновением заблуждения исчезает и плохая карма.\n' +
          '\n' +
          'Заблуждение — это первый квадрат, на который попадает игрок, выбросив 6, чтобы войти в игру. Вступив в игру, игрок принимает временное рабство материальному миру. После того как игрок рождается, он становится условно привязан к определенным обстоятельствам времени и места. Реальность момента воспринимается как реальность всех моментов. Изменения кажутся немыслимыми. Он попал в заблуждение.\n' +
          '\n' +
          'Как бы он сюда не попал — через рождение или попадание в ловушку змеи нерелигиозности (использование плохих средств, эгоистичные меры) — игрок неизбежно проходит через заблуждение. Когда он увидит свою дхарму и осознает, что изменения не только возможны, но и необходимы, он готов двигаться дальше. Но пока он считает свой способ восприятия мира замкнутым и завершенным, ему предстоит снова и снова возвращаться сюда.\n' +
          '\n' +
          'Из-за своей природы, которая является сочетанием двух нечетных чисел и двух четных чисел (двух 3 и трех 2, или пяти сочетаний пар), 6 — это совершенно сбалансированное число. Связанное с изобретательностью, креативностью и изящными искусствами, шестерка является членом луной семьи и ассоциируется с планетой Венера. Венера — самая яркая и блестящая из всех планет, которую можно увидеть невооруженным глазом как утреннюю звезду. В индуистской мифологии Венера — учитель демонов. Те, кто пребывает в заблуждении, любят чувственные удовольствия, тратят свою энергию на удовлетворение желаний, являются жертвами гнева и жадности, действуют против закона дхармы, нерелигиозны и чрезвычайно эгоистичны.'
      },
      7: {
        title: '7. Гордыня (Мада)',
        text:
          'Гордыня — это самообман, ложная гордость, строительство замков в воздухе. Слово мада (Mada) на санскрите означает самоопьянение. Игрок опьянен ложным тщеславием, гордостью, властью, имуществом, достижениями или успехами. Когда он имеет какое-либо заблуждение о себе, его охватывает мада.\n' +
          '\n' +
          'После вступления в игру игрок становится подвержен мада, гордыне, ложному самоопределению всех видов. Гордыня и тщеславие — два великих опьяняющих средства — и пьет их человек в дурном обществе. Дурное общество, результат заблуждения и жадности, — это змея, которая ведет игрока к гордыне. В этом пространстве игрок полностью пойман своей собственной игрой. Дурное общество, в котором он находится, является проявлением злых желаний.\n' +
          '\n' +
          'Каждый играет свою собственную игру и бросает свой собственный кубик. Как только кубик брошен, у него нет выбора. Игрок без желаний не ищет компанию. Но поскольку желание — это природа игры, поиск компании неизбежен на каком-то этапе его развития. Игроку нужна группа для укрепления новых самоопределений. Опасность возникает, когда игрок охвачен своими желаниями. Его поведенческие модели радикально меняются. Правое больше не кажется правильным, а неправильное — неприемлемым. Его желание должно быть удовлетворено любой ценой, и таким образом он создает плохую карму и держит дурное общество — тех, кто поддерживает его в его заблуждениях. Как известно, человек познается по обществу, в котором он находится, и игрок может прекратить создавать плохую карму, если будет искать хорошую компанию.\n' +
          '\n' +
          'Член семьи Солнца, 7 ассоциируется с Сатурном и принципом темноты. Семерка — это дни, ноты музыкальной шкалы, дни недели и чакры. Сочетание двух нечетных чисел (двух троек) с обеих сторон, семь — это число проблем приспособления. Семерка по своей природе одинока и стремится к завершению.\n' +
          '\n' +
          'Семь ассоциируется с кету, южным узлом Луны, также известным как хвост дракона. В современной индийской нумерологии число 7 управляется Варуной, божеством, покровительствующим воде, которая связана с планетой Нептун в западной нумерологии. Семерка — это число писателей и художников, которые, будучи неразвитыми, живут в ложной гордости и известны тем, что строят замки в воздухе и всегда беспокоятся о будущем. Они не любят следовать проторенному пути и имеют очень странные идеи о религии. Они создают свою собственную религию и проводят свою жизнь в увеселениях.'
      },
      8: {
        title: '8. Алчность (Матсар)',
        text:
          'Гордыня приводит игрока к зависти. Он настолько одержим заблуждением о своей отдельности, что ни одно средство для удовлетворения его желаний не кажется ему неприемлемым. Ведь, думает гордый игрок, я намного лучше других, и я заслуживаю того, что есть у них. Так в этой игре алчность связана с змеей зависти — именно зависть, порожденная гордыней, ведет к алчности.\n' +
          '\n' +
          'В состоянии алчности игрок испытывает активное отвращение к другим игрокам. Он считает себя слишком хорошим для них, а то, что есть у них, — слишком хорошим для них. Поэтому он рассуждает, что то, что есть у них, должно принадлежать ему. Он становится злопамятным и жаждет материальных благ своих товарищей. Это контрастирует с жадностью, где видится только материальное. Алчность — это жадность, объединенная с завистью. Становясь все более алчным, его жажда богатства усиливается, и все другие проблемы первого чакры начинают преследовать его.\n' +
          '\n' +
          'Восьмерка — это число, которое уменьшается при умножении: 8x1 = 8; 8x2 = 16 = 1 + 6 = 7; 8x3 = 24 = 6; 8x4 = 32 = 5; 8x5 = 40 = 4; 8x6 = 48 = 3; 8x7 = 56 = 2; 8x8 = 64 = 1. Когда восьмерка достигает 9 — таким образом 8x9 = 72 — она становится 9, и на следующем цикле возвращается в исходное состояние, 8x10 = 80 = 8. Этот феномен синонимичен цикличности всей реальности и процессу человеческого существования. Тонкое уменьшается по мере увеличения грубого, пока сердце грубого не пронизывается и не становится тонким снова. Таким образом, каждое увеличение уменьшает, каждое уменьшение увеличивает. Ничто никогда не теряется. Меняется только природа проявления.\n' +
          '\n' +
          'Среди чисел лунной семьи 8 представляет октаву, восемь измерений, восьмеричную майю (три гуны и пять тонких элементов). В нумерологии 8 — это северный узел Луны, и он связан с планетой Сатурн. Это сложная планета, которую трудно понять. Она имеет много взлетов и падений, и ужасные битвы. Это «воздушная» планета, ассоциирующаяся с темнотой, и символизируется как молчаливый мыслитель или слуга, интроспективный и материалистически настроенный. Люди, рожденные под числом 8, собирают богатство как хобби и подвержены зависимости и порокам. Но они мудры и опытны, обладают особым умением судить людей.'
      },
      9: {
        title: '9. Сенсорный План (Кама-Лока)',
        text:
          'Это девятый квадрат первого ряда. Девять — завершенное число, нечетное, оно символизирует завершение первого ряда. Это лестница, ведущая ко второму уровню сознания, который начинается с очищения. После того как игрок входит в игру, ему необходимо пройти через сенсорный план, прежде чем он сможет войти на второй уровень.\n' +
          '\n' +
          'Кама на санскрите означает желание — желание любого рода и в любой форме: для имени, славы, богатства, успеха, семьи, положения, достижений. Любое желание, амбиция, благородная или неблагородная цель — это кама. Кама — это первая стадия эволюции. Если бы не было желания, не было бы и творения.\n' +
          '\n' +
          'Итак, кама-лока — это план желаний. Но поскольку все желания исходят из чувственной природы человека, это известно как сенсорный план. Он непосредственно связан с невежством, отсутствием знания. Сюда можно попасть через уста змеи невежества или через постепенное исследование первого чакры. Девять, член семьи нечетных чисел, символизирует завершение и совершенство. Оно представляет силу и энергию. Умноженное на любое другое число, оно сохраняет свою идентичность и целостность; так: 9x 1 =9; 9x2 = 18 = 1 + 8 = 9; 9x3 = 27 = 9; 9x4 = 36 = 9; и 9 x 23 = 207 = 9; 9 x 376 = 3,384 = 9; 9 x 280 = 7,380 = 9. Есть девять врат тела, через которые жизненная энергия, прана, покидает тело в момент смерти: рот, два носовых отверстия, два глаза, два уха, анус и половой орган. За день человек совершает 21,600 дыханий, что сводится к 9. В сутках 1,440 минут, что также сводится к 9. Нормальная продолжительность доминирования одной из половин мозга или одного носового отверстия составляет около 900 вдохов (60 x 15), что сводится к 9. В теле есть девять основных нервов. В индуистской религии почитается девять богинь, навадурга. В теле человека 72,000 нервов, называемых нади. Это проводники праны, жизненной силы, и их общее количество также сводится к 9. В солнечной системе девять планет, которые влияют на жизнь на планете Земля, известные как Навграхи. В нумерологии 9 — число Марса, который блестит в небе с прекрасным красным блеском.'
      },
      10: {
        title: '10. Очищение (Шуддхи)',
        text:
          'Некоторое время игрок чувствует себя комфортно на сенсорном плане. Но вскоре нисходящий поток энергии иссушает его жизненную силу, оставляя чувство пустоты и путаницы. В этот момент очищение привлекает его внимание. Очищение — это первая стрела игры, предоставляющая возможность преодолеть все проблемы второго чакры. Если после прохождения первого чакры игрок попадает на очищение, он очищает себя от всех проблем первого и второго чакр и немедленно поднимается на небесный план.\n' +
          '\n' +
          'Очищение всегда связано с повышением вибрационного уровня существа, что вызывает поток энергии в восходящем направлении. Очищение можно достичь, изменив поведение сенсорных органов, органов труда и обычный распорядок дня. В замке сознания есть пять окон. Через эти окна враги (нечистоты) проникают в замок и пытаются уничтожить короля. Закрыв эти окна или поддерживая надлежащий контроль, игрок может сохранить чистоту замка.\n' +
          '\n' +
          'Очищение слуха осуществляется путем отвлечения от внешних звуков и сосредоточения внимания на внутренних звуках. Очищение глаз происходит, когда они закрыты, а всё внимание сосредоточено на третьем глазе, в центре лба чуть выше линии бровей. Очищение языка, окна вкуса, достигается путем исключения сладкого и соленого вкусов из рациона. Очищение обоняния происходит путем закрытия ноздрей и задержки дыхания в легких на как можно более длительное время (это также помогает развить привычку к глубокому, медленному дыханию). Потирание кожи пеплом очищает чувство осязания, делая игрока невосприимчивым к ощущениям от кожных нервов.\n' +
          '\n' +
          'Процесс очищения через пост без сна — воздержание от сна день и ночь в течение одного или нескольких дней — позволяет игроку очиститься от инерции, тусклости, сонливости, глупости и невежества. Пост в речи — воздержание от звуков на длительные периоды — очищает мыслительный процесс. Пищевой пост очищает химию тела. Кроме того, преодоление трудностей очищает личность игрока, слушание священных писаний и божественно вдохновленных стихов очищает его внутренний мир, напевание очищает нервы, а концентрация и медитация очищают ум и тело. Целибат также является одним из методов очищения, сложным, но очень эффективным способом изменения вибрационного паттерна.\n' +
          '\n' +
          '\n' +
          '\n' +
          "Эта версия произведения 'Очищение' (Шуддхи) фокусируется на метафоре разума как замка с пятью окнами, каждое из которых символизирует отдельный сенсорный орган. Это представление визуально передает концепцию очищения и перехода на более высокий уровень сознания."
      },
      11: {
        title: '11. Развлечение (Гандхарвы)',
        text:
          'В священных писаниях говорится, что гандхарвы — это «божественные» музыкальные ноты. Слово гандхарвы на английский можно перевести как небесные музыканты. Они входят в восемь видов творений, которые нельзя воспринять обычным глазом; однако они могут принимать форму по своему желанию. Они не состоят из грубых материальных частиц, поскольку обитают на астральном плане. Их жены называются апсарами (нимфами), и вместе они развлекают Богов и тех, кто, пройдя эволюцию, достиг этого плана. Они полностью посвятили себя для развлечения богов небесного плана. Будучи небесными музыкантами, они живут в гармонии с божественной музыкой. В мифах Пураны множество упоминаний о деяниях гандхарвов и апсар. Изначально они свободны от цикла рождения и смерти — но если они не действуют в гармонии со своим состоянием, они падают с небес на землю и рождаются людьми. Но где бы они ни находились, они всегда обеспечивают развлечение.\n' +
          '\n' +
          'Игрок переходит в состояние развлечения после очищения. Это пространство выражает внутреннюю радость, чувство ритма, ощущение гармонии. Развлечение делает его легким и дает стимул для отдыха и удовольствия. Развлечение озаряет обыденное существование и открывает новые пути, новые горизонты. Все изящные искусства — это продукт этого состояния, которое относится ко второй строке игры и является атрибутом вибрации во втором чакре. Но развлечение существует на всех уровнях. Эта игровая доска, Лила или Джнан Чаупад, является развлечением для святых.\n' +
          '\n' +
          'Жизнь основана на принципе развлечения — удовольствия. И жизнь может быть воспринята как развлечение, когда игрок преодолел уровень первого чакры (безопасности). Суть духа — это развлечение. Вся вселенная — это развлечение энергии — Шакти, принципа матери, Абсолюта, Бога... или как бы ни назывался Верховный Игрок, который не играет. Если бы Божественная Игра (развлечение) не была вовлечена в сам процесс игры, то Единое не выбрало бы стать многим. Именно в процессе развлечения Единое становится множественным. Развлекать — значит принимать. Принимать — значит сдаваться. А сдаваться — значит растворяться и становиться Единым.'
      },
      12: {
        title: '12. Зависть (Ирасья)',
        text:
          'Зависть — это первая змея игры. Её укус спускает игрока с второго чакры в алчность и ко всему, что связано с вибрациями первого чакры. Снова и снова эта маленькая змея ловит игрока и сбивает его. Когда он попадает в зависть, он ощущает недостаток уверенности в себе и прибегает к стратегиям первого чакры для подавления своего желания. В процессе игры эта змея помогает игроку очистить свой мыслительный процесс.\n' +
          '\n' +
          'В игре жизни энергия движется снизу вверх. Игрок хочет покинуть нижние планы и достичь вершины, навсегда оставив позади проблемы, с которыми он столкнулся на низших уровнях. Но этот подход противоречит самой сути игры. Ему нужно играть на всех уровнях, и внизу, и наверху — куда бы его ни вёл игральный кубик кармы.\n' +
          '\n' +
          'Но никто не хочет оставаться низким. Когда игрок не вибрирует правильно, змеи берут его в свои когти. И своими собственными бросками кубика он поднимается и опускается. Зависть ощущается, когда энергия находится низко. Игрок только случайно попал на более высокий план и на самом деле не заслуживает оставаться там. Он не может оставаться там, поскольку негативные вибрации всё ещё присутствуют в его существе. В такие моменты он чувствует зависть к тем, кто остаётся на высоких планах. Эта зависть — негативная реакция, которая возвращает его энергию обратно в первый чакр, где ему предстоит отработать дополнительные кармы.\n' +
          '\n' +
          '\n' +
          "Произведение искусства захватывает суть зависти в духовном контексте. Змея, символизирующая зависть, свертывается у основания восходящей спирали, которая представляет собой путешествие через чакры. Тёмные и мутные цвета у основания иллюстрируют первый чакр, примитивное состояние, где обитает зависть. Глаза змеи, одновременно привлекательные и зловещие, подчёркивают её соблазнительную и разрушительную природу. По мере того как спираль поднимается, она переходит в яркие, гармоничные цвета, символизируя высшие чакры и просветлённое состояние. Разбросанные игральные кубики вокруг спирали символизируют кармическую игру жизни и случайность наших духовных путей. Этот визуальный контраст между тьмой низших вибраций и светом высших духовных уровней выражает борьбу за преодоление негативных эмоций, таких как зависть, и восхождение на более высокий уровень сознания."
      },
      13: {
        title: '13. Пустота (Антарикша)',
        text:
          'Антарикша — это пространство между физическим планом, который является землёй, и небесным планом, свардой, который является небом, царством Бога. Это пространство не на земле и не в небе, оно между этими двумя планами. Ни здесь, ни там, нигде: пустота.\n' +
          '\n' +
          'Пустота — это состояние, напрямую связанное с нестабильным негативным интеллектом. Когда игроку не хватает осознания цели своего существования, через его сознание проходят чувства бессмысленности (экзистенциальный страх) и тщетности. У него нет чувства цели, что заставляет его искать компанию своих сверстников. Но отсутствие жизненной энергии создаёт такие чувства бессмысленности, что он не остаётся в одном месте, хотя и постоянно пребывает в негативном состоянии.\n' +
          '\n' +
          'Пустота — это проявление второго чакры и причина неактивности, нестабильности и беспокойства. Всё теряет смысл. Ничто не возбуждает. Идентификация личности полностью теряется, что приводит к дисбалансу умственного состояния. Всё это происходит, потому что у игрока нет энергии, необходимой для функционирования на высших планах. Истощение энергии в погоне за чувственными объектами — это основная ловушка второго чакры. Игрок может попасть в пустоту после того, как пережил развлечение, сенсорную плоскость, гордость или жадность. Если он попадает сюда с первого чакры, то он испытал радости очищения и развлечения, но слишком быстро потратил свою ограниченную энергию. Теперь он в замешательстве. Цели, которые он видел раньше, всё ещё существуют, но в чём их смысл? В чём смысл всего?\n' +
          '\n' +
          'Но пустота — это не постоянное состояние, и скоро он начинает восстанавливать свои энергии. Он готов играть снова, когда кубик вернётся к нему.'
      },
      14: {
        title: '14. Астральный План (Бхувар-Лока)',
        text:
          'Бхувар-лока, план, следующий за физическим, тесно связан с ним, но состоит из более тонкой материи. Мы уже объясняли (в описании бху-локи, пятой клетки первой строки игрового поля) присутствие семи лок и объясняли, что каждая лока — это состояние бытия в процессе внутреннего роста, самым грубым из которых является физический план (бху-лока). В бхувар-локе преобладает элемент воды, как и во втором чакре. Так же как второй чакра находится в позвоночнике рядом с первым чакрой, так и астральный план непосредственно над физическим планом в позвоночнике игрового поля.\n' +
          '\n' +
          'Это план снов и фантазий, где человеческое воображение начинает возноситься. Игрок, попавший сюда, осознаёт огромную разнообразие феноменального мира. Мир буквально оживает возможностями. Существует так много того, кем он может быть, и так много целей, которых он может достичь. Это осознание возможностей вызывает возбуждение, и он начинает проявлять более активный интерес к жизни. Он удовлетворил свои потребности в выживании и теперь видит, что в жизни есть гораздо больше, чем он мог бы себе представить, пока беспокоился о том, где он возьмёт следующий приём пищи.\n' +
          '\n' +
          'Теперь он материально обеспечен, и его успех обеспечен. И с этим приливом уверенности в себе его творческое воображение начинает взлетать. Но фантазии потребляют больше энергии, чем любое другое человеческое занятие. Игрок направляет все свои энергетические ресурсы на строительство воздушных замков. Он стремится уйти от физического мира через стремление к наслаждениям, удовольствиям и идентификации с другими. Наслаждение чувственными органами является движущей силой его жизни, пока он вибрирует здесь. Это план вина, женщин и песен. Секс становится основным средством самовыражения — что может быть огромным истощением жизненных сил.\n' +
          '\n' +
          'Игрок пребывает в мирах чувств, эмоций, идей и смыслов, используя их как основу для своих фантазий. Таким образом, второй чакра — это отправная точка всех творческих искусств. Фантазия — это сила, стоящая за креативностью.\n' +
          '\n' +
          'Астральный план — это измерение психического пространства, находящееся посередине между небом и землёй. Игрок жил на более низких уровнях, и его воображение приносит возможность небесной жизни в пределах досягаемости. Опасность заключается в том, что он может поддаться своим фантазиям, которые иссушают его энергию и оставляют его истощённым.\n' +
          '\n'
      },
      15: {
        title: '15. План Фантазии (Нага-Лока)',
        text:
          'Нага-лока должна была быть подземным миром. Как существует семь лок наверху, так существует семь лок внизу. Локи ниже расположены под водой. Правитель каждого подземного мира — это особое существо. Одним из этих семи является Патал. Властителями одного региона являются змеи (наги). В мифологии эти наги предполагаются полу-божественными существами с человеческим лицом и хвостом дракона. Наги также существуют как сектанты-отшельники, мастера великой мудрости: ничего не скрыто и не может быть скрыто от них. Таким образом, нага-лока — это план фантазии. Он не находится выше физического плана, а под ним — погружён под воду в соответствии с природой фантазии.\n' +
          '\n' +
          'Игрок, попавший сюда, полностью погружается в царство фантастического.\n' +
          '\n' +
          'Здесь его воображение взмывает за пределы физического мира и в бесконечные возможности человеческого существования. Он не видит границ своей природы. Нет ничего, что он не мог бы сделать. Он направляет свои энергии на исследование своих фантазий, создавая произведения искусства и новые идеи и изобретения. Он исследует мир, который ему преподносят его чувства, постоянно ища новые стимулы для своего воображения. Он использует свои сенсорные данные для создания новых комбинаций, ранее не испытываемых. Здесь — план спекуляции, "Что если?" Нет ограничений для воображения. Ничто не слишком фантастично или странно, чтобы быть исключённым.\n' +
          '\n' +
          'В развлекательном плане игрок осознаёт возможности. На плане фантазии он поглощён ими. Многие из величайших произведений искусства пришли от этого сдачи в неограниченное воображение. Но если воображение дается слишком высоко и слишком долго, игрок теряет связь с реальностью своей повседневной жизни — и змея зависти скрывается впереди, чтобы поймать его, если он слишком погрузится в фантастическое и не заметит, что находится перед ним.\n' +
          '\n' +
          'На санскрите нага означает змея. Таким образом, план фантазии также является планом змеи. Змея синонимична энергии. Кундалини, которую йог пытается поднять своими усилиями, часто называют змеиной силой. Дьявол часто появляется в облике змеи. Змея является воплощением движения и животного, которое лучше всего представляет природу игрока, вибрирующего во втором чакре. Это подразумевает гибкость и способность изменять форму. Как змея ищет укрытие в полостях земли, так и игрок, попавший во второй чакры.',
      },
      16: {
        title: '16. Зависть (Двеш)',
        text:
          'Когда игрок позволяет своим фантазиям увести его от реальности, результатирующая потеря энергии может привести его к квадрату зависти — основной проблеме второй чакры. Зависть — это состояние психического дисбаланса, вызванное подозрениями и страхом конкуренции и неверности. Это форма безумия, которая беспокоит разум игрока, поглощённого собой. Его способность фантазировать позволяет ему раздувать своё эго до неоправданных размеров. Он теряет способность различать возможное и реальное. Его путаница возникает из-за чрезмерного увлечения фантастическим.\n' +
          '\n' +
          'Он начинает подозревать других, когда они не соответствуют его собственному представлению о себе. В любви он завидует и боится соперников. Его сомнения в себе растут, и вскоре его энергия возвращается в первую чакру, где он застревает в жадности. Зависть поддерживает его недостаток уверенности в себе, который в свою очередь порождает неуверенность, основную черту характера первой чакры. Его недостаток уверенности в себе также ведёт к самоотрицанию, которое затем проецируется наружу как ненависть к другим.\n' +
          '\n' +
          'Чтобы вернуть свою уверенность в себе, он должен снова пережить первую чакру, где он может избавиться от своей неуверенности и снова поднять свои вибрации.',
      },
      17: {
        title: '17. Милосердие (Дайя)',
        text:
          'Милосердие — это божественное качество, присутствующее в игроке, обладающее такой силой, что оно переносит его прямо со второй чакры на восьмую, на Абсолютную плоскость. Милосердие — это сдача в пользу сострадания такой мощи, что эго отступает в поток чувств, столь интенсивных, что глаза наполняются слезами радости, а сердце пульсирует в восторге и космической любви. На мгновение он становится единым с Божественным.\n' +
          '\n' +
          'Милосердие — это самое положительное проявление способности второй чакры воображать возможности. Состояние милосердия возникает, когда сострадание проявляется к тому, через кого было нанесено повреждение самоидентификации игрока. Вместо того чтобы ответить ударом, принять принцип «око за око», игрок поворачивает другую щеку.\n' +
          '\n' +
          'Способность воображать дает игроку понимание мотивации других. Игрок видит, что именно он сам позволил себе испытать боль, что другой не несет ответственности. Он осознает, что и он сам может причинить боль другому. Он понимает, что есть более высокие уровни вибраций, и только тот, кто обрел инсайты, поднявшись на эти уровни, может судить другого. Он передает это, суть сострадания, другому игроку в форме прощения. Это осознание освобождает его сознание от самоидентификации, и он поднимается на Абсолютную плоскость.\n' +
          '\n' +
          'В санскрите есть выражение: дая (милосердие) — это основа дхармы (праведности). Без милосердия невозможно подлинно религиозное существо. Милосердие, доброта, терпимость, воздержанность — все это со временем обогащает добро в человеке и помогает ему в очищении эмоций, формировании характера и этическом развитии. Преграда личности стирается, и его ум становится отражением Божественного. Милосердие — это сдача. Однако акт милосердия не может устранить все прошлые кармы, поэтому игрок должен бросать кубик, пока змей тамогуна не укусит его. Тогда он будет проглочен и возвращен на землю, чтобы исполнить свою миссию.',
      },
      18: {
        title: '18. Плоскость Радости (Харша-Лока)',
        text:
          'Здесь, в конце второго ряда, второй плоскости, второй чакры, появляется чувство глубочайшего удовлетворения. Игрок осознает, что он ушел от зависти, пустоты и ревности. Он покидает царство фантазий, чтобы встретиться с реальным миром, с этапом карма-йоги. Он не знает, как скоро он достигнет своей цели — Космического сознания, но он понимает, что уровни бытия могут быть преодолены, что энергия может быть поднята. Ожидание встречи с миром возбуждает его, и он начинает ощущать себя глубоко на каждом уровне бытия. Впереди его ждет вызов, но есть и неизменное удовлетворение от завершения. Один этап завершен, другой вот-вот начнется. Именно в этот момент трансценденции дух радости пронизывает его существо.\n' +
          '\n' +
          'Он прошел первую чакру; нет страха, нет неуверенности. Он завершил вторую чакру; он поднялся над чувственными желаниями. Впереди его ждет радостная задача карма-йоги. Он чувствует себя на высоте, он чувствует себя победителем. Его охватывает дух поиска. Чувство времени исчезает. Радость всегда вечна, сколько бы она ни длилась. Осознание пространства исчезает. Радость не имеет границ. Но эта радость не может длиться вечно. Скоро начнут работать силы кармы, и задача перехода на третий уровень начнется.',
      },
      19: {
        title: '19. Плоскость Действия (Карма-Лока)',
        text:
          'Это плоскость действия, которая начинается с третьего ряда игры и исследования третьей чакры. Единственное желание, которое остается истинным во все времена и в любом месте — это желание удовлетворения. Все остальные желания — это проявления этого одного желания: желание завершенности, самоосознания. Так что на любом уровне, на котором вибрирует игрок, на этом уровне он и ищет удовлетворение.\n' +
          '\n' +
          'На первой и второй чакрах желание проявлялось как стремление к деньгам и сексу. На третьей чакре доминирующая забота становится идентификацией эго и достижением власти. Люди первой чакры не работают ни для себя, ни над собой. Обычно они заняты в помощи выполнению какого-то человека третьей чакры. На второй чакре желание направлено на чувства, и исследование чувственного мира поглощает энергию. Именно на третьей чакре игрок начинает осознавать социальные и политические влияния на развитие его личности. Таким образом, игрок становится самосознательным. Эгоизм становится импульсом действия, поскольку эго стремится расширить свое влияние в расширяющиеся круги. Таким образом, карма-лока заставляет взглянуть на реальность с более реалистичной перспективы. Фантазии второй чакры уступают практическим вопросам мира. Это момент трезвости. В этот момент человек осознает закон кармы.\n' +
          '\n' +
          'Каждое существо находится в постоянном состоянии взаимодействия со всеми другими существами. На уровне энергии карма определяет частоту вибрации, которая на грубом уровне проявляется как поведение игрока. Карма — это причина цикла рождения и перерождения. И только карма может даровать игроку освобождение от цикла, создавая как рабство, так и освобождение.\n' +
          '\n' +
          'Основным является то, что игрок несет кармическую ответственность за себя. Это «я» можно разделить на проявленное и непроявленное, на тело и сущность. Таким образом, существуют кармы относительно тела и кармы относительно сознания. Тело — это мир: тело содержит все элементы грубого проявления. Поэтому кармы относительно тела — это кармы относительно всего мира. Сознание — это суть мира; поэтому кармы относительно сознания также охватывают весь мир.',
      },
      20: {
        title: '20. Благотворительность (Дан)',
        text:
          'Те кармы, которые повышают уровень вибраций, известны как добродетели; те, которые понижают его, — как пороки. Благотворительность — это человеческая добродетель, которая существует на уровне третьей чакры. Она поднимает игрока выше проблем третьей чакры и переносит его на четвертый уровень игры, плоскость баланса.\n' +
          '\n' +
          'Как добродетель, благотворительность является проявлением Божественности, которая является сутью сознания. Когда игрок попадает на эту клетку, он идентифицирует себя с Божественностью — присутствующей во всех — и совершает акты благотворительности, не желая получить личную выгоду от своей кармы.\n' +
          '\n' +
          'Во время совершения акта благотворительности испытывается чувство восторга. Это подъем энергии с более низкого уровня на более высокий. Вот почему все человеческие религии подчеркивали важность благотворительности и включали благотворительные акты в свои ритуалы. Реальность нужды и желание делиться — это два фактора, действующие на основе игры. Благотворительность удовлетворяет развивающееся эго и разрушает связи третьей чакры.\n' +
          '\n' +
          'Благотворительность — одна из самых важных основ плоскости кармы. Это движущая сила самых высоких институционализированных человеческих действий — соединение сострадания с тяготением третьей чакры к организации.',
      },
      21: {
        title: '21. Искупление (Саман Пап)',
        text:
          'Когда игрок поднимется выше давления материальных и чувственных желаний, он осознает, что в процессе удовлетворения своих низших потребностей он причинил вред другим. Он действовал слепо в поисках удовлетворения, не осознавая последствий своих действий. Когда он попадает на плоскость искупления, он видит, что с помощью неправильных действий и средств он создал неправильные вибрации внутри себя, которые препятствуют достижению внутреннего мира.\n' +
          '\n' +
          'В поисках внутреннего мира он попадает в искупление, чтобы исправить сделанное зло, исправить ошибки в поведении, искупить свои заблуждения. Это время великого эмоционального волнения. Сильно ощущается стремление исправить негативные кармы, пороки, которые он допускал.\n' +
          '\n' +
          'Искупление также является клеткой для личностей второй чакры, которые попали на третью чакру и чувствуют вину за свою неспособность адаптироваться к вибрациям на более высоком уровне. В обоих случаях искупление приносит положительные результаты и помогает в подъеме энергии. Игрок искупает свои грехи, следуя закону дхармы, который является истинной природой всего. Искупление приводит человека в гармонию с дхармой — что и является следующей клеткой игры.',
      },
      22: {
        title: '22. Плоскость Дхармы (Дхарма-Лока)',
        text:
          'Дхарма — это все, что правильно. Дхарма — это постоянно развивающийся, постоянно текущий принцип. Дхарма — это вневременная, беспредельная сила, действующая в человеческом существовании. Дхарма постоянна, но ее форма меняется от ситуации к ситуации. Она живет в глубинах реальности. Игрок, который находит поток дхармы, пребывает в реальности и становится единым с ней (единение приходит после искупления).\n' +
          '\n' +
          'Осознанное действие — это дхарма — осознанное действие, согласующееся с реальностью момента. Учиться действовать осознанно — это учиться действовать в соответствии с принципами космоса. Таким образом, дхарма — это такое действие, которое согласуется с космическим знанием.\n' +
          '\n' +
          'Существует десять ориентиров дхармы, все из которых должны присутствовать, чтобы действие соответствовало закону дхармы: твердость, прощение, самообладание, сдержанность (не воровство), чистота (чистосердечность), контроль над органами чувств и органами действия, интеллект, правильное знание, истина и отсутствие гнева.\n' +
          '\n' +
          'Все, что вы чувствуете, что действительно хорошо для вас, также хорошо и для других. Нет дхармы более важной, чем делать добро для других. Нет ада, порока, хуже того, что причиняет вред другим. Дхарму лучше всего понять через поведение. Но она гораздо больше, чем кодекс поведения, морали и этики. Этика — это отражение дхармы, а не сама дхарма.\n' +
          '\n' +
          'Дхарма огня — гореть. Дхарма воды — омывать. Это дхарма воды — создавать вкус, как дхарма огня — создавать цвет и форму. Врожденная, сущностная природа вещи — это ее дхарма. И нет спасения от дхармы. В тот момент, когда происходит отклонение, энергия стремится вниз, унося игрока с собой. Стрелы на этой доске — это дхармы, добродетели; змеи — адхармы, пороки.\n' +
          '\n' +
          'Хотя дхарма существует всегда, за пределами формы, она принимает особую форму для каждого игрока. Это дхарма игрока, который живет в холодном климате — носить теплую одежду. Это дхарма голодного человека — брать пищу. Это дхарма студента — медитировать и заниматься садханой, духовной дисциплиной. Это дхарма ребенка — играть свободно, не заботясь о мире духа. Это дхарма старшего — пребывать в области духа. Дхарма — это истина, которая удерживает все существование в правильных отношениях.\n' +
          '\n' +
          'Дхарма — это строительные леса, на которых возводится здание «я». Пока здание не завершено, строительные леса поддерживают структуру. Как только здание становится самоподдерживающимся, строительные леса убираются и используются для других нестабильных, развивающихся новых построек.'
      },
      23: {
        title: '23. Небесная Плоскость (Сварга-Лока)',
        text:
          'Сварга-лока, небесный мир, — третья лока из семи плоскостей существования. Эти три — бху-лока, бхувар-лока и сварга-лока — принадлежат категории плоскостей, которые исчезают в конце дня творения, дня Творца, Брахмы, и возрождаются с рассветом следующего дня. На бху-локе, физической плоскости, все существует на физическом уровне; на бхувар-локе, астральной плоскости, действуют желания; а на сварга-локе, небесной плоскости, работа осуществляется на уровне мыслей. На этой плоскости элемент огня является управляющей силой, и все, что существует на этом уровне бытия, состоит из частиц огня — светящихся, сверкающих частиц света — и именно поэтому существа на сварга-локе являются самосветящимися. Сияющие ангелы и боги упоминаются повсеместно во всех мифологиях.\n' +
          '\n' +
          'На первой чакре игрок стремился к безопасности и искал possessions, которые могли бы его защитить и поддержать. На второй чакре он исследовал мир чувств и стремился к чувственному удовлетворению. Добравшись до уровня третьей чакры, он начинает видеть за пределами материального и чувственного мира и познавать сущность своего эго, своей личной идентичности. Таким образом, здесь его забота заключается в обеспечении бессмертия для его конструирования идентичности.\n' +
          '\n' +
          'Как только это стремление к бессмертию эго возникает в его сердце, небесные законы привлекают его внимание, и он пытается создать для себя небо из своих собственных желаний. Небо, которое он себе представляет, — это плоскость, наполненная всем, что его эго требует для удовольствия, радости и счастья. Он реально видит мир как полный боли и страданий, подъемов и падений. Он жаждет удовольствия, которое было бы бесконечным, без прекращения или изменений. Это пространство, известное как небеса, питает религии всех народов. Даже Маркс, этот атеистический философ третьей чакры, не мог обойтись без небес. Он назвал свою конечную цель бесклассовым обществом.\n' +
          '\n' +
          'Небо — это проявление желания третьей чакры. Если мы оторвемся от оценочных суждений, мы можем увидеть его как действительно более высокую плоскость, достижимую из второй чакры через очищение. Небо — это приманка, которая используется для того, чтобы сбить с пути заблудших овец первой и второй чакры и вернуть их в духовное лоно, и оно использовалось святыми и пророками всех религий для повышения духовного уровня масс.\n' +
          '\n' +
          'В традиции индуизма небо — это область Индры. Он тот, кто овладел своими индриями — пятью органами восприятия и пятью органами действия. Тот, кто овладел этими органами, становится господином небес и пребывает в этом пространстве. Небо — это место обитания святых, бхактов (духовных преданных), высоких карма-йогов и небесных танцоров и музыкантов (см. клетка 11).\n' +
          '\n' +
          'Для того, кто овладел своими органами восприятия и действия, все существует так же, как и на физической плоскости, но в гармоничной и божественной форме. Здесь нет низших желаний, нет насилия, нет привязанности, нет жадности, нет зависти, нет алчности, нет гнева, нет чувственности, нет пустоты. Вместо этого существуют очищение, возрождение, милосердие, радость и бесконечная жизнь для наслаждения. Небо — это здание, построенное на строительных лесах дхармы.'
      },
      24: {
        title: '24. Плохая компания (Ку-Санг-Лока)',
        text:
          'В поисках идентификации эго, который характеризует деятельность третьей чакры, игрок ищет группы, которые могут поддержать его в его стремлениях. Он осознает, что в одиночку ему не хватает сил для удовлетворения своих желаний, и ищет других, идущих по тому же пути, чтобы создать взаимоподдерживающую группу.\n' +
          '\n' +
          'Если его вибрации неправильные, он может оказаться в группе, которая не действует в соответствии с дхармой. Тогда он оказывается в плохой компании, змее, которая кусает его и спускает вниз, к первой чакре и гордости.\n' +
          '\n' +
          'В плохой компании его неправильные черты характера либо игнорируются, либо восхваляются. Энергия, создаваемая групповыми действиями, может привести к росту его эго и увеличению эгоизма. Он обманывает себя, думая, что его действия соответствуют дхарме. Чем дальше он отклоняется от пути, тем больше растет его гордость. Он вскоре оказывается снова на первой чакре и должен искать очищение или развлечение.\n' +
          '\n' +
          'В плохой компании личные проблемы воспринимаются как вызванные другими. Экстремальный пример — террорист, политический заговорщик, который готов прибегнуть к любым средствам для достижения своей цели. Он заблуждается, думая, что убийство другого человека правильно, он считает, что, убив другого, может удовлетворить свои собственные желания. Он воспринимает свои цели как правильные для всех. Это отклонение от дхармы, это грубое злоупотребление личной силой — характерная проблема третьей чакры. Это злоупотребление тянет его энергию вниз.\n' +
          '\n' +
          'Плохая компания — это адхарма. Только действуя в согласии с дхармой, игрок может вырваться из этой ловушки.'
      },
      25: {
        title: '25. Хорошая компания (Су-Санг-Лока)',
        text:
          'Игрок, который начинает следовать пути дхармы на третьей чакре, вскоре начинает находить себя в компании других, которые стремятся реализовать лучшее в себе. В этой группе игрок находит свои силы, поднятые благодаря поддержке и осознанию, что другие ищут ту же цель. Его стремление третьей чакры, расширяя его эго, принимает новый оборот. Эта позитивная ассоциация, эта хорошая компания — это су-санг.\n' +
          '\n' +
          'Для того, кто стремится реализовать духовные ценности внутри себя, су-санг обычно принимает форму органического братства, созданного вокруг личности и учений человека четвертой или пятой чакры. Плохая компания обычно вращается вокруг харизматичного лидера третьей чакры. Игрок и члены его группы сотрудничают, чтобы подражать своему учителю, чтобы включить то, что учитель дает, в свои собственные идентичности.\n' +
          '\n' +
          'В хорошей компании пороки не восхваляются. Игроки с помощью учителя служат зеркалами друг для друга, чтобы как хорошие, так и плохие тенденции могли быть замечены и проработаны. Если гордость является результатом плохой компании, то сострадание развивается в хорошей компании.\n' +
          '\n' +
          'Хорошая компания необходима для игрока. Она предоставляет ему возможность расти, отказываясь от старых идентификаций, в атмосфере доверия и сострадания. Остатки проблем первой и второй чакры постепенно исчезают, пока он учится сталкиваться и работать со всеми аспектами своего «я».\n' +
          '\n' +
          'Хорошая компания — это положительная сторона стремления третьей чакры к общению и идентификации. Больше нет ловушек, которые могли бы помешать ему достичь четвертого уровня игры, плоскости космического разума и баланса.'
      },
      26: {
        title: '26. Скорбь (Дукх)',
        text:
          'Скорбь — это термин, который описывает изменение химии тела, вызванное утратой. Эта потеря энергии (или давления) вызывает состояние депрессии в организме. Скорбь и радость представляют собой два конца эмоционального континуума. Радость — это состояние расширения, экстраверсии и повышенных вибраций; скорбь — это состояние сжатия, интроверсии и подавленных вибраций. В обоих состояниях исчезает чувство времени, и момент кажется вечным.\n' +
          '\n' +
          'В скорби дыхание сжато и подавлено. Кровь отводится внутрь к жизненно важным органам. Лицо становится бледным. В радости дыхание не ограничено и текуче. Сердце открывается, и кровь свободно циркулирует по всему телу. Лицо сияет, живое, энергичное.\n' +
          '\n' +
          'Скорбь — это одеяло, которое обвивает игрока своими складками и ослепляет его взгляд. Он не может видеть ничего за пределами одеяла. Ни луч надежды, ни свет не могут проникнуть. Чем больше игрок борется, чтобы вырваться, тем глубже он оказывается в этом одеяле. Он чувствует себя слабым, беспомощным. Он разрывается между своим разумом, который говорит ему, что выход есть, и своими чувствами, которые утверждают, что это состояние вечное.\n' +
          '\n' +
          'Все, что от него требуется, это встать и сбросить одеяло раз и навсегда. Снаружи ясное небо, но внутри тяжелого шерстяного кармического одеяла существует только путаница и комплексы, созданные фантазией. Как ребенок, боящийся темноты, прячущийся под одеялом, он воображает, что за его пределами скрываются темные ужасы, готовые поглотить его, если он лишь покажется.\n' +
          '\n' +
          'Скорбь может быть временным состоянием, как, например, скорбь, вызванная, казалось бы, бессмысленным убийством ребенка, невинных, убитых в войне. Или она может стать образом существования, постоянным дисбалансом в химии тела, созданным механизмом подавления.\n' +
          '\n' +
          'Когда подавление в действии, игрок осознает, что есть аспект себя, который он не хочет встретить. Столкновение с ним означает утрату идентичности, принятие неприемлемого. Однако подавление вызывает боль. Блокированная энергия должна выразиться, и боль становится средством этой выражения. Здесь скорбь — это дракон, который глотает свой хвост. Выражение невыразимого создало бы боль и утрату идентичности. Невыражение также приводит к боли, путанице и утрате идентичности.\n' +
          '\n' +
          'В садхане, следуя духовной дисциплине, скорбь может быть проявлением осознания разделения между преданным и божеством. Третья чакра — это плоскость идентификации. Стремящийся к духовному хочет идентифицировать себя со своим божеством. Повторяющиеся неудачи приводят его к скорби. Игрок ощущает божественное и жаждет только осознания этого божественного внутри себя. Однако разделение кажется непроходимой пропастью. Он видит проблемы первой и второй чакры, которые постоянно захватывают его энергию. Он чувствует божественное, но ощущает себя недостойным, неспособным познать его.\n' +
          '\n' +
          'Есть выход, и бескорыстная служба, следующий пункт, дает надежду.'
      },
      27: {
        title: '27. Бескорыстная служба (Парматх)',
        text:
          'Благотворительность — это действие, которое выполняется часто или редко. Бескорыстная служба — это отношение, способ бытия. Парматх — это жизнь без себя, но гармонично с миром, при этом выполняя свою работу и сохраняя осознание момента.\n' +
          '\n' +
          'Пар значит высший. Артх — смысл, цель, ради которой совершается действие. То, что делается ради высшего, — это парматх. Высшее может означать Бога, или это может быть цель, которой игрок решает посвятить свою жизнь. Это отдача себя ради более высокой цели.\n' +
          '\n' +
          'Когда игрок осознает свою роль в драме и понимает, что индивидуальное «я» — это всего лишь средство для реализации Высшего, все, что он делает, перестает волновать его. Он просто выполняет свой долг и играет свою роль в пьесе. Он не знает, каким будет конечный результат его действий. Когда он выполняет свой долг без мысли о правоте или вознаграждении, он становится бескорыстным. И тогда все его поступки становятся парматх.\n' +
          '\n' +
          'Жить в парматх возможно только тогда, когда игрок осознает, что права следуют за долгом, а награды — это плоды действия. Долг и честь (награды) — это побочные продукты игры, а не конечная цель. Пока игрок существует в теле с пятью органами действия, карма неизбежна. Выбор игрока заключается в том, чтобы не заботиться о наградах и наказаниях, чести и унижении, а посвятить свою жизнь пониманию природы игры и жить, не заботясь о том, что происходит, продолжая выполнять свой долг.\n' +
          '\n' +
          'Награда не находится в чьих-либо руках. Бесчисленные факторы влияют на исход каждой моментальной ситуации. Все, что происходит, — это то, что было возможно в тот момент. Если игрок не имеет надежд и желаний, каждый момент становится достижением. Когда он отказывается от ложных концепций прибыли и убытка, он вступает на плоскость бескорыстной службы.'
      },
      28: {
        title: '28. Подобающая религия (Судхарма)',
        text:
          'Судхарма, или подходящая религия, означает принятие курса действий, наиболее подходящего для самого игрока. Судхарма — это жизнь в гармонии с законами игры. Это курс действий, который позволяет игроку бросать кости, не заботясь о том, где он приземлится.\n' +
          '\n' +
          'Судхарма в буквальном смысле означает собственный дхарму. Что такое дхарма? Что должен делать человек? Если дхарма — это свод правил поведения, то она должна быть общей для всех. Тогда никому не нужно было бы думать. Все бы принимали одинаковый образ жизни. Но люди — это не машины. У каждого есть индивидуальные особенности, и эти различия являются продуктом множества факторов. Никто не рождается в одно и то же время и не имеет одинаковых родителей. Родословная, окружение, атмосфера, географическое положение, антропологические и социологические условия различаются у каждого человека. Каждый рождается с набором качеств и недостатков.\n' +
          '\n' +
          'Идеал — это не реальность. Никто не может полностью поглотиться законом дхармы, предписанным какой-то конкретной религией или личностью. Каждый должен понять свою роль в игре. Он должен следовать своему собственному пути к освобождению. Подъемы и падения в жизни каждого человека определяют курс игры.\n' +
          '\n' +
          'Судхарма означает поддержание духа, что человек постоянно развивается, не прибегая к нечестным средствам в процессе действия. Судхарма — это вера в освобождение, в слияние с Космическим Сознанием. Судхарма — это не привязанность к взлетам и падениям майи.\n' +
          '\n' +
          'Если игрок — музыкант, он найдет свою судхарму в музыке. Художник найдет свою через свое искусство. Есть семь психических центров, в которых вибрирует игрок. Где бы он ни чувствовал себя комфортно, там он должен стремиться развить свои энергии в новые формы. Это и есть судхарма. Все религиозные кодексы поведения — это лишь внешние помощники в задаче осознания своей истинной природы, своей судхармы. Как только игрок начинает понимать свою судхарму, религия становится внутренней, образом жизни. Обряды теряют свое значение. Жизнь сама становится актом поклонения. Игрок готов перейти на уровень аскетизма.\n' +
          '\n' +
          'До тех пор, пока игрок не достигнет четвертой чакры, дхарма — это бессмысленный термин. Он должен идентифицировать себя с группой или идеологией на третьей чакре. На второй чакре он идентифицирует себя с чувствами; на первой — с возможностью обеспечить выживание тела.\n' +
          '\n' +
          'На третьей чакре он осознает карму, благотворительность, аспект дхармы, называемый этикой, хорошую и плохую компанию, искупление, скорби жизни и бескорыстную службу. Но понимание своей роли в игре начинается только тогда, когда он достигает четвертой чакры, судхармы. Судхарма ведет его к уровню аскетизма и к жестким покаяниям и работе над собой. Следование пути судхармы ведет его непосредственно на шестую строку игры, шестую чакру.'
      },
      29: {
        title: '29. Безрелигиозность (Адхарма)',
        text:
          'Игрок, который достиг судхармы, открывает свою истинную роль в игре и исполняет свою часть, не заботясь о результате своих действий. Он знает, что пока он прислушивается к голосу своей внутренней природы, ему нечего бояться.\n' +
          '\n' +
          'Вера в соответствии с законами природы — это судхарма. Слепая вера, которая игнорирует космические принципы, ведет к адхарме. Адхармы — это те действия, которые противоречат индивидуальной дхарме. Адхармы уводят его от истинного пути и возвращают в заблуждение первой чакры, что является сущностью слепой веры.\n' +
          '\n' +
          'Адхарма — это работа против законов существования. На рассвете все на планете изменяется. Меняются ветры, атмосферное давление и температура. Темп жизни увеличивается. Спать в это время — действовать против законов планеты. Так что это адхарма. Грабеж земли ради природных ресурсов, которые затем используются без учета их негативных последствий для окружающей среды и будущих потребностей планеты, — это адхарма против земли. Точно так же есть адхармы, связанные с физиологией человека. Держать напряжение и не отпускать его — это адхарма. Но отпускать напряжение нечестными средствами — это большая адхарма.\n' +
          '\n' +
          'Адхарма не существует сама по себе. Это отрицание закона дхармы, действие, противоречащее истинной внутренней природе. Отказ от своего собственного «я» — это адхарма. Самоотвержение и самовосхваление — это обе адхармы. Понимание своей позиции в игре — это судхарма. Все остальное — адхарма.\n' +
          '\n' +
          'Адхарма лучше всего понимается как дисбаланс в гунах, трех основных космических силах, ответственных за все проявление. Когда преобладает либо саттва (сознательная энергия), тамас (инерция) или раджас (движение), рождается адхарма. Саморазрушение — это величайшая адхарма. Это змея, которая ведет назад в заблуждение, обратно к началу игры.\n' +
          '\n' +
          'Опасность попасть в адхарму велика на четвертой чакре, на четвертом уровне игры. На первых трех чакрах энергия была направлена на физическую, небесную и астральную плоскости. Теперь, на четвертой чакре, игрок достигает определенного баланса и начинает осознавать важность подходящей религии. Пока он ищет свою роль в игре, возможно, что он проигнорирует существующие дхармы и попытается начать свой путь, игнорируя планетарные законы и законы существования. Здесь ключом является вера.\n' +
          '\n' +
          'Вера — это сущность четвертой чакры: вера, преданность, бхакти. Эта вера может привести игрока — если он действует в гармонии с своей истинной природой, судхармой — к уровню аскетизма. Но если она не соответствует его внутренним вибрациям, она может вернуть его в заблуждение. Это адхарма. Действовать только на основе веры — это может создать безрелигиозность. Вера без учета законов существования — это слепая вера. А слепая вера является самой частой причиной потери энергии на этом уровне. Вера, соответствующая законам существования, — это судхарма, но вера сама по себе — это адхарма.'
      },
      30: {
        title: '30. Хорошие тенденции (Уттам Гати)',
        text:
          'Уттам — это хороший; гати — это движение. Хорошие тенденции текут спонтанно, когда игрок действует в гармонии с законами макрокосма. Когда игрок вибрирует на более низких чакрах, хорошие тенденции не развиваются. Они появляются на сердечной чакре, на четвертом уровне игры. Только когда игрок достигает определенного баланса внутри себя, могут возникнуть хорошие тенденции. Этот баланс позволяет игроку настроить свою вибрацию с вибрацией космоса. Хорошие тенденции — это движения в сторону все более тонкой настройки.\n' +
          '\n' +
          'На четвертой чакре сердце и дыхание играют важную роль. Достигнув хороших тенденций, игрок получает контроль над собственным дыханием и одновременно над сердечным ритмом. Хорошие тенденции, таким образом, помогают стабилизировать развитие четвертой чакры, и дыхание напрямую связано с хорошими тенденциями.\n' +
          '\n' +
          'Любое изменение направления (или тенденции) регистрируется праной, жизненной силой, психической энергией или эланом виталь. На грубом уровне это изменение ощущается как изменение дыхания. Каждый неправильный дыхательный цикл наносит ущерб организму. Таким образом, когда игрок нарушает свой дыхательный цикл, он одновременно создает плохие вибрации внутри себя. Хорошие тенденции — это средство, помогающее игроку поддерживать правильную вибрацию. Их можно определить, наблюдая за своим собственным дыханием.\n' +
          '\n' +
          'Лучшие тенденции — это те, которые связывают игрока все более тесно с ритмическими циклами планеты и космоса. Начни с наблюдения за изменениями в себе на восходе и закате. Вставай до рассвета, чтобы успеть принять душ и сменить одежду для утренней медитации на восходе солнца. Другими хорошими тенденциями являются исключение мяса и яиц из рациона, практика хатха-йога асан (позы и упражнения), регулирование дыхания (см. локи праны, апаны и уйяны), посты, сознательное изучение духовных писаний и все добродетели, содержащиеся в игре Лила, йоге змей и стрел.\n' +
          '\n' +
          'Практика хороших тенденций помогает игроку стабилизировать свое существование, чтобы оно текло ритмично в положительном направлении, и избегать энергетически истощающих отвлечений низших чакр.'
      },
      31: {
        title: '31. Уровень святости (Якша-Лока)',
        text:
          'Игрок, который оказывается на уровне святости, переживает божественную благодать через понимание и познание космических принципов. Святость — это прямой результат хороших тенденций. Это ощущение единства с присутствием Божественного на четвертой чакре, а также способность воспринимать божественную благодать во всей жизни. Это единство выходит за пределы простого интеллектуального осознания и становится реальной частью повседневной жизни.\n' +
          '\n' +
          'Якши были небесными существами, которые обитали на небесах. Согласно индуистской космологии, творение делится на семь классов существ: девы, якши (или киннары), гандхарвы, манушья, асуры (или ракшасы), бхуты и пшачачи. Пшачачи представляют собой самый низкий тип сознания, суть которого — злость и насилие. Далее идут бхуты, или призраки. Это бесформенные существа, не способные освободиться от плоскости земного существования, живущие в прошлом. Затем идут асуры — существа, которые не верят в свод этических норм и живут в поисках чувственных наслаждений — вина, женщин и песен. Затем идут манушья — те, кто верит в закон кармы и ответственность за последствия своих действий. Манушья осознают будущее и природу освобождения. Это уровень человеческого существования. Далее идут гандхарвы — сознание, посвященное служению богам и живущее в гармонии с божественной музыкой. Гандхарвы посвящают свою жизнь тому, чтобы возвышать людей через звук и музыку. Затем идет класс якшей — сознание, основанное на познании и понимании космических принципов и прямом опыте божественной благодати. И наконец, девы — чистые энергетические формы самих богов.\n' +
          '\n' +
          'Когда игрок попадает в якша-лок, его внимание привлекают вопросы о природе божественного существования. Он стремится найти связи между божественным и своей повседневной жизнью. Только достигнув четвертой чакры, игрок воспринимает Божественное на опытном уровне. До этого оно было лишь абстрактной концепцией. Это любопытство о Божественном и его присутствии во всей жизни, это желание встретиться с реальностью, становится сущностью игрока.'
      },
      32: {
        title: '32. Уровень Баланса (Маха-Лока)',
        text:
          'Маха-Лока — это четвертый лок из семи уровней существования. Этот лок считается исчезающим в Ночь Брахмы, Творца. Первые три локи — это те, в которых живет джива (индивидуальное сознание) в ходе своей эволюции и подвержена колесу рождения и смерти. В этом четвертом локе преобладает огненный элемент, но он не столь изыскан, как в сварга-локе, где тела его обитателей светятся и сверкают. Здесь игрок находится выше физических, желательных и мыслительных уровней. Индивидуальное сознание окрашено желаниями (кама) и мыслями, но теперь, когда игрок достиг состояния отсутствия желаний и мыслей, он преодолел третий уровень и вошел в четвертый — постоянный невидимый мир. Те, кто обитает здесь, не свободны от перерождения, но они больше не будут возрождаться в этом цикле творения, потому что они существуют в балансе.\n' +
          '\n' +
          'Три центра выше и три ниже делают этот уровень, уровень сердечной чакры, точкой баланса позвоночника игры. Отсюда энергия течет вниз к первым трем центрам и вверх к более высоким трем планам бытия. Здесь находится центр, где мужская и женская энергии сбалансированы. Игрок, вибрирующий на четвертой чакре, говорит от сердца.\n' +
          '\n' +
          'Он достигает Маха-локи через стрелу милосердия или проходя через хорошие тенденции и уровень святости. Здесь желания низших чакр успокаиваются, и энергия больше не тратится на преследование низших целей. С сердца начинается восходящий поток энергии.\n' +
          '\n' +
          'Здесь также игрок преодолевает интеллектуальное понимание Божественного, характерное для третьей чакры, и переходит к прямому опыту Божественного внутри себя. Из-за этого ощущения единства с Абсолютом, этот уровень также называют уровнем Космического Разума.\n' +
          '\n' +
          'Сердечный центр давно признан самым важным местом ощущений в теле. Сердце — это обитель эмоционального «я». В йога-физиологии это связано с расположением бесжелезистого тимуса в области сердца. Эта железа отвечает за поток электрической энергии в теле — а природа восприятия ощущений в основе своей электрична. Каждое изменение эмоционального тона фиксируется в сердце, а паттерн, в котором бьется сердце, определяет химию тела. Каждое изменение химии тела воспринимается умом как определенный тип чувства или эмоции.\n' +
          '\n' +
          'Таким образом, сердце — это не просто насос, перекачивающий кровь по телу и возвращающий кровь с отходами к легким. Оно также является центром чувств, психическим центром. Суфийская традиция также подчеркивает важность открытия сердечной чакры через любовь, или мохаббат. Здесь начинается поэзия, трансформация личного в безличное. Поэзия полна сердца — ее вибрации, разные чувства. Этот центр также является источником всех трансцендентных психических феноменов.\n' +
          '\n' +
          'Каким бы путем он ни добрался сюда, игрок теперь чувствует расслабление. Его руки автоматически начинают делать жесты (мудры), которые помогают сбалансировать поток энергии через его организм. Его сердце наполняется духом преданности, бхакти. Он способен начать идентифицировать себя с остальной частью творения, что вызывает чувство космического единства. Нежные чувства и чувство эстетики проявляются в его поведении. Голос игрока становится мягче и нежнее, он начинает говорить от сердца. Его голос проникает в сердца других, и так, без всякого усилия, он привлекает к себе группу поклонников, стремящихся достичь тех же вибрационных паттернов.\n' +
          '\n' +
          'Символом уровня баланса является шестиконечная звезда, состоящая из двух равносторонних треугольников, один из которых направлен вверх, а другой вниз. Треугольник, направленный вверх (Звезда Давида, как ее называют на Западе), означает мужскую энергию, а направленный вниз — женскую. Это подразумевает баланс между двумя энергиями, достигнутый игроком, который вибрирует на этом уровне.\n' +
          '\n' +
          'В индуистской космологии насчитывается четырнадцать основных планов, лок, семь из которых — это области, поднимающиеся над землей. Это уровни семи чакр, составляющих позвоночник этой игры — а также собственный физический позвоночник игрока. Первый — бху-лока, физический план. Второй — бхувар-лока, астральный план. Третий — сварга-лока, небесный план. Четвертый — маха-лока, план баланса. Пятый — джана-лока, человеческий план, затем тапо-лока, план аскетизма, и сатя-лока, план реальности. Нижние регионы, спускающиеся от земли, — атала-лока, витала-лока, сутала-лока, расатала-лока, татала-лока, махатала-лока и патала-лока.\n' +
          '\n' +
          'В повседневном индуистском поклонении (сандхья) поклоняющийся произносит мантру (песнь), которая перечисляет каждый из семи основных лок. Произнося название каждого плана, он прикасается к той части тела, с которой этот план связан. Он произносит Ом бху, касаясь влажным кончиком правого безымянного пальца середины между анусом и гениталиями, местом кундалини. Затем он произносит Ом бхувах, касаясь основания гениталий, места второго психического центра. Песнь Ом свах сопровождается прикосновением к пупку. Он произносит Ом маха, касаясь сердца, Ом джанах — основания горла, и Ом тапах — третьего глаза, точки между глазами и немного выше бровей. Последним идет Ом сатям — макушка головы.'
      },
      33: {
        title: '33. Уровень Аромата (Гандха-Лока)',
        text:
          'Гандха означает запах, и чувство запаха связано с землей и физическим планом. Однако, как только игрок достигает четвертого уровня, природа этого чувства трансмутируется и становится символом Божественного, несущим сильное эмоциональное воздействие. В процессе судхармы преданный приносит ароматы божеству, в виде цветов или благовоний. Таким образом, четвертая чакра содержит уровень аромата, гандха-лока.\n' +
          '\n' +
          'На первой чакре игрока привлекают запахи, такие как нефть, парафин и алкоголь. На второй чакре его стимулируют сильные запахи синтетических веществ. На третьей чакре те же искусственные запахи преобладают, но они теперь значительно дороже. Когда он достигает уровня баланса, он осознает бесполезность неорганических ароматов и избегает резких, искусственных запахов.\n' +
          '\n' +
          'Здесь, в гандха-локе, он переживает божественные ароматы во время своей медитации. Эволюция энергии вызывает изменение химии тела, и его организм больше не производит неприятных запахов, вместо этого излучая аромат, напоминающий лотосы или сандал.\n' +
          '\n' +
          'Как мера понимания, садхак (преданный) просят отказаться от использования искусственных ароматов на своем теле, чтобы он узнал свои собственные запахи. Когда его тело перестает источать неприятные запахи, и когда его кал, пот и дыхание больше не источают дурных запахов, он понимает, что его энергия преодолела третью чакру и вошла в уровень аромата.\n' +
          '\n' +
          'Теперь существуют только божественные ароматы. Раз и навсегда игрок исключил неприятные запахи из своей системы.'
      },
      34: {
        title: '34. Уровень Вкуса (Раса-Лока)',
        text:
          'В то время как в нижних чакрах вкус был в первую очередь способом сенсорного восприятия, в четвертой чакре он очищается — вкус в эстетическом смысле. Тот, кто достигает этого уровня, способен проникнуть в мир идей и смыслов. Это проникновение дает игроку прямое переживание сущности эмоций и чувств.\n' +
          '\n' +
          'Раса — это любовь, удовольствие, грация, наслаждение, чувство, вкус, эмоции, красота, страсть, дух. Это поэтическое чувство, сущность поэзии. Раса — это вода в самой чистой форме, сила, которая соединяет все творение.\n' +
          '\n' +
          'До третьей чакры вкус — во всех его оттенках смысла — посвящен деятельности низшего уровня. На первой чакре вкус полностью подчинен желанию зарабатывать деньги. Продукты, богатые энергией (особенно мясо), и готовые продукты (удобные продукты) составляют основу рациона игрока. Он использует много соли и специй. На второй чакре энергия направляется на чувственность, особенно на секс. Здесь его беспокоят продукты, увеличивающие сексуальную выносливость, такие как яйца, женьшень и рыба. На третьей чакре он наслаждается вкусом ради самого вкуса, потребляя продукты ради разных вкусов и текстур. Но на четвертой чакре, на уровне сердечной чакры, вкус очищается. Он оставляет соль и сладости, чтобы понять истинную сущность пищи, которую потребляет.\n' +
          '\n' +
          'Когда игрок достигает уровня вкуса, его вкус совершенствуется во всех аспектах. Его вкусы в еде, музыке и разговоре приятны всем, независимо от их вибрационного уровня. Он становится мастером хорошего вкуса, которого ценят все. Таким образом, он привлекает к себе группу поклонников, стремящихся вибрировать на тех же частотах.'
      },
      35: {
        title: '35. Чистилище (Нарка-Лока)',
        text:
          'До того как игрок достигнет уровня сердечной чакры, он не понимает судхарму, правильную религию. Без судхармы свобода действий невозможна. Когда игрок достигает свободы действий, он становится ответственным за плоды своих поступков. Нарка-лока — это место, где он несет последствия своих поступков.\n' +
          '\n' +
          'В индуистской космологии нарка — это план, расположенный на полпути между землей и небом. Существует семь слоев нарка-локи, которые игрок должен пройти, прежде чем попасть в небеса. Его кармы — это транспортное средство, которое ведет его до уровня, где они вибрируют. Пройдя через эти нарки, если игрок исполнил хорошие кармы, он готов перейти в небеса.\n' +
          '\n' +
          'Властелин нарка — Яма, известный как Дхармарадж — господин смерти. Насилие ведет игрока в чистилище и на самые болезненные вибрационные уровни. Каждый поступок приносит свой результат. Это закон кармы, и его невозможно избежать, пока игрок сохраняет физическое существование. Когда игрок попадает в нарка-локу через плохие кармы, он привязан к этому плану кармическими узами. Это не наказание, а очищение. Дхармарадж, властелин нарки, не заинтересован в страданиях игрока. Он не садистский демон. Его задача — привести неверные частоты в порядок, чтобы будущее развитие духа могло иметь место.\n' +
          '\n' +
          'Нарка также является самой сердечной чакрой. Привязанность к чувствам — это нарка. Чувство привязанности — это нарка. Нарка — это отрицательная вибрация. Те, кто вибрирует негативно, создают нарку в своем доме, семье, соседстве, городе, стране и мире, в зависимости от их способности. Игрок, который попадает в нарка-локу без понимания четвертой чакры, видит это как неудачу, а не как результат отрицательной кармы. Только на четвертой чакре приходит понимание отрицательных карм на опытном уровне. Нарка-лока воспринимается не как результат личной неудачи эго, а как признак несовершенства действия и необходимость улучшения. На четвертой чакре приходит осознание без оценки.'
      },
      36: {
        title: '36. Ясность Сознания (Сваччха)',
        text:
          'Ясность сознания — это свет, который освещает игрока на его пути из четвертого ряда игры в пятый, на уровне, где человек становится Человеком. Свеча на санскрите означает ясный, чистый, прозрачный. Эта прозрачность возникает в результате очищения от непрозрачности плохих карм, которые игрок переживает в чистилище.\n' +
          '\n' +
          'Прозрачность не оказывает сопротивления прохождению света. Когда сомнения разрешаются, туман слепого разума рассеивается, уступая место ясному и сильному свету внутренних чувств. Интеллектуальное понимание, которое доминировало в сознании до третьей чакры, больше не играет своей роли. Разум здесь рассматривается как болезнь, как заболевание сознания. Ведь когда сознание отождествляет себя с пониманием, оно страдает от болезни разума, цепей интеллекта. Через преданность и правильную веру болезнь преодолевается, и игрок вступает в царство Существа.\n' +
          '\n' +
          'Когда игрок достигает этого уровня, он становится свечой — ясным, чистым, прозрачным. Сомнения, которые терзали его, привели его в чистилище и неверие. Но из этих опытов он получил понимание природы судхармы. Он развил хорошие наклонности и освятил свою жизнь. Он побывал на уровнях аромата и вкуса и теперь готов присоединиться к восходящему потоку энергии пятой чакры.'
      },
      37: {
        title: '37. Истинное Осознание (Джняна-Лока)',
        text:
          'Знание о правильном и понимание правильных способов реализации этого правильного в повседневной жизни — это два основных атрибута джнаны. Джнана — это подъемная сила, стрела, которая берет игрока в восьмой ряд и на уровень блаженства, за пределы чакр. Игрок, который понимает свою роль в игре и природу действий, которые позволят ему выполнить эту роль, живет в блаженстве.\n' +
          '\n' +
          'Игрок осознает эту мудрость только после опыта ясности сознания. Только при приостановке оценочных суждений может произойти трансмутация энергии, которая поднимет его до пятой чакры.\n' +
          '\n' +
          'Джнана не является освобождением. Игрок еще не освободился от всего, что омрачает его ум. Но он знает, что блоки могут быть удалены, что Космическое Сознание — достижимая цель. Некоторые индийские философы рассматривают джнану как прямой путь к мокше — Космическому Сознанию. Но в этой игре она ведет к блаженству. Игрок должен еще осознать уровень космического блага и должен бросить два броска, чтобы избежать цикла перерождений. Но здесь нет ничего плохого. Он может вернуться на землю и снова сыграть в игру.\n' +
          '\n' +
          'Джнана — это осознание, а не реализация. Джнана — это понимание законов существования и осознание средств их синхронизации. Четвертая чакра уже установила баланс; сознание было очищено. Теперь возможно истинное проникновение в мир концепций. Игрок перестает быть привязанным к формам выражения и начинает стремиться к сущности, процессу инсайта. Старые отношения принимают совершенно новые перспективы, когда их рассматривают через ясный свет несдержанного сознания. Причина рабства — это майя. Причина освобождения от майи к блаженству — это джнана.\n' +
          '\n' +
          'Пока игрок отождествляет себя как индивидуальное независимое существо, он имеет кармы, и это причина рабства. Джнана ясно показывает, что уменьшив масштаб и область кармы, он может начать устанавливать себя в блаженстве. Это инсайт в саму игру.\n' +
          '\n' +
          'В первых трех чакрах игрок был потерян в царствах заблуждений, фантазий и власти. Каждый путь, который вдохновлял его, в конце концов оставлял его усталым и болезненным. Наконец, на четвертой чакре он начал устанавливать в себе чувство баланса. Затем, с ясностью сознания, он вошел в восходящий поток энергии, который поднял его с четвертой чакры на пятую. С балансом он видит свою цель как достижимую и настраивает свою жизнь в соответствии с инсайтом в процесс выполнения.\n' +
          '\n' +
          'Джнана — это чистая страница. Что бы ни было написано на ее поверхности, это всего лишь иллюзия ахамкары, эго. Иллюзия всегда изменчива и, следовательно, временна. Только сама страница остается, она временная. Страница, которая остается после того, как написанное давно исчезло, — это джнана. Это мудрость, которая помогает игроку понять кармическую запись на этой пустой странице. Насколько бы игрок ни хотел, именно он записывает на своей странице. Что диктует джнана, так это сохранить это нетронутым, передав его так, как оно было дано.\n' +
          '\n' +
          'Джнана правильно помещена в пятую чакру, потому что здесь находится источник тех миллиардов пустых страниц, которые составляют сущность религиозных учений мира. На пятой чакре общение с другими становится основной заботой. Игрок стремится передать сущность собственных инсайтов в игре, одновременно осознавая бессмысленность этой задачи.\n' +
          '\n' +
          '"Самым мудрым поступком было бы оставить этот квадрат пустым. Но в нем есть стрела. И, конечно, автор испытывает блаженство от этого опыта и действительно не может сдержать выражение, как и Бог не мог, когда сказал: "Да будет свет".'
      },
      38: {
        title: '38. План Энергии Жизни (Прана-Лока)',
        text:
          'Прана — это жизненная сила, сама жизнь. На санскрите она синонимична понятию жизни и также обозначает дыхание, которое мы вдыхаем с каждым вдохом. Прана — это одно из пяти основных воздухов в теле. Как воздушная субстанция, она находится в полости рта и помогает пище проходить в желудок. Обычно прана обитает в области от ноздрей до легких, а ее расположение рядом с сердцем сохраняет жизнь от разрушения.\n' +
          '\n' +
          'Прана поддерживает баланс остальных элементов тела и контролирует их функции. С помощью праны мы способны двигаться, мыслить, видеть и слышать. От рождения до смерти прана играет ключевую роль в нашей жизни: при рождении это воздух, который дает энергию во время родов; при смерти она забирает всю жизненную энергию из тела и уходит, оставив безжизненное тело.\n' +
          '\n' +
          'Прана похожа на верного слугу, который выполняет все требования своего хозяина, но взамен не требует никакой награды за свои услуги. Как настоящий преданный, прана предана служению себе, сознанию, двадцать четыре часа в сутки. Однако прана также капризна. Малейшее изменение в настроении хозяина влияет на ее скорость и ритм. Хороший хозяин, понимая преданность своего слуги, должен пытаться помочь пране развиваться. Методы, с помощью которых это достигается, называются пранаямой — одной из самых важных йогических дисциплин.\n' +
          '\n' +
          'В йоге прана имеет первостепенное значение. С помощью практик пранаямы йог направляет поток праны вниз к тазовому сплетению, где она смешивается с апаной — воздухом, который находится в нижних отделах кишечника. Когда прана и апана вместе проходят через сушумну — центральный канал позвоночного столба — к макушке головы, происходит переживание самадхи — цели всей йогической практики.\n' +
          '\n' +
          'Прану не следует путать с кислородом. Энергия в грубом физическом теле питается кислородом. Прана поддерживает существование физического тела: прана — это жизнь. Чтобы понять прану, жизнь и сознание необходимо воспринимать как разные сущности. Жизнь — это средство, через которое сознание проявляется, а прана — это энергия жизни. Когда жизнь прекращается, сознание не исчезает. Это очевидно из множества хорошо задокументированных случаев перерождения.'
      },
      39: {
        title: '39. План Удаления (Апана-Лока)',
        text:
          'Пока прана — это воздух, который принимает энергию извне через легкие и помогает переносить пищевую энергию в желудок, апана выполняет противоположную функцию. Апана в буквальном смысле означает "вниз", и этот воздух отвечает за удаление энергии из тела. Он находится в нижних отделах кишечника; он выталкивает ребенка из матки и вызывает нижние выделения энергии. Апана — это воздух, ответственный за мочеиспускание, дефекацию и эякуляцию.\n' +
          '\n' +
          'Важность апаны плохо понята на Западе. Присутствие кишечных газов признается, но они даже не перечислены в отдельной категории или классе. Существует множество патентованных средств для лечения состояний, вызванных нарушением работы апаны, но нет понимания их причины.\n' +
          '\n' +
          'Согласно индийской медицинской науке, апана — это великий друг, помогающий очищать систему. Процесс пищеварения выделяет газы, захваченные в пище через химическое взаимодействие пищи и пищеварительных соков в кишечнике. Эти газы выделяются в большем количестве, когда пища плохо переваривается или когда циркуляция соков нарушена (сырые продукты выделяют больше газов, как и орехи и семена). Когда по какой-то причине газы нарушаются, они начинают двигаться вверх, а не вниз. Это нарушает химический баланс организма. Если газы приближаются к сердцу, могут возникнуть высокое кровяное давление, сердцебиение и инфаркт. Если они поднимаются еще выше, возникают расстройства дыхательных путей. Если газы достигают головы, возникает шизофрения.\n' +
          '\n' +
          'Когда прана, заряженная положительными ионами, начинает работать с апаной и заставляет ее входить через центральный канал в позвоночный столб, происходит большое слияние положительных ионов праны и отрицательных ионов апаны. Это генерирует большое количество энергии, что помогает подъему спящей энергии у основания позвоночника, называемой кундалини. (Кундалини — это неподвижная опора всех действий в теле. Это энергия, которая присутствует в статической или кинетической форме во всех проявленных явлениях. Это энергия, которую организм использует для своего выживания.)\n' +
          '\n' +
          'Практикуя замки, предписанные в йоге, апана поднимается вверх. Когда она достигает области пупка, она усиливает желудочный огонь. Тогда апана, сочетаясь с огнем третьей чакры, пробивает четвертую чакру и смешивается с праной. Прана по своей природе горячая. Это вызывает еще большее увеличение жара, и оба воздуха поднимаются вверх, создавая вакуум. Священные писания говорят, что именно через этот экстремальный жар, вызванный слиянием праны с апаной, кундалини пробуждается и входит в центральный канал, как змея входит в свою нору. Это смешивание праны и апаны омолаживает йога, и он становится молодым человеком шестнадцати лет, полным жизненной силы, выносливости и энергии.\n' +
          '\n' +
          'Таким образом, на этом уровне игрок осознает важность апаны в своей жизни и учится поддерживать гармонию в воздушных потоках своего тела с помощью правильного питания и других практик.'
      },
      40: {
        title: '40. План Циркуляции (Вьяна-Лока)',
        text: 'Вьяна забирает праническую энергию из легких и передает ее через все системы тела. Это жизненно важный воздух, ответственный за кровообращение, выделения желез, восходящие и нисходящие движения тела, а также за открытие и закрытие век. Вьяна переносит кислород в кровотоке в капилляры по всему организму. Кислород и праническая энергия поглощаются тканями, а отходы выводятся в кровь. Эта обедненная кислородом кровь выбрасывается в венозную систему с помощью вьяны. Вьяна также является силой, которая возвращает эту загрязненную кровь обратно в сердце и легкие. Вьяна вызывает потоотделение. Мы потеем не только в определенных местах, но и через каждую пору тела. Единственное объяснение этого — вьяна. Пот не может двигаться сам по себе. Воздух в легких не может вытолкнуть его, как и воздух в желудке, кишечнике или области ануса. Что же это делает? Это вьяна — присутствующая по всему телу и важная для поддержания химического баланса организма через процессы кровообращения, потоотделения и кашля.'
      },
      41: {
        title: '41. Человеческий План (Джана-Лока)',
        text:
          'Джана-лока — это пятый план, обитель сиддхов (развившихся существ, обладающих силами, которые позволяют им совершать чудеса, кажущиеся людьми с нижних планов настоящими чудесами) и святых, которые всегда поглощены созерцанием Харии (1). Джана-лока — это также область, где обитатели свагар-локи и маха-локи ищут убежище во время Великого Разрушения всех существующих явлений, после чего вселенная создается заново. Элемент, преобладающий в этом локе — это воздух, а тела обитателей джана-локи состоят из чистой мудрости, не затронутой желанием. Это локе божественной мудрости, и те, кто обитает здесь, являются существами божественной мудрости.\n' +
          '\n' +
          'Игрок, попавший на пятый чакр, человеческий план, посвящает свою жизнь синхронизации с божественными законами, чтобы поддерживать восходящий поток энергии внутри себя. Для того, чтобы стабилизировать свой опыт, он ощущает потребность делиться им с другими. Таким образом, пятый чакр является источником всех великих учений. Его расположение в горле, рядом с голосовыми связками, подчеркивает важность общения для игрока, который вибрирует здесь.\n' +
          '\n' +
          'Игрок утверждается здесь благодаря правильному пониманию жизненных воздухов и своим прохождениям через чистилище, ясности сознания и гьяна. Его мудрость требует синхронизации с планетарными законами, и его понимание жизненных воздухов придает им огромное значение. Дисбалансы в воздухах — это отражение дисгармонии с планетарными законами. Без сотрудничества этих воздухов синхронизация невозможна.\n' +
          '\n' +
          'Его понимание божественного присутствия во всем существующем, которое он получил в своем путешествии через четвертый чакр, требует, чтобы он искал Божественность в себе. Таким образом, его внимание обращается к звукам, которые приобретают для него новое значение. Теперь он может слышать звуки внутри себя, которые раньше были не слышны, потому что его внимание было направлено на феноменальный мир. Обратившись внутрь с помощью своих чувств, он слышит звуки своего сердца и крови, текущей по его телу. Эти звуки открывают его нервы, и он становится способным воспринимать больше.\n' +
          '\n' +
          'Хотя говорилось, что все знания существуют внутри, это становится реальностью только в пятом чакре. Открытие нервов производит звуки. Эти звуки, в свою очередь, воздействуют на психическую энергию и вызывают изменения в химии тела. Это производит психическое состояние, в котором игрок открывается новым измерениям опыта. Результирующее понимание известно как знание.\n' +
          '\n' +
          'В четвертом чакре игрок имеет опыт без понимания. Увеличение энергии, вызванное подъемом из четвертого чакра в пятый, поднимает сознание, и новые перспективы становятся видимыми.\n' +
          '\n' +
          'В первом чакре существует только четыре измерения, называемые лепестками. Во втором — шесть. Переход от второго к третьему чакру открывает четыре новых измерения, а еще два добавляются в переходе от третьего к четвертому — всего двенадцать. В пятом чакре функционирует шестнадцать измерений, что дает радикально новый взгляд на природу игры. С этой точки зрения исходят все великие религиозные учения.\n' +
          '\n' +
          'Если игрок, достигший пятого чакра, является частью традиции, он становится новой связью в ее развитии. Или он может уйти и стать независимым мыслителем, пророком, святым.\n' +
          '\n' +
          'Это план, на котором он получает истинную перспективу природы человечества, и она часто достигается прямо через третий чакр с помощью стрелы бескорыстного служения.'
      },
      42: {
        title: '42. План Огня (Агни-Лока)',
        text:
          'Агни — это очень явное проявление вечного циклического перерождения той же самой божественной сущности. Огонь — это дух, душа и тело одновременно. Наша вселенная и все, что развивается внутри нее, включая человека, являются продуктами бога Огня. В символических выражениях он изображен с тремя лицами, которые олицетворяют три огня — павак, электрический огонь; павамана, огонь, возникающий от трения; и суши, огонь богов, также известный в Ригведе как вайшванара, живой магнитный огонь, который пронизывает все галактики. Слово вайшванара часто используется для обозначения Атмана.\n' +
          '\n' +
          'Игрок, попавший в Агни-локу, готов принять форму. Агни — это бог огня; огонь является грубым проявлением энергии. В теле этот огонь — сама жизнь. Это любовь и безопасность. Огонь был защитой человека от диких животных в то время, когда он жил в пещерах. Но огонь — лишь одно из проявлений Агни. Вместе с воздухом и водой он является одной из трех причин затвердевания земли и, таким образом, является родителем форм. Огонь также является причиной света, который представляет собой комбинацию цветов. Таким образом, огонь является причиной как цвета, так и формы — сущности феноменального мира.\n' +
          '\n' +
          'Огонь — это грубое проявление энергии, его транспортное средство. Игрок, попавший сюда, понимает, что его тело — тоже просто транспортное средство. Именно поэтому огонь рассматривается как связь между человеком и Богом. Все религиозные ритуалы включают присутствие Агни, вечного свидетеля. И поскольку этот бог огня — лишь выражение врожденной природы человека, игрок учится, что самообман невозможен. Свидетель всегда рядом. Игрок, который готов принять форму, делает это с осознанием, что его роль должна соответствовать законам планет. Любое отклонение означает самообман, и неизбежно последует нисходящий поток энергии.\n' +
          '\n' +
          'Согласно индуистской мифологии, Агни решил исследовать творение. Он принял форму, подобную воздуху, и путешествовал по вселенной на лепестке лотоса. Но спустя какое-то время он устал и стал искать место для отдыха. Вскоре он увидел гнездо на поверхности вечных вод. В этом гнезде он разжег огонь. Воды были жёнами Варуны, другой проявленной формы Агни. Желание огня к этим женщинам вспыхнуло, и вскоре они были готовы к союзу. Его семя упало и стало землей. Это был огонь, который он посадил в центре гнезда, и эта планета является его потомком.\n' +
          '\n' +
          'Современная наука (то есть западная наука) теперь полагает, что Земля начала существование как шар огня (Агни). Вода охладила поверхность планеты, позволив возникнуть жизни. Даже сейчас огонь остается в ядре планеты, как это показывают вулканы, извергающие расплавленную породу из глубин Земли. Если бы этот внутренний огонь угас, жизнь на планете исчезла бы.'
      },
      43: {
        title: '43. Рождение Человека (Ману́шья-Джанма)',
        text:
          'Переход через план Агни подготовил игрока к принятию формы. Ману́шья-джанма знаменует собой принятие формы. Зачатый в втором чакре, взращенный и питавшийся в третьем, наполненный человеческими эмоциями в четвертом, теперь он рождается.\n' +
          '\n' +
          'Это рождение никогда не регистрируется в судебных и медицинских учреждениях. Оно проявляется в тех, кто встречает его, и позже говорит: «Мы видели Человека». Игрок теперь сын никого. Кто угодно мог быть его отцом. Он — сын Бога, и не принадлежит ни к какой касте, вероисповеданию, нации или религии. У него нет привязанностей, ему не нужны удостоверения личности или отметки. Он нашел себя. Теперь он родился. Теперь его можно почувствовать. Его присутствие сильно ощущается теми, кто еще рождается. Он имеет прямой опыт истины, встречу лицом к лицу с реальностью. Ему не нужно угождать никому, потому что он утратил интерес к созданию группы преданных и последователей. Он относится только к истине, и угодить истине — его единственная цель.\n' +
          '\n' +
          'Человек — рациональное существо. Эта способность разума помогает ему соотноситься с истиной. Тот, кто живет в дисгармонии с законом истины, не может по-настоящему называться человеком. Он — некое другое существо в человеческом теле, стремится родиться как человек.'
      },
      44: {
        "title": "44. Неведение (Авидья)",
        "text":
          "Игрок, попавший в авидью, забывает иллюзорную природу существования и привязывается к определенным эмоциональным состояниям и восприятиям чувств. Эта змея увлекает его энергию вниз, к первой чакре и чувственной плоскости. Потеря понимания природы майи приводит к угасанию рациональной способности ума и отождествлению с определенными состояниями.\n" +
          "\n" +
          "Видья — это знание; средство, которое существует извне. Отсутствие знания — это невежество. Знание — это понимание своей роли в игре с того места, где находишься в данный момент. Настоящая авидья существует в пределах ума. За его пределами авидья не существует. Наши восприятия реальности — это лишь отражения нас самих. Но хотя за пределами ума ничего не существует, это не означает, что существуют только игрок и его ум. Мир имени и формы тоже существует, но он воспринимается умом каждого игрока по-разному, исходя из того места, где он вибрирует в данный момент.\n" +
          "\n" +
          "Этот же мир для одних является местом наслаждения, а для других — адом. Каждый ум воспринимает мир по-своему и придает значение объектам в зависимости от своей кармы. Истинное знание — это понимание реальности без вынесения оценочных суждений. Истинное знание — это непривязанность к объектам чувственного восприятия, которые всегда меняются, временны и, следовательно, не являются реальностью.\n" +
          "\n" +
          "Если игрок сосредоточится только на своем внутреннем звуке — звуке своей сущности, своего бытия, — он не станет жертвой собственного ума. Ум подобен тигру, обитающему в лесу желаний, окруженном реальностью, полной добычи.\n" +
          "\n" +
          "Это произведение искусства ярко передает концепцию 'Неведения' (авидьи) в духовном контексте. Оно изображает игрока, запутанного в сфере авидьи, где забывается иллюзорная природа существования и возникает привязанность к эмоциональным состояниям и чувственным восприятиям. Центральная фигура произведения притягивается к чувственной плоскости, символически изображенной в виде змеи, представляющей нисхождение энергии и утрату рационального мышления.\n" +
          "\n" +
          "Фон произведения отражает ментальную сферу, подчеркивая идею, что наши восприятия реальности — это всего лишь отражения нас самих. Он демонстрирует изменчивость индивидуальных восприятий, где каждый человек воспринимает мир по-своему в зависимости от своего умственного состояния и позиции.\n" +
          "\n" +
          "Цвета и композиция произведения вызывают ощущение ума, захваченного в лесу желаний, что символизирует реальность, постоянно меняющуюся и временную. Эта сцена иллюстрирует ловушку привязанности к преходящим объектам чувственного восприятия и важность сохранения фокуса на своем внутреннем 'я', несмотря на отвлекающие факторы ума. Произведение передает суть истинного знания как непривязанности и осознания преходящей природы материального мира, побуждая к внутреннему путешествию к самосознанию и духовному просветлению."
      },
      45: {
        "title": "45. Истинное знание (Сувидья)",
        "text":
          "В то время как гьяна — это осознание истины, истинное знание объединяет поведение (практику) с осознанием, комбинация которых поднимает игрока на восьмую плоскость и плоскость космического блага. Теперь он находится всего в одном шаге от своей цели. Он достигает осознания того, что является микрокосмом Вселенной, океаном в форме капли.\n" +
          "\n" +
          "Согласно индуистской традиции, существует четырнадцать видов ведийских знаний — спиц на колесе истины. Эти четырнадцать измерений знания включают все, что нужно человеку для познания и понимания реальности. Это четыре Веды, шесть Шастр, Дхарма, Ньяя (логика), Миманса (критическое понимание) и Пуран. Однако в индустриальном обществе знание приняло новую форму. То, что сейчас называют знанием, сведено к уровню информации, которую можно запрограммировать в компьютер. Но человеческое сознание больше, чем компьютер. Истинное знание требует опыта.\n" +
          "\n" +
          "Истинное знание добавляет к гьяне новое измерение — осознание того, что прошлое, настоящее и будущее едины; они являются аспектами одного единого континуума. Хотя мудрость может диктовать один курс действий, истинное знание может требовать противоположного. Из-за мудрости ученики отреклись от Христа. Из-за истинного знания Христос принял свою смерть, зная, что тонкие принципы всегда перевешивают ценность материальных форм.\n" +
          "\n" +
          "Истинное знание питает сознание и спасает его от змей нерелигиозности, горя, ревности, зависти, невежества, насилия, эгоизма, тамаса и инертного негативного интеллекта. Истинное знание укрепляет внутренний голос. Сувидья укрощает тигра ума и превращает лес желаний в сад межличностной эволюции.\n" +
          "\n" +
          "Слово \"видья\" происходит от корня \"вид\", означающего \"знать\". Самой древней формой знания было состояние самадхи, в котором ответ получался через непосредственное переживание реальности. Таким образом, все индуистское знание известно как даршан, что означает \"видеть\" или \"переживать\". Знание — это становление единым с объектом познания. Это и есть видья, истинное знание.\n" +
          "\n" +
          "С истинным знанием завершается пятая чакра, пятый ряд игры. В тот момент, когда игрок достигает полного осознания единства себя и космоса, он становится единым с конечной реальностью и достигает плоскости Рудры (Шивы), космического блага.\n"
      },
      46: {
        "title": "46. Совесть (Вивека)",
        "text":
          "Все, что существует в феноменальном мире, не является реальностью. Объекты чувственного восприятия меняются с течением времени, развиваясь, растя и увядая. Однако эти объекты чувств создают полное впечатление реальности. Человек придает ценность объективному миру и развивает желание идентификации с этими объектами чувств. Вивека, совесть, — это сила, которая спасает его от падения обратно в желание привязанности к материальному. Это его собственный голос внутренней мудрости, позволяющий ему различать тонкое и грубое, видеть ноумен в феномене.\n" +
          "\n" +
          "Вивека не могла появиться раньше в игре. Первая клетка шестой чакры — совесть — следует за прохождением через истинное знание. Если игрок попадает на стрелу истинного знания, он немедленно поднимается на плоскость космического блага. В противном случае ему приходится полагаться на свою совесть, чтобы определить направление игры.\n" +
          "\n" +
          "Основные элементы феноменального мира присутствуют до пятой чакры. Они являются строительными блоками грубых проявлений. Наличие этих элементов влияет на модель вибрации игрока, пока он действует из этих чакр. Но шестая чакра находится за пределами элементов. Проявленная майя теперь оказывает минимальное воздействие на сознание.\n" +
          "\n" +
          "Когда игрок попадает на клетку совести, он немедленно переносится в счастье, которое возможно только в седьмой чакре. В седьмой чакре игрок выходит за пределы всякого насилия, что является причиной истинного счастья. Но здесь — шестая чакра, и здесь совесть играет важную роль. Шестая чакра традиционно называется третьим глазом. Совесть — это третий глаз. Наши два глаза видят только то, что существует — что было в прошлом и что есть в настоящем. Но третий глаз дает возможность предвидеть будущее в игре, и это одно из достоинств шестой чакры: прозрение в будущее. Это не фантазия, а прямое восприятие того, что будет.\n" +
          "\n" +
          "Совесть — это не то, что развивается за одну короткую (по космическим меркам) жизнь. Она содержит в себе прозрения расы в форме коллективного бессознательного. У игрока есть в распоряжении резервуар опыта внутри себя, который теперь находится на уровне сознательной осознанности.\n" +
          "\n" +
          "Совесть — это учитель, сидящий на вершине головы каждого игрока — в седьмой чакре — и направляющий его на протяжении всей жизни. Игрок может избежать социальных и политических законов, но избежать голоса совести в конечном итоге невозможно.\n" +
          "\n" +
          "До того как игрок достигнет шестой чакры, понятие совести кажется бессмысленным. Но прохождение через шестую чакру определяется падением игральной кости кармы и подсказками внутреннего голоса Вивеки."
      },
      47: {
        "title": "47. Плоскость Нейтральности (Сарасвати)",
        "text":
          "Психическая энергия в человеческом организме течет через центральный нервный канал спинного мозга, Сарасвати. Согласно йогической физиологии, этот поток энергии начинается в первой чакре и последовательно вибрирует выше, по мере того как игрок продвигается от ряда к ряду. Конечная цель йоги — поднятие этой энергии к седьмой чакре, к короне головы.\n" +
          "\n" +
          "В человеческом теле существуют три основных типа энергии: электрическая, магнитная и нейтральная. Электрическая энергия — это энергия солнца, она доминирует в правой половине тела. Магнитная энергия — это энергия луны, она доминирует в левой половине тела. В обычных состояниях преобладает либо электрическая, либо магнитная энергия (положительная или отрицательная, солнечная или лунная). Нейтральная или психическая энергия возникает, когда солнце и луна уравновешиваются в теле и энергия начинает подниматься по позвоночному столбу. До шестой чакры контроль над этой энергией был невозможен. Всплески могли возникать во время медитации, но в случайные моменты и вне сознательного контроля. В шестой чакре отрицательное и положительное исчезают; остается только нейтральность.\n" +
          "\n" +
          "Когда игрок попадает на клетку Сарасвати, он оказывается в области богини, в честь которой она названа. Его окружает чистая музыка, и он живет в состоянии видьи, знания. Богиня учения и красоты одаривает его способностью стабилизироваться за пределами влияний электромагнитного поля существования. Он становится свидетелем игры.\n" +
          "\n" +
          "Три нерва, которые встречаются в мозге в области третьего глаза (между и чуть выше бровей), отвечают за поток трех типов энергии. Это пингала-нади, ида-нади и сушумна-нади: солнечная, лунная и нейтральная; магнитная, электрическая и нейтральная. Этот узел нервов называется праяг, имя, которое часто присваивается третьему глазу. Сушумна остается невидимой, тогда как ида и пингала можно увидеть в виде двух глаз. В индийской мифологии одним из самых важных святых мест является Праяг-Радж, место слияния трех самых священных рек страны — Ганга, Ямуны и Сарасвати. Ганг и Ямуна — это ида и пингала. Обе видимы, как и два глаза. Река Сарасвати считается невидимой, текущей к праягу из глубин земли. Этот же символизм встречается в греко-римской мифологии в виде посоха Эскулапа, божества исцеления. Две змеи обвивают центральный крылатый посох. Змеи — это ида и пингала, а посох — сушумна."
      },
      48: {
        "title": "48. Солнечная Плоскость (Ямуна)",
        "text":
          "В шестой чакре игрок устанавливает гармонию между мужским, солнечным принципом, и женским, лунным принципом. Это гармоничное слияние элементов создает наблюдающее-себя (witness-self), которое не является ни мужским, ни женским, но представляет собой полный баланс обоих.\n" +
          "\n" +
          "Солнечная плоскость — это плоскость мужской энергии. Пока игрок остается либо мужским, либо женским, он не может принять противоположную природу в себе, так же как игрок в команде на игровом поле не способен судить свои собственные действия, потому что его личная привязанность к игре исключает возможность правильного восприятия. Но тот, кто действует как рефери, находится вне личного участия. Он не привязан ни к одной из команд. Это наблюдающее-себя, которое способно видеть ошибки, совершаемые игроком.\n" +
          "\n" +
          "Когда игрок, вибрирующий в нижних чакрах, окрашен энергией солнечной плоскости, его первоочередной заботой становятся разрушение, власть, идентификация себя — точно так же, как слишком много солнечного света может сжечь планету. Чтобы уравновесить солнце, нужна луна. Игрок, который попадает сюда после прохождения через мудрость и правильное знание, осознает это и учится балансировать свою игру энергий.\n" +
          "\n" +
          "Ниже шестой чакры солнечные и лунные энергии переплетаются друг с другом; но в шестой чакре они встречаются и становятся единым целым. Это чувство единства характеризует плоскость аскетизма.\n" +
          "\n" +
          "Чтобы лучше понять природу солнечных и лунных энергий и их функцию в человеческом организме, можно рассмотреть пример аккумуляторной батареи. Как и источник питания, люди имеют анод и катод, положительные и отрицательные узлы. Когда оба помещены в раствор, способный проводить ток, вырабатывается электричество. Анод положительный и обычно сделан из меди — красного солнечного металла, связанного с огненным знаком Марса. Для катода используется цинк — лунный металл синевато-белого цвета. Электрические заряды накапливаются вокруг анода, и через анод мы черпаем электричество. Это электричество символизирует электрический (мужской) принцип в человеческом организме.\n" +
          "\n" +
          "В человеческом теле пингала-нади аналогична Ямуне, солнечной плоскости. Солнечная энергия напрямую связана с правой ноздрей. Когда используется правая ноздря, доминирует пингала, и наблюдается небольшое изменение в химии тела, дыхании и пульсе. Пингала является источником энергии для всех творческих действий и делает медитацию невозможной, пока работает правая ноздря. В техниках пранаяма-йоги часто требуется солнечное дыхание. Это просто означает, что практикующий должен дышать через правую ноздрю.\n" +
          "\n" +
          "Ямуна — одна из трех священных рек, которые встречаются в Праяг-Радже (ныне Аллахабад) в провинции Уттар-Прадеш на севере Индии. Кришна родился недалеко от берегов Ямуны."
      },
      49: {
        "title": "49. Лунная Плоскость (Ганга)",
        "text":
          "Игрок, попавший на клетку Ганга, оказывается у истока магнитной женской энергии. Он ощущает нерв идa-нади, расположенный с левой стороны позвоночника. Ида-нади является источником питания организма благодаря своей женской (питающей) природе. Женское начало магнитно, притягательно; мужское — электрично, напористо.\n" +
          "\n" +
          "Магнитная энергия человека тесно связана с психической энергией. Игрок, генерирующий больше психической энергии, автоматически развивает личный магнетизм, который притягивает к нему тех, кто способен быть магнитизированным. Магнетизм на самом деле является балансом полярностей. Магнитная сила создается взаимодействием северного и южного полюсов любого вещества, способного удерживать энергию. Поток энергии от одного полюса к другому не встречает препятствий, и формируется магнитное поле. Таким же образом становится возможным беспрепятственный поток психической энергии, когда медитация практикуется в те моменты, когда работает левая ноздря, лунная ноздря.\n" +
          "\n" +
          "Через медитацию игрок попадает на лунную плоскость. Здесь он постигает женский принцип. Он узнает, что высокий прилив человеческих эмоций достигается в ночь полнолуния, так же как приливы океана достигают своего пика во время полнолуния. Оба явления вызваны магнетизмом луны, воздействующим на планету.\n" +
          "\n" +
          "Хотя слово \"лунатизм\" (lunacy) было создано для обозначения связи между лунными циклами и безумием, игроку, попавшему на лунную плоскость шестой чакры, не стоит бояться. На этом уровне вся энергия становится единой, и женская энергия перестает быть разрушительной, превращаясь в одну из самых конструктивных клеток игрового поля. Левая (лунная) ноздря способствует не только медитации, но и музыке, танцам, наслаждению поэзией, устранению печали, боли и депрессии, а также восстановлению сознания. Ида-нади ведет игрока на лунную плоскость — плоскость преданности и восприимчивости.\n" +
          "\n" +
          "Как общее правило, левая ноздря должна функционировать днем, а правая — ночью. Луна нужна днем, чтобы компенсировать преобладание солнечной энергии; а солнечная ноздря компенсирует лунное преобладание ночью. Это и есть йога дыхания через ноздри."
      },
      50: {
        "title": "50. Плоскость Аскезы (Тапа-Лока)",
        "text":
          "Как знание было основной темой пятой чакры, так тяжелая работа над собой — покаяние — характеризует игрока, который вибрирует на плоскости аскезы, шестой чакре. \"Тапа\" означает покаяние, самоустранение, очищение через огонь и практику медитации в самоотречении.\n" +
          "\n" +
          "Тапа-лока — это шестая из семи главных лок. Эта область не исчезает в ночь Брахмы. Воздух является элементом, преобладающим в этой локе, поэтому все комбинации легко проникают друг в друга. Хотя элементы завершаются на пятой чакре в человеческом организме, в определенных локах, особых регионах, расположенных в пространстве, элементы продолжают существовать. Те, кто эволюционирует благодаря тяжелой работе над собой, попадают в эти локи в зависимости от состояния своего сознания. Те, кто обитает в тапа-локе, — высокие аскеты и йоги, те, кто пошел по пути без возврата и продолжает совершать великие покаяния, чтобы пересечь этот уровень сознания и достичь следующей локи — сатя-локи, плоскости реальности.\n" +
          "\n" +
          "Развивающееся свидетельствующее \"я\" осознает оставшиеся кармы и приступает к тяжелой работе по их очищению. Требуется глубокое покаяние. Кармы стали слишком тяжелой ношей, чтобы нести их дальше.\n" +
          "\n" +
          "Игрок достигает тапа-локи либо напрямую, через практику судхармы четвертой чакры, либо постепенно, продвигаясь через пятую чакру, развивая совесть и овладевая своей солнечно-лунной энергетической системой.\n" +
          "\n" +
          "Опыт единства со всей реальностью лишает феноменальный, чувственный мир его привлекательности. Все элементы теперь находятся под контролем игрока. Его понимание природы пространственно-временного континуума позволяет ему видеть начало и конец творения. Живя в этом ограниченном теле, он становится безграничным. Игрок знает, что он — бессмертный дух в смертном теле. Смерть перестает пугать. Здесь игрок понимает значение выражения \"Я есть То\" или \"То есть я\", известного на санскрите как \"таттвамаси\" или \"хамса\". Теперь игрок становится известен как парамахамса.\n" +
          "\n" +
          "На Западе много говорят о третьем глазе. Чтобы понять это явление, игрок должен пройти испытания плоскости аскезы. Ему нужно совершать покаяние, освободиться от идентификации с мужчиной или женщиной. Все его понимание самого себя должно радикально измениться. Он должен признать присутствие Божественного в себе. Он должен ощутить свою бесконечную природу. Здесь звук Ом становится его мантрой. Это космическая слоговая вибрация, которая резонирует по всему его существу и помогает поднять его уровень энергии. Каждый час, каждую минуту он слышит свой внутренний звук. Этот звук становится все более глубоким, пока не охватит все звуки его окружения, внутреннего и внешнего. Каждый, кто находится в его присутствии, становится спокойным и начинает слышать те же высокочастотные звуки, издаваемые его собственной системой.\n" +
          "\n" +
          "Каждый игрок оказывает определенное влияние на других игроков, в зависимости от уровня, на котором он вибрирует. Присутствие игрока первой чакры вызывает либо ужас, либо жалость. Он агрессивно ищет физического выживания или оплакивает свою неспособность достичь его. Игрок второй чакры, сосредоточенный на чувственных наслаждениях, старается очаровать и успокоить. Его голос соблазнителен, маслянист. Игрок третьей чакры бросает вызовы. Он утверждает свое эго, где бы и когда бы это ни было возможно, в поисках более широких идентификаций и подтверждения уже принятых аспектов. Игрок четвертой чакры вдохновляет окружающих. Он нашел эмоциональный центр и не производит угрожающих вибраций. Игрок пятой чакры держит зеркало, созданное из его собственного опыта, в котором другие игроки могут увидеть свое отражение. Присутствие игрока шестой чакры раскрывает Божественное. Другие игроки теряют свои идентичности и ограничения, стремясь слиться своим сознанием с сознанием того, кто утвердился на плоскости аскезы."
      },
      51: {
        "title": "51. Земля (Притхви)",
        "text":
          "Земля — это великий принцип матери, сцена, на которой сознание разыгрывает свою вечную игру, Лилу. Здесь игрок понимает Землю как Мать-Землю, а не просто \"землю.\" Он открывает новые узоры и гармонии, новые способы игры, которые раньше были полностью скрыты в тумане, созданном вовлеченностью нижних чакр.\n" +
          "\n" +
          "И индийская традиция, и современная наука согласны в том, что Земля возникла как шар огня. То, что осталось после того, как пламя завершило свою работу, стало Землей. Земля — это не только планета, но и живой организм, великий материнский принцип, который породил все, что существует на её груди. И как мать несет молоко, так и Земля обеспечивает питание, жизненную силу, еду и энергию.\n" +
          "\n" +
          "Земля — это символ игрока шестой чакры. Она — продукт великой аскезы. Её потрясающее рождение в огне дало ей возможность порождать живую энергию, покрывающую её поверхность. Она — сущность терпимости и выдержки. Хотя её дети разрушают её тело и причиняют боль её душе, она взамен даёт им алмазы, золото и платину. Она бескорыстно следует закону дхармы, не различая высокого и низкого. Таким образом, она по праву занимает место в шестой чакре. Мы видим её тело, физический план первой чакры. Но то, чего мы не видим, — это её дух, её интеллект, её доброжелательность, её значимость. Это понимание приходит к игроку шестой чакры. Он видит в её игре постоянное взаимодействие энергий солнца, луны и нейтральности, отражающее процессы, происходящие в его собственном микрокосме.\n" +
          "\n" +
          "Увидев внутреннюю реальность, отражённую в Великой Матери, игрок обретает понимание Лилы и становится Игроком. Ему всё ещё предстоит пройти через плоскость насилия, чтобы обрести истинную текучесть. Но после того как эти испытания пройдены, он может установить прямую связь с Космическим Сознанием, попав на уровень духовной преданности.\n" +
          "\n" +
          "Таким образом, Земля взрастила своего ребёнка-игрока до того момента, когда он теперь способен создавать свою собственную игру, подниматься или опускаться в зависимости от своей кармы. Иногда в процессе игры игроки поднимаются на несколько уровней, испытывая такие качества, как милосердие, мудрость и правильное знание. Эти стрелы поднимают их на высшие уровни. Но поскольку они на самом деле ещё не принадлежат этим уровням, они не могут быть уверены в достижении Космического Сознания. Им всё равно нужно проделать этот путь, и игра предоставляет им змею тамогуны, чтобы вернуть их обратно на Землю и заставить начать усилия заново. Каждый раз, когда игрок поднимается выше и не достигает уровня Космического Сознания, он должен вернуться домой, к своей Матери-Земле — космической игровой площадке.\n" +
          "\n" +
          "И чем больше игрок познаёт Землю, тем глубже он ценит тонкие балансы, которые поддерживают жизнь на её поверхности. Для человека первой чакры она лишь сундук с сокровищами, который он может грабить по своему усмотрению, не задумываясь о последствиях. Человек шестой чакры понимает опасность такого отношения, видя, как планета, которую он любит, сталкивается с неминуемой угрозой и, возможно, непоправимым ущербом."
      },
      52: {
        "title": "52. Плоскость Насилия (Химса-Лока)",
        "text":
          "Игрок, достигший шестой чакры, осознает единство всего сущего. Человеческие тела — лишь преходящие формы. Истинная сущность всех игроков существует за пределами имени и формы. Игрок понимает, что смерть — это всего лишь смена сценария жизни. Отсюда возникает опасность: игрок может прибегнуть к насилию, полностью осознавая, что его действия в конечном счете не причиняют вреда другим игрокам.\n" +
          "\n" +
          "Но мир — это сцена Лилы и кармы. Каждый игрок имеет возможность достичь Космического Сознания в своей нынешней жизни. Закон кармы гласит, что всем игрокам должно быть позволено разыгрывать свои драмы до конца, завершать игру. Действия насилия на шестой чакре не исключены из вездесущего принципа кармы. Это делает плоскость насилия змеей, которая уводит игрока вниз, в чистилище четвертой чакры, где он должен искупить свои действия.\n" +
          "\n" +
          "Именно люди, вибрирующие на этом уровне, на протяжении истории развязывали крестовые походы, джихады и другие «священные» войны. Организаторы этих грандиозных спектаклей человеческих страданий и смертей всегда видели себя великими реформаторами сознания. «Лучше убить другого игрока, чем позволить его душе жить в невежестве», — такова логика шестичакрового фанатика. В конце концов, никто ведь на самом деле не умирает...\n" +
          "\n" +
          "Реальное насилие невозможно до шестой чакры. Акты насилия, совершенные игроками на более низких уровнях, воспринимаются как самозащита, реакция на внешнюю угрозу. Насилие первой чакры возникает из-за денег и имущества. Насилие второй чакры связано с сексом и наслаждением. Жажда власти порождает насилие в третьей чакре. Человек четвертой чакры убивает, чтобы избавиться от кармы, рассчитаться за старые обиды. Агностицизм подпитывает насилие пятой чакры. На шестой чакре мотивацией к насилию становится создание веры, культа или религии. Организаторы \"нечестивых войн\" часто являются высокими аскетами, которые выполняли тяжелые покаяния, чтобы обрести силы. Но если их кармы дурны, аскетизм может привести к опасному солипсизму. Игрок начинает верить, что он владеет всей истиной и является, по сути, Богом или его агентом. Те, кто не соглашаются, ошибаются, а значит, любые средства оправданы для их обращения. Лучше, чтобы они умерли с пониманием, чем жили в невежестве.\n" +
          "\n" +
          "На нижних чакрах свобода действий отсутствует. На шестой чакре игрок становится своим собственным мастером и обретает великие силы через аскезу и покаяние. Сила в химса-локе превращается в насилие. Игрок становится жестоким по отношению к самому себе, прежде чем сможет совершить акт насилия над другим. Для насилия требуется совершенная уверенность в себе. Такая уверенность не возникает до шестой чакры. То, что на нижних чакрах было реакцией, теперь становится своего рода духовной анархией.\n" +
          "\n" +
          "Недостаток текучести и духовной преданности тянут игрока вниз, к ещё более тяжелым покаяниям в чистилище, где он должен искренне раскаяться, чтобы продолжить игру и вновь найти путь духовной преданности."
      },
      53: {
        "title": "53. Жидкостная Плоскость (Джала-Лока)",
        "text":
          "Вода по своей природе холодна и поглощает тепло, создавая ощущение прохлады. Тепло шестой чакры, аскезы, делает игрока агрессивным. Он должен пройти через чистые воды этой жидкостной плоскости, чтобы утолить горящее напряжение насилия и преобразовать его в теплую устойчивость духовной преданности.\n" +
          "\n" +
          "Вода, один из пяти элементов, является связующим материалом существования. Вес человеческого тела состоит преимущественно из воды. В засушливых районах, где вода либо глубоко под землей, либо отсутствует, земля становится хрупкой и разрозненной, и мы называем ее песком. Песок не удерживает воду. Вода проходит через него быстро, потому что отдельные песчинки не могут впитывать влагу. Земля становится бесплодной, почти лишенной жизни. Вода, таким образом, также отвечает за плодородие, прорастание и рост. Рост сам по себе — это процесс тепла, огня. Тепло придает цвет и форму, а вода добавляет стабильность. Вода связывает форму и является энергией, на которой питается огонь. Таким образом, огонь 'поглощает' воду и предоставляет жизненную энергию Земли, проявляющуюся в формах жизни на ее поверхности.\n" +
          "\n" +
          "Вода не имеет формы; она принимает форму в соответствии с контуром сосуда. Это также основной атрибут игрока шестой чакры — способность становиться тем, что противостоит себе. Истинная игра начинается, когда игрок теряет свою идентичность как игрок. До шестой чакры и способности становиться бесформенным, игрок был захвачен деньгами, сексом, властью, кармой и поиском знаний. Игра начинается в шестой чакре, когда знания получены, и иллюзия формы идентификации игрока растворяется."
      },
      54: {
        "title": "54. Духовная преданность (Бхакти-Лока)",
        "text":
          "Бхакти, или духовная преданность, основана на доктрине 'Любовь есть Бог, и Бог есть любовь.' Бхакта-преданный влюблен в своего Бога. Бог есть возлюбленный, а преданный — влюбленный. Бхакта или влюбленный испытывает разлуку и тоскует по встрече или хотя бы взгляду на своего возлюбленного. Ничто другое не привлекает его, ничто другое не удерживает его внимание, все остальное бессмысленно: еда, сон, секс, привязанности, обязанности — все больше не важно. Он полностью поглощен чувством разлуки и в экстазе кричит, прося хотя бы взгляда на Господа. Когда бхакти благословлена божественной милостью, он чувствует неразделенный союз, и преобладает недвойственное сознание. Он и его Господь становятся единым целым, и божественный опыт уверяет преданного в милости, которая исходит от Божественного.\n" +
          "\n" +
          "Бхакти — это самый прямой метод, самый короткий путь для переживания Божественного. Вся йога и знания, гьяна, основаны на камне фундамента истинной веры, истинной преданности, истинного бхакти. Нет ничего выше любви, и бхакти — это религия любви. Любовь действительно есть Бог. Разжигать свечу любви искоркой знаний и заниматься йогой любви — вот что такое бхакти.\n" +
          "\n" +
          "На последней стадии открытия шестой чакры, когда игрок становится жидким и чистым, он осознает настоящую ценность игры.\n" +
          "\n" +
          "Он понимает реальность как в том виде, в котором она существует, так и в том, как она появляется. Он осознает необходимость плоскости аскезы, гьяны, правильных знаний и судхармы, бескорыстной службы. Он также понимает, что гнев, гордость, пустота, печаль и неведение — все это значимые аспекты опыта. Он выходит за пределы всех оценок. Все имеет одинаковое значение и действительность. Он знает, что, пока он остается в теле, его кармическая игральная кость будет вести его по пути, этап за этапом, квадрат за квадратом. Он знает, что будет жертвой змей на своем пути, как он знает, что также встретит стрелы.\n" +
          "\n" +
          "Вокруг себя игрок видит такую же игру, разыгрываемую другими, все проходят через те же состояния, но с разной частотой и интенсивностью. Он достиг стабильности в себе, овладев своей волей. Для дальнейшего развития ему теперь нужен эмоциональный центр для своей жизни. Чтобы утратить свои идентификации, ему нечем иным, как только не идентифицироваться с Божественностью, в одной или всех формах. Одна форма становится каждой формой в этот момент, момент, когда игрок оказывается в бхакти-локе. В любой форме, в которой он находит Божественное, все другие формы присутствуют магически. Форма буквально становится Богом, который, в свою очередь, становится преданным, экстатичным бхактой. Ранее игрок не принимал Лилу — игру — как свою основную природу и оставался пойманным в вибрации шестой чакры, пока его энергия не ускорилась слишком быстро и не стала агрессивной. Но принятие Лилы дает ему преданность самой игре.\n" +
          "\n" +
          "Он воспринимает квадраты как игру божественной энергии и ощущает единство с каждым из них. Все они — проявления его Господа. Истинное бхакти, следовательно, происходит в шестой чакре. Знающий и познаваемое, субъект и объект, бог и преданный — все становятся Единым. В шестой чакре игрок понимает это, и таким образом многие становятся единым целым.\n" +
          "\n" +
          "В четвертой чакре существует дуальность. Единство приходит после получения знания, в пятой чакре. Без духовной преданности игрок начинает думать о мире как об океане. Духовная преданность — это стрела, которая ведет каплю к океану, после того как капля осознает присутствие океана внутри себя.\n" +
          "\n" +
          "Это единственный прямой путь к Космическому Сознанию. Суть Космического Сознания не может быть осознана только через гьяну или правильные знания. Это духовная преданность превращает Космическое Сознание в друга и дает лицом к лицу осознание Божественного игроку. Знание и мудрость лишь предоставляют осознание космического принципа. Преданность позволяет игроку увидеть Абсолют, проявляющийся в любом опыте. Божественное присутствие повсюду, во всем.\n" +
          "\n" +
          "Гьяна делает из игрока мудреца, а бхакти делает его божественным ребенком, всегда на теплом коленях своей матери и под благосклонной защитой своего отца. Мудрецу нужно пройти долгий путь, чтобы увидеть Бога. Бхакта же постоянно окружен Божественным в его многочисленных именах и формах, в сумме всего жизненного опыта."
      },
      55: {
        "title": "55. Эгоизм (Ахамкара)",
        "text":
          "Ахам означает 'я' или 'я есть'. Кара (от акушар) означает форму. Когда 'я' принимает форму, это становится ахамкарой. Когда центр деятельности в индивидуальном 'я' игрока становится его 'я', тогда его ахамкара оказывается запертой в майе 'моего и моего'. Когда ахамкара — а на самом деле это высший аспект реальности — не может отождествиться с целым и становится одинокой частью, то ахамкара превращается в эгоизм.\n" +
          "\n" +
          "Когда все внимание игрока направлено исключительно на достижение объекта его желания, он становится эгоцентричным. Средства больше не важны. Единственно правильные средства — это те, которые быстро приведут его к его цели, будь то честные или нечестные. Пока он сохраняет смирение, внимание к другим, уважение и любовь, средства, которые он применяет, имеют смысл для него. Он понимает, что его собственные желания не настолько важны, чтобы оправдывать причинение боли другому. Но когда желание преодолевает психику игрока, и он больше не может отождествляться со смирением, любовью, терпением, уважением и вниманием, он становится агностиком. Он теряет всякую ориентацию на ценности здесь и сейчас, поглощенный кармами установления своей идентичности в игре.\n" +
          "\n" +
          "Слияние с Космическим Сознанием выглядит как смерть эго. Старые паттерны, представления и идеи должны исчезнуть, чтобы игрок достиг освобождения. Но ахамкара не хочет умирать. Эго хочет удержать старые идентификации. Это сопротивление усиливается по мере того, как игрок приближается к достижению Космического Сознания.\n" +
          "\n" +
          "Хиндийские мудрецы верят, что звук является источником всего творения. Звук — это самая тонкая форма, в которой энергия существовала до творения. Существует 52 формы, в которых звуковая энергия проявляется в форме (акар), и когда человеческий организм эволюционировал, эти звуки локализовались на нервных окончаниях психических центров энергии. Начальный звук — это самый простой звук, аа. Последний звук — ха. Таким образом, все существование от аа до ха. А ощущение идентификации, которое соединяет аа с ха, и есть ахамкара — ощущение бытия индивидуальным 'я'.\n" +
          "\n" +
          "Йоги признают сознание в человеческом организме как имеющее четыре основных аспекта или категории: манас, ум; буддхи, интеллект; читта, бытие; и эго, ахамкара. Все, что воспринимается как сенсорное восприятие, есть ум. Понимание сенсорных восприятий — их категоризация и оценка — это буддхи. Ощущение и переживание сенсорных восприятий фиксируется в читте. Тот, кто думает, что он наслаждается или получает эти сенсорные восприятия как одно существо, есть эго, ахамкара. Когда это эго становится 'единственным', все остальное становится средством для игрока, чтобы удовлетворить себя. Таким образом, когда ахамкара не соединена с Космическим Сознанием, она становится эгоизмом.\n" +
          "\n" +
          "Эго является прямым следствием чувства-себя, читты. Чтобы играть в игру, это чувство-себя отождествляется с объектом, который перемещается от квадрата к квадрату, иногда поднимаясь выше стрелами, а иногда резко опускаясь змеями. Когда игрок полностью отождествляется с объектом, восторгаясь подъёмом стрелы и погружаясь в депрессию из-за укуса змеи, он становится жертвой эгоизма. Он слишком привязан к объекту игры и забыл свою божественную природу.\n" +
          "\n" +
          "Этот ахамкара не существует до пятой чакры, пока игрок все еще находится в процессе рождения. Пятая чакра — это плоскость рождения человека, где ахамкара появляется на сцене. Эго проходит через неведение и правильное знание и учится слышать голос совести, когда входит в шестую чакру. Но именно в седьмой чакре игрок по-настоящему устанавливает свою идентичность и начинает стабилизировать себя вокруг внутреннего центра. Игрок осознает, что он не существует как отдельная реальность, что он — проявление энергии и должен на каком-то этапе своего развития слиться с источником. Именно здесь эго сталкивается с опасностью смерти и может превратиться в эгоизм.\n" +
          "\n" +
          "Седьмая чакра — это высшая плоскость в микрокосме игрока. Здесь он достигает вершины и получает все, к чему стремился. Есть только два варианта, когда достигнута вершина: слияние с чистой вибрацией и становление бесформенным, или падение. И чем выше поднимается игрок, тем дальше падать. Если ахамкара сопротивляется течению судхармы, результатом неизбежно становится гнев. Это тянет его энергию вниз к первой чакре, где ему нужно снова начать свой подъём к вершине.\n" +
          "\n" +
          "Эго становится эгоизмом, когда игрок становится слишком эгоцентричным.\n" +
          "\n" +
          "В индуистской мифологии Пураны наполнены описаниями этого эгоизма, который всегда наступал после великих аскез и аскетизмов. После того как аспирант получал дар силы и становился эгоистом, он заявлял, что он Бог. Эта ложная идентификация опускала его к гневу первой чакры, жадности, иллюзии, тщеславию и алчности. Вся планета приходила в беспокойство. Земля предстала перед Вишну в виде коровы и попросила его освободить её от бремени эгоизма. В этот момент, как описано в эпосах, Вишну, великий защитник жизни, принял форму, воплотившись. В Лиле Бог отправляется уничтожить дракона эгоизма в игроке, эгоизм, противоречащий принципу сохранения. Ахамкара — пища Вишну. Космическое Сознание — его обитель."
      },
      56: {
        "title": "56. Первичные Вибрации (Омкара)",
        "text":
          "Ом — это единственный звук, присутствующий по всему вселенной, как в проявленной, так и в непроявленной форме. Это самая тонкая форма, в которой существует энергия. Омкара — это плоскость вибраций, которые производят этот космический звук, оставаясь верными своему дхарме. Игрок, попавший сюда, обнаруживает Ом как настоящий звук всего бытия.\n" +
          "\n" +
          "В начале был звук, Слово. И Слово было у Бога, и Слово было Богом. Этот же звук может быть осознан игроком, который избавляется от ловушки желаний, что является умом, и медитирует, создавая звук своим телом.\n" +
          "\n" +
          "Ом — это основа всего знания, всей поэзии, всех изящных искусств. Сосредоточение на Ом открывает игроку все великие ресурсы внутри себя, которые ранее были блокированы низшими чакрами майей.\n" +
          "\n" +
          "Этот же звук также является великим средством для снятия напряжения. Это звук, который использует каждый игрок, сознательно или бессознательно. Потому что Ом — это звук гудения. Каждый издает гудение. Поэты и композиторы, особенно, используют этот звук для вдохновения творчества.\n" +
          "\n" +
          "Ом одновременно является Творцом, Сохранителем и Разрушителем — тремя аспектами Божественности. Если игрок находит себя связанным с раздражающим элементом в своей среде и хочет настроиться на гармоничные ритмы планеты, все, что ему нужно сделать, это начать гудеть. Этот процесс делает его интровертированным, поворачивая его внутрь, чтобы раскопать огромные сокровища, зарытые в глубинах сознания, читты.\n" +
          "\n" +
          "Если поэты и композиторы вибрируют на низших чакрах, их гудение приводит к созданию произведений, которые относятся к этому уровню вибрации. Если они вибрируют на более высоких уровнях, их произведения связаны с более высокой плоскостью. Индусы верят, что все Веды вышли из Ома. И ясно, что Веды были написаны святыми и мудрецами, которые также были поэтами и композиторами, уже вибрирующими на высоких уровнях, потому что их творчество — высшая форма поэзии, коснувшаяся искры Божественного.\n" +
          "\n" +
          "Игрок, попавший в Омкару, осознал необходимость создания спокойствия в своей жизни, для упрощения своего существования. Мировые отвлечения удерживали его от Ома и той космической мудрости, которую он раскрывает. С упрощением существования каждое его действие становится сознательным. Игрок прекращает быть рабом привычек. По мере того как его существо становится более точно настроенным на реальность, он буквально начинает гудеть.\n" +
          "\n" +
          "Процесс гудения — это Ом-инг. Этот же звук появляется в разговоре, когда человек подтверждает, что он внимательно слушает собеседника. Он издает гудящий звук — Хмм или Ах. В виде вздоха Ом снимает как боль, так и напряжение, изменяя химию тела, выгоняя плохие химические вещества.\n" +
          "\n" +
          "Гудение вибрирует всю систему, но особенно верхнюю часть головы — седьмую чакру. В шестой чакре Ом был звуком для медитации, чтобы привести игрока в контакт с реальностью. Здесь, в седьмой чакре, Ом осознается — как факт существования.\n" +
          "\n" +
          "Ведическое утверждение, что Ом позволяет игроку открыть знание, которое никогда не присутствовало в его эмпирическом жизненном опыте, было подтверждено в исследовании Университета Саскачевана. Группа из 200 студентов пела Ом, пытаясь найти ответ на вопрос, который никто из группы не знал. После менее чем часа пения один из десяти раскрыл ответ из хранилища космического знания, которое Ом открывает."
      },
      57: {
        "title": "57. Газовая Плоскость (Ваю-Лока)",
        "text":
          "Ваю-лока (в буквальном переводе — «плоскость воздуха») расположена в области сатялоки, плоскости реальности, на седьмом ряду игровой доски. Этот ваю не является тем же самым ветром или воздухом, что присутствует на физическом или земном плане. Это сущность физического элемента воздуха.\n" +
          "\n" +
          "Марут — правитель этой плоскости. Он также синонимичен Индре, владыке Небес (Индра — это тот, кто достиг господства над своей чувственной природой). Ваю-лока — это плоскость, где игрок становится потоком энергии, вдоль которого движется вся атмосфера, достигая господства над массой и весом. Те, кто обитает в этом регионе, являются просвещенными душами с легким телом, которые еще не достигли сатя-локи, плоскости реальности.\n" +
          "\n" +
          "Игрок, попавший в ваю-локу, прошел через Омкар и, благодаря своим кармам, достиг более высоких вибрационных паттернов. Маруты — друзья и братья Индры, контролирующие атмосферу физического плана. Они приносят дождь и наполняют землю жизненной силой. Они становятся пранической энергией на физическом плане и жизненным дыханием живых существ. Воздух синонимичен движению, как внутри, так и снаружи тела. Все движения жидкостей внутри живых организмов происходят благодаря воздуху. Воздух необходим для жизни, и каждая клетка имеет вакуоль (воздушное пространство). Таким образом, воздух присутствует повсюду. Обитатель ваю-локи, будучи жизненной силой, жизненным дыханием, обладает теми же качествами, что и в шестой чакре: его присутствие можно ощутить где угодно или даже в нескольких местах одновременно. Теперь он может растворить суть своего бытия — эго, принять газообразную форму и парить в газовой плоскости.\n" +
          "\n" +
          "В шестой чакре была жидкая плоскость, но жидкость все еще имеет форму. Газ же не имеет никакой определенной формы. Жидкость содержит как массу, так и вес; газ не имеет ни того, ни другого. Игрок больше не обременен, но он обрел истинную свободу действия. Он становится безвесным и бесформенным."
      },
      58: {
        "title": "58. Плоскость Радиации (Тейджа-Лока)",
        "text":
          "Тейджа означает свет, и тейджа-лока — это плоскость света. В Упанишадах говорится, что сознание или «я» имеют четыре состояния:\n" +
          "\n" +
          "1. Состояние бодрствования, называемое джаграт, в котором «я» известно как вайшванара.\n" +
          "\n" +
          "2. Состояние сна, называемое свапна, в котором сознание известно как таиджас или тейджас — наполненное светом или состоящее из света.\n" +
          "\n" +
          "3. Состояние глубокого сна, называемое сушкапти, в котором сознание известно как прагья.\n" +
          "\n" +
          "4. Измененное состояние сознания, называемое турия: бессознательное/сознательное состояние, в котором сознание известно как Брахман, Космическое Сознание.\n" +
          "\n" +
          "Тейджа — это свет, который был создан в начале. Мир, который мы воспринимаем в состоянии бодрствования, является феноменальным миром, который появляется на стадии создания перед этим. Феноменальный мир находится в тейджа — в свете, из которого он материализуется. Он кажется похожим на мир состояния сна, но это не так. То состояние полностью состоит из света. Образы, которые мы видим на фотографиях, выглядят точно как реальные люди, но это разные паттерны света, которые варьируются, создавая иллюзию реальности. Таиджас связано с астральным телом сукшма, которое состоит из света, и в котором игрок пребывает, когда он спит.\n" +
          "\n" +
          "Излучать — это испускать свет. Омкар — это звук. После звука идет воздух, ваю-лока. А после воздуха идет огонь, тейджа, тонкий элемент, ответственный за все формы проявления. Огонь не может существовать без воздуха, так же как и игрок не может попасть в тейджа-локу, не пройдя через плоскость воздуха.\n" +
          "\n" +
          "У каждого вещества есть точка воспламенения — температура, при которой оно вспыхивает в присутствии кислорода. Тепло — это возбуждение молекул. Чем быстрее молекулы двигаются, тем выше температура. Огонь возникает, когда это движение слишком быстрое, чтобы его могло удержать вещество. По мере того как игрок поднимается все выше и выше, его уровень вибраций увеличивается. В седьмой чакре он достигает сущности вибрации. Тогда, полностью повышенные его вибрации, он проходит через воздух и вспыхивает ярким светом, давая свет всем окружающим.\n" +
          "\n" +
          "Когда игрок попадает в тейджа-локу, его свет ощущается по всему миру. Хотя на небе миллиарды звезд, только немногие достаточно ярки, чтобы быть видимыми, и в каждой солнечной системе есть только одно солнце. Здесь игрок становится светом, озаренным. Он становится солнцем, собирающим вокруг себя астральные тела, необходимые для формирования полноценной солнечной системы.\n" +
          "\n" +
          "Плоскость радиации недоступна непосредственно через любую стрелу. Игрок должен достичь ее медленно и постепенно, если только он не достигает просветления через практику духовной преданности."
      },
      59: {
        "title": "59. Плоскость Реальности (Сатья-Лока)",
        "text":
          "Сатья-лока — это последняя плоскость из семи основных лок, расположенных вдоль позвоночника игрового поля. В сатья-локе преобладает акша-таттва: здесь игрок достигает мира Шабд-Брахмана и находится на грани освобождения от цикла рождений и перерождений. Он достиг высшей плоскости, за которой лежит вайкунтха, обитель Космического Сознания. Эта лока не погибает в ночь Брахмы, Творца. Шабда — это слово, аум, которое само является Брахманом (Абсолютной Реальностью, Космическим Сознанием). Шабд-Брахман — это плоскость первичных вибраций — Омкар. Пройдя через плоскость первичных вибраций, игрок способен утвердиться в реальности.\n" +
          "\n" +
          "Сатья — это истина, реальность, Бог. Здесь игрок достигает своей высшей чакры и становится реальностью, реализованной. До этого уровня игра является процессом эволюции к этой природе, его собственной истинной реальности. Игрок, достигший сюда, находит гармонию, баланс с силами космоса. Нет препятствий для потока его энергии.\n" +
          "\n" +
          "Здесь игрок становится саччитанандой (сат = истина; чит = бытие; ананда = блаженство). Он осознает, что блаженство — это истина бытия. Он пребывает в состоянии самадхи, как капля в океане. Он обитает в океане блаженства. Его присутствие становится божественным, и он дарует благословение другим игрокам.\n" +
          "\n" +
          "Даже здесь игрок не освобожден. В седьмой строке игры есть три змеи. Первая — это эгоизм. Вторая — это негативный интеллект. Третья — это тамас. Достигнув плоскости реальности, игрок избежал одной из этих змей, но две другие все еще могут помешать его поискам освобождения. Если остается сомнение или лень, змеи потянут его вниз.\n" +
          "\n" +
          "Но если игрок остается в положительном интеллекте и его карма ведет его успешно мимо змеи тамаса, перед ним остаются счастье и плоскости восьмой строки — и Космическое Сознание. Он осознает опасности, с которыми ему предстоит столкнуться, и понимает, что ему нужно продолжать выполнять правильные кармы для достижения своей цели. Это его осознание на плоскости Реальности. Он понимает, что только вибрируя в седьмой чакре, он не достигнет Космического Сознания. Существуют другие кармы, другие испытания. Перед ним больше нет стрел, больше нет внезапных восходящих движений энергии. Ему предстоит двигаться вперед согласно своей карме."
      },
      60: {
        "title": "60. Положительный Интеллект (Субуддхи)",
        "text":
          "Субуддхи — это правильное понимание, которое приходит только после достижения плоскости реальности. После того как игрок достигает сатья-локи, он достигает совершенного недвойственного сознания и воспринимает Божественное во всех феноменах. Недвойственное сознание — это реальная субуддхи.\n" +
          "\n" +
          "Пока игрок находится в теле, интеллект выполняет свою роль. Он различает, оценивает и делает суждения. На седьмой чакре эти оценочные суждения больше не относятся к внешнему миру, а обращаются внутрь, чтобы распознать внутреннюю реальность игрока. Каждое суждение вызывает изменение химии тела. Эти состояния известны как чувства.\n" +
          "\n" +
          "Когда игрок достигает Космического Сознания, его символ, кольцо (которое является его телом), теряет свою значимость. Но до достижения шестьдесят восьмой клетки, четыре факультета сознания — буддхи, манас, читта и ахамкара — продолжают работать. Ахамкара в своей негативной фазе становится эгоизмом. Буддхи также принимает положительные и отрицательные формы. Читта остается в постоянном действии и взаимодействии с тремя гунами.\n" +
          "\n" +
          "До достижения плоскости реальности буддхи не становится самосущим феноменом, и это также относится к ахамкаре. После опыта самадхи на седьмой чакре и осознания, которое приходит от непосредственного опыта ноумена, буддхи начинает анализировать и классифицировать этот опыт. Здесь направление может быть как положительным, так и отрицательным.\n" +
          "\n" +
          "Положительный способ вибрации, субуддхи, достигается следованием пути дхармы, источнику стрелы, которая заканчивается здесь. Положительный интеллект, соединенный с потоком дхармы игрока, является одним из самых мощных инструментов в игре, помогающих игроку на пути к освобождению."
      },
      61: {
        "title": "61. Отрицательный Интеллект (Дурбуддхи)",
        "text":
          "Если игрок не следует закону дхармы, сомневаясь в космической природе существования и божественном присутствии в каждом своем опыте, он попадает в лапы змеи отрицательного интеллекта и опускается в ничто.\n" +
          "\n" +
          "Он не может связаться с нижними планами и не может призвать помощь дхармы. Ему придется пройти через все плоскости вибрации второго чакра, если только не вмешаются стрелы милосердия или благотворительности. Пока он не получит помощь стрел, ему придется искупить свою негативность и найти дхарму снова, или начать совершенно новый путь действий.\n" +
          "\n" +
          "Буддхи одновременно является и великой ловушкой, и великим инструментом для освобождения. Как субуддхи, она служит инструментом в служении освобождению. Дурбуддхи — это нисходящий спиральный вихрь, который затягивает психическую энергию обратно в плоскость воображения.\n" +
          "\n" +
          "Дурбуддхи представляет собой отрицательные оценки в игроке, которые заставляют его закрывать возможности. Чтобы достичь своей цели, игрок должен быть способен принять все, что мир представляет ему. Если он отвергает какую-либо сторону, если он сомневается в присутствии Бога в любом отдельном объекте, он отрицает Бога. Ведь Божественное — это реальность. Всё является проявлением Единого. Дурбуддхи — это отрицание, отрицание Божественного. Вот почему игрок, попавший сюда, пребывает в ничто. Все его энергии исчерпаны его отрицанием Бога, и он оказывается в пустоте. Пока он не сможет принять то, что он отвергал, пока не найдет снова дхарму, у него нет надежды на освобождение.\n" +
          "\n" +
          "Но ничто — это преходящее состояние. Космическое Сознание — это единственная абсолютная реальность. И если игрок снова достигнет седьмой чакры, его принудительное изгнание в ничто может дать необходимое озарение для поддержания положительного интеллекта и избегания челюстей этой змеи."
      },
      62: {
        "title": "62. Счастье (Сукха)",
        "text":
          "Баланс в химии тела и психических явлениях: вот что такое счастье. Сукх, счастье, — это состояние, которое игрок достигает через вивек, совесть, или путем произнесения Ом, достигая самадхи и поддерживая положительный интеллект.\n" +
          "\n" +
          "Сукх приходит к игроку, когда его совесть говорит ему, что он очень близок к своей цели, давая ему уверенность, что он близок к освобождению. Это чувство невозможно выразить словами. Он ощущает счастье реки, которая в последний раз сливается с океаном после тысячамильного пути, ощущение слияния с его источником.\n" +
          "\n" +
          "Если в своем состоянии счастья игрок не забывает о своих кармах и не становится ленивым и бездеятельным, существует реальный шанс достичь Космического Сознания за свою жизнь. Но если он окажется охваченным опытом счастья и не будет действовать, ощущая, что его миссия завершена, змея тамаса подкрадывается к нему, чтобы проглотить его и забрать его энергии обратно в первую чакру.\n" +
          "\n" +
          "Игра говорит, что ему все еще нужно шесть, чтобы достичь своей цели, как ему нужно было шесть для рождения. Но если он станет ленивым, если он почувствует, что ему больше нечего делать, то рядом поджидают тамас и иллюзия.\n" +
          "\n" +
          "Настоящее счастье предназначено для игрока, который сохраняет баланс, приближаясь к своей цели. Игра важна в своей целостности. Его стабильный интеллект позволяет ему различать потоки, течение дхармы. Он принимает все, что жизнь ему предоставляет. Он ничего не отвергает. Даже если он достигнет восьмого плана и должен вернуться на Землю, он чувствует счастье, зная, что есть цель, которую можно достичь."
      },
      63: {
        "title": "63. Тьма (Тамас)",
        "text":
          "В санскрите тамас означает тьму, относящуюся к темноте. Тьма — это отсутствие света. Свет — это знание; тьма — это невежество; невежество — это ум. И тамас имеет второе буквальное значение в санскрите: это змея. Тамас — это темная змея, самая длинная змея в игре, которая неумолимо тянет игрока обратно в иллюзию и выводит его из освещенности плана реальности.\n" +
          "\n" +
          "В седьмой чакре тамас — это невежество, которое возникает от того, что придается важность чувственным восприятиям. Это невежество возникает после того, как человек осознает счастье и думает, что это конец исполнения карм. Но игрок не может полностью прекратить свои кармы. От счастья, самая высокая карма — это шесть, самая низкая — это один. Действие не может полностью остановиться.\n" +
          "\n" +
          "Тамас — это полное подчинение иллюзии. Игрок потерял из виду бесконечную природу игры. Он забыл, что пока не достигнуто освобождение, игра не закончена. Бездействие — это попытка избежать закона кармы. Карма — это дхарма в действии. Игрок, который попадает в тамас, забыл, что игра не останавливается на седьмой линии, и что, достигнув самадхи, он не достиг освобождения. Когда движение замедляется вверх, оно все равно должно быть выражено — и единственное направление от высшей чакры — это вниз. Самая длинная змея в игре ждет игрока, который пренебрегает своими кармами.\n" +
          "\n" +
          "В любом событии действуют три фактора. Первый — это дхарма, сущность действия. Второй — это карма, само действие. Третий — это бездействие, инерция, сопротивление. Из-за природы игры бездействие вызывает нисходящий поток энергии. Кармы неизбежны. Попытка избежать их — это сама карма, действие. Попытка избежать кармы — это карма, которая тянет игрока обратно во второе пространство игры, иллюзию.\n" +
          "\n" +
          "Тамас синонимичен состоянию глубокого сна. Когда органы чувств полностью отводятся, а осознание растворяется в сне, игрок не лучше, чем мертвец, хотя он все еще дышит. В медитации, когда все действия разума полностью прекращаются, а чувственные восприятия обращаются внутрь, игроку легко скользнуть так плавно из саттвического состояния бездействия в гипнагогическое состояние, завершающееся глубоким сном. По этой причине тамас попадает в седьмую линию игры.\n" +
          "\n" +
          "Здесь тамас становится змеей. На других пространствах, где он вибрировал, тамас был необходим для игрока. Но здесь, в плане медитации (форме бездействия), тамас — это змея, которая меняет весь курс потока энергии, тянув игрока обратно в иллюзию. Атрибут тамогуны, тамас — это проявление гуны в микро-космосе. Когда та же сила обсуждается как атрибут Практи, феноменальной плоскости, она известна как тамогуна.\n"
      },
      64: {
        "title": "64. Феноменальная плоскость (Пракрити-Лока)",
        "text":
          "Шри Кришна в Бхагавад-гите определяет пракрити как двоякую: как проявленную и божественную. Проявленная пракрити — это феноменальный мир, состоящий из земли, воздуха, воды, огня и Акаши, плюс ум (манас), интеллект (буддхи) и эго (ахамкара). Эта пракрити восьмикратна и груба. Божественная пракрити — это Майя Шакти. Кришна говорит Арджуне, упомянув восьмикратную проявленную пракрити: «Знай мою другую пракрити, высшую, жизнь всего существования, благодаря которой вселенная поддерживается». Это непреходящая пракрити, воля Верховного, вечная и всегда исчезающая. Эта пракрити находится за пределами семи лок, за пределами Акаши. Элемент, преобладающий здесь, — это махат, который является источником всех других элементов: ума, интеллекта и эго. Маха означает «великий» и означает таттву (элемент), поэтому махат — это маха таттва — великий элемент, из которого возникают восемь меньших элементов.\n" +
          "\n" +
          "Таким образом, грубое, феноменальное существование происходит от божественной пракрити. После завершения процесса проявления, с эволюцией индивидуального я или человека, начинается обратная эволюция — я стремится вернуться к источнику. В этом процессе игрок начинает с физической плоскости (к которой он пришел в своем пути от тонкого к грубому) и через карму и духовные практики проходит семь лок. Когда он преодолевает тамас, он достигает пракрити-локи.\n" +
          "\n" +
          "До седьмого уровня игры игрок сталкивается с проявлениями пракрити. Но после прохождения этих семи плоскостей он приобретает опыт и перспективу. Он способен увидеть, что скрывается за миром чувственных объектов, и это пракрити. Каждый перцепт имеет концепт. Концепт без перцепта пуст, перцепт без концепта слеп. Теперь игрок приближается к концепту, вооруженный перцептами своего опыта. Теперь он понимает источник феноменального существования.\n" +
          "\n" +
          "В санскрите пракрити означает первоначальную форму вещи, происхождение или источник, материальную причину, материю, из которой что-либо формируется, узор, женщину, мать. Пракрити — это энергия в своем первозданном виде. Это активированное сознание, сознательная энергия в неразделенной вибрации. Из этого состояния развивается фаза консолидации энергии, дифференциации, проявления. Из этого состояния консолидированная энергия проявляется в трех основных измерениях:\n" +
          "\n" +
          "1. Материальное содержание (которое также является инертностью, латентным потенциалом), образующее тело феномена.\n" +
          "\n" +
          "2. Действие и взаимодействие в процессе эволюции.\n" +
          "\n" +
          "3. Цель, присущая феномену: ноумен.\n" +
          "\n" +
          "Когда игрок попадает в пракрити-локу после прохождения плоскости реальности, он способен воспринимать три гуны и пять элементов в их самой сущностной форме."
      },
      65: {
        "title": "65. Плоскость внутреннего пространства (Уранта-Лока)",
        "text":
          "После того как игрок преодолевает седьмой ряд игры и осознает существование пракрити, он начинает сливаться с источником феноменов, великого неэнергизованного сознания. В момент слияния вся дуальность исчезает. Игрок получает чистый опыт своих собственных огромных измерений, бескрайнее пространство, которое существует внутри самого себя.\n" +
          "\n" +
          "Ур означает чувственное я. Ант означает конец. Уранта-лока — это место, где заканчивается чувственное я, где заканчивается всякое чувство разделенности. Игрок переживает бездонные глубины внутри самого себя. Он находит эволюцию и растворение всего творения в пространстве одного дыхания. Он видит, что все барьеры иллюзорны. Он понял природу пракрити и осознал единство, которое скрывается за всеми проявлениями. Теперь он сливается с этим единством.\n" +
          "\n" +
          "Здесь нет чувств. Свидетель-Я полностью осознан. Здесь нет ни добра, ни зла, ни порока, ни добродетели. Игрок — это чистая линза, позволяющая свету проходить без ограничений.\n" +
          "\n" +
          "Описание уранта-локи можно найти в Пуранах или Самхитах, произведениях, написанных видящими и святыми, которые пережили это пространство. Они ярко описывали космическое знание, которое текло через них. Они стали линзами лампы чистого знания, не цепляясь ни за что, понимая все."
      },
      66: {
        "title": "66. Плоскость блаженства (Ананда-Лока)",
        "text":
          "Сознание — это истина, бытие и блаженство — сатчитананда. Ананда — это высшая истина, сущность бытия.\n" +
          "\n" +
          "В процессе проявления Сама Сущность постепенно покрывается пятью оболочками. Первая и самая тонкая оболочка — анандмайи коша, оболочка чистого бытия, чистых чувств чистого сознания. Это оболочка блаженства (ананда). В центре находится Космическое Сознание. В период проявления оно действует как индивидуальное сознание.\n" +
          "\n" +
          "Вторая оболочка — это уровень эго и интеллекта. Эта оболочка называется вигьянмайи коша. Вигьян — это сочетание ви и гьяна. Ви означает «за пределами», гьяна — знание, майи — поглощённый, а коша — оболочка. Эта оболочка, которая относится к знанию о «за пределами», это эго (которое воспринимает себя как отдельную реальность) и интеллект (оценщик).\n" +
          "\n" +
          "Третья оболочка — это оболочка разума, маномайи коша (манас = разум). Разум работает с помощью пяти органов чувств: уха, кожи, глаза, языка и носа. Отсюда происходит вся восприятие феноменального мира, мира желаний.\n" +
          "\n" +
          "Четвёртая оболочка — пранамайи коша, оболочка праны, жизненной силы, энергии, которая действует через пять рабочих органов и систем внутри тела, включая кровеносную систему, дыхательную систему и нервную систему, через которые выполняются кармы.\n" +
          "\n" +
          "Пятая и самая грубая оболочка — аннамайи коша. Анна означает зёрна или пищу, из которой составляются мышцы, кожа, зубы, клетки крови и сперма — феноменальное тело.\n" +
          "\n" +
          "В эволюции внутреннего я этот процесс обратим. Игрок проходит через аннамайи кошу к пранамайи, и, преодолев четыре оболочки, устанавливает себя наконец в оболочке блаженства, анандмайи коше. Ананда — это главная характеристика сознания. Она отличается от удовольствия, счастья, радости и восторга. Эти другие состояния можно объяснить, наблюдать и оценивать. Это относительные состояния, которые интеллект может оценить и классифицировать. Буддхи ведёт к гьяне, стреле, которая ведёт к плоскости блаженства. Ананда — это первичное чувство, из которого проистекают все другие чувства. Оно лежит в основе чувств и всегда существует в сердце сущности игрока. Но ананда может быть пережита только непосредственно, её нельзя наблюдать у других. Немой не может передать вкус конфеты словами. Можно использовать только движения, жесты и выражения. Ананда не может быть описана или выражена; она может быть только пережита.\n" +
          "\n" +
          "В уранта-локе чувственное я закончилось. Все чувства стали одним, когда мир объектов восприятия стал единым, поскольку чувства основаны на сенсорных восприятиях. А пракрити-лока дала игроку знание о том, что все объекты восприятия — это лишь выражения одного явления.\n" +
          "\n" +
          "Здесь остаётся лишь одно чувство — чувство блаженства. Переживание блаженства сложно, пока не достигается мудрость и не происходит осознание. Единственная альтернатива — полностью посвящать внимание дхарме, совершая постепенное восхождение по плоскостям, избегая всех змей."
      },
      67: {
        "title": "67. Плоскость Космического Блага (Рудра-Лока)",
        "text":
          "Рудра — одно из имён Шивы. Творение — это начало тройной деятельности. За ним следует сохранение проявленных форм и, наконец, их распад или разрушение. Каждое существующее явление проходит через цикл творения, сохранения и разрушения. Эти три процесса управляются тремя силами Единого Творца, который не создан никем и создает все. Он творит своей волей Творца (Брахму), Сохранителя (Вишну) и Разрушителя (Шиву). Эти три взаимосвязаны и взаимозависимы. Творение — это божественная воля, как и сохранение и разрушение. Без разрушения ложного 'я' — концепции отдельной реальности, индивидуального эго — настоящее единение невозможно. Так Шива делает индивидуальное сознание единым с Космическим Сознанием.\n" +
          "\n" +
          "Рудра — господин юга в феноменальном мире и яростная форма Шивы. Его называли Рудрой, потому что он родился от крика Творца, Брахмы. По его милости смертные живут, наслаждаются божественной игрой, создают, разрушают или отрабатывают карму — физическая плоскость или феноменальный мир является землёй кармы.\n" +
          "\n" +
          "Шива также означает добро, добро для всех. Он — космическое благо, алхимически преобразующий магнитное в электрическую энергию и возвращающий её к источнику. Эволюция индивидуального сознания завершается на плоскости Рудры. Здесь остаётся лишь один шаг до единения с Космическим Сознанием. Эта плоскость находится за пределами проявленной вселенной и состоит из того же элемента, что и ананда-лока, плоскость блаженства.\n" +
          "\n" +
          "Знание, чувство и действие — три атрибута человеческого сознания. Знание чего? Истина. Чувство чего? Красота. И действие чего? Добро. Для игрока в игру эти три — высший смысл человеческого существования. Добро (бытие) — это чит, истина — это сат, красота — это ананда: сатчитананда. Следуя пути сатям шивам sundarum — истина, красота, добро — игрок становится сатчитанандой. Эти три аспекта сознания также известны как бинду, бия и нада, и они почитаются как три главных бога: Брахма, Вишну и Рудра.\n" +
          "\n" +
          "Совершение добра требует знания о правоте. Праведное знание может привести игрока к опыту космического блага напрямую с пятой чакры. Игрок, достигший здесь, не оказывает сопротивления потоку дхармы. Он просто выполняет свою задачу, что бы космические силы ни попросили от него.\n" +
          "\n" +
          "Рудра-лока — одна из трёх центральных клеток верхнего ряда игры. Эти пространства — жилища Богов-сил, ответственных за всё творение, силы, с которыми искатель пытается отождествить себя. Игрок, стремящийся отождествиться с знанием правоты, оказывается в обители Шивы. Здесь он осознаёт правду, космическое благо. Суть космического блага — это истина, а его форма — это красота."
      },
      68: {
        "title": "68. Космическое Сознание (Вайкунтха-Лока)",
        "text":
          "Выше и за пределами всех других лок находится Вайкунтха — лока Космического Сознания, прана проявленной реальности. Эта лока также состоит из махат, “элемента”, который является источником элементов и не является элементом сам по себе.\n" +
          "\n" +
          "До того как игрок начнёт играть в игру, он принимает важность и значимость этой плоскости Бытия, которая всегда является его целью. Как бы ни манили его желания, это всегда его высшее желание — достичь мокши, освобождения.\n" +
          "\n" +
          "Вайкунтха — обитель Вишну, и плоскость, которую каждый индуист надеется осознать после того, как покинет текущую форму существования. Жилище Вишну — это плоскость Космического Сознания, потому что Вишну — это истина, великий защитник сознания на его восходящем пути.\n" +
          "\n" +
          "Кубик кармы наблюдает за уровнем вибрации игрока в любое время. Кубик определяет, где игрок должен быть и какой курс действий ему следует выбрать. Игрок может следовать ащтанга-йоге, восьмиступенчатой йоге, и эволюционировать шаг за шагом через восемь уровней. Или он может следовать дхарме и стать бхактой, духовным преданным. Все пути ведут в одно место.\n" +
          "\n" +
          "Какой бы курс действия игрок ни выбрал среди безграничных возможностей, он теперь достиг сидения Вишну. А Вишну — это суть всего творения. Космическое Сознание само, истина. Оно непосредственно выше плоскости реальности, потому что высшая реальность — это истина.\n" +
          "\n" +
          "Кольцо, которое символизировало игрока, возвращается на палец того, кто его носил: оно потеряло всякое значение. Игра остановлена. Что будет теперь, зависит от игрока. Природа космической игры проста. Это — открыть, с какими новыми комбинациями, с какими новыми кармами, с какими спутниками игрок может снова войти в игру и стремиться к состоянию, которое является его настоящим домом. Он может продолжить игру в прятки с самим собой, или остаться за пределами игры навсегда. Или он может вернуться на Землю, чтобы посмотреть, может ли он помочь другим достичь цели, взяв на себя роль дважды рожденного бодхисаттвы. Выбор за ним. Никто другой не может выбрать."
      },
      69: {
        "title": "69. Абсолютная Плоскость (Брахма-Лока)",
        "text":
          "С одной стороны Вайкунтхи находится лока Рудры, а с другой стороны — лока Брахмы, образующие триаду Брахма, Вишну и Шиву в центре игрового поля, на самой верхней строке. Эта плоскость выше проявления: семь основных и другие второстепенные плоскости, упомянутые и не упомянутые на игровом поле. Преобладающий элемент снова махат. Те, кто установил себя в истине, пребывают здесь, не опасаясь снова пройти через кармические роли, в то время как те, кто практикует милосердие, также достигают плоскости Брахмы, Творца, и пребывают там без страха.\n" +
          "\n" +
          "Брахма — творец феноменального существования. Он — активный принцип нуменона, сила, которая оживляет сознание в бесчисленные формы и узоры. Его обитель — Брахма-Лока. Игрок, попавший сюда, сливается с этим Абсолютом, этим тонким принципом. Брахма — это космический организатор, который предписывает законы формы.\n" +
          "\n" +
          "Хотя Брахма находится непосредственно рядом с Космическим Сознанием в восьмой строке игры, он не может освободить игрока. Игра должна продолжаться. Брахма предписывает форму игры, но в игре есть больше, чем форма. Только истина может освободить игрока. Три гуны ждут игрока, и змея тамогуна должна в конце концов вернуть его на Землю, к матери. Он возвращается в шестую чакру, но не без того понимания принципов игры, которые он приобрел в Брахма-Локе. Это понимание может помочь ему достичь своей цели, и на Земле духовная преданность ждёт его на одном броске кубика."
      },
      70: {
        "title": "70. Истинная Природа (Сатогуна)",
        "text":
          "Сат означает истину. Когда освободившееся сознание становится истинным, оно является Космическим Сознанием. Но эта же истина, связанная с кармическим кубиком, становится подверженной трем гунам, трем основным аспектам сознания (гуна означает атрибут). Атрибуты — это качества игрока, который все еще связан с кармическим кубиком.\n" +
          "\n" +
          "Истина — это сущность существования. И в любом существующем объекте действуют три гуны. Истина не может существовать сама по себе; она тогда сольется с Космическим Сознанием. Но игра еще не завершена; кольцо все еще здесь. Таким образом, именно через эти три гуны сознание будет проявлять себя до конца игры. Игрок должен вернуться на Землю и в ее игру, обе из которых являются продуктами гун.\n" +
          "\n" +
          "Саттва сама по себе создаст состояние равновесия. Необходима активность и материал для активации. Сатогуна синонимична свету, сущности, истинной природе и вибрации на самых высоких частотах. Невозмутимое состояние медитации, которое порождает самадхи, возникает, когда саттва преобладает.\n" +
          "\n" +
          "Все, что существует, содержит саттву, раджас и тамас; однако ничто не является чисто саттвическим, раджасическим или тамасическим. Пока существует форма, творение Брахмы, все три гуны присутствуют. Только их пропорции изменяются от момента к моменту.\n" +
          "\n" +
          "В бодрствующем состоянии преобладает раджас, в то время как саттва находится на заднем плане, способствуя пониманию и знанию и позволяя игроку исполнять свою роль.\n" +
          "\n" +
          "В состоянии сна снова преобладает раджас, и спящее сознание получает образование от саттвы. Мы никогда не видим темноты в наших снах; их свет исходит от саттвы. Сны — это процесс очищения, и в состоянии сна человек не связан законами физического плана. Игрок пребывает в своем астральном теле — вдали от и вне физического тела, но связан с ним саттвическими связями.\n" +
          "\n" +
          "В состоянии глубокого сна преобладает тамас, в то время как саттва и раджас отходят на второй план.\n" +
          "\n" +
          "В турии — состоянии бессознательного сознания или самадхи, транса — игрок пребывает в чистой саттве. Когда человек способен преодолеть гуны, он становится реализованным существом, известным как гунатит (вне гун). Эти гуны — динамические силы, которые вызывают изменения в первичной пракрити и помогают процессу проявления, становясь активными, когда начинается цикл творения. Они не три разные сущности, а взаимозаменяемые. Саттва в процессе эволюции становится тамасом, создавая звуковые, осязательные, зрительные, вкусовые и обонятельные частоты. Агентом преобразования является раджас. Тамас в эволюции сознания становится саттвой таким же образом, с помощью раджаса. Саттва сама по себе неактивна и без помощи раджаса не может изменяться. Саттва преобладает на Земле от сумерек до трех часов после восхода солнца."
      },
      71: {
        "title": "71. Действие (Раджогуна)",
        "text":
          "Раджогуна — это активность в сознании, или сознание в активности. После достижения восьмого плана и неудачи в достижении Космического Сознания, игрок начинает двигаться дальше, ведомый кармой, активностью. Эта активность является причиной всего страдания. Она предрасполагает того, кто действует, и он может стать жертвой амбиций и привязаться к наградам. Любое препятствие на пути к вознаграждению или желанию вызывает боль, страдание и горе. Когда раджогуна преобладает, результатом могут быть боль и агония.\n" +
          "\n" +
          "В самадхи игрок растворяет раджогуну в саттву и становится чистым светом, саттвой. Если раджогуна сохраняется, игрок не может достичь самадхи, и тамас тянет его обратно на Землю. Поскольку кармы накапливаются и генерируют частоты вибрации, эти паттерны принимают форму и становятся подчинены игре.\n" +
          "\n" +
          "Как гуна, раджогуна балансирует саттву и тамас. Тамас пытается доминировать над саттвой. Саттва пытается доминировать над тамасом. Обе являются крайностями энергии в форме гуны. Раджас пытается поддерживать баланс между саттвой и тамасом и делает возможным мир удовольствий и страданий, имен и форм. Ни одна гуна не может существовать сама по себе.\n" +
          "\n" +
          "Раджогуна активна с трех часов после восхода солнца до вечера, когда солнце начинает садиться. В этот период планета Земля становится активной, и все кармы, касающиеся сохранения жизни, выполняются. Раджас делает игрока полностью экстравертированным — и когда он перестает быть экстравертом, раджогуна превращается в внутренний диалог. Без преобразования раджогуы в саттву достижение высших состояний сознания невозможно. Используя раджогуна в саттвических делах, можно оставаться в саттве, будучи активным."
      },
      72: {
        "title": "72. Инерция (Тамогуна)",
        "text":
          "После захода солнца тамогуна преобладает до сумерек и погружает весь мир в сон. Как гуны, саттвуга, раджогуна и тамогуна остаются в первозданной пракрити. После начала творения появляется махат, в котором преобладает саттвуга. Из махат возникает буддхи (интеллект); из буддхи возникает ахамкар (эго), который становится саттвическим ахамкаром, создающим ум (манас), и раджасическим ахамкаром, создающим индрийи (сенсорные органы и органы труда), и тамасическим ахамкаром, создающим танматры. Танматра означает то, что чисто, не смешано. Танматры — это пять: звук, прикосновение, цвет, вкус и запах. Они соответствуют пяти великим элементам (махабхута): акаша, воздух, огонь, вода и земля. В совокупности они создают индивидуальное «я», в котором эти гуны активны во всех четырех состояниях сознания. Действуя в проявленном мире, они не являются чистыми гунами первозданной пракрити, потому что они также стали проявленными. На этом уровне тамогуна становится самой большой змеей на игровом поле, тамасом, в конце седьмой чакры. На восьмом ряду гуны находятся близко к источнику и, следовательно, чище.\n" +
          "\n" +
          "Последний квадрат поля и начало новой фазы космической игры предоставляет форму, материал для игрока. Он приходит в виде змеи, которая кусает игрока и возвращает его на Землю.\n" +
          "\n" +
          "Тамогуна — это дифференцированная сознательная энергия. Она содержит свет, но из-за невежества и отсутствия инициации не может развиваться самостоятельно. Ей нужен раджас, прежде чем саттва в ней выйдет наружу, спускаясь на Землю и принимая форму с помощью кармы. Тамогуна скрывает истину, заставляя змею выглядеть как веревку и веревку как змею. Тьма — это основное качество тамогунны, а инертность — её природа. Игрок, который попадает сюда, немедленно покидает план космических сил и возвращается на Землю, чтобы обнаружить новый путь к истине.\n" +
          "\n" +
          "Что происходит, знает только игрок и Тот, Кто является Истиной."
      }
    }
  }
}

const i18n = createI18n({
  locale: localStorage.getItem('selectedLanguage') || 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n
