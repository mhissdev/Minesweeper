<?php
// Mark Hiscock 17.10.2017

require_once('classes/Minesweeper.php');

// Game values
$gridWidth = 15;
$gridHeight = 15;
$numMines = 30;

/*
// This will exceed max execution time!!
$gridWidth = 1000;
$gridHeight = 1000;
$numMines = 10000;
*/

// Create new Minesweeper instance
$minesweeper = new Minesweeper();

// Generate grid
$minesweeper->generateGrid($gridWidth, $gridHeight, $numMines);


?>
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Minesweeper Generator</title>
        <style type="text/css">

            table{
                border: solid 1px #3e3e3e;
            }
            
            td{
                width: 40px;
                height: 40px;
                border: solid 1px #3e3e3e;
                text-align: center;
            }

        </style>
    </head>
    <body>
        <h1>Minesweeper Generator</h1>
        <!-- Output game parameters -->
        <p><?php echo 'Game, Width: ' . $gridWidth . ', Height: ' . $gridHeight . ', Mines:' . $numMines; ?></p>

        <!-- Output grid -->
        <?php $minesweeper->outputGrid(); ?>
    </body>
</html>