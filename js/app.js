document.getElementById("submitButton").addEventListener("click", calculateTip);

function calculateTip(){
  var billTotal = document.getElementById("enterField").value.replace("$", "");
  var tip = billTotal *.2;
  var display = document.getElementById("results");
  display.innerHTML = "You should tip: $" + tip.toFixed(2);
}
