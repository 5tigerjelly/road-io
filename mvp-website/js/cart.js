var idToken = "";
var email = "";
var prefUserName = "";
var identityID = "";
var sub = "";

// // Load the SDK for JavaScript
// $(document).ready(function() {
//     $('#dataTables-example').DataTable({
//         responsive: true
//     });
// });

$(function() {
   checkSession();
   //getDatasets();
   console.log('Hi');
   loadCurrentCart();
});

function checkSession(){
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
        prefUserName = result[4].getValue();
        sub = result[0].getValue();
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
            idenittyID = AWS.config.credentials.identityId;
        }
        });
      });
      $('#signout').click(function(){
        cognitoUser.signOut();
        window.location.replace("login.html");
      });
    });
  }
  else {
    window.location.replace("login.html");
  }
}

function getDatasets() {
  AWS.config.update({accessKeyId: 'AKIAIYWRLAEZKKEYEWSQ', secretAccessKey: 'qbfHk+CLU/yd9hCAPx5a/Nl+8/Ux789hy2WHxsK3', region: 'us-west-2'});
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
      console.log(datasetObjects);
      console.log(datasetObjects.length);
      var counter = 1;
      datasetObjects.forEach(function(element) {
        var datasetName = element["Key"];
        var lastModified = element["LastModified"]
        
        var row = $("<tr></tr>");
        var tableID = $("<td></td>").text(counter);
        var aTag = $("<a></a>").text(datasetName);
        aTag.attr("href", "https://s3-us-west-2.amazonaws.com/roadio-datasets/" + datasetName);
        var zip = $("<td></td>").html(aTag);

        var country = "";
        if (counter == 1) {
          country = "Austria";
        } else if (counter == 2) {
          country = "Belgium";
        } else if (counter == 3) {
          country = "China";
        } else if (counter == 4) {
          country = "Denmark";
        }

        var dateCompiled = $("<td></td>").text(lastModified);
        row.append(tableID, zip, dateCompiled);
        $('#myDatasets').append(row);
        counter += 1;


      });

      $("#dataTables-example").DataTable();
      //var datasetName = (data["Contents"]["0"]["Key"])
    }     
  });
}


function loadCurrentCart() {
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
        console.log(user_id);
        console.log('USER_ID: ' + user_id);
        prefUserName = result[4].getValue();
        sub = result[0].getValue();
        $("#userProfileLink").html(prefUserName + "'s profile");
        
        $.ajax({
          url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/cart",
          data: user_id,
          type: "GET",
          headers: {"Authorization": idToken, "Content-Type": "application/json"},
          success: function(result) { console.log(result); }
        });
      });
    });
  }
}
