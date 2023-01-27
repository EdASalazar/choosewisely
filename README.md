### Choose Wisely
## A Minesweeper game inspired by Indiana Jones and the Last Crusade.

## Sreenshots
![Game: Start](../choosewisely/images/game-start.png)
![Game: In Progress](../choosewisely/images/game-in%20progress.png)
![Game: Loss](../choosewisely/images/game-fisnish%20loss.png)

_You'll have to play to see what the board looks like when you win_

## Techonolgies Used 
* JavaScript
* HTML
* CSS

## How to Play

_Choose Wisely_ functions like many of versions of the very popular Minesweeper.  

Randomly placed on the board are **booby traps** (aka mines in Minesweeper). You, as Indiana Jones, must avoid the traps while collecting all the non-booby trapped tiles. 

You have two advantes, beside your own cunning and rugged good looks, the tile flood and the flag.

**The flag** is used if you suspet that a trap is hiding under a tile. Just right click that tile. It is now flagged. You won't accidently trigger the trap and your own demise. 

Start the game by clicking any square. If the square is near a trap or traps it will tell. There will be a number. The number tells you how many traps it is touching. 

>**Strategy Tip:** take your time and make use of all the data the board is giving you to flag where you think the traps are. 

As you carefully click you will run into tiles that do not touch any traps. These tiles will cause a **flood** of tiles to be revealed. The flood won't stop until the furthest tiles out are all touching at least one trap. 

You win when the only tiles left are traps. 

## Project Planning 

I wanted to bring a differnet look to a game we've all played waiting for the last hour of Friday work to end. 

[Initial Design](../choosewisely/pseudocode/pseudocode.txt))
[Initial Wire Frame Design](../wireframe/Screen Shot 2023-01-18 at 4.49.31 PM.png)

## Future Enhancements

Though I'm happy with the initial build I think there are many enhancements that can be made.

1. A scalable board.
2. A difficulty level that's adjustable by the player. Allowing them to set the amount of bombs.
3. Audio enhancements. 
4. A timer.
5. A counter for the number of flags and traps. 
6. A way to track the times and scores over multiple games. 


