let balloonContainer = document.querySelector(".balloon-container");

console.log(balloonContainer);

const numBalloons = 25

let popped = 0

for (let i = 1; i <= numBalloons; i++) {
    const elem1 = document.createElement("div");

    elem1.classList.add("balloon")
    elem1.innerText = "POP";
    const randColor = getColor()

    elem1.style.backgroundColor = `${randColor}`
    elem1.style.color = `${randColor}`

    elem1.addEventListener("mouseenter", () => {
        if (elem1.style.backgroundColor !== "transparent") {
            popped++;
        }
        console.log(popped);
        elem1.style.backgroundColor = "transparent";
        checkAllPopped();
    })
    balloonContainer.appendChild(elem1)
}

function checkAllPopped() {
    if (popped === 25) {
        console.log("All popped");
        let message = document.querySelector(".zero-balloon");
        message.style.display = "block";
        balloonContainer.innerHTML = ""
    }
}

function getColor() {
    function color() {
        let hex = random(255).toString(16);
        return hex.padStart(2, "0");
    }
    return "#" + color() + color() + color();
}

function random(number) {
    let val = Math.floor(Math.random() * number);
    return val;
}