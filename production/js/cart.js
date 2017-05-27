'use strict';
var cart = (function(){
var items = new Set();
var historicalItems = new Set();

  function refreshCart(callback) {
    $.ajax({
      url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/cart",
      data: session.getUserID(),
      type: "GET",
      headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
      success: function(result) {
        console.log('RESULT');
        console.log();
        console.log('END RESULT');
        if (result.cart !== 'No such cart') {
          var cartKeys = Object.keys(result.cart);
          items = new Set(result.cart);
        }

        if (items.size > 0) {
          var circleText = $('<svg class="theSVG" width="27" height="27"><g class="point" transform="translate(13,13)"><circle></circle><text class="pointIndex" y="5"><tspan text-anchor="middle">' + items.size + '</tspan></text></g></svg>')
          $('#cart').parent().append(circleText);
          console.log(items.size)
        }

        callback()
      }
    });
  }

  function getCart(){
    return items;
  }

  function addItems(itemsToAdd){
    $.ajax({
      url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/cart",
      data: JSON.stringify({ cart: itemsToAdd}),
      type: "POST",
      headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
      success: function(result) {
        console.log(result);
        itemsToAdd.forEach(function(item){
          items.add(item);
        });
      }
    });
  }

  function refreshHistory(callback) {
    $.ajax({
      url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/getDatasetHistory",
      data: session.getUserID(),
      type: "GET",
      headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
      success: function(result) {
        historicalItems = new Set(result.datasetHistory);
        console.log('Purchased Items: ' + historicalItems);
        callback()
      }
    });
  }

  function getHistory(){
    return historicalItems;
  }


  function removeItem(item){
    $.ajax({
      url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/cart",
      data: JSON.stringify({ item: item}),
      type: "DELETE",
      headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
      success: function(result) {
        items.delete(item);
      }
    });
  }

  return {
    refreshCart : refreshCart,
    getCart : getCart,
    refreshHistory: refreshHistory,
    getHistory: getHistory,
    removeItem : removeItem,
    addItems : addItems
  }
})()
