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
    success: function(result) { console.log(result); }
  });
}
