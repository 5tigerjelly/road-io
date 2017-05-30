$(function() {
    session.checkSession(function(result) {
        carCompanyRedirect(result, loadCurrentCart);
    });
});

function loadCurrentCart() {
    cart.refreshCart(function() {
        let cartTable = $('#cart-table');
        items = Array.from(cart.getCart());
        prices = cart.getPrices();
        console.log(items)
        if (items.length > 0) {
            $('#checkout').removeClass('disabled');
            for (var i = 0; i < items.length; i++) {
                console.log(items[i])
                let row = $('<tr id="row-' + items[i].split('.')[0] + '"></tr>').appendTo(cartTable);
                $('<td>' + items[i] + '</td>').appendTo(row);
                $('<td>' + prices[i] + '</td>').appendTo(row);
                $('<td>' + '2017-05-31' + '</td>').appendTo(row);
                $('<td><i class="fa fa-minus-circle remove" id="remove-' + items[i].split('.')[0] + '">').appendTo(row);
            };

            $('.remove').click(function() {
                var id = $(this).attr('id').split('-')[1];
                var rowToRemove = $('#row-' + id);
                var item = rowToRemove.children(':first').html();
                rowToRemove.remove();
                cart.removeItem(item);
                cart.refreshCart(function() {

                });
            });
        } else {
            $('#tableDiv').css('display', 'none');
            $('#displayNone').append("<h3>You don't have anything in your cart!</h3>")
            $('#checkout').css('display', 'none');
        }
    });
}

$('#checkout').click(function() {
    window.location.replace("checkout.php")
});
