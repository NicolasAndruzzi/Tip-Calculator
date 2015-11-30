document.getElementById("submitButton").addEventListener("click", calculateTip);

function calculateTip(){
  var billTotal = document.getElementById("enterField").value.replace("$", "");
  var tipPercent = document.getElementById("tipAmount").value;
  var tip = billTotal * tipPercent;
  var display = document.getElementById("results");
  display.innerHTML = "You should tip: $" + tip.toFixed(2);
}
