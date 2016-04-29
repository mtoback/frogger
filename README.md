frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://www.udacity.com/course/viewer/#!/c-nd001/l-2696458597/m-2687128535) for self-checking their submission.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

# A fun little game

This is a simple version of the (Frogger game)[https://en.wikipedia.org/wiki/Frogger]

## Structure and Recommendations for Extension

The game consists of four critical files that one might consider make modifications on:
- index.html : This is the container file for the canvas object that the game writes on.
- app.js : encapsulates the Player and Enemy objects that interact to create the game
- engine.js: encapsulates a virtual game object that draws the board and plays the game
- resources.js: base functionality that loads the game pieces and starts the execution of the methods.

In the future, one might consider expanding the game by refactoring engine.js into a Game object which can handle multiple players, rounds, and levels. The levels could include increased difficulty by making the Enemy objects go faster or add more of them. One could also add more lanes of the road that the Player object needs to pass through.

Also one could add a Bling object that can contain one of many Gems that players could win.

## Installation

Copy this to your disk and point a browser at the index.html file, have fun!

## Rules

Move the player across the road using the up, down, right and left arrow keys.

The player cannot move off the playing field so the arrows won't work if you try to.

Avoid the ladybugs. If you collide with one, you are sent back to the start

Get to the water, and you win!




