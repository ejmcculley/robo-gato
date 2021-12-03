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
  if (element.includes("3")) {
  	beepArray.push("Won't you be my neighbor?");
  } else if  (element.includes("2")) {
    beepArray.push("Boop");
  } else if  (element.includes("1")) {
    beepArray.push("Beep!");
  } else {
    beepArray.push(index);
  }
  })
	return beepArray;
}

$(document).ready(function() {
  $("#gato-number").submit(function(event) {
    event.preventDefault();
    $("#result").show();
    let gatoFood = $("input#number").val();
    let pellets = beepBoop(gatoFood);
    $(".gato-answer").text(pellets);
    $("input#number").val("");
  })
});


