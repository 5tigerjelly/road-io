//https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-with-identity-providers.html

window.onload = function() {
  document.getElementById("submit_login").onclick = function() {login()};
};

function test(){
  console.log("working");
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
          var decoded = jwt_decode(result.getAccessToken().getJwtToken());
          console.log(decoded);
          console.log('access token + ' + result.getAccessToken().getJwtToken());

          // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          //     IdentityPoolId : '...', // your identity pool id here
          //     Logins : {
          //         // Change the key below according to the specific region your user pool is in.
          //         'cognito-idp.us-west-2.amazonaws.com/us-west-2_dEcrjTcVl' : result.getIdToken().getJwtToken()
          //     }
          // });

          // Instantiate aws sdk service objects now that the credentials have been updated.
          // example: var s3 = new AWS.S3();

      },

      onFailure: function(err) {
          alert(err);
      },

  });
};
