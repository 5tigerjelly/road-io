'use strict';

var CART = new Set();

$(function() {
   session.checkSession(function(result) {
     console.log(session.getUserID());
     carCompanyRedirect(result, loadDatasets);
  });
});

function loadDatasets() {
  var tbl = $('#AllDatasets');
  cart.refreshDatasets(function(result){
    let cartTable = $('#cart-table');
    var items = cart.getCart();
    for (var i = 0; i < result.length; i++) {
      var resultRow = result[i];
      var row = $("<tr></tr>");
      var tableID = $("<td></td>").text(i + 1);
      var datasetName = $("<td></td>").text(resultRow.datasetName);
      var country = $("<td></td>").text(resultRow.country);
      var price = $("<td></td>").text(resultRow.price);
      var dateAdded = $("<td></td>").text(resultRow.dateAdded);
      var checkbox = $("<input class='checkbox_check' type='checkbox' name='added' value=" + resultRow.datasetName + ">")
      if(items.has(datasetName)){
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
    CART.add(dataValue);
  //remove
  } else {
    CART.delete("" + dataValue);
  }

  // #enabling
  if (CART.size > 0) {
    $('#cartInsert').removeClass('disabled');
  // #disabling
  } else {
    $('#cartInsert').addClass('disabled');
  }
  console.log(CART);
});


$('#cartInsert').click(function () {
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
  var tempCart = Array.from(CART)
  tempCart.forEach((tempCartItem, i) => associativeArray[tempCartItem] = associatedPrices[i]);

  console.log(associativeArray)

  // for (var i = 0; i < tempCart.length; i++) {
  //   console.log(tempCart[i]);
  //   associativeArray["" + tempCart[i]] = "US";
  // }

  cart.addItems(associativeArray);  // associativeArray

  items.forEach(function(item){
    $('#' + item.split('.')[0] + '-cb').html('<i class="glyphicon glyphicon-ok">');
  });

  cart.refreshCart(function() {
    console.log('DONE')
  });
});
