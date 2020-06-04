// Cria o grid como uma variavel global
var sudoku = [];

function criaSudoku () {
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    for (let i = 0; i < 9; i++) {
        let tr = document.createElement('tr');
        sudoku[i] = [];       

        for (let j = 0; j < 9; j++) {
            let td = document.createElement('td');

            // Draw the borders
            // Apparently, this can be done in a less messy way using (border-collapse: collapse;)
            if(i == 0 || i == 3 || i == 6){
                td.style.borderTop = '2px solid rgba(0,0,0,0.5)';
            }
            else{
                td.style.borderTop = '1px solid rgba(0,0,0,0.25)';   
            }
            if(j == 0 || j == 3 || j == 6){
                td.style.borderLeft = '2px solid rgba(0,0,0,0.5)';
            }
            else{
                td.style.borderLeft = '1px solid rgba(0,0,0,0.25)';   
            }
            if(i == 8){
                td.style.borderBottom = '2px solid rgba(0,0,0,0.5)';
            }
            if(j == 8){
                td.style.borderRight = '2px solid rgba(0,0,0,0.5)';
            }

            sudoku[i][j] = document.createElement('textarea');

            // Set the size of the input to one character, and do not let the user type more than it
            sudoku[i][j].maxLength = 1;
            sudoku[i][j].setAttribute('rows', '1');
            sudoku[i][j].setAttribute('cols', '1');
            
            sudoku[i][j].innerHTML = '0';
            td.appendChild(sudoku[i][j]);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    document.getElementById('playtable').appendChild(table);
}