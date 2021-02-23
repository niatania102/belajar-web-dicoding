const movies = {
    ohana: "Ohana synopsis : A summer in rural Oahu takes an exciting turn for two Brooklyn-raised siblings when a journal pointing to long-lost treasure sets them on an epic adventure with new friends, and leads them to reconnect with their Hawaiian heritage.",
    wonderwoman: "Wonder woman synopsis : A young Diana Prince participates in an athletic event on Themyscira against older Amazons. After falling from her horse, Diana takes a shortcut and remounts, but misses a checkpoint. Antiope removes her from the competition, explaining anything worthwhile must be obtained honestly.",
    mulan:"Mulan synopsis : In Imperial China, Hua Mulan is an adventurous and active girl, to the disappointment of her parents Zhou and Li, who hope that one day she will be wed to a good husband.",
    bloodshot: "Bloodshot synopsis : After leading a successful rescue operation of hostages in Mombasa, U.S. Marine Ray Garrison and his wife Gina travel for a holiday at an Italian beachside town in the Amalfi Coast.",
    lovewedding: "Love Wedding Repeat synopsis : While in Rome visiting his sister Hayley, Jack tries to muster up the courage to kiss Dina, an American war correspondent and the roommate, before returning to London. ",
    likeaboss: "Like A Boss synopsis : Two friends with very different personalities run their own beauty company, Mia&Mel. Mel (Rose Byrne) is more practical and inventive, while Mia (Tiffany Haddish) wants to earn her fortune quickly and live a lavish lifestyle.",
    holidate:"Holidate synopsis : Sloane is a young woman living in Chicago who hates the holidays due to the judgement she receives from her family for not being in a relationship. Having recently broken up with her boyfriend, her mother Elaine is constantly trying to set her up with a new man.",
    sleepover: "Sleepover synopsis :Clancy Finch is invited by her crush Travis Schultz to a party at his house. Her brother Kevin is caught dancing in the restroom by some older students who record him dancing and bully him.",
    gretel: "Gretel & Hansel synopsis : A baby girl in a village falls ill and is not expected to survive. The father takes the child to see an enchantress, who removes the illness but leaves power within the girl. The villagers go to the girl, as she grows up, to hear her premonitions, but she uses her power to kill people, including her father. She is taken into the woods to be abandoned. There, she lures other children to their deaths. She becomes known as the Beautiful Child.",
    deathday: "Happy Death Dayy 2U synopsis : College student Ryan wakes up in his car on Tuesday, September 19. Returning to his dorm room, he walks in on his roommate Carter and his girlfriend, Tree. He resumes work on an experimental quantum reactor with fellow students Samar and Dre. ",
    us:"Us synopsis : A foreword states that there are many underground tunnels in the United States that have no known purpose. In 1986, a young girl, Adelaide Thomas, watches a commercial for Hands Across America. ",
    escaperoom: "No Escape Room synopsis : When an escape room attraction turns from a fun bonding activity to a dangerous paranormal experience, a father and daughter must flee from an angry spirit.",
    tatbilb: "To All The Boys I've loved before synopsis : Now in her final year of high school, Lara Jean Song Covey is excitedly looking forward to attending school with her boyfriend, Peter Kavinsky, at the University of Virginia (UVA). Peter has been accepted early on a sports scholarship for lacrosse.",
    princessswitch: "Princess Switched synopsis : Two years after the events of the first film, Stacy is now the Princess of Belgravia, while Margaret is preparing to ascend to the throne of Montenaro following the death of the king and the decision of his son Howard to abdicate. ",
    kissingbooth:"The Kissing Booth 2 synopsis : The film starts with Elle narrating her time with Noah before he leaves for Harvard. Her senior year begins with her classmates gossiping about how she and Noah will eventually break up, making her fear elevate as Noah has befriended an attractive girl named Chloe on Instagram.",
    stillbelieve: "I still believe synopsis : In Lafayette, Indiana, in September 1999, Jeremy Camp (KJ Apa) departs for Calvary Chapel College in Murrieta, California. The night of his arrival, he goes to a concert of Canadian Christian band, the Kry, where he meets the lead singer."
 };

function showText(parameter){
    for(const [key, value] of Object.entries(movies)){
        if (parameter == key) {
            alert(value);
        }
    }
}

