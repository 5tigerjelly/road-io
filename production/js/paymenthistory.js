
// Load the SDK for JavaScript

$(function() {
  session.checkSession(function(result){
    driverRedirect(result, populateData);
  });
});

function start(){
  $.ajax({
    url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/driver-payments",
    type: "GET",
    headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
    success: function(result) { populatePaymentTable(result.payments); }
  });
}

function populatePaymentTable(data) {
  console.log(data);
  var counter = 1;
  var total_balance = 0
  data.forEach(function(element) {
    total_balance += element.amount
  });
  data.forEach(function(element) {
    var row = $("<tr></tr>");
    var tableID = $("<td></td>").text(counter);
    var d = new Date(element.timestamp);
    var timestamp = $("<td align='center'></td>").text(d.toLocaleDateString());
    description_info = element.vidName;
    if(description_info == null){
      description_info = "video " + counter
    }
    var description = $("<td align='center'></td>").text(description_info);
    var amount = $("<td align='center'></td>").text(element.amount.toFixed(2));
    
    var balance = $("<td align='center'></td>").text(total_balance.toFixed(2));
    total_balance -= element.amount;

    row.append(tableID, timestamp, description, amount, balance);
    $('#AllDatasets').prepend(row);
    counter += 1;
  });

  $("#datasetsTable").DataTable();
}
