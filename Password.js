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
    let arABC = ABC.split("");
    console.log(arABC);
    return arABC;
  } else {
    console.log("UC check is off");
    let arABC = [];
    return arABC;
  }
}
function lowerCase(abc) {
  if (lowerCaseCheck.checked === true) {
    console.log("LC check is on");
    let arabc = abc.split("");
    console.log(arabc);
    return arabc;
  } else {
    console.log("LC check is off");
    let arabc = [];
    return arabc;
  }
}
function numbers(numb) {
  if (numbersCheck.checked === true) {
    console.log("# check is on");
    let arNumb = numb.split("");
    console.log(arNumb);
    return arNumb;
  } else {
    console.log("# check is off");
    let arNumb = [];
    return arNumb;
  }
}
function symbols(symb) {
  if (symbolsCheck.checked === true) {
    console.log("sym check is on");
    let arSymb = symb.split("");
    console.log(arSymb);
    return arSymb;
  } else {
    console.log("sym check is off");
    let arSymb = [];
    return arSymb;
  }
}
function combineCharacters() {
  let arABC = upperCase(ABC);
  let arabc = lowerCase(abc);
  let arNumb = numbers(numb);
  let arSymb = symbols(symb);
  return arABC.concat(arabc, arNumb, arSymb);
}
function take(all) {
  let randomNumber = Math.random();
  let x = Math.floor(randomNumber * all.length);
  // console.log("random number in the string: " + x);
  let thisOne = all[x];
  console.log(thisOne);
  passwordGenerated.value = passwordGenerated.value + thisOne;
}
function allTogether(number, all) {
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
  let all = combineCharacters();
  allTogether(number, all);
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
