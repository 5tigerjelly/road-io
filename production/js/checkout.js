'use strict';

$(function() {
  session.checkSession(function(result) {
     carCompanyRedirect(result, loadCheckout);
  });

});

function loadCheckout() {
  cart.refreshCart(function(){
    let checkoutTable = $('#orderCheckout');
    var checkoutItems = cart.getCart();
    if (checkoutItems.size > 0) {
      $('#checkout').removeClass('disabled');
      checkoutItems.forEach(function(checkoutItem){
        let row = $('<tr id="row-' + checkoutItem.split('.')[0] + '"></tr>').appendTo(checkoutTable);
        $('<td>' + checkoutItem + '</td>').appendTo(row);
        $('<td class="money">' + '$300.99' + '</td>').appendTo(row);

      });
    }
    calculateGrandTotal();
  });
}

// Call this after entire table loads
function calculateGrandTotal() {
  var total = 0.0;
  $('.money').each(function() {
    var stringValue = this.innerHTML;
    var numberValue = parseFloat(stringValue.substring(1, stringValue.length));
    total += numberValue;
  });
  var totalAsFloat = Number(Math.round(total+'e2')+'e-2');
  document.getElementById("total").textContent="$" + totalAsFloat;
}


var handler = StripeCheckout.configure({
  key: 'pk_test_MB7viwRhuwo17E1bvJE2xRlv',
  image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
  locale: 'auto',
  token: function(token) {
    console.log(token);
    // Call processOrder before page is closed
    cart.processCart();
    window.location.replace("confirmed.html");
    // You can access the token ID with `token.id`.
    // Get the token ID to your server-side code for use.
  }
});

document.getElementById('customButton').addEventListener('click', function(e) {
  var amount = document.getElementById("total").textContent;
  amount = amount.substring(1, amount.length);
  amount = String(amount).replace(/\./g,'')
  console.log('AMOUNT: ' + amount)
  // Open Checkout with further options:
  handler.open({
    name: 'Road.io',
    description: 'Payment Confirmation',
    zipCode: true,
    amount: amount,
  });
  e.preventDefault();
});

// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
  handler.close();
});
