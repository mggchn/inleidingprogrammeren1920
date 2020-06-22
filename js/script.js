// HTML-elementen aanroepen in javascript.
const insertQuestion = document.querySelector('h2');
const qaContainer = document.getElementById('qa-container');

// Array van objects van de vragen en antwoorden.
const qaList = [{
        question: "Question 1: What is the correct spelling of his name?",
        image: "../images/q1.jpg", 
        options: ["Pharrell Williams", "Pharell Williams", "Pharrell William", "Pharrel William"],
        answer: "Pharrell Williams"
    },
    {
        question: "Question 2: Who was the most streamed artist on Spotify in 2019?",
        image: "../images/q2.jpg", 
        options: ["Post Malone", "Ariana Grande", "Ed Sheeran", "Drake"],
        answer: "Post Malone"
    },
    {
        question: "Question 3: Who is the youngest member of the Beatles?",
        image: "../images/q3.jpg", 
        options: ["George Harrison", "Paul McCartney", "Ringo Starr", "John Lennon"],
        answer: "George Harrison"
    }, {
        question: "Question 4: What is David Bowie's real surname?",
        image: "../images/q4.jpg", 
        options: ["David Robert Jones", "David Jones", "David Robertson", "David Robert Bowie"],
        answer: "David Robert Jones"
    }
]

// Laden van de functie.
window.onload = function () {
    showQA();
}

function showQA() {

    // Als eerst worden er in deze for loop hieronder allerlei elementen aangemaakt die nodig zijn om de content te tonen. 
    // Deze loops worden aangemaakt om door als het ware door elke array van de lijst te 'loopen'.
    let i, j;
    for (i = 0; i < qaList.length; i++) {

        // ELEMENTEN AANMAKEN DIE KOMEN TE ZITTEN IN DE <div id="qa-container"> IN DE HTML + CLASSES.
        // r.44-46 is voor de box voor q&a.
        const qaBox = document.createElement('div');
        qaBox.classList.add('qa-box');

        // r.51-53 is voor de vraag.
        const qContainer = document.createElement('div');
        qContainer.classList.add('q-container');
        const showQuestion = document.createElement('h2');

        // r.56 is voor de foto.
        const showImage = document.createElement('img');

        // r.59-62 is voor de antwoorden.
        const aContainer = document.createElement('div');
        aContainer.classList.add('a-container');

        // DATA RETURNEN UIT DE QALIST
        showQuestion.textContent = qaList[i].question;
        showImage.src = qaList[i].image;

        // Dom-manipulatie: met .appendChild stop je de gewenste element binnen in de parent.
        qaContainer.appendChild(qaBox);
        qaContainer.appendChild(qContainer);
        
        qaBox.appendChild(qContainer);
        qaBox.appendChild(showImage);
        qaBox.appendChild(aContainer);

        qContainer.appendChild(showQuestion);

        // In deze array worden de getallen bewaard om te zien welk getal al gemaakt is.
        let ran_list = [];

        // Omdat er 4 opties gestored zijn in een array bij qaList, wordt hier weer een for loop gebruikt om de opties in de HTML te laten zien.
        for (j = 0; j < qaList[i].options.length; j) {
            // console.log("j: " + j);
            const showOptions = document.createElement('div');
            showOptions.classList.add('option-box');
            aContainer.appendChild(showOptions);

            // While loop blijft draaien zolang stop gelijk is aan false.
            let stop = false;
            while (stop == false) {

                // Random getal tussen 0 t/m 4
                let random = Math.floor(Math.random() * qaList[i].options.length);
                // console.log("random: " + random);

                // True als random getal gelijk is dan -1 (in andere woorden, random getal bestaat niet in ran_list[]).
                // Alleen als het random getal nog niet bestaat, wordt de option element gevuld met de options_array_item.
                if (ran_list.indexOf(random) == -1) {
                    let options_array_item = qaList[i].options[random];
                    showOptions.innerHTML = options_array_item;

                    // Als index 0 is, dan dat je juiste antwoord en moet een het groene kleur krijgen. Zo niet, dan wordt het rood.
                    if (random == 0) {
                        showOptions.setAttribute('value', 'true');
                        showOptions.onclick = function() {
                            showOptions.style.backgroundColor = 'green';
                        }
                    } else {
                        showOptions.setAttribute('value', 'false')
                        showOptions.onclick = function() {
                            showOptions.style.backgroundColor = 'red';
                        }
                    }

                    ran_list.push(random);
                    // console.log("ran_list: " + ran_list);

                    j++;
                    stop = true;
                }
            }
        }
    }
}

// BRONVERMELDING
// foto van pharrell williams: https://hypebeast.com/2020/4/pharrell-williams-iamother-soundcloud-compilation-album-emerging-talent-search
// foto van ariana grande: https://www.theplace2.ru/photos/Ariana-Grande-md5514/pic-1052849.html
// foto van ed sheeran: https://festileaks.com/2019/08/voorbeschouwing-ed-sheeran-sziget-2019/
// foto van post malone: https://www.rollingstone.com/music/music-news/post-malone-style-fashion-886961/
// foto van drake: https://www.rap-up.com/2018/07/02/drake-son-adonis-revealed-photos/
// foto van the beatles: https://www.nu.nl/weekend/6044043/50-jaar-na-einde-the-beatles-je-kunt-niet-alles-op-yoko-ono-afschuiven.html
// foto van david bowie: https://www.theguardian.com/music/musicblog/2014/dec/03/david-bowie-10-of-the-best
