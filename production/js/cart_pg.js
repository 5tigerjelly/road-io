$(function() {
   session.checkSession(function(result) {
     carCompanyRedirect(result, loadCurrentCart);
  });
});

function loadCurrentCart() {
  cart.refreshCart(function(){
    let cartTable = $('#cart-table');
    items = cart.getCart();
    if (items.size > 0) {
      console.log('HI');
      $('#checkout').removeClass('disabled');
      items.forEach(function(item){
        let row = $('<tr id="row-' + item.split('.')[0] + '"></tr>').appendTo(cartTable);
        $('<td>' + item + '</td>').appendTo(row);
        $('<td><i class="fa fa-minus-circle remove" id="remove-' + item.split('.')[0] + '">').appendTo(row);
      });

      $('.remove').click(function(){
        var id = $(this).attr('id').split('-')[1];
        var rowToRemove = $('#row-' + id);
        var item = rowToRemove.children(':first').html();
        console.log(item);
        rowToRemove.remove();
        cart.removeItem(item);
      });
    } else {
      $('#checkout').addClass('disabled');
    }
  });
}

$('#checkout').click(function() {
  window.location.replace("checkout.html")
});
