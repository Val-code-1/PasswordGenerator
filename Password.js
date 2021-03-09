let lengthDropdown = document.getElementById("length");
let upperCaseCheck = document.getElementById("upperCaseCheck");
let lowerCaseCheck = document.getElementById("lowerCaseCheck");
let numbersCheck = document.getElementById("numbersCheck");
let symbolsCheck = document.getElementById("symbolsCheck");
let generateButton = document.getElementById("generateButton");
let passwordGenerated = document.getElementById("passwordGenerated");
let ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let abc = "abcdefghijklmnopqrstuvwxyz";
let numb = "1234567890";
let symb = "!@#$%^&()-=+?";

// HELPFUL
// function uC(box) {
//   x = box.split("");
//   return x;
// }
// uC(ABC);
// console.log(x);
function upperCase(ABC) {
  if (upperCaseCheck.checked === true) {
    console.log("UC check is on");
    arABC = ABC.split("");
    console.log(arABC);
    return arABC;
  } else {
    console.log("UC check is off");
    arABC = [];
    return arABC;
  }
}
function lowerCase(abc) {
  if (lowerCaseCheck.checked === true) {
    console.log("LC check is on");
    arabc = abc.split("");
    console.log(arabc);
    return arabc;
  } else {
    console.log("LC check is off");
    arabc = [];
    return arabc;
  }
}
function numbers(numb) {
  if (numbersCheck.checked === true) {
    console.log("# check is on");
    arNumb = numb.split("");
    console.log(arNumb);
    return arNumb;
  } else {
    console.log("# check is off");
    arNumb = [];
    return arNumb;
  }
}
function symbols(symb) {
  if (symbolsCheck.checked === true) {
    console.log("sym check is on");
    arSymb = symb.split("");
    console.log(arSymb);
    return arSymb;
  } else {
    console.log("sym check is off");
    arSymb = [];
    return arSymb;
  }
}
function combineCharacters() {
  upperCase(ABC);
  lowerCase(abc);
  numbers(numb);
  symbols(symb);
  return (all = arABC.concat(arabc, arNumb, arSymb));
}
function take(all) {
  randomNumber = Math.random();
  x = Math.floor(randomNumber * all.length);
  // console.log("random number in the string: " + x);
  thisOne = all[x];
  console.log(thisOne);
  passwordGenerated.value = passwordGenerated.value + thisOne;
}
function allTogether(number) {
  for (let i = 0; i < number; i++) {
    // console.log([i]);
    take(all);
  }
}
function select() {
  passwordGenerated.select();
}
generateButton.addEventListener("click", () => {
  let number = lengthDropdown.value;
  console.log(number);
  passwordGenerated.value = "";
  combineCharacters();
  allTogether(number);
  select();
  console.log("full string: " + [all]);
  // console.log(all.length);
  //   console.log("upperCaseChecked :" + upperCaseCheck.checked);
  //   console.log("lowerCaseChecked :" + lowerCaseCheck.checked);
  //   console.log("numbersChecked :" + numbersCheck.checked);
  //   console.log("symbolsChecked :" + symbolsCheck.checked);
});

// upperCase(arABC);
// lowerCase(arabc);
//;
// symbols(arSymb);
