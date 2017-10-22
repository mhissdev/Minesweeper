<?php
// A class to generate a minesweeper board
// Mark Hiscock 17.10.2017

class Minesweeper{

    // Holds the values of the grid
    private $grid = array();

    // Number of columns
    private $numColumns = 0;

    // Number of rows
    private $numRows = 0;

    // Number of mines
    private $numMines = 0;


    /*******************************************************************************
    * Generates the grid
    *******************************************************************************/
    public function generateGrid($numRows, $numColumns, $numMines)
    {
        // Set number of rows
        $this->numRows = $numRows;

        // Set number of columns
        $this->numColumns = $numColumns;

        // Check number of mines does NOT exceed grid size
        if($numMines > $numRows * $numColumns)
        {
            // Too many mines for grid size - Set number of mines to allowable maximum
            $this->numMines = $numRows * $numColumns;
        }
        else
        {
            // Grid size OK - Set number of mines
            $this->numMines = $numMines;
        }

        // Setup default grid
        $this->setupGrid();

        // Place Mines
        $this->placeMines();
    }


    /*******************************************************************************
    * Outputs the grid as an HTML table
    *******************************************************************************/
    public function outputGrid()
    {
        // Table opening tag
        echo '<table>';

        // Output row
        for($i = 0; $i < $this->numRows; $i++)
        {
            // Row opening tag
            echo '<tr>';

            for($j = 0; $j < $this->numColumns; $j++)
            {
                // Data opening tag
                echo '<td>';

                // Output value
                if($this->grid[$j][$i] > 0)
                {
                    echo $this->grid[$j][$i];
                }
                else if($this->grid[$j][$i] == -1)
                {
                    echo '<strong>X</strong>';
                }
                
                // Data closing tag
                echo '</td>';
            }

            // Row closing tag
            echo '</tr>';
        }

        // Table closing tag
        echo '</table>';
    }


    /*******************************************************************************
    * Setup the default grid with ALL values set to zero
    *******************************************************************************/
    private function setupGrid()
    {
        // Create a new array for each column
        for($i = 0; $i < $this->numColumns; $i++)
        {
            $this->grid[] = array_fill(0, $this->numRows, 0);
        }
    }


    /*******************************************************************************
    * Place Mines
    *******************************************************************************/
    private function placeMines()
    {
        // Number of mines currently placed
        $numMinesPlaced = 0;

        // Loop until desired number of mines are placed
        while($numMinesPlaced < $this->numMines)
        {
            // Generate random coordinates
            $x = rand(0, $this->numColumns - 1);
            $y = rand(0, $this->numRows - 1);

            // Check mine is NOT already placed in cell
            if($this->grid[$x][$y] >= 0)
            {
                // Place mine
                $this->grid[$x][$y] = -1;

                // Update surrounding cell values
                for($i = -1; $i < 2; $i++)
                {
                    for($j = -1; $j < 2; $j++)
                    {
                        $this->updateCellValue($x + $i, $y + $j);
                    }
                }

                // Increment the number of mines placed
                $numMinesPlaced++;
            }
        }
    }


    /*******************************************************************************
    * Updates cell value if valid
    *******************************************************************************/
    private function updateCellValue($x, $y)
    {
        // Check coordinates are valid array indices
        if($x >= 0 && $x < $this->numColumns && $y >= 0 && $y < $this->numRows)
        {
            // Check cell does NOT contain mine
            if($this->grid[$x][$y] >= 0)
            {
                // Increment cell value
                $this->grid[$x][$y]++;
            }
        }
    }

}