"use strict";
// Enemies our player must avoid
var Enemy = function() {
    //Enemy position; start off screen, and go randomly row 1-3
    // Any x position < 0 is assumed to be offscreen
    // add 25% row to y position to center it
    this.position = {x:-400 + Math.random()*400,
        y:rowHeight*(Math.floor(Math.random() * 3) + 1) - rowHeight/4,
        row:Math.round(this.position.x/rowHeight),
        col:  -1};
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    // speed is random between 50 and 200 units
    this.speed = Math.random() * 150 + 50;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // we want to track not only the absolute position of the
    // enemy, but the row/col it is in so that we can
    // track collisions
    this.position.x = this.position.x + this.speed*dt;
    if (this.position.x > numCols*colWidth){
        this.position.x = -400 + Math.random()*400;
        // Returns a random integer between min (included) and max (included)
        // Using Math.round() will give you a non-uniform distribution!
        this.position.y = rowHeight*(Math.floor(Math.random() * 3) + 1) - rowHeight/4;
        // speed range from 25-75
        this.speed = Math.random() * 150 + 50;
        this.position.row = Math.round(this.position.y/rowHeight);
        this.position.col = -1;
    } else {
        if (this.position.x > 0) {
            this.position.col = Math.round(this.position.x/colWidth);
        }
    }
    if (this.position.x > 0)
        this.render();


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.position.x, this.position.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.position = {x:2, y:5};
    this.winner = false;
};

Player.prototype.handleInput = function(direction){
    switch(direction){
        case "left":
            if (this.position.x > 0){
                this.position.x--;
                this.render();
            }
            break;
        case "right":
            if (this.position.x < numCols){
                this.position.x++;
                this.render();
            }
            break;
        case "up":
            if (this.position.y > 1){
                this.position.y--;
                this.render();
            } else if (this.position.y === 1) {
                this.position.y = 0;
                this.render();
                this.weHaveAWinner();
            }
            break;
        case "down":
            if (this.position.y < numRows){
                this.position.y++;
                this.render();
            }
            break;

    }
};

// simple response to a win. Put up a banner
// for 5 seconds and move player back to start
Player.prototype.weHaveAWinner = function(){
    ctx.font = '60pt Calibri';
    ctx.lineWidth = 3;
    // stroke color
    ctx.fillStyle = 'red';
    ctx.fillText('winner!!', 100, 40);
    this.position = {x:2, y:5};
    this.render();
    var timeout = setTimeout(function(){
        ctx.fillStyle = 'white';
        ctx.fillText('winner!!', 100, 40);
    },5000);
};

// didn't need this
Player.prototype.update = function(){

};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.position.x * colWidth, this.position.y * rowHeight);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
for (var index=0;index<5; index++){
    allEnemies[index] = new Enemy();
}

// Place the player object in a variable called player
var player = new Player();


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
