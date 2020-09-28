/*
Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.

Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.
*/
// Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  
  var playerNumber = '16';  // Change this line
  var player;  // Change this line

  //método mais simples
  player = testObj[playerNumber]
  console.log(player)

  /*atribuição de variável com Object.entries*/
//   const testObjectAll = Object.entries(testObj) 

//   for (i in testObjectAll){
//         if (testObjectAll[i][0] === playerNumber) {
//             player = testObjectAll[i][1]
//         }
//   }
//   console.log(player)
