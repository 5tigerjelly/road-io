$(function() {
    session.checkSession(function(result) {
        carCompanyRedirect(result, loadOrders);
    });
});

function loadOrders() {
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

            let historicalTable = $('#myOrders');
            for (var i = 0; i < historicalItems.length; i++) {
                let row = $('<tr id="row-' + historicalItems[i].datasetName.split('.')[0] + '"></tr>').appendTo(historicalTable);
                
                var checkbox = $("<input class='checkbox_check' type='checkbox' name='added' value=" + historicalItems[i].datasetName + ">")
                var checkboxData = $("<td id=\"" + historicalItems[i].datasetName.split('.')[0] + "-cb\" align='center'></td>").html(checkbox);

                var aTag = $("<a></a>").text(historicalItems[i].datasetName);
                aTag.attr("href", "https://s3-us-west-2.amazonaws.com/roadio-datasets/" + historicalItems[i].datasetName);
                var newTag = $("<td></td>").html(aTag);
                
                row.append(checkboxData, newTag)
            }
        }
    });
}

$('#confirmedButton').click(function() {
    window.location.replace("customerDashboard.php");
});