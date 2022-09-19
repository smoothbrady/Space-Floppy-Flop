# Space-Floppy-Flop
# Project-Planning
My proeject is called "Space Floppy Bird", a recreation of the game Flappy Bird.

## Overview
My game will consist of the user playing as a character that is a spacehsip. As you fly around space, trying to survive against meteor blocks attempting to destroy the user upon encountering contact! Try to survive as long as possible!

I will make a function that will create a grvaity system for the ship to have the action of "flying."
Also create functions to randomize the blocks to be at different heights from the top of the screen 
as well as the bottom.
I will also create a jump function that will go hand in hand with the function i create for gravity.
## User-Stories
As a user, I want the ability to...
- click start
- start game
- begin game and collect as many tokens as possible
- As the game ends it will tell me my score
- at the end push restart and play again

## Wireframes
![brainstormpic](https://user-images.githubusercontent.com/112364309/191062006-7a930610-e7ad-4ec2-89a7-6400d95e7eaa.jpg)

## ERD's
spaceship: (located on the left side)
meteor blocks: (located coming from the right side of the screen)
height & width: (will probably be 32by32 depending on the sizes of the blocks and get itself)
color: (will try and find a picture or draw a spaceship to be used)

function - gameloop
function - detectHit - when coming in contact with the block game over
function - movementHandler - used to allow the spaceship to fly (jump)