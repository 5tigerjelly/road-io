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
        headers: {
            "Authorization": session.getToken(),
            "Content-Type": "application/json"
        },
        success: function(result) {
            console.log(session.getUserID());
            var historicalItems = result.history;
            // console.log(historicalItems)
            let historicalTable = $('#myDatasets');
            if (historicalItems.length > 0) {
                for (var i = 0; i < historicalItems.length; i++) {
                    let row = $('<tr id="row-' + historicalItems[i].datasetName.split('.')[0] + '"></tr>').appendTo(historicalTable);
                    
                    var tableID = $("<td></td>").text((i + 1));
                    
                    var aTag = $("<a></a>").text(historicalItems[i].datasetName);
                    aTag.attr("href", "https://s3-us-west-2.amazonaws.com/roadio-datasets/" + historicalItems[i].datasetName);
                    var newTag = $("<td></td>").html(aTag);
                    
                    var newPurchasedDate = $("<td></td>").text(historicalItems[i].purchasedDate);
                    
                    row.append(tableID, newTag, newPurchasedDate)
                }
            } else {
                $('#tableDiv').css('display', 'none');
                $('#displayNone').append("<h3>You haven't made any purchases!</h3>")
            }
        }
    });
}

cart.refreshCart(function() {
    console.log('DONE')
});
