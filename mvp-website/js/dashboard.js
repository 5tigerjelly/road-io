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
      
    });
  }
  else {
    window.location.replace("login.html");
 
  }


}
