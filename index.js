//global variables
var deck = {};
var rank = "";
var suit = "";
var deckArr = [];
var cardBack = "<img class='img-thumbnail' src='https://www.taroteca-studio.com/userdata/gfx/549b299e5fd490d37ec94a0e3bd1aa37.jpg'>";
var meanings = {
    upright: [
        //CUPS
        {
            name: "Ás de copas é a carta para um novo amor, compaixão, alegria e criatividade. Se esta carta aparecer com o Ás de Ouros, geralmente significa que os caminhos se cruzam em um relacionamento."
        },
        {
            name: "Dois de copas é a carta para quem esta apaixonado e tem um relacionamento íntimo. Há uma intimidade real no relacionamento e vocês se conhecem e se entendem em um nível profundo."
        },
        {
            name: "Três de copas é a carta para comemorar, sair com os amigos, divertir-se e fazer parte de uma comunidade. Esta carta geralmente aparece quando alguém esta prestes a ser pedido em casamento ou noivado."
        },
        {
            name: "Quatro de copas é a carta da contemplação. Muitas vezes aparece quando o ser está insatisfeito com algo e não percebe totalmente o que está sendo oferecido."
        },
        {
            name: "Cinco de copas é a carta para arrependimentos e decepções, especialmente no amor. Um relacionamento pode não ter saído do jeito que você gostaria."
        },
        {
            name: "Seis de copas é a carta da sensualidade e do prazer, das memórias, da inocência, da nostalgia e da infância. Às vezes, este cartão aparece quando alguém do passado está voltando para sua vida."
        },
        {
            name: "Sete de copas é o cartão para devaneios, ilusões, pensamentos esperançosos e fantasias. Este cartão geralmente aparece quando você tem muitas opções e precisa de uma visão para torná-las realidade."
        },
        {
            name: "Oito de copas é a carta para virar as costas a algo para ir e seguir seu sonho. O devaneio que aconteceu em Sete de copas se materializou em uma visão que o ser deve perseguir."
        },
        {
            name: "Nove de copas é a carta para conseguir o que você quer e realizar um desejo. Esta carta fala de abundância e satisfação, e também de ter orgulho do que você conquistou."
        },
        {
            name: "Dez de copas é a carta para a felicidade espiritual total experimentada em seu relacionamento, casa e vida familiar. Esta carta é sobre estar em alinhamento com sua verdadeira natureza e tudo em sua vida está em harmonia com seu eu superior e propósito neste planeta."
        },
        {
            name: "O Pajem de copas denota um jovem de natureza gentil e sensível. É alguém que vive maravilhado e às vezes pode ser bastante ingênuo."
        },
        {
            name: "Cavaleiro de copas denota uma pessoa em uma missão para declarar seu amor. Este é o seu cavaleiro de armadura brilhante. Ele é um cantor, poeta e escritor. Ele pinta e cria onde quer que vá. Ele é artístico e incrivelmente adorável."

        },
        {
            name: "Rainha das copas denota uma mulher altamente intuitiva e sensível. Ela está em contato com suas emoções, seu subconsciente e o universo. Ela é compassiva e se preocupa profundamente com sua vida e com as pessoas que vivem nela."
        },
        {
            name: "Rei de copas denota um homem caloroso, honesto e generoso, que é gentil e justo. É alguém que está no controle de suas próprias emoções."
        },

        //PENTACLES
        {
            name: "O Ás de Ouros simboliza um novo começo em sua situação financeira e uma oportunidade de aprofundar sua segurança."
        },
        {
            name: "Dois de Ouros simboliza o malabarismo com as finanças. Você pode ter renda de mais de uma fonte. Dois de Ouros também indica investir dinheiro em projetos diferentes, ou troca."
        },
        {
            name: "Três de Ouros simboliza o seu trabalho, especialmente quando se trata de trabalho em equipe ou ouvir clientes / clientes. Este é um cartão positivo que indica satisfação no trabalho e orgulho do seu trabalho, mas você deve se esforçar para ver os resultados."
        },
        {
            name: "Quatro de Ouros simboliza a necessidade de segurança e reconhecimento em sua vida, de ter controle sobre sua posse e de manter a abundância e o dinheiro aumentando. Esta carta mostra teimosia na situação ou no consulente."
        },
        {
            name: "Cinco de Ouros simboliza perda ou dificuldade financeira. Também pode significar que você está em um lugar onde sente que não há segurança e que sua saúde pode estar sofrendo."
        },
        {
            name: "Seis de Ouros simboliza generosidade para com aqueles que têm menos do que você. Também pode significar receber generosidade de outras pessoas."
        },
        {
            name: "Sete de Ouros simboliza uma visão que terá frutos no futuro. Você está plantando as sementes para que possa colher um futuro mais seguro e abundante para si mesmo."
        },
        {
            name: "Oito de Ouros simbolizam habilidade em relação ao trabalho. Também pode significar fazer um estágio e / ou aprender uma nova habilidade."
        },
        {
            name: "Nove de Ouros simboliza luxo, segurança financeira e férias luxuosas."
        },
        {
            name: "Dez de Ouros simboliza o tipo de riqueza que você obtém quando herda algo, seja o seu próprio dinheiro de aposentadoria, bens passados ou posses de alguém que já faleceu."
        },
        {
            name: "Pajem de Ouros indica que você está se reinventando de alguma forma. Muitas vezes denota uma oportunidade de começar algo novo, seja um empreendimento criativo, estudo, negócios ou uma nova oferta de emprego. Pajem de Pentáculos ainda não é um especialista na área de escolha mas tem um objetivo claro e um sonho a alcançar."
        },
        {
            name: "Cavaleiro de Ouros denota estar a serviço e fazer o trabalho real (em contraste com Pajem de Ouros, que gosta de sonhar acordado com a ideia, em vez de vivê-la de fato). O Cavaleiro de Ouros sente-se confortável com a rotina e é eficiente e conservador."
        },
        {
            name: "Rainha de Ouros é alguém com uma abordagem prática e realista da vida e das situações. É importante ter equilíbrio entre trabalho e casa; na verdade, se você pudesse trabalhar em casa, provavelmente o faria. Este cartão goza de prazeres materiais e sucesso."
        },
        {
            name: "Rei de Ouros simboliza um empresário de sucesso ou uma pessoa em uma posição de gerente. Este é um personagem estável e autoritário, trabalhador e confiável."
        },

        //SWORDS
        {
            name: "Ás de espadas é a carta para um novo sistema de pensamento e crença. É o potencial da energia mental usado para criar clareza e, muitas vezes, também justiça."
        },
        {
            name: "Dois de Espadas é a carta para o compromisso, a passividade, a manutenção da paz (como em não balançar o barco), o impasse, a indecisão e a prevenção do conflito."
        },
        {
            name: "Três de Espadas denota desgosto. tristeza, dor e separação. Às vezes, a separação é apenas temporária, outras vezes é final."
        },
        {
            name: "Quatro de Espadas é sobre descanso e rejuvenescimento, dormir o suficiente e tirar um tempo para meditar."
        },
        {
            name: "Cinco de Espadas é a carta para derrota e traição, conflito e competição doentia. Palavras serão dolorosas, mentiras serão contadas e suas fraquezas usadas contra você."
        },
        {
            name: "Seis de Espadas é sobre cruzar o mar agitado e entrar em águas mais calmas. Este é o cartão para encontrar soluções e implementá-las, muitas vezes trazendo outras pessoas com você no processo, ou seja, sua família, amigos e colegas."
        },
        {
            name: "Sete de Espadas denota que alguém está avançando de forma menos do que honrada. Freqüentemente, há desonestidade associada a esta carta, e tentativa de escapar de algo ou tentar escapar de algo mentindo."
        },
        {
            name: "Oito de Espadas é a carta de estar preso e incapaz de seguir em frente devido à confusão e não saber o que está acontecendo. Freqüentemente, as pessoas puxam essa carta quando seus próprios instintos estão sendo anulados por outras pessoas."
        },
        {
            name: "Nove de Espadas denota preocupação e ansiedade, insônia e ser oprimido por emoções negativas, como culpa e arrependimento."
        },
        {
            name: "Dez de Espadas é a carta para finalizações e perdas, traição e falta de apoio. Às vezes, esta carta denota atingir o fundo do poço. Tem a mentalidade de quando chove, transborda, e o consulente pode estar sentindo que o sofrimento não tem fim."
        },
        {
            name: "Pajem de Espadas denota uma pessoa jovem e mentalmente muito ativa e inteligente. É alguém que consegue se concentrar por longos períodos de tempo e que aprende novas habilidades com facilidade, especialmente habilidades mentais."
        },
        {
            name: "Cavaleiro de Espadas denota uma pessoa comunicativa, enérgica e, às vezes, obstinada, que é muito orientada para a ação e gosta de mudanças. Este é alguém com uma veia competitiva e não gosta de abrir mão de sua posição em uma discussão."
        },
        {
            name: "Rainha de Espadas denota uma mulher fria, profissional e inteligente. Ela é espirituosa e engraçada de uma forma inteligente (sem humor de banheiro). Ela frequentemente representa mulheres solteiras que foram magoadas no amor e é amarga e magoada, mas uma mestra em encobrir isso."
        },
        {
            name: "Rei de Espadas denota um profissional que está no topo de seu jogo. É alguém que é especialista na sua área e teria de estudar para adquirir este conhecimento."
        },
        // WANDS
        {
            name: "O ás de Paus fala de novos começos. Seja ousado e comece algo novo. Siga sua inspiração. Ás de Paus fala de nascimentos de todos os tipos; o nascimento de empresas e oportunidades de trabalho, e também o nascimento de um bebê."
        },
        {
            name: "Dois de Paus é sobre se manifestar usando a vontade e a força de sua mente. Você pode ter que pesar suas opções antes de decidir qual é a melhor para você."
        },
        {
            name: "Três de Paus é o cartão para escritores, e para trabalhos de redação e freelancers. É também a carta que segue a manifestação que o querente fez em Dois de Bastão, e o querente agora viveu uma nova e excitante oportunidade ou sonho."
        },
        {
            name: "Quatro de Paus é a carta para harmonia e desenvolvimento em uma escala maior, muitas vezes expandindo sua situação de vida e também sendo mais conectado a uma comunidade."
        },
        {
            name: "Cinco de Paus significa defender o que é importante para você, mesmo que isso signifique enfrentar alguma oposição."
        },
        {
            name: "Seis de Paus é a carta para popularidade, progresso, vitória e sucesso, autoconfiança e conseguir o que deseja."
        },
        {
            name: "Sete de Paus denota ser defensivo e colocar barreiras e limites. Você está protegendo seu ponto de vista e sua posição."
        },
        {
            name: "Oito de Paus fala de ação rápida e progresso. Muitas vezes aparece quando há um visitante chegando ou quando o consulente está visitando alguém."
        },
        {
            name: "Nove de Paus é a carta para força, coragem, resiliência e resistência. Nunca desista e nunca se renda."
        },
        {
            name: "Dez de Paus é a carta para trabalhar duro e assumir mais responsabilidades."
        },
        {
            name: "Pajem de Paus denota um jovem entusiasmado que está ansioso para explorar e ganhar experiência de vida."
        },
        {
            name: "Cavaleiro de Paus denota uma pessoa que está viajando pela vida em alta velocidade, vivendo em alta velocidade. Esse é alguém que vai ser a vida da festa."
        },
        {
            name: "Rainha de Paus denota uma mulher calorosa, gentil e apaixonada. Ela é determinada e orientada para objetivos. Ela também é uma metafísica que pode usar sua mente para criar harmonia e confusão."
        },
        {
            name: "Rei de Paus denota um homem casado que é um líder natural e carismático. Ele tem habilidades empreendedoras e adora administrar um projeto novo e empolgante."
        },

        //TRUMPS
        {
            name: "O Louco representa novos começos, ter fé no futuro, ser inexperiente, não saber o que esperar, ter sorte de iniciante, improvisar, acreditar que o Universo fornece, sem amarras, despreocupado."
        },
        {
            name: "O Mago representa a sua capacidade de se comunicar com clareza, vender a si mesmo e ser inovador. O Mágico tem todas as ferramentas e recursos disponíveis para manifestar o resultado desejado, por isso é uma boa carta de se obter se quiser criar."
        },
        {
            name: "A Alta Sacerdotisa representa segredos, mistério, intuição, sabedoria, tornando o impossível possível, e magia."
        },
        {
            name: "Imperatriz representa o poder feminino, uma nutridora e uma pessoa voltada para a família, nossa mãe ou figura materna, abundância, feminilidade, fertilidade e o amor ao lar e à família."
        },
        {
            name: "O imperador representa a energia masculina, o governante, o chefe da família, o chefe de uma empresa, organização e comunidades. O imperador é uma figura de autoridade que cria uma base sólida para construir e criar."
        },
        {
            name: "Hierofante representa a consciência de grupo, religião, seu sistema de crenças, cerimônia, tradições, bondade, caridade, dando orientação na forma de aconselhamento espiritual."
        },
        {
            name: "Os Amantes representam amor e relacionamento, almas gêmeas, atrações físicas, escolhas a serem feitas, The Lovers representa fazer as coisas que nos fazem sentir inteiros, estar com as pessoas que nos fazem sentir inteiros."
        },
        {
            name: "Carruagem representa sua força de vontade e determinação. Isso representa a vitória. A Carruagem lhe dá luz verde para seguir em frente e assumir o controle de sua vida ou de uma área de sua vida que precisa de sua atenção."
        },
        {
            name: "Força representa nossa coragem, paixões, força, autoconfiança, paciência e compaixão. A força nos lembra de seguir nossas paixões, de dedicar um tempo para fazer as coisas que nos estimulam, que nos fortalecem dentro de nós mesmos e que aumentam a confiança e a autoestima."
        },
        {
            name: "Eremita representa passar um tempo sozinho, ser um lobo solitário, examinar a alma, buscar orientação espiritual, introspecção."
        },
        {
            name: "Roda da fortuna é a carta do grande destino no baralho de tarô. O que deve ser, é para ser. No tarô, quando a Roda da Fortuna gira, significa que os eventos e as pessoas em sua vida estão em sua vida devido ao fato de ela ser pré-decidida pelo destino. "
        },
        {
            name: "Justiça representa todos os tipos de questões legais, as leis espirituais da verdade e causa e efeito. Quando o cartão da Justiça aparece, ele nos lembra de sermos legais e justos para alcançar o melhor resultado. "
        },
        {
            name: "O Homem Enforcado representa estar temporariamente suspenso. A vida está em espera, mas serve a um propósito."
        },
        {
            name: "A morte representa transformação, fins e novos começos. Quando a carta da Morte aparece, ela diz a você que as coisas não serão as mesmas novamente. Uma transformação está ocorrendo, você está crescendo e mudando com as circunstâncias em que se encontra."
        },
        {
            name: "A temperança representa uma interação equilibrada entre os elementos para criar algo novo e fresco. A temperança inclui todos os elementos de forma a trazer à tona o melhor de cada substância. Quando a carta da Temperança aparece em sua vida, há um grande equilíbrio e força entre as diferentes áreas e pessoas em sua vida que estão trabalhando juntas."
        },
        {
            name: "O diabo representa a fonte primária de comportamento que se mostra na forma de nossos desejos e necessidades terrenas. Também representa nossos medos que causam dependência e comportamento compulsivo."
        },
        {
            name: "Torre representa desastre, colapsos emocionais e / ou acessos de raiva, problemas de raiva, agitação, mudança repentina que é causada por perturbações e revelações que abalam a base da pessoa, família, organização ou mesmo país, dependendo da natureza da questão."
        },
        {
            name: "Estrela representa esperança, um futuro brilhante, alegria, otimismo, orientação, ter respostas para suas dúvidas, ser e sentir a conexão com o divino, serenidade e inspiração. A estrela brilha tanto que, quando aparece em uma leitura, diz que você está sendo a luz na vida de alguém."
        },
        {
            name: "Lua representa ilusões, intuição, fantasias, medos e ansiedade. Quando a Lua aparece, as coisas podem não ser exatamente o que parecem. Suas inseguranças podem estar aumentando ou você se encontra na extremidade receptora das inseguranças de outras pessoas."
        },
        {
            name: "Sol representa sucesso, alegria, sol, dia, calor e felicidade. O Sol aparece quando a vida está ensolarada e você está aproveitando o tempo com as pessoas que ama. A vida é mais simples do que complicada. Os relacionamentos estão florescendo e você está se sentindo amado."
        },
        {
            name: "O julgamento representa assumir a responsabilidade por suas ações e sua vida, ser um bom juiz de caráter, ver a verdade e saber o que você quer. A carta de Julgamento geralmente aparece quando você precisa se apresentar e ser um líder, falando a verdade e sendo mais assertivo."
        },
        {
            name: "Mundo é a última carta dos Arcanos Maiores e representa o cumprimento e a conclusão bem-sucedida de um ciclo. Você conhece seu lugar no mundo e suas lições de vida o tornaram inteligente e realizado. O mundo aparece quando o mundo está pronto para você e deseja o que você tem a oferecer."
        },



    ],
    reversed: [

        //CUPS
        {
            name: "Ace of Cups reversed indicates blocked creativity and blocked emotions. Access to the subconscious mind and psychic ability is also blocked."
        },
        {
            name: "T\nwo of Cups reversed indicates being afraid of love and relationship. The seeker might be dreaming of love, but when it comes down to actually having one, the fear of rejection and abandonment gets in the way."
        },
        {
            name: "Three of Cups reversed can indicate celebration gone wrong, bitching, jealousy and competition."
        },
        {
            name: "Four of Cups reversed indicates the seeker has become unseated and is avoiding something and/or someone important."
        },
        {
            name: "Five of Cups reversed indicates disappointment in love and emotional matters. The two cups that still upright spill out when this card shows up reversed which denotes the seeker might be emotionally totally drained, usually by relationships."
        },
        {
            name: "Six of Cups reversed indicates a difficult childhood and haunting, even disturbing childhood memories. Memories of all kinds can be an issue when this card shows up reversed, even memory loss."
        },
        {
            name: "Seven of Cups reversed indicates the seeker’s imagination is blocked. Daydreaming has turned into thoughts of fears and anxieties."
        },
        {
            name: "Eight of Cups reversed indicates the seeker has given up their dream to surrender to a reality that is uncomfortable, loveless and miserable. The seeker might have surrendered their life to please someone else, sell their business to work at a job they dislike."
        },
        {
            name: "Nine of Cups reversed indicates that the seeker is not going to get what they wish for. Family and friendship might be falling apart. There are disintegrating and separation, often due to lifestyle choices."
        },
        {
            name: "Ten of Cups reversed indicates disruption in the harmony, something or someone is making it hard to maintain the love. The seeker might be pretending everything is still wonderful in the hope that it will continue forever."
        },
        {
            name: "Page of Cups reversed indicates, someone who is hard to motivate, they are feeling sad and bring down others with their gloomy nature. They might promise a lot, but deliver little if any."
        },
        {
            name: "Knight of Cups reversed indicates a person who is walking away from a relationship and/or a creative venture. The emotional state of the seeker might be far from romantic, instead it is more likely to be cynical and use their insights and intuition to make others hurt as much as they do."
        },
        {
            name: "Queen of Cups reversed indicates someone with blocked psychic abilities and an emotionally unstable nature. This person might be very numb or even worse, has very dark feelings."
        },
        {
            name: "King of Cups reversed indicates someone who is blocked expressing their feelings, is unable to motivate and be motivated. This is someone with a selfish streak, often born from fear of rejection."
        },

        //PENTACLES
        {
            name: "Ace of Pentacles reversed indicates financial losses and decrease in security. There might have been anticipation in regards to increased income and wealth which are not becoming a reality."
        },
        {
            name: "Two of Pentacles reversed indicates the seeker is unable to juggle the demands of life. He loses sight of his finances and practical aspects of life."
        },
        {
            name: "Three of Pentacles reversed indicates lack of quality in work performance."
        },
        {
            name: "Four of Pentacles reversed indicates lack of something solid and dependable. There is nothing really reliable to hold on to."
        },
        {
            name: "Five of Pentacles reversed indicates disorder and chaos. Not only is there no money, but there is also a lack of spirituality and friendship."
        },
        {
            name: "Six of Pentacles reversed indicates a lack of generosity. There might be greediness rather than sharing of wealth."
        },
        {
            name: "Seven of Pentacles reversed indicates impatience and moving forward before the time is ripe. This card reversed can also mean unemployment."
        },
        {
            name: "Eight of Pentacles reversed indicates tedious work with little gains. The seeker might be overdue for a promotion they deserve but are not getting."
        },
        {
            name: "Nine of Pentacles reversed indicates loneliness and unhappiness. The home is neither secure nor very comfortable. The seeker might feel like a prisoner in their own home."
        },
        {
            name: "Ten of Pentacles reversed indicates fortunes or legacies wasted or lost, or on a lesser note, delayed. There might be restrictive ties that become a burden."
        },
        {
            name: "Page of Pentacles reversed indicates issues with learning and problems with studies. It denotes wasted talents, unrealistic ambitions and/or intellectual snobbery."
        },
        {
            name: "Knight of Pentacles reversed indicates sloppiness, bitterness and envy. This is someone who is sucking up to those who can help them climb the ladder to wealth and success, but will do nothing for those who haven’t got money or connections."
        },
        {
            name: "Queen of Pentacles reversed indicates poor taste and lack of sensitivity to other people’s needs."
        },
        {
            name: "King of Pentacles reversed indicates someone who is too conservative and who won’t take any chances. He is reluctant in making any changes in the way things are. He is likely to be a miser and a hoarder."
        },

        //SWORDS
        {
            name: "Ace of Swords reversed indicates that the stirring of the aces is blocked. Ideas and communication are blocked."
        },
        {
            name: "Two of Swords reversed indicates conflicts are unavoidable and compromises are not reached. The querent might be exhibiting too much personality and creates drama just to have something to do."
        },
        {
            name: "Three of Swords reversed indicates there is blocked grief stored in the person’s heart. The querent might be afraid of grieving and is internalising."
        },
        {
            name: "Four of Swords reversed denotes restlessness and burn outs. Thoughts and beliefs interrupt the person from recuperating."
        },
        {
            name: "Five of Swords reversed denotes conflict and arguments remaining unresolved, often dragging on indefinitely."
        },
        {
            name: "Six of Swords reversed indicates travel plans being held up or delayed. It also means difficulty in problem solving, especially mental tasks like maths and science."
        },
        {
            name: "Seven of Swords reversed indicates clumsiness and forgetfulness, especially when it comes to recollecting what lies have been told and to whom"
        },
        {
            name: "Eight of Swords reversed indicates a person who is unable to move forward due to self-doubts, fear, and isolation. The person knows the way forward, yet chooses to stay put, escaping in their own heads."
        },
        {
            name: "Nine of Swords reversed indicates that issues and problems have been ignored rather than dealt with and when they resurface the querent might not know how to deal with them."
        },
        {
            name: "Ten of Swords reversed indicates a person who is holding on to pain often inflicted by others. This querent might not be able to let go of what other people have inflicted and is feeling no support. Not just is there no support, there might even be deliberate sabotage."
        },
        {
            name: "Page of Swords reversed indicates a person who lies, gossips and being a know it all. This is someone who says inappropriate things and wastes his time in chat rooms. They don’t keep secrets or promises."
        },
        {
            name: "Knight of Swords reversed indicates a person with a speech impediment or learning disabilities. This is someone who is intelligent but for some reason is unable to express themselves."
        },
        {
            name: "Queen of Swords reversed indicates a woman who has problems with problem solving and communication. This is the type of person who will make accusations without checking the facts."
        },
        {
            name: "King of Swords reversed indicates a man who will manipulate facts to get his own ways. There is a block when it comes to integrity and objectivity. This is someone opinionated and biased."
        },

        //WANDS
        {
            name: "Ace of Wands reversed indicates that new beginnings are blocked. Ideas and enterprises do not take hold and there is little if any growth."
        },
        {
            name: "Two of Wands reversed indicates difficulties in making a decision, possibly due to the fear of making the wrong choice."
        },
        {
            name: "Three of Wands reversed indicates there is a delay in rewards and a delay in a payoff. The seeker might be out of their league, unable to cope with the demands."
        },
        {
            name: "Four of Wands reversed indicates the foundation not laid or not ready."
        },
        {
            name: "Five of Wands reversed indicates loss in individuality. There is a struggle to stand out among others equally talented."
        },
        {
            name: "Six of Wands reversed indicates not getting the rewards that are owed, success delayed of even defeat."
        },
        {
            name: "Seven of Wands reversed indicates an inability to hold your ground, especially if it is not popular. There is a lack of defending oneself."
        },
        {
            name: "Eight of Wands reversed indicates lack of energy and slowness, and things are not moving in the right direction. There might be poor time management and delays."
        },
        {
            name: "Nine of Wands reversed indicates weakness and stubbornness rather than strength and willpower. There is a waste of energy or lack of energy to save something."
        },
        {
            name: "Ten of Wands reversed indicates fear of responsibilities, and incapability to keep on top of things. The seeker might be unmotivated and ready to walk away from their duties."
        },
        {
            name: "Page of Wands reversed indicates a bully and a mean-tempered person who likes to show off and is demanding attention."
        },
        {
            name: "Knight of Wands reversed indicates a bully who wants to win at any costs. This is someone with acting talent who can turn his charm on and off and manipulate to get his way."
        },
        {
            name: "Queen of Wands reversed indicates intimidation and domination. There is a lack of faith or even worse, faith in black magic and darkness."
        },
        {
            name: "King of Wands reversed indicates dictatorship. This is someone with a god complex and a bad temper, often very violent."
        },

        //TRUMPS
        {
            name: "Fool reversed indicates new beginnings being blocked, the path is hidden and the querent is having difficulties seeing the world with fresh eyes."
        },
        {
            name: "Magician reversed indicates empty promises, false possibilities, a con man, misunderstandings and a lack of substance to make possibilities become a reality."
        },
        {
            name: "High Priestess reversed indicates blocked psychic abilities, and little to no awareness of the subconscious influence on our reality. Secrets are kept, answers are not found and instincts are wrong."
        },
        {
            name: "Empress reversed indicates neglect and a lack of attention where there should be nurturing. She can represent a mother who gives little affection and hardly any protection to her child. The child can also symbolise a project, a relationship, an enterprise, the home and a business that need attention but are instead being left unattended."
        },
        {
            name: "Emperor reversed denotes someone with a childish streak, who is also inconsistent and unpredictable. If this card represents the querent then something is blocking the energy that gives the person authority."
        },
        {
            name: "Hierophant reversed denotes prudence, silliness and hypocrisy. There are rules but no knowledge of why these rules are of importance. The ego is without guidance. There is an inflexibility in the system and in the people of the system. It can be an institution who control information and the leaders make themselves rich while the poor remains poor."
        },
        {
            name: "Lovers reversed indicates a breakup between partners, families and friends. Whatever it is, the people who split up are not creating the same magic and chemistry on their own and become less whole. Lovers reversed can also indicate a wrong choice being made."
        },
        {
            name: "Chariot reversed indicates defeat and cowardice. Instead of charging ahead and taking control of the inner and outer forces, there is the feeling of giving up before you give it a go. ‘What is the use’ is the energy in Chariot reversed."
        },
        {
            name: "Strength reversed denotes a lack of courage, lack of passion,fear, even timidity and impatience. Weak will and lack of backbone are indicated when this card shows up reversed. The lion remains untamed, often due to a fear of standing out due to peer pressure."
        },
        {
            name: "Hermit reversed indicates isolation and paranoia. There is no insight rather there is a twisted and vicious side to the person. This also denotes someone who is very lonely and is ‘loosing’ their grip on reality due to the amount of time they spend by themselves."
        },
        {
            name: "Wheel of fortune reversed indicates bad luck and misfortune. Instead of hitting the top of the wheel and moving forward, you are hitting the bottom, often stagnating. The wheel might not be turning at all and much-needed change is eluding you."
        },
        {
            name: "Justice reversed denotes injustice, unfairness, imbalance. You are either getting too much or too little of what you need. Something might be preventing the energy of fairness and balance from succeeding."
        },
        {
            name: "Hanged Man reversed indicates stubbornness and selfishness, refusing to give up your perspective to gain new insight. This card reversed denotes someone who is feeling apart from the world and unable to communicate their point of view and their perspective to others."
        },
        {
            name: "Death reversed indicates that something that should have come to a blessed end for some reason persists. ‘Not death’ is not a desired thing as it is not living either. For some reason, the person is holding on. Blocked grief is often a factor."
        },
        {
            name: "Temperance reversed indicates that the balance between two opposing elements to create a third goes terribly wrong. This card often shows up when two different people who could bring out the best in each other instead bring out the worst."
        },
        {
            name: "Devil reversed indicate temptations resisted, stricter moral kept and they escape the chains from the devil. The querent might be too restricted in their life, and they have little or no desires that drive them."
        },
        {
            name: "Tower reversed denotes secrets and lies that would have brought down the false structures remain hidden and there is no shake-up. There is no destruction and the Tower remains standing."
        },
        {
            name: "Star reversed indicates that any hope or promise offered is going to be false. There is leading astray rather than finding one’s way. There is a feeling of being lost with no way out."
        },
        {
            name: "Moon reversed indicates primitive forces at play, a long dark night of the soul. Intuition and creativity are blocked, a sexual block is also possible."
        },
        {
            name: "Sun reversed indicates new beginnings, success and happiness being blocked. Success is blocked due to reaching the wrong conclusions and having bad reasoning and poor logic. Things are frustrating and unclear. There might be some problems with pregnancy or raising young children."
        },
        {
            name: "Judgement reversed indicates taken on burdens, digging oneself deeper into the old life, being haunted by the past and unable to let go. There is something blocking the querent from renewing themselves."
        },
        {
            name: "World reversed indicates staying at home secluded within the comfort zones, projects and ventures remain incomplete. The querent is unable to finish what they started."
        }
    ]
};


$(document).ready(function() { //Displays back of cards
    _.times(3, function(i) {
        i++; //incremented to avoid creating 'img-0'
        $('#img-' + i).html(cardBack);
    });
});

//Creates a tarot card deck 
function createDeck() {
    deckArr = [];

    function deckConst(name, displayName) {
        this.name = name;
        this.displayName = displayName;
    }

    var id = 0;
    for (var a0 = 0; a0 < 4; a0++) {
        switch (a0) {
            case 0:
                suit = "cups";
                break;
            case 1:
                suit = "pentacles";
                break;
            case 2:
                suit = "swords";
                break;
            case 3:
                suit = "wands";
                break;
        }

        for (var a1 = 1; a1 < 15; a1++) {

            switch (a1) {
                case 1:
                    rank = "ace";
                    break;
                case 2:
                    rank = "two";
                    break;
                case 3:
                    rank = "three";
                    break;
                case 4:
                    rank = "four";
                    break;
                case 5:
                    rank = "five";
                    break;
                case 6:
                    rank = "six";
                    break;
                case 7:
                    rank = "seven";
                    break;
                case 8:
                    rank = "eight";
                    break;
                case 9:
                    rank = "nine";
                    break;
                case 10:
                    rank = "ten";
                    break;
                case 11:
                    rank = "page";
                    break;
                case 12:
                    rank = "knight";
                    break;
                case 13:
                    rank = "queen";
                    break;
                case 14:
                    rank = "king";
                    break;
                default:
                    break;
            }
            id++;
            var displayName = rank + " of " + suit;
            var name = _.kebabCase(displayName);
            //var name = rank + "-of-" + suit;
            card = new deckConst(name, displayName);
            deck[id] = card;
        }
    }
    deck[57] = new deckConst('the-fool');
    deck[58] = new deckConst('the-magician');
    deck[59] = new deckConst('the-high-priestess');
    deck[60] = new deckConst('the-empress');
    deck[61] = new deckConst('the-emperor');
    deck[62] = new deckConst('the-hierophant');
    deck[63] = new deckConst('the-lovers');
    deck[64] = new deckConst('the-chariot');
    deck[65] = new deckConst('strength');
    deck[66] = new deckConst('the-hermit');
    deck[67] = new deckConst('wheel-of-fortune');
    deck[68] = new deckConst('justice');
    deck[69] = new deckConst('the-hanged-man');
    deck[70] = new deckConst('death');
    deck[71] = new deckConst('temperance');
    deck[72] = new deckConst('the-devil');
    deck[73] = new deckConst('the-tower');
    deck[74] = new deckConst('the-star');
    deck[75] = new deckConst('the-moon');
    deck[76] = new deckConst('the-sun');
    deck[77] = new deckConst('judgement');
    deck[78] = new deckConst('the-world');

    for (var t = 1; t <= 78; t++) {
        deckArr.push(t);
        deck[t].displayName = _.startCase(deck[t].name);
    }

    return deckArr;
    return deck;
}

//gets Rider Waite Card Image i = id from createDeck()
function riderWaite(i) {
    var img = $("<img class='img-thumbnail' src='http://www.free-tarot-reading.net/img/cards/rider-waite/" +
        deck[i].name + ".jpg' alt=" + deck[i].name + "/>");
    return img;
}

//Selects random cards & prevents doubles
function randGen() {
    var cardsLeft = deckArr.length;
    var randInt = Math.floor((Math.random() * cardsLeft));
    var randNum = deckArr[randInt];
    deckArr.splice(randInt, 1);
    return randNum;
}

function showValue(newValue) {
    $("#range").html(newValue);
}
//Past, Present, Future spread
function pastPresentFuture() {
    createDeck();
    $("img").remove();
    $("#blurb").remove();
    $("#pastPresentFuture").html("Ler novamente?");
    var percentRevs = $("#range").html();

    for (var b = 1; b <= 3; b++) {
        //$("#rev-" + b).html("");
        var rand = randGen();
        var randInvert = Math.floor((Math.random() * 101));

        if (randInvert >= percentRevs) {
            $("#img-" + b).html(riderWaite(rand));
            $("#info-" + b).html("<h4><b>" + deck[rand].displayName + "</b></h4>");
            $("#info-" + b).append(meanings.upright[rand - 1].name);
        } else {
            $("#img-" + b).html(riderWaite(rand).addClass("invert"));
            $("#info-" + b).html("<h4><b>" + deck[rand].displayName + " - <i>Reversed</i></b></h4>");
            $("#info-" + b).append(meanings.reversed[rand - 1].name);
        }
    }
}

//Shows all cards (used in debugging)
//function dealerDeck() {
//  createDeck();
//  $("img").remove();
//  for (var i = 1; i < Object.keys(deck).length; i++) {
//    riderWaite(i);
//  }
//}