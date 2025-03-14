/* Challenge 1: Download an image of a Rock, Paper and Scissor to be use to display the computer's and player's choice.

/* Note:  Throughout this application we will use the following convention
          1 means Scissor
          2 means Paper 
          3 means Rock
*/

/* Challenge 2: Complete the function game( ) below using the following steps,
       1) Get the user choice from the dropdown box
       2) Generate a number between 1 and 3 inclusive to represent the computers choice
       3) Display images of both the computer and players choice in the container with id of "display"
       4) Make appropriate decisions to determine who won.  Display in the container output the winner.
          Hint: You will need to use the logical && operator to check the computer and players selection.
*/


function game(){
       let display = document.getElementById("display");
       let output = document.getElementById("output");

       let player = parseFloat(document.getElementById("player").value);
       let computer = Math.floor(Math.random() * 3 +1)
       output.innerHTML = " ";
       display.innerHTML= `Player: <img src="${player}.jpg"> VS. Computer: <img src="${computer}.jpg">`
       if (player == computer) {
              output.innerHTML = "It's a tie!";
          } else if (
              (player == 1 && computer == 2) ||
              (player == 2 && computer == 3) || 
              (player == 3 && computer == 1)
          ) {
              output.innerHTML = "Player wins!";
          } else {
              output.innerHTML = "Computer wins!";
          }
      
       
      }