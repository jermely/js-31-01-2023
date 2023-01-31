// function functionOne() {
//   functionTwo();
// }

// functionOne();

// function functionTwo() {
//   let myRes = 1 + 2;
//   console.log(myRes);
// }

// ARROW-FUNCTION

const fOne = () => {
  fTwo();
};

const fTwo = () => {
  let Res = 1 + 22;
  console.log(Res);
};

fOne();

// ----------------------------------------------------

// function functionOne() {
//   functionTwo(2, 6);
// }

// functionOne();

// function functionTwo(numberOne, numberTwo) {
//   let myRes = numberOne + numberTwo;
//   console.log(myRes);
// }

// ----------------------------------------------------

// function functionOne() {
//   functionTwo(2, 6);
// }

// functionOne();

// function functionTwo(numberOne, numberTwo) {
//   let myRes = numberOne + numberTwo;
//   functionThree(myRes);
// }

// function functionThree(myData) {
//   console.log(myData);
// }

// ----------------------------------------------------

// function functionOne() {
//   functionTwo(11, 6);
// }

// functionOne();

// function functionTwo(numberOne, numberTwo) {
//   let myRes = addMe(numberOne, numberTwo);
//   functionThree(myRes);
// }

// function addMe(vOne, vTwo) {
//   let myRes = vOne + vTwo;

//   return myRes;
// }

// function functionThree(myData) {
//   console.log(myData);
// }
