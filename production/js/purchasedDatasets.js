$(function() {
   session.checkSession(function(result) {
     carCompanyRedirect(result, loadHistory);
  });
});

function loadHistory() {
$.ajax({
  url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/getdatasethistory",
  data: session.getUserID(),
  type: "GET",
  headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
  success: function(result) {
    console.log(session.getUserID());
    console.log(result);
    var historicalItems = result.history;
    let historicalTable = $('#myDatasets');
    var counter = 1;
    if (historicalItems.size > 0) {
      console.log('HI');
      historicalItems.forEach(function(historicalItem){
        let row = $('<tr id="row-' + historicalItem.split('.')[0] + '"></tr>').appendTo(historicalTable);
        $('<td>' + counter + '</td>').appendTo(row);
        $('<td>' + historicalItem + '</td>').appendTo(row);
      });
    } else {
      $('#tableDiv').css('display','none');
      $('#displayNone').append("<h3>You haven't made any purchases!</h3>")
    }
  }
});


}

console.log(session.getUserID());
