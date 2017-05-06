$(document).ready(function() {
    $('#dataTables-example').DataTable({
        responsive: true
    });
});

var idToken = "";
var email = "";
var prefUserName = "";

$(function() {
   checkSession();
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
        prefUserName = result[4].getValue();
        $("#userProfileLink").html(prefUserName + "'s profile");
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

      $.ajax({
         url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/driver-payments?year=2017",
         type: "GET",
         headers: {"Authorization": idToken, "Content-Type": "application/json"},
         success: function(result) { populateChart(result.payments); }
      });

      
    });
  }
  else {
    window.location.replace("login.html");
 
  }
}

