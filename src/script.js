class Game {
    _chambers = 6;
    bullets;
    _fired = 0;
    _gameOver = false;

    constructor(bullets){
        this.bullets = bullets
    }
    get chance(){
        let chance = this.bullets / (this._chambers - this._fired);
        return chance
    }
    fire(){
        if(this._gameOver != false){
            return null
        }
        else{
            if(Math.random() > this.chance){
                this._fired++;
            }
            else{
                this._gameOver = true;
                return true
            }
        }
    }
}