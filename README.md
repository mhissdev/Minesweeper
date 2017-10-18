# Minesweeper
The objective of the task was to generate and output a grid that represents the board for a Minesweeper game.
Reasoning and Approach
After carefully reading through the instructions I began to think about possible solutions. I have had experience solving similar problems such as recreating games such as Tetris, and therefore quickly determined that using a grid system to store values would be appropriate.

My emphasis was to write readable and clean code whilst fulfilling the requirements. I have broken down the problem into the following small steps:-

•	Generate the appropriately sized grid
•	Place a mine
•	Update values within surrounding cells
•	Repeat placing mines until the desired number of mines are placed
•	Output grid
Programming Language
I decided to use PHP purely based on personal preference. However, any number of programming languages would have been suitable for the task.
Data Structures
I used a class to generate and output the grid. I generally find using classes helps to keep code organised, and furthermore encapsulating the data helps to reduce the chances of values being changed or overwritten by accident. I like object orientated design!

I created a grid using a 2D array (an array of arrays) with all values set to zero by default. The value of -1 would represent that a mine is present within that cell. All other values would represent the number of mines in adjacent cells (0-8).
Algorithms
Mines are randomly placed on the grid. However, before a mine is successfully placed the value on the grid is checked to ensure that no more than one mine is placed in a single cell. 

Furthermore, it is important to ensure that the number of mines does not exceed the number of available cells determined by the parameters, otherwise the loop will never complete.

I decided to update the grid values specifying the number of adjacent mines as each mine was placed, rather than executing a separate function to do this once all mines have been placed.
 
Summary
There are many different approaches and solutions that could be used to solving the problem, with the best solution somewhat depending on context. For example, the provided solution only works well with relatively small integers. A different approach and solution would be desirable when dealing with much larger board sizes.
