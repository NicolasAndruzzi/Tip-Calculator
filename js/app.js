document.getElementById("submitButton").addEventListener("click", calculateTip);

function calculateTip(){
  var billTotal = document.getElementById("enterField").value;
  var tip = billTotal *.2;
  var display = document.getElementById("results");
  display.innerHTML = "ijyniy";
  // alert(tip);
}


// tell program to do something when user submits form √
// get the user input √
// do Math√
// return tip amount to browser (user ) (add results to the DOM)
