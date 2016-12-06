//Generate 3 random number put them in array with those 3 numbers
// while loop to keep everything running
// ask user input 3 numbers arr2 to guess for arr1
// for loop inside the while loop to check the numbers in arr1 with userinput array2
// if statement to ouput if digits are correct and digit placement


//global var
var randomNumbers = [];
var userInput = [];
var correctCombo;

function addNumbers(){
  //making 3 random numbers
  for (var i = 0; i < 3; i++){
    var randomDigit = Math.floor(Math.random()* 10);
    randomNumbers.push(randomDigit);
  }
}

function getUserInput() {
  for (var i = 0; i < 3; i++){
    var askNum = i + 1;
    var tempNum = prompt("please enter number < 10 for number " + askNum);

    if (tempNum > 10 || tempNum == ' ' || isNaN(tempNum)) {
      tempNum = prompt("please try again for " + askNum + " 1 - 9");
    }

    var number = parseInt(tempNum);
    userInput.push(number);
  }
}



addNumbers();
console.log("This is randomly Generated = " + randomNumbers);
getUserInput();
console.log("This is user input = " + userInput);

function checkArray() {
  if (randomNumbers[0] === userInput[0]
    && randomNumbers[1] === userInput[1]
    && randomNumbers[2] === userInput[2]) {
    alert("This is the Correct Combo");
    return correctCombo;
  }

  var numberCount = 0;

  for (var x = 0; x < randomNumbers.length; x++){
    console.log("x = " + randomNumbers[x]);
    for (var y = 0; y < userInput.length; y++){
      console.log("y = " + userInput[y]);

      if(userInput[y] === randomNumbers[x]) {
        numberCount + 1;
        console.log("we have a match");
        console.log("numberCount = " + numberCount);

        break;

      }

    }
  }
}
while (true) {

checkArray();
break;

}



// for expansion
// var num1 = window.prompt("how many digits do you want to guess?")
// if (num1 > 10 || num1 == ' ' || isNaN(num1) ) {
//     alert("please try again");
//     break;
// }
//
// var guessTimes = parseInt(num1);
