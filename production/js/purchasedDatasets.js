$(function() {
   session.checkSession(function(result) {
    //  console.log(session.getUserID());
     //carCompanyRedirect(result, loadHistory);
  });
});

function loadHistory() {
  cart.refreshHistory(function(){
    let historicalTable = $('#myDatasets');
    historicalItems = cart.getHistory();
    var counter = 1;
    if (historicalItems.size > 0) {
      console.log('HI');
      historicalItems.forEach(function(historicalItem){
        let row = $('<tr id="row-' + historicalItem.split('.')[0] + '"></tr>').appendTo(historicalTable);
        $('<td>' + counter + '</td>').appendTo(row);
        $('<td>' + historicalItem + '</td>').appendTo(row);

      });
    }
  });
}

console.log(session.getUserID());

$.ajax({
  url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/getDatasetHistory",
  data: session.getUserID(),
  type: "GET",
  headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
  success: function(result) {
    console.log(session.getUserID());
    console.log(result);
    // historicalItems = new Set(result.datasetHistory);
    // console.log(historicalItems);
    // callback()
  }
});
