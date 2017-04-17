window.onload = function() {
  document.getElementById("submit_signup").onclick = function() {login()};
};

function login(){
  var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

  var poolData = {
      UserPoolId : 'us-west-2_dEcrjTcVl', // Your user pool id here
      ClientId : '2kkhe3k563aocuioe4sklhokg4' // Your client id here
  };

  var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);

  var userData = {
      Username : 'username',
      Pool : userPool
  };

  var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
  cognitoUser.confirmRegistration('123456', true, function(err, result) {
      if (err) {
          alert(err);
          return;
      }
      console.log('call result: ' + result);
  });

};
