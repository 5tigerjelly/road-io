'use strict';

$(function() {
    session.checkSession(function(result) {
        carCompanyRedirect(result, loadCheckout);
    });
});

function loadCheckout() {
    cart.refreshCart(function() {
        let checkoutTable = $('#orderCheckout');
        var checkoutItems = Array.from(cart.getCart());
        var prices = cart.getPrices();
        if (checkoutItems.length > 0) {
            $('#checkout').removeClass('disabled');
            for (var i = 0; i < checkoutItems.length; i++) {
                let row = $('<tr id="row-' + checkoutItems[i].split('.')[0] + '"></tr>').appendTo(checkoutTable);
                $('<td>' + checkoutItems[i] + '</td>').appendTo(row);
                $('<td class="money">$' + prices[i] + '</td>').appendTo(row);
            }
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
    var totalAsFloat = Number(Math.round(total + 'e2') + 'e-2');
    document.getElementById("total").textContent = "$" + totalAsFloat;
}


var handler = StripeCheckout.configure({
    key: 'pk_test_MB7viwRhuwo17E1bvJE2xRlv',
    image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
    locale: 'auto',
    token: function(token) {
        console.log(token);
        // Call processOrder before page is closed
        var checkoutCart = Array.from(cart.getCart());
        cart.postCheckoutCart(checkoutCart);
        cart.processCart();
        window.location.replace("confirmed.php");
    }
});

document.getElementById('customButton').addEventListener('click', function(e) {
    var amount = document.getElementById("total").textContent;
    amount = amount.substring(1, amount.length);
    amount = String(amount).replace(/\./g, '')
    handler.open({
        name: 'Road.io',
        description: 'Payment Confirmation',
        zipCode: true,
        amount: amount,
    });
    e.preventDefault();
});

window.addEventListener('popstate', function() {
    handler.close();
});
