'use strict';
var session = (function(){
  var idToken = "";
  var email = "";
  var prefUserName = "";
  var identityID = "";
  var sub = "";
  var type = undefined;
  var poolData = {
      UserPoolId : 'us-west-2_dEcrjTcVl',
      ClientId : '2kkhe3k563aocuioe4sklhokg4'
  };
  var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
  function checkSession(callback){
    var cognitoUser = userPool.getCurrentUser();
    console.log(cognitoUser);
    if (cognitoUser != null) {
      cognitoUser.getSession(function(err, session) {
        if (err) {
            alert(err);
            return;
        }
        //console.log(cognitoUser);
        idToken = session.idToken.jwtToken;
        email = cognitoUser.usernmae;
        cognitoUser.getUserAttributes(function(err, result) {
          if (err) {
              alert(err);
              return;
          }
          console.log(result);
          prefUserName = result[4].getValue();
          sub = result[0].getValue();
          type = result[1].getValue() == 'driver' ? DRIVER : CAR_COMPANY; 
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
            }
            else {
              console.log('Successfully logged!');
              identityID = AWS.config.credentials.identityId;
             $("#userProfileLink").html(prefUserName + "'s profile");
             $('#signout').click(function(){
               cognitoUser.signOut();
               window.location.replace("login.html");
             }); 
              callback({loggedIn: true});
             }
          });
        });
      });
    }
    else {
     console.log("not logged in");
     callback({loggedIn: false}); 
    }
  }
  function getToken() {
    return idToken;
  }
  function getUserID() {
    return sub;
  }
  function getType() {
    return type;
  }
  function getEmail() {
    return email;
  }
  function getUserName() {
    return prefUserName;
  }
  function getIdentityID() {
    return identityID;
  }
  
  return {
    checkSession: checkSession,
    getToken: getToken,
    getUserID: getUserID,
    getType: getType,
    getEmail: getEmail,
    getUserName: getUserName,
    getIdentityID: getIdentityID
  }
})()
