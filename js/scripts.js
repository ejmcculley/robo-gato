// function beepBoop(number) {
//   let input = number;
//   let index = 0
//   let inputArray = [];
  
//   while
//   (index <= input) {
//   inputArray.push(index);
//   index ++
//   }
// return inputArray;
// }

function beepBoop(number) {
  let input = number;
  let index = 0
  let inputArray = [];
  let beepArray = new Array(input);
  while
  (index <= input) {
  inputArray.push(index);
  index ++
  }
  inputArray.forEach(function(element) {
  if (element.toString().includes(1)) {
  beepArray.push("Beep!");
  }
  else {
  beepArray.push(inputArray[index]);
  }
  return beepArray;
});
}



