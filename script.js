const messages = [
"¿pq no amor?",
"¿segura?",
"¿mi amor estas bien?",
"Por favoooor mi vida",
"!Piensalo bien porfaaa!",
"No me digas no q lloro 😭",
"no seas asi corazón :(",
"va paro...",
"Es broma, di si por favoooor!!!",
]

let mesaggeindex = 0;

function handleNoClick(){
    const noBtn = document.querySelector(".no-btn");
    const yesBtn = document.querySelector(".yes-btn");

    //no
    noBtn.textContent = messages[mesaggeindex];
    mesaggeindex = (mesaggeindex + 1) % messages.length;

    //yes
    const currenSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    const newSize = currenSize * 2;
    yesBtn.style.fontSize = `${newSize}px`;

    //animation
    yesBtn.style.transform = "scale(1.5)";
    yesBtn.style.transition = "transform 0.3s ease";

    //reset
    setTimeout(() => {
        yesBtn.style.transform = "scale(1)";
        yesBtn.style.transition = "transform 0.3s ease";
    }, 100);
}

function handleYesClick(){
    window.location.href = "./yes.html";
}


