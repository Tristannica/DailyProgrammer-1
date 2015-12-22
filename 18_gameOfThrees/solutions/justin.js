function threes(input) {
    while (input > 1) {
        var op = (-input - 1) % 3 + 1;
        console.log(input + ' ' + op);
        input = (input + op) / 3;
    }
    console.log(1);
}

//slightly different approach using conditionals, also returns the same answer as previous function
function altThrees(input){
    if (input === 1) console.log(input);
    else if (input % 3 === 0) console.log(input + " 0"), altThrees(input / 3);
    else if (input % 3 === 1) console.log(input + " -1"), altThrees((input - 1) / 3);
    else console.log(input + " 1"), altThrees((input + 1) / 3);
}



//threes(31337357) outputs
// 31337357 1
// 10445786 1
// 3481929 0
// 1160643 0
// 386881 -1
// 128960 1
// 42987 0
// 14329 -1
// 4776 0
// 1592 1
// 531 0
// 177 0
// 59 1
// 20 1
// 7 -1
// 2 1
// 1
