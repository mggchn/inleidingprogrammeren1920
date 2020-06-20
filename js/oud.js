const qaList = [ {
        question: "What is the number of this song?",
        1: "Viva la Vida - Coldplay",
        2: "Counting Stars - OneRepublic",
        3: "Hall of Fame - The Script",
        4: "Breakeven - The Script"
    },
    {
        question: "What is the number of this song?",
        1: "Viva la Vida - Coldplay",
        2: "Counting Stars - OneRepublic",
        3: "Hall of Fame - The Script",
        4: "Breakeven - The Script"
    },
    {
        question: "What is the number of this song?",
        1: "Viva la Vida - Coldplay",
        2: "Counting Stars - OneRepublic",
        3: "Hall of Fame - The Script",
        4: "Breakeven - The Script"
    },
    {
    question: "What is the number of this song?",
        1: "Viva la Vida - Coldplay",
        2: "Counting Stars - OneRepublic",
        3: "Hall of Fame - The Script",
        4: "Breakeven - The Script"
    },
]

function loadOptions() {
    // console.log("test");
    let ran_list = [];
    let j = 0;
    let ran = Math.floor(Math.random() * 4) + 1;

    for (let i = ran; j < 4; j) {
        // console.log("start loop");
        // console.log(i, j)
        if (ran_list.indexOf(i) > -1) {
            // console.log("lol");
        } else {
            ran_list.push(i);
            j++;
            // console.log(1)
        }
        i = Math.floor(Math.random() * 4) + 1;
        // console.log("einde loop");
    }

    console.log(ran_list);
    return ran_list;
}

let ran_list_buiten_functie = loadOptions();

document.getElementById('question_1').innerHTML = ran_list_buiten_functie;