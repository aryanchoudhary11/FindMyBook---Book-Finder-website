const details = [
    {
        title: 'Don Quixote',
        originalTitle: 'El ingenioso hidalgo don Quijote de la Mancha',
        cover: "img/Don Quixote.jpg",
        price: 'Rs.1199',
        author: 'Miguel de Cervantes',
        genre: 'Novel (Spanish Literature)',
        intro: `Don Quixote has become so entranced by reading chivalric romances that he determines to become a knight-errant himself. In the company of his faithful squire, Sancho Panza, his exploits blossom in all sorts of wonderful ways. While Quixote's fancy often leads him astray—he tilts at windmills, imagining them to be giants—Sancho acquires cunning and a certain sagacity. Sane madman and wise fool, they roam the world together, and together they have haunted readers' imaginations for nearly four hundred years.

        With its experimental form and literary playfulness, Don Quixote has been generally recognized as the first modern novel. The book has been enormously influential on a host of writers, from Fielding and Sterne to Flaubert, Dickens, Melville, and Faulkner, who reread it once a year, "just as some people read the Bible."`,
        pages: 1023,
        published: '1605',
        awards: `Will Eisner Comic Industry Awards Nominee for Best Adaptation from Another Medium & Best Humor Publication (2014), Βραβείο Λογοτεχνικής Μετάφρασης ΕΚΕΜΕΛ for Ισπανόφωνη Λογοτεχνία (2010), Premio Valle-Inclán for John Rutherford (2002), Audie Award for Español - Spanish Language (2024)`,
    },
    {
        title: 'A Tale of Two Cities',
        originalTitle: 'A Tale of Two Cities',
        cover: "img/A Tale of Two Cities.jpg",
        price: 'Rs.799',
        author: 'Charles Dickens',
        genre: 'Historical Fiction',
        intro: `A Tale of Two Cities is Charles Dickens’s great historical novel, set against the violent upheaval of the French Revolution. The most famous and perhaps the most popular of his works, it compresses an event of immense complexity to the scale of a family history, with a cast of characters that includes a bloodthirsty ogress and an antihero as believably flawed as any in modern fiction. Though the least typical of the author’s novels, A Tale of Two Cities still underscores many of his enduring themes—imprisonment, injustice, social anarchy, resurrection, and the renunciation that fosters renewal.`,
        pages: '489',
        published: '1859',
        awards: 'N/A',
    },
    {
        title: 'The Little Prince',
        originalTitle: 'Le Petit Prince',
        cover: "img/the liitle prince.jpg",
        price: 'Rs.299',
        author: 'Antoine de Saint-Exupéry',
        genre: `Children's Literature, Philosophical Fiction`,
        intro: `A pilot stranded in the desert awakes one morning to see, standing before him, the most extraordinary little fellow. "Please," asks the stranger, "draw me a sheep." And the pilot realizes that when life's events are too difficult to understand, there is no choice but to succumb to their mysteries. He pulls out pencil and paper... And thus begins this wise and enchanting fable that, in teaching the secret of what is really important in life, has changed forever the world for its readers.

        Few stories are as widely read and as universally cherished by children and adults alike as The Little Prince, presented here in a stunning new translation with carefully restored artwork. The definitive edition of a worldwide classic, it will capture the hearts of readers of all ages.`,
        pages: '96',
        published: '1943',
        awards: 'N/A',
    },
    {
        title: 'The Hobbit',
        originalTitle: 'The Hobbit',
        cover: "img/The Hobbit.jpg",
        price: 'Rs.999',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasy',
        intro: `In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.
        Written for J.R.R. Tolkien’s own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts of the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent. The text in this 372-page paperback edition is based on that first published in Great Britain by Collins Modern Classics (1998), and includes a note on the text by Douglas A. Anderson (2001).`,
        pages: '366',
        published: '1937',
        awards: 'Keith Barker Millennium Book Award, Books I Loved Best Yearly (BILBY) Awards for Older Readers (1997), Mythopoeic Scholarship Award for Inklings Studies (1990)',
    },
    {
        title: 'And Then There Were None',
        originalTitle: 'Ten Little Niggers',
        cover: "img/And Then There Were None.jpg",
        price: 'Rs.799',
        author: 'Agatha Christie',
        genre: 'Mystery/Thriller',
        intro: `First, there were ten—a curious assortment of strangers summoned as weekend guests to a little private island off the coast of Devon. Their host, an eccentric millionaire unknown to all of them, is nowhere to be found. All that the guests have in common is a wicked past they're unwilling to reveal—and a secret that will seal their fate. For each has been marked for murder. A famous nursery rhyme is framed and hung in every room of the mansion:

        "Ten little boys went out to dine; One choked his little self and then there were nine. Nine little boys sat up very late; One overslept himself and then there were eight. Eight little boys traveling in Devon; One said he'd stay there then there were seven. Seven little boys chopping up sticks; One chopped himself in half and then there were six. Six little boys playing with a hive; A bumblebee stung one and then there were five. Five little boys going in for law; One got in Chancery and then there were four. Four little boys going out to sea; A red herring swallowed one and then there were three. Three little boys walking in the zoo; A big bear hugged one and then there were two. Two little boys sitting in the sun; One got frizzled up and then there was one. One little boy left all alone; He went out and hanged himself and then there were none."

        When they realize that murders are occurring as described in the rhyme, terror mounts. One by one they fall prey. Before the weekend is out, there will be none. Who has choreographed this dastardly scheme? And who will be left to tell the tale? Only the dead are above suspicion.`,
        pages: '264',
        published: '1939',
        awards: 'N/A',
    },
    {
        title: 'The Alchemist',
        originalTitle: 'Alquimista',
        cover: "img/The Alchemist.jpg",
        price: 'Rs.299',
        author: 'Paulo Coelho',
        genre: 'Adventure, Fiction, Philosophical',
        intro: `Combining magic, mysticism, wisdom, and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world and transforming the lives of countless readers across generations.

        Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, following our dreams.`,
        pages: '182',
        published: '1988',
        awards: 'NBDB National Book Awards Nominee for Translation (2015), Grand Prix des lectrices de Elle for roman (1995), Premio Grinzane Cavour for Narrativa Straniera (1996), Corine Internationaler Buchpreis for Belletristik (2002)',
    },
]