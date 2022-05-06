var readlineSync = require("readline-sync");

function run() {
  var question1 = readlineSync.question("Press any key to start the game");

  const randomNumber1 = Math.floor(Math.random() * 3) + 1;
  const randomNumber2 = Math.floor(Math.random() * 3) + 1;

  /*first placement*/
  firststring(1);
  function firststring(stringlength) {
    var emptyString1 = "";
    var emptyString2 = "";
    var characters = "ABC";
    var characters2 = "ABC";
    let operation1 = false;
    let operation2 = false;

    for (var i, i = 0; i < stringlength; i++) {
      emptyString1 += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    for (var i, i = 0; i < stringlength; i++) {
      emptyString2 += characters.charAt(
        Math.floor(Math.random() * characters2.length)
      );
    }
    var totalOne = emptyString1 + randomNumber1;
    var totalTwo = emptyString2 + randomNumber2;
    var toString1 = totalOne.toString();
    var toString2 = totalTwo.toString();
    console.log(toString1);
    console.log(toString2);

    
    if (toString1 === toString2 || totalOne === totalTwo) {
      run();
    }

    let question2;

    while (!operation1) {
      question2 = readlineSync.question('Enter a location to strike ie "A2"');


      if (question2 === toString1 || question2 === toString2) {
        operation1 = true;
        console.log("Hit. You have sunk a battleship. 1 ship remaining.");

        break;
      } else {
        console.log("You have missed!");
      }
    }

    let question3;
    let question4;


    while (!operation2) {
      question3 = readlineSync.question("Enter a location to strike the second battleship")
      if (question3 === question2) {
        console.log("You have already entered that value.");
      } else if (question3 === toString1 || question3 === toString2) {
        operation2= true;
        console.log('HIT!')
        break;
      } else {
        console.log('You have misssed')
      }
    }
      
              question4 = readlineSync.question(
                "You have destroyed all battleships. Would you like to play again? Y/N"
              );
          
      
      
            if(question4 === "Y" || question4 === "y") {
              run();
            }
    }

}
run();
