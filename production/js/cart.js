'use strict';
let cart = (function(){

  var items = new Set();
  var prices = new Array();

  function refreshCart(callback) {
    $.ajax({
      url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/cart",
      data: session.getUserID(),
      type: "GET",
      headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
      success: function(result) {
        if (result.cart !== 'No such cart') {
          var cartKeys = Object.keys(result.cart);
          prices = cartKeys.map(function(key) {
              return result.cart[key];
          });
          items = new Set(cartKeys);
        }

        if (items.size > 0) {
          var circleText = $('<svg class="theSVG" width="27" height="27"><g class="point" transform="translate(13,13)"><circle></circle><text class="pointIndex" y="5"><tspan text-anchor="middle">' + items.size + '</tspan></text></g></svg>')
          $('#cart').parent().append(circleText);
          // console.log(items.size)
        }

        callback()
      }
    });
  }

  function getCart(){
    return items;
  }

  function getPrices(){
    return prices;
  }

  function addItems(itemsToAdd){
    $.ajax({
      url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/cart",
      data: JSON.stringify({ cart: itemsToAdd}),
      type: "POST",
      headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
      success: function(result) {
        var itemsToAddDataSet = Object.keys(itemsToAdd);
        itemsToAddDataSet.forEach(function(item){
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
        console.log(result);
        items.delete(item);
      }
    });
  }

  function processCart() {
    $.ajax({
      url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/cart/processcart",
      data: session.getUserID(),
      type: "GET",
      headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
      success: function(result) {
        console.log(result);
      }
    });
  }

  return {
    refreshCart : refreshCart,
    getCart : getCart,
    removeItem : removeItem,
    addItems : addItems,
    processCart : processCart,
    getPrices : getPrices
  }
})()
