
// Design pattern using 'Example 4' from 'https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc'

var minesweeper = (function(){

    // Array to hold grid values
    var grid = [];

    // Number of columns
    var numColumns = 0;

    // Number of rows
    var numRows = 0;

    // Number of mines
    var numMines = 0;

    // Returns an HTML string to output grid
    var getHTML = function(){

        // Set values from paramaters
        numColumns = arguments[0];
        numRows = arguments[1];
        numMines = arguments[2];

        // Setup grid
        setupGrid();

        // Place mines
        placeMines();


        // Return HTML 
        return buildHTML();
    };


    // Setup grid
    var setupGrid = function(){

        // Set default grid values
        for(var i = 0; i < numColumns * numRows; i++)
        {
            grid[i] = 0;
        }
    };

    // Place mines
    var placeMines = function(){

         // Number of mines placed
         var numMinesPlaced = 0;

         while(numMinesPlaced < numMines)
         {
            var index = Math.floor(Math.random() * numColumns * numRows);

            if(grid[index] != -1)
            {
                grid[index] = -1;
                numMinesPlaced++;
            }
         }
    };


    // Build HTML
    var buildHTML = function(){

        // Build HTML
        var strHTML = '<p>Game, Width: ' + numColumns + ', Height: ' + numRows + ', Mines: ' + numMines + '</p>';
        strHTML += '<table>';

        for(var i = 0; i < numRows; i++)
        {
            strHTML += '<tr>';

            for(var j = 0; j < numColumns; j++)
            {
                var cellValue = grid[j * numColumns + i];

                if(cellValue == -1)
                {
                    strHTML += '<td><strong>X</strong></td>';
                }
                else if(cellValue > 0)
                {
                    strHTML += '<td>' + cellValue + '</td>';
                }
                else
                {
                    strHTML += '<td></td>';
                }
            }

            strHTML += '</tr>';
        }

        strHTML += '</table>';

        // Return HTML 
        return strHTML;
    };

    // Explicitly reveal public pointers to the private functions
    return{
        getHTML: getHTML
    }

})();


document.getElementById('minesweeper').innerHTML = minesweeper.getHTML(10, 15, 30);