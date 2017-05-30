'use strict';
let cart = (function() {

    var items = new Set();
    var prices = new Array();
    var checkoutCart = new Array();

    function convertCartFormat(cart) {
        var cartKeys = Object.keys(cart);
        prices = cartKeys.map(function(key) {
            return cart[key];
        });
        var ret_items = new Set(cartKeys);
        return ret_items;
    }

    function refreshCart(callback) {
        $.ajax({
            url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/cart",
            data: session.getUserID(),
            type: "GET",
            headers: {
                "Authorization": session.getToken(),
                "Content-Type": "application/json"
            },
            success: function(result) {
                if (result.cart !== 'No such cart') {
                    items = convertCartFormat(result.cart);
                }
                $("#cartCountText").text(items.size);
                callback();
            }
        });
    }

    function postCheckoutCart(cart) {
        checkoutCart = cart;
        console.log(checkoutCart);
    }

    function getCheckedoutCart() {
        return checkoutCart;
    }

    function getCart() {
        return items;
    }

    function getPrices() {
        return prices;
    }

    function addItems(itemsToAdd) {
        $.ajax({
            url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/cart",
            data: JSON.stringify({
                cart: itemsToAdd
            }),
            type: "POST",
            headers: {
                "Authorization": session.getToken(),
                "Content-Type": "application/json"
            },
            success: function(result) {
                var itemsToAddDataSet = Object.keys(itemsToAdd);
                itemsToAddDataSet.forEach(function(item) {
                    items.add(item);
                    refreshCart(function() {
                        console.log('DONE')
                    });
                });
            }
        });
    }

    function removeItem(item) {
        $.ajax({
            url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/cart",
            data: JSON.stringify({
                item: item
            }),
            type: "DELETE",
            headers: {
                "Authorization": session.getToken(),
                "Content-Type": "application/json"
            },
            success: function(result) {
                items.delete(item);
                refreshCart(function() {
                    console.log('DONE')
                });
            }
        });
    }

    function processCart() {
        $.ajax({
            url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/cart/processcart",
            data: session.getUserID(),
            type: "GET",
            headers: {
                "Authorization": session.getToken(),
                "Content-Type": "application/json"
            },
            success: function(result) {}
        });
    }

    return {
        refreshCart: refreshCart,
        getCart: getCart,
        removeItem: removeItem,
        addItems: addItems,
        processCart: processCart,
        postCheckoutCart: postCheckoutCart,
        getCheckedoutCart: getCheckedoutCart,
        getPrices: getPrices
    }
})()
