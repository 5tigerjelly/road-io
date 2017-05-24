$(function() {
   session.checkSession(function(result) {
     carCompanyRedirect(result, loadCurrentCart);
  });
});

function loadCurrentCart() {        
  $.ajax({
    url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/cart",
    data: session.getUserID(),
    type: "GET",
    headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
    success: function(result) {
     let cartTable = $('#cart-table');
     console.log(result.cart);
     $.each(result.cart, function(i, item){
       let row = $('<tr id="row-' + i + '"></tr>').appendTo(cartTable);
       $('<td>' + item + '</td>').appendTo(row);
       $('<td><i class="fa fa-minus-circle remove" id="remove-' + i + '">').appendTo(row);

     });
     $('.remove').click(function(){
       var id = $(this).attr('id').split('-')[1];
       console.log(id);
       var rowToRemove = $('#row-' + id);
       var item = rowToRemove.children(':first').html();
       console.log(item);
       rowToRemove.remove();
       removeItem(item);
     });
    }
  });
}


function removeItem(item){
  $.ajax({
    url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/cart",
    data: JSON.stringify({ item: item}),
    type: "DELETE",
    headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
    success: function(result) { console.log(result)}
  });
}
