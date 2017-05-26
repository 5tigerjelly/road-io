'use strict';

$(function() {
  //  session.checkSession(function(result) {
  //    carCompanyRedirect(result, processOrder);
  // });
});

// function processOrder() {
//   var countryToDataset = {};
//   $.ajax({
//     url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/cart/processcart",
//     type: "GET",
//     headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
//     success: function(result) { console.log(result)}
//   });
// }

var total = 0.0;
$('.money').each(function() {
  var stringValue = this.innerHTML;
  var numberValue = parseFloat(stringValue.substring(1, stringValue.length));
  total += numberValue;
});
var totalAsFloat = Number(Math.round(total+'e2')+'e-2');
console.log(totalAsFloat);
document.getElementById("total").textContent="$" + totalAsFloat;
