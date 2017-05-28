//https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-with-identity-providers.html

window.onload = function() {
  session.checkSession(function(result){
    if(result.loggedIn){
      if(session.getType() == "driver"){
        window.location.replace("dashboard.php");
      }
      else{
        window.location.replace("customerDashboard.php");
      }
    }
    else{
      $("#submit_login").click(function() {
        login()
      });
    }
 });
};

function test(){
  console.log(document.getElementById("email").value);
};

function login(){

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var authenticationData = {
      Username : email,
      Password : password,
  };
  var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
  var poolData = {
      UserPoolId : 'us-west-2_dEcrjTcVl',
      ClientId : '2kkhe3k563aocuioe4sklhokg4'
  };
  var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
  var userData = {
      Username : email,
      Pool : userPool
  };
  var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
  cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        cognitoUser.getUserAttributes(function(err,attr) {
            console.log(result);

          if (attr[1].getValue() == 'driver') {
            window.location.replace("dashboard.php")
            var decoded = jwt_decode(result.getAccessToken().getJwtToken());
            console.log(decoded);
            console.log('access token + ' + result.getAccessToken().getJwtToken());
          } else {
            window.location.replace("customerDashboard.php")
          }
      },

      onFailure: function(err) {
          alert(err);
      }

    });
  };
}
