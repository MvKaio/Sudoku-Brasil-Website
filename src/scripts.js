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
            td.setAttribute('style', 'white-space: nowrap;');

            sudoku[i][j] = document.createElement('textarea');
            sudoku[i][j].setAttribute('rows', '1');
            sudoku[i][j].setAttribute('cols', '1');
            sudoku[i][j].innerHTML = '0';

            // Atributo para nao deixar o usuario escrever mais de um caractere 
            // (NAO ESTA FUNCIONANDO)
            sudoku[i][j].setAttribute('maxlenght', '1');

            td.appendChild(sudoku[i][j]);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    document.getElementById('playtable').appendChild(table);
}