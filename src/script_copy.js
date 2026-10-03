let bullets = 0;
let chambers = 6;
let fired = 0;

function fireChance(bullets){
    return bullets / (chambers - fired);
}

document.querySelector("form").addEventListener("submit", (e) =>{
    e.preventDefault()

    bullets = document.querySelector("input").value;

    document.getElementById("pullBtn").style.display = "inline-block"
    document.querySelector("form").style.display = "none"
    console.log("click")
})

document.getElementById("pullBtn").addEventListener("click", () => {
    let chance = fireChance(bullets);
    if(Math.random() < chance){
        document.getElementById("status").innerText = "Ты застрелился";
        document.getElementById("pullBtn").style.display = "none"
        document.getElementById("againBtn").style.display = "inline-block"
    }
    else{
        fired++;
        document.getElementById("status").innerText = chance * 100 + "%";
    }
})

document.getElementById("againBtn").addEventListener("click", () => {
    let chance = 0;
    fired = 0;
    document.querySelector("form").style.display = "flex";
    document.getElementById("againBtn").style.display = "none"
    document.getElementById("status").innerText = "";
})

