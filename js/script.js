// HTML-elementen aanroepen in javascript.
const insertQuestion = document.querySelector('h2');
const qaContainer = document.getElementById('qa-container');

// array van objects van de vragen en antwoorden.
const qaList = [{
        question: "Question 1: What is the correct spelling of his name?",
        image: "../images/q1.jpg", 
        options: ["Pharell Williams", "Pharrell Williams", "Pharrell William", "Pharrel William"],
        answer: "Pharrell Williams"
    },
    {
        question: "Question 2: Who was the most streamed artist on Spotify in 2019?",
        image: "../images/q2.jpg", 
        options: ["Ariana Grande", "Ed Sheeran", "Post Malone", "Drake"],
        answer: "Post Malone"
    },
    {
        question: "Question 3: Who is the youngest member of the Beatles?",
        image: "../images/q3.jpg", 
        options: ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
        answer: "George Harrison"
    }, {
        question: "Question 4: What is David Bowie's real surname?",
        image: "../images/q4.jpg", 
        options: ["David Jones", "David Robertson", "David Robert Bowie", "David Robert Jones"],
        answer: "David Robert Jones"
    }
]


// laden van de functie.
window.onload = function () {
    showQA();
}

// geen idee waar dit voor is, maar deze heb ik maar even bewaard. volgens mij iets met .push[i]
let optionsArray = [];
// console.log(optionsArray);

function showQA() {

    // als eerst worden er in deze for loop hieronder allerlei elementen aangemaakt die nodig zijn om de content te tonen. 
    // deze loops worden aangemaakt om door als het ware door elke array van de lijst te 'loopen'.
    // const questionList = qaList;
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
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('options');

        // DATA RETURNEN UIT DE QALIST
        showQuestion.textContent = qaList[i].question;
        showImage.src = qaList[i].image;

        // dom-manipulatie: met .appendChild stop je de gewenste element binnen in de parent.
        qaContainer.appendChild(qaBox);
        qaContainer.appendChild(qContainer);
        qaContainer.appendChild(aContainer);
        
        qaBox.appendChild(qContainer);
        qaBox.appendChild(showImage);
        qaBox.appendChild(aContainer);

        qContainer.appendChild(showQuestion);
        aContainer.appendChild(optionDiv);

        // omdat er 4 opties gestored zijn in een array bij qaList, wordt hier weer een for loop gebruikt om de opties in de HTML te laten zien.
        for (j = 0; j < qaList[i].options.length; j++) {
            let options_box = qaList[i].options[j];
            const showOptions = document.createElement('div');
            showOptions.classList.add('option-box');
            showOptions.innerHTML = options_box;

            if (j == 0) {
                showOptions.setAttribute('value', 'true');
                showOptions.onclick = function () {
                    showOptions.style.backgroundColor = 'green';
                }
            } else {
                showOptions.setAttribute('value', 'false')
                showOptions.onclick = function () {
                    showOptions.style.backgroundColor = 'red';
                }
            }
            
            // deze for loop zorgt ervoor dat de 4 opties zelf hun eigen container hebben.
           
            optionDiv.appendChild(showOptions);

            var optionButton = document.querySelector('.option-box');
            // console.log(optionButton);
        }
    }
}


// de ingedrukte knop zal gekoppeld moeten worden aan de index vd array, hoe?
// wanneer je op een optie drukt zal hij groen worden bij het goede antwoord.
// zo niet, wordt de optie rood zijn en een andere button groen maken die het goede antwoord geeft.

testButton = document.getElementById('test');

testButton.onclick = function () {
    console.log('het werkt');
}






// BRONVERMELDING
// foto van pharrell williams: https://hypebeast.com/2020/4/pharrell-williams-iamother-soundcloud-compilation-album-emerging-talent-search
// foto van ariana grande: https://www.theplace2.ru/photos/Ariana-Grande-md5514/pic-1052849.html
// foto van ed sheeran: https://festileaks.com/2019/08/voorbeschouwing-ed-sheeran-sziget-2019/
// foto van post malone: https://www.rollingstone.com/music/music-news/post-malone-style-fashion-886961/
// foto van drake: https://www.rap-up.com/2018/07/02/drake-son-adonis-revealed-photos/
// foto van the beatles: https://www.nu.nl/weekend/6044043/50-jaar-na-einde-the-beatles-je-kunt-niet-alles-op-yoko-ono-afschuiven.html
// foto van david bowie: https://www.theguardian.com/music/musicblog/2014/dec/03/david-bowie-10-of-the-best
