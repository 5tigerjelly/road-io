'use strict';

var CART = new Set();

$(function() {
   session.checkSession(function(result) {
     carCompanyRedirect(result, getDatasets);
  });
});

function getDatasets() {
  cart.refreshCart(function(){
    var countryToDataset = {};
    $.ajax({
      url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/getDatasetCountry",
      type: "GET",
      headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
      success: function(result) {
        countryToDataset = result;
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
            var items = cart.getCart();
            var datasetObjects = data["Contents"];
            var counter = 1;
            var tbl = $('#AllDatasets');
            datasetObjects.forEach(function(element) {
              var datasetName = element["Key"];
              var lastModified = element["LastModified"]
              var row = $("<tr></tr>");
              var tableID = $("<td></td>").text(counter);
              var zip = $("<td></td>").html(datasetName);
              var country = jQuery.grep(countryToDataset, function (x) { return x.datasetName == datasetName })[0].country;
              var countryOfOrigin = $("<td></td>").text(country);
              var dateCompiled = $("<td></td>").text(lastModified);
              var checkbox = $("<input class='checkbox_check' type='checkbox' name='added' value=" + datasetName + ">")
              if(items.has(datasetName)){
                checkbox = '<i class="glyphicon glyphicon-ok">';
              }
              var checkboxData = $("<td id=\"" + datasetName.split('.')[0] + "-cb\" align='center'></td>").html(checkbox);
              row.append(tableID, zip, countryOfOrigin, dateCompiled, checkboxData);
              tbl.append(row);
              counter += 1;
            });

            $("#datasetsTable").DataTable();

            $('#datasetsTable').on('click', 'input[type="checkbox"]', function(data) {
              var dataValue = data.currentTarget.value;
              // add
              if(data.currentTarget.checked){
                CART.add(dataValue);
              //r emove
              }else{
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

              var associatedCountries = $('input:checkbox:checked').map(function() {
                console.log(this.parentElement.parentElement.childNodes[2].innerText)
                return this.parentElement.parentElement.childNodes[2].innerText;
              }).get();
              console.log(associatedCountries);

              var associativeArray = new Object();
              for(var i=0;i<3;i++){
                associativeArray[items[i]] = associatedCountries[i];
              }
              // if (associativeArray.hasOwnProperty('undefined')) {
              //   delete associativeArray["undefined"];
              // }
              console.log(associativeArray);
              cart.addItems(Array.from(CART));
              items.forEach(function(item){
                $('#' + item.split('.')[0] + '-cb').html('<i class="glyphicon glyphicon-ok">');
              });

            });
          }
        });
      }
    });
  });
}
