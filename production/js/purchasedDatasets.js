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
                    $('<td>' + (i + 1) + '</td>').appendTo(row);
                    $('<td>' + historicalItems[i].datasetName + '</td>').appendTo(row);
                    $('<td>' + historicalItems[i].purchasedDate + '</td>').appendTo(row);
                }
                historicalItems.forEach(function(historicalItem) {
                    let row = $('<tr id="row-' + historicalItem.split('.')[0] + '"></tr>').appendTo(historicalTable);
                    $('<td>' + counter + '</td>').appendTo(row);
                    $('<td>' + historicalItem + '</td>').appendTo(row);
                });
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
