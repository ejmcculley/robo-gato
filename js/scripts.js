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
  let i = 0
  let inputArray = [];
  
  while
  (i <= input) {
  inputArray.push(i.toString());
  i ++
  }
 let beepArray = [];
 inputArray.forEach(function(element, index) {
  if (element.includes("1")) {
  	beepArray.push("Beep!");
  } else if  (element.includes("2")) {
    beepArray.push("Boop");
  } else if  (element.includes("3")) {
    beepArray.push("Won't you be my neighbor?");
  } else {
    beepArray.push(index);
  }
  })
	return beepArray;
}

console.log(beepBoop(20));

// $(document).ready(function() {
//   $("button#gato-submit").submit(function(event) {
//     event.preventDefault();
//     let gatoFood = $("input#number-food").val();
//     let pellets = beepBoop(gatoFood);
//     $(".gato-answer").text(pellets);
//   }
// });


