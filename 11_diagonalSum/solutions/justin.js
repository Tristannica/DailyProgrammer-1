function diagonalSum(primaryArray){
      sum=0;
      for(var i = 0; i<primaryArray.length; i++){
            sum += primaryArray[i][i];
      }
      return sum;
      console.log(sum);
}

//Square primary Array of Arrays
var square4 =

              [[1, 0, 0, 0],

              [0, 1, 0, 0],

              [0, 0, 1, 0],

              [0, 0, 0, 1]]


//Non-square primary Array of Arrays
var square5 =

             [[2, 5, 1, 3, 9],

              [4, 1, 3, 0, 8],

              [1, 0, 9, 7, 6],

              [1, 7, 7, 3, 0],

              [3, 3, 8, 2, 4]]
