// Première étape
let startGame = ()=>{
    let grid = [
    ['  ','  ','  ','  ','  ','  ','  '],
    ['  ','  ','  ','  ','  ','  ','  '],
    ['  ','  ','  ','  ','  ','  ','  '],
    ['  ','  ','  ','  ','  ','  ','  '],
    ['  ','  ','  ','  ','  ','  ','  '],
    ['  ','  ','  ','  ','  ','  ','  ']
    ]

    // Tests
    let played = showGrid(grid);
    fillCol(played, grid);
    played = showGrid(grid);
    fillCol(played, grid);
    played = showGrid(grid);
    fillCol(played, grid);
    played = showGrid(grid);
    fillCol(played, grid);
    played = showGrid(grid);
    fillCol(played, grid);
    played = showGrid(grid);
    fillCol(played, grid);
    played = showGrid(grid);
}


// let grid = [
//     ['  ','  ','  ','  ','  ','  ','  '],
//     ['  ','  ','  ','  ','  ','  ','  '],
//     ['  ','  ','  ','  ','  ','  ','  '],
//     ['  ','  ','  ','  ','  ','  ','  '],
//     ['  ','  ','  ','  ','  ','  ','  '],
//     ['  ','  ','  ','  ','  ','  ','  ']
//     ];
    
// Deuxième étape
const showGrid = (arr)=>{
    let value = Number(prompt(`
    | ${arr[0][0]} | ${arr[0][1]} | ${arr[0][2]} | ${arr[0][3]} | ${arr[0][4]} | ${arr[0][5]} | ${arr[0][6]} |
    | ${arr[1][0]} | ${arr[1][1]} | ${arr[1][2]} | ${arr[1][3]} | ${arr[1][4]} | ${arr[1][5]} | ${arr[1][6]} |
    | ${arr[2][0]} | ${arr[2][1]} | ${arr[2][2]} | ${arr[2][3]} | ${arr[2][4]} | ${arr[2][5]} | ${arr[2][6]} |
    | ${arr[3][0]} | ${arr[3][1]} | ${arr[3][2]} | ${arr[3][3]} | ${arr[3][4]} | ${arr[3][5]} | ${arr[3][6]} |
    | ${arr[4][0]} | ${arr[4][1]} | ${arr[4][2]} | ${arr[4][3]} | ${arr[4][4]} | ${arr[4][5]} | ${arr[4][6]} |
    | ${arr[5][0]} | ${arr[5][1]} | ${arr[5][2]} | ${arr[5][3]} | ${arr[5][4]} | ${arr[5][5]} | ${arr[5][6]} |
    `));
    return value;
}
// test = fonction(tableau);
// alert(test);
// alert(repUser);

// Troisième étape (insertion du bouton 'Start Game' dans le index1.html)


// Quatrième étape
let fillCol = (playedValue,arr)=>{
    let indexCol = playedValue - 1;
    let indexRow = getLastInd(arr,indexCol);
    arr[indexRow][indexCol] = 'a';
}



// Cinquième étape
const getLastInd = (arr,iCol)=>{
    for (let iRow = 5; iRow >= 0; iRow--){
        if (arr[iRow][iCol] == '  ')
            return iRow;
    }
}