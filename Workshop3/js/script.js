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

// Harjoitus 2: Kuuntelijat ja DOM

const headings = document.querySelectorAll("h2");

headings[1].addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");
});

const heading1 = document.querySelector("h2");

heading1.addEventListener("click", function() {
    heading1.innerHTML = "Bye bye mouse!";
    heading1.style.color = "red";
});

// Harjoitus 3: Syöttötapahtumat

const feedback = document.querySelector("#feedback");
const status = document.querySelector("#status");

feedback.addEventListener("focus", function() {
    status.textContent = "Kirjoitat palautetta...";
    feedback.style.backgroundColor = "lightyellow";
});