/**
 * @param {character[][]} board
 * @return {boolean}
 */

function isRowValid(board){
    return true;
}

function isColumnValid(board){
    return true;
}

function is3by3Valid(board){
    return true;
}

var isValidSudoku = function(board) {

    let listBoardRows = [];
    let listBoardColumns = [];
    let listBoard3by3 = [];

    board.forEach((x_val,x )=> {
        x_val.forEach((y_val,y) => {
            listBoardRows.push(y_val);
        });
    });
    
    for (let i = 0; i < 9; i++) {
        listBoardColumns.push([]);
    }

    listBoardRows.forEach((val,index) => {
        for (let j = 0; j < listBoardColumns.length; j++) {
            if(index%9 === j){
                listBoardColumns[j].push(val);
            }
        }
    });

    for (let i = 0; i < 9; i++) {
        listBoard3by3[i] = [];
    }

    let board_cursor = -1;
    let number=0;
    let xm = 1;
    let rm = 1;

    listBoardRows.forEach((val,i) => {
        board_cursor++;

        if(i<81){
            // console.log([i,3*rm-1,rm,xm]);
            listBoard3by3[xm-1].push(val);
        }

        if(i === 3*rm - 1){
            rm++;
            xm++;
            if(xm === 4 && rm < 10){
                xm = 1;
            } else if(xm === 7 && rm < 18){
                xm = 4;
            } else if(xm === 10 && rm < 26){
                xm = 7;
            }
        }

        if(board_cursor === 8){
            board_cursor = -1;
        }

    });

    // console.log(listBoardColumns);
    // console.log(listBoard3by3);
    // console.log(board);

    //find duplicate number in a row using reduce, skip if null
    function findDuplicateInARow(res, index){
        let is_dup = false;
        let flag_number = 0;

        let mapDup = new Map;
        for (let i = 0; i < res.length; i++) {
            if(res[i] !== null){
                if(mapDup.has(res[i])){
                    is_dup = true;
                    flag_number = mapDup.get(res[i]);
                    break;
                } else {
                    mapDup.set(res[i],i);
                }
            }
        }
        return is_dup;
    }

    function isNanParse(val){
        if(isNaN(parseInt(val))){
            return null;
        } else {
            return parseInt(val);
        }
    }

    let matrix_columns = listBoardColumns.map((row,x) => {
        let res = row.map(isNanParse);
        return findDuplicateInARow(res);
    });

    let matrix_board = board.map((row,x) => {
        let res = row.map(isNanParse)
        return findDuplicateInARow(res);

    });

    let matrix_3by3 = listBoard3by3.map((row,x) => {
        let res = row.map(isNanParse);
        return findDuplicateInARow(res);
    });

    let reduce_matrix_3by3 = matrix_3by3.reduce((acc,curr) => {
        return acc == true ? acc : curr;
    });
    let reduce_matrix_board = matrix_board.reduce((acc,curr) => {
        return acc == true ? acc : curr;
    });
    let reduce_matrix_columns = matrix_columns.reduce((acc,curr) => {
        return acc == true ? acc : curr;
    })

    return [reduce_matrix_3by3,reduce_matrix_board,reduce_matrix_columns].every((val) => {
        return val === false
    });
};

let nums = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

let result = isValidSudoku(nums);
console.log(result);