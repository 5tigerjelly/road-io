'use strict';

$(function() {
   session.checkSession(function(result) {
     carCompanyRedirect(result, getDatasets);
  });
});

function getDatasets() {
  $.ajax({
    url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/cart/processcart",
    type: "GET",
    headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
    success: function(result) { console.log(result) }
  });
}
