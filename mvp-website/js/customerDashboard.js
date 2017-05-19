var idToken = "";
var email = "";
var prefUserName = "";
var identityID = "";
var sub = "";

// Load the SDK for JavaScript


$(function() {
   checkSession();
   getDatasets();
});


function checkSession(){
  var poolData = {
      UserPoolId : 'us-west-2_dEcrjTcVl',
      ClientId : '2kkhe3k563aocuioe4sklhokg4'
  };
  var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
  var cognitoUser = userPool.getCurrentUser();
  if (cognitoUser != null) {
    console.log("got here");
    cognitoUser.getSession(function(err, session) {
      if (err) {
          alert(err);
          return;
      }
      console.log(cognitoUser);
      idToken = session.idToken.jwtToken;
      email = cognitoUser.usernmae;
      cognitoUser.getUserAttributes(function(err, result) {
        if (err) {
            alert(err);
            return;
        }
        console.log(result);
        var user_id = result[result.length-1].getValue();
        prefUserName = result[4].getValue();
        sub = result[0].getValue();
        console.log(sub);
        $("#userProfileLink").html(prefUserName + "'s profile");
AWS.config.update({
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-west-2:88b13c2b-9ce8-4370-8071-13f8cd379e01'
  }),
  region: 'us-west-2'
});
      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-west-2:88b13c2b-9ce8-4370-8071-13f8cd379e01',
        Logins: {
          'cognito-idp.us-west-2.amazonaws.com/us-west-2_dEcrjTcVl': session.getIdToken().getJwtToken()
        }
      });
    AWS.config.credentials.refresh((error) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Successfully logged!');
            idenittyID = AWS.config.credentials.identityId;
        }
        });
      });
      $('#signout').click(function(){
        cognitoUser.signOut();
        window.location.replace("login.html");
      });
      $.ajax({
         url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/driver-payments?type=total",
         type: "GET",
         headers: {"Authorization": idToken, "Content-Type": "application/json"},
         success: function(result) { $('#totalAmount').html("$" + result.totalAmount); }
      });

      $.ajax({
         url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/videos?request=totalHours",
         type: "GET",
         headers: {"Authorization": idToken, "Content-Type": "application/json"},
         success: function(result) { $('#totalHours').html(result.totalHours + " hours"); }
      });

      $.ajax({
         url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/videos?request=streak",
         type: "GET",
         headers: {"Authorization": idToken, "Content-Type": "application/json"},
         success: function(result) { $('#longestStreak').html(result.longestStreak + " days"); }
      });

 //   cognitoUser.signOut();
       
    });
  }
  else {
    window.location.replace("login.html");
 
  }
}

countryToDataset = {};
function getDatasets() {
  $.ajax({
    url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/getDatasetCountry",
    type: "GET",
    headers: {"Authorization": idToken, "Content-Type": "application/json"},
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
        }     
      });
    }
  });
}

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

  var poolData = {
      UserPoolId : 'us-west-2_dEcrjTcVl',
      ClientId : '2kkhe3k563aocuioe4sklhokg4'
  };
  
  var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
  var cognitoUser = userPool.getCurrentUser();
  if (cognitoUser != null) {
    cognitoUser.getSession(function(err, session) {
      if (err) {
          alert(err);
          return;
      } 
      idToken = session.idToken.jwtToken;
      email = cognitoUser.usernmae;
      cognitoUser.getUserAttributes(function(err, result) {
        if (err) {
            alert(err);
            return;
        }
        var user_id = result[0].getValue();
        console.log('USER_ID: ' + user_id);
        prefUserName = result[4].getValue();
        sub = result[0].getValue();
        $("#userProfileLink").html(prefUserName + "'s profile");
        
        $.ajax({
          url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/cart",
          data: JSON.stringify({ user_id: user_id, cart: cart}),
          type: "POST",
          headers: {"Authorization": idToken, "Content-Type": "application/json"},
          success: function(result) { console.log(result); }
        });
      });
    });
  }
});