'use strict';

var currentItems = new Set();

$(function() {
   session.checkSession(function(result) {
     console.log(session.getUserID());
     carCompanyRedirect(result, loadDatasets);
  });
});

function loadDatasets() {
    $.ajax({
      url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/getDatasetCountry",
      data: session.getUserID(),
      type: "GET",
      headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
      success: function(result) {
        populateTable(result)
      }
    });
}

function populateTable(result){
  var tbl = $('#AllDatasets');
  cart.refreshCart(function(){
  var items = cart.getCart();
  console.log(items);
  for (var i = 0; i < result.length; i++) {
    var resultRow = result[i];
    var row = $("<tr></tr>");
    var tableID = $("<td></td>").text(i + 1);
    var datasetName = $("<td></td>").text(resultRow.datasetName);
    var country = $("<td></td>").text(resultRow.country);
    var price = $("<td></td>").text(resultRow.price);
    var dateAdded = $("<td></td>").text(resultRow.dateAdded);
    var checkbox = $("<input class='checkbox_check' type='checkbox' name='added' value=" + resultRow.datasetName + ">")
    console.log(resultRow.datasetName);
    if(items.has(resultRow.datasetName)){
      checkbox = '<i class="glyphicon glyphicon-ok">';
    }
    var checkboxData = $("<td id=\"" + resultRow.datasetName.split('.')[0] + "-cb\" align='center'></td>").html(checkbox);
    row.append(tableID, datasetName, country, price, dateAdded, checkboxData);
    tbl.append(row);
  }
  $("#datasetsTable").DataTable();
  });
}

$('#datasetsTable').on('click', 'input[type="checkbox"]', function(data) {
  var dataValue = data.currentTarget.value;
  // add
  if(data.currentTarget.checked) {
    currentItems.add(dataValue);
  //remove
  } else {
    currentItems.delete("" + dataValue);
  }

  // #enabling
  if (currentItems.size > 0) {
    $('#cartInsert').removeClass('disabled');
  // #disabling
  } else {
    $('#cartInsert').addClass('disabled');
  }
  console.log(currentItems);
});


$('#cartInsert').click(function () {
  if($('#cartInsert').hasClass("disabled")){
    return;
  }
  var items = $('input:checkbox:checked').map(function() {
    console.log(this.value);
    return this.value;
  }).get();
  console.log(items);

  var associatedPrices = $('input:checkbox:checked').map(function() {
    console.log(this.parentElement.parentElement.childNodes[3].innerText)
    return this.parentElement.parentElement.childNodes[3].innerText;
  }).get();

  var associativeArray = {};
  var tempCart = Array.from(currentItems)
  tempCart.forEach((tempCartItem, i) => associativeArray[tempCartItem] = associatedPrices[i]);

  console.log(associativeArray)

  cart.addItems(associativeArray);  // associativeArray

  items.forEach(function(item){
    $('#' + item.split('.')[0] + '-cb').html('<i class="glyphicon glyphicon-ok">');
  });

  currentItems = new Set();
  $('#cartInsert').addClass('disabled');

  cart.refreshCart(function() {
    console.log('DONE')
  });
});

var check = $("#datasetsTable_filter:first-child");
console.log(check)
