//confusion abounds
function calculateRPN(input) {
  local stack = {};
  var operators = {
              "/": {
                  precedence: 3,
                  associativity: "Left"
              },
              "x": {
                  precedence: 3,
                  associativity: "Left"
              },
              "+": {
                  precedence: 2,
                  associativity: "Left"
              },
              "-": {
                  precedence: 2,
                  associativity: "Left"
              }
}

console.log(calculateRPN('5 1 2 + 4 × + 3 −')) //14
console.log(calculateRPN('1 2 + 4 5 6 8 * - + +')) //-36
