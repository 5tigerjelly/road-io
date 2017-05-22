'use strict';

$(function() {
   session.checkSession(function(result) {
    if(!result.loggedIn){
      window.location.replace("login.html");
    }
    else {
     getDatasets();
    }
  });
});

function getDatasets() {
  var countryToDataset = {};
  $.ajax({
    url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/getDatasetCountry",
    type: "GET",
    headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
    success: function(result) { 

      countryToDataset = result;
      console.log(countryToDataset);

      AWS.config.update({accessKeyId: 'AKIAIYWRLAEZKKEYEWSQ', secretAccessKey: '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', region: 'us-west-2'});
      var s3 = new AWS.S3();
      var params = {
        Bucket: 'roadio-datasets',
        MaxKeys: 1000,
      };
      s3.listObjectsV2(params, function(err, data) {
        if (err) {
          console.log(err, err.stack); // an error occurred
        }
        else {
          // console.log(data);           // successful response
          var datasetObjects = data["Contents"];
          var counter = 1;
          datasetObjects.forEach(function(element) {
            var datasetName = element["Key"];
            var lastModified = element["LastModified"]
            
            var row = $("<tr></tr>");
            var tableID = $("<td></td>").text(counter);
            var zip = $("<td></td>").html(datasetName);

            var country = jQuery.grep(countryToDataset, function (x) { console.log('THE DATASET'); console.log(datasetName); console.log('END THE DATASET'); return x.datasetName == datasetName })[0].country;

            var countryOfOrigin = $("<td></td>").text(country);
            var dateCompiled = $("<td></td>").text(lastModified);
            var checkbox = $("<input class='checkbox_check' type='checkbox' name='added' value=" + datasetName + ">")
            var checkboxData = $("<td align='center'></td>").html(checkbox);
            row.append(tableID, zip, countryOfOrigin, dateCompiled, checkboxData);
            $('#AllDatasets').append(row);
            counter += 1;
          });

          $("#datasetsTable").DataTable();

          $('#datasetsTable').on('click', 'input[type="checkbox"]', function() {
            if ($('.checkbox_check').is(':checked')) {
              $('#cartInsert').removeClass('disabled');
            } else {
              $('#cartInsert').addClass('disabled');
            }
          });

          $('#cartInsert').click(function () {
            var cart = $('input:checkbox:checked').map(function() {
              return this.value;
            }).get();
 
            $.ajax({
              url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/cart",
              data: JSON.stringify({ user_id: session.getUserID(), cart: cart}),
              type: "POST",
              headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
              success: function(result) { console.log(result); }
            });
          });
        }    
      });
    }
  });
}
