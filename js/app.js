// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.allEnemies;
    this.x=x;
    this.y=y;
    this.arrayColunas=[60,140,220];
    this.width=75;
    this.height=75;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if(this.x>525){
        this.x=Math.random()*(-200,1);
        this.y=this.arrayColunas[Math.floor(Math.random() * Math.floor(3))];
    }
    if(dt>0){
    this.x=(this.x+100*dt)+Math.random()*(0.1,1);}

        let contaX=Math.abs(player.playerInitialPositionX-Math.round(this.x));
        let contaY=Math.abs(player.playerInitialPositionY-Math.round(this.y));
        if (this.x < player.playerInitialPositionX + player.width  && this.x + this.width  > player.playerInitialPositionX &&
            this.y < player.playerInitialPositionY + player.height && this.y + this.height > player.playerInitialPositionY) {
                player.playerInitialPositionX=200;
                player.playerInitialPositionY=390;
    }
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player =function(){
    this.sprite = 'images/char-boy.png';
    this.playerInitialPositionX=200;
    this.playerInitialPositionY=390;
    this.width=45;
    this.height=75;
};
Player.prototype.update = function(dt) {
  if(this.playerInitialPositionY<=0){
    this.playerInitialPositionX=200;
    this.playerInitialPositionY=390;
  }
  
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.playerInitialPositionX, this.playerInitialPositionY);
};

Player.prototype.handleInput = function(keyInput) {
    
if((this.playerInitialPositionX>=0)&&(this.playerInitialPositionX<=405)){
   if (keyInput=='right'){
    this.playerInitialPositionX=this.playerInitialPositionX+25;
   }else if (keyInput=='left'){
    this.playerInitialPositionX=this.playerInitialPositionX-25;
   }
    if(this.playerInitialPositionX<0){
        this.playerInitialPositionX=0;
    }
    if(this.playerInitialPositionX>405){
        this.playerInitialPositionX=405;
    }

}

if((this.playerInitialPositionY>=0)&&(this.playerInitialPositionY<=390)){
    if (keyInput=='up'){
        this.playerInitialPositionY=this.playerInitialPositionY-25;
       }else if (keyInput=='down'){
        this.playerInitialPositionY=this.playerInitialPositionY+25;
       }

       if(this.playerInitialPositionY<0){
        this.playerInitialPositionY=0;
    }
    if(this.playerInitialPositionY>390){
        this.playerInitialPositionY=390;
    }
}

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
this.allEnemies=[new Enemy(Math.random()*(0,100),60),new Enemy(Math.random()*(0,150),140),new Enemy(Math.random()*(-50,100),220)];
// Place the player object in a variable called player
this.player=new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
