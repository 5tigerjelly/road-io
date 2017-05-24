$(function() {
   session.checkSession(function(result) {
     carCompanyRedirect(result, getDatasets);
  });
});

function getDatasets() {
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
      var datasetObjects = data["Contents"];
      var counter = 1;
      datasetObjects.forEach(function(element) {
        var datasetName = element["Key"];
        
        var row = $("<tr></tr>");
        var tableID = $("<td></td>").text(counter);
        var aTag = $("<a></a>").text(datasetName);
        aTag.attr("href", "https://s3-us-west-2.amazonaws.com/roadio-datasets/" + datasetName);
        var zip = $("<td></td>").html(aTag);

        var checkbox = $("<input class='checkbox_check' type='checkbox' name='added' value=" + datasetName + ">")
        var checkboxData = $("<td align='center'></td>").html(checkbox);
        row.append(checkboxData, zip);
        $('#myDatasets').append(row);
        counter += 1;


      });

      $("#dataTables-example").DataTable();
    }     
  });
}

