function showMessage() {
    alert("You clicked me!");    
} 

function showTable() {
    const animal = "Tiikeri";
    const habitat = "Metsä";
    const diet = "Liha";

    const table = `
        <table class="display">
            <tr>
                <th>Eläin</th>
                <th>Elinympäristö</th>
                <th>Ruokavalio</th>
            </tr>
            <tr>
                <td>${animal}</td>
                <td>${habitat}</td>
                <td>${diet}</td>
            </tr>
        </table>
    `;

    document.querySelector("#tableContainer").innerHTML = table;
}

// Harjoitus 2

const headings = document.querySelectorAll("h2");

headings[1].addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");
});

const heading1 = document.querySelector("h2");

heading1.addEventListener("click", function() {
    heading1.innerHTML = "Bye bye mouse!";
    heading1.style.color = "red";
});

// Harjoitus 3

const feedback = document.querySelector("#feedback");
const statusMessage = document.querySelector("#status");

feedback.addEventListener("focus", function() {
    statusMessage.textContent = "Kirjoitat palautetta...";
    feedback.style.backgroundColor = "lightyellow";
});

feedback.addEventListener("blur", function() {
    statusMessage.textContent = "";
    feedback.style.backgroundColor = "";
});

const charcount = document.querySelector("#charcount");
const preview = document.querySelector("#preview");

feedback.addEventListener("input", function() {
    const text = feedback.value;

    charcount.textContent = text.length + "/200";
    preview.textContent = text;
});

// Harjoitus 4

const feedbackForm = document.querySelector("#feedbackForm");

feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const text = feedback.value;

    if (text.length < 10 || text.length > 200) {
        statusMessage.textContent = "Palautteen tulee olla 10–200 merkkiä pitkä!";
        statusMessage.style.color = "red";
    } else {
        feedback.value = "";
        charcount.textContent = "0/200";
        preview.textContent = "(Esikatselu tulee tähän)";
        statusMessage.textContent = "Kiitos palautteesta!";
        statusMessage.style.color = "green";
    }
});

// Harjoitus 5

const keybox = document.querySelector("#keybox");
const keyinfo = document.querySelector("#keyinfo");
let count = 0;
document.addEventListener("keydown", function(event) {
    console.log(event);

    keyinfo.textContent = "Näppäin: " + event.key +
        " | Koodi: " + event.code;

    keybox.textContent = event.key;
    keybox.style.fontSize = "40px";
    if (event.key === "a") {
    keybox.style.backgroundColor = "lightblue";
} else if (event.key === "b") {
    keybox.style.backgroundColor = "lightgreen";
} else {
    keybox.style.backgroundColor = "lightyellow";
}
count++;
keyinfo.textContent += " | Painalluksia: " + count;
if (event.shiftKey) {
    keyinfo.textContent += " | Shift painettu";
}

if (event.ctrlKey) {
    keyinfo.textContent += " | Ctrl painettu";
}

if (event.altKey) {
    keyinfo.textContent += " | Alt painettu";
}
});