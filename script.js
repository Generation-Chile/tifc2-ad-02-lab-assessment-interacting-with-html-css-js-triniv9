
document.querySelector("h1").textContent = "Goodbye world!";

document.getElementById("titulo-h2").style.color = "orange";

const click = document.getElementById("titulo-h3");
click.addEventListener("click", () => {
    click.style.color = "brown";
});    
