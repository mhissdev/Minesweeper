
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

         while(numMinesPlaced < numMines && numMinesPlaced < grid.length)
         {
            var index = Math.floor(Math.random() * numColumns * numRows);

            if(grid[index] != -1)
            {
                // Place mine
                grid[index] = -1;

                // Convert index to X, Y coordinates
                var x1 = index  % numColumns;
                var y1 = Math.floor(index / numColumns);

                // Update surrounding
                for(var i = -1; i <= 1; i++)
                {
                    for(var j = -1; j <= 1; j++)
                    {
                        incrementCellValue(x1 + i, y1 + j);
                    }
                }

                // Mine placed OK
                numMinesPlaced++;
            }
         }
    };


    // Increment cell value
    var incrementCellValue = function(x1, y1){

        if(x1 >= 0 && x1 < numColumns && y1 >= 0 && y1 < numRows)
        {
            var index = y1 * numColumns + x1;
            
            if(grid[index] != -1)
            {
                grid[index]++;
            }
        }
    };


    // Build HTML
    var buildHTML = function(){

        // Build HTML
        var strHTML = '<p>Game, Width: ' + numColumns + ', Height: ' + numRows + ', Mines: ' + numMines + '</p>';
        strHTML += '<table>';

        for(var i = 0; i < grid.length; i++)
        {        
            if(i % numColumns == 0)
            {
                strHTML += '<tr>';
            }

            if(grid[i] == -1)
            {
                strHTML += '<td><strong>X</strong></td>';
            }
            else if(grid[i] > 0)
            {
                strHTML += '<td>' + grid[i] + '</td>';
            }
            else
            {
                strHTML += '<td></td>';
            }
            
            if(i % numColumns == numColumns - 1)
            {
                strHTML += '</tr>';
            }
        }

        strHTML += '</table>';

        // Return HTML 
        return strHTML;
    };

    // Explicitly reveal public pointers to the private functions
    return{
        getHTML: getHTML
    };

})();


document.getElementById('minesweeper').innerHTML = minesweeper.getHTML(10, 15, 30);