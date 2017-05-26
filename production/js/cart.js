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
        var cartKeys = Object.keys(result.cart);
        items = new Set(result.cart); 
        console.log('Current Cart' + items);
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
        items = new Set(result.datasetHistory); 
        console.log('Purchased Items: ' + items);
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
    removeItem : removeItem,
    addItems : addItems
  } 
})()
 
