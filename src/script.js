class Game {
    _chambers = 6;
    bullets;
    _fired = 0;
    gameOver = false;

    constructor(bullets){
        this.bullets = bullets
    }
    get chance(){
        let chance = this.bullets / (this._chambers - this._fired);
        return chance
    }
    fire(){
        if(this.gameOver != false){
            return null
        }
        else{
            if(Math.random() > this.chance){
                this._fired++;
                return this.gameOver = false;
            }
            else{
                return this.gameOver = true;
            }
        }
    }
}

let game = null;

document.querySelector("form").addEventListener("submit", (e) =>{
    e.preventDefault()

    game = new Game(Number(document.querySelector("input").value))

    document.getElementById("pullBtn").style.display = "block"
    document.querySelector("form").style.direction = "none"
    console.log("click")
})

document.getElementById("pullBtn").addEventListener("onclick", () => {
    const result = game.fire();
    if(game.gameOver == true){
        document.getElementById("status").innerText = "Ты застрелился";
    }
    else{
        document.getElementById("status").innerText = game.chance * 100;
    }
})

