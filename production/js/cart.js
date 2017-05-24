'use strict';
var cart = (function(){
var items = new Set();
 

  function refreshCart(callback) {        
    $.ajax({
      url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/cart",
      data: session.getUserID(),
      type: "GET",
      headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
      success: function(result) {
        items = new Set(result.cart); 
        console.log(items);
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
        itemsToAdd.forEach(function(item){
          items.add(item);
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
 
