
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
        // TODO:

        // Build HTML
        var strHTML = '<p>Game, Width:' + numColumns + ' Height: ' + numRows + ' Mines: ' + numMines + '</p>';

        // Return HTML 
        return strHTML;
    };

    // Setup grid
    var setupGrid = function(){

        // Double values for a laugh
        numColumns *= 2;
        numRows *= 2;
        numMines *= 2;
    };

    // Explicitly reveal public pointers to the private functions
    return{
        getHTML: getHTML
    }

})();


document.getElementById('minesweeper').innerHTML = minesweeper.getHTML(10, 15, 20);