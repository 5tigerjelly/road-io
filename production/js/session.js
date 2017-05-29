'use strict';
var session = (function(){
  var idToken = "";
  var email = "";
  var prefUserName = "";
  var identityID = "";
  var sub = "";
  var type = undefined;
  var cognitoUser = undefined;
  var phone = "";
  var local = "";
  var businessName = "";
  var poolData = {
      UserPoolId : 'us-west-2_dEcrjTcVl',
      ClientId : '2kkhe3k563aocuioe4sklhokg4'
  };
  var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
  function checkSession(callback){
    cognitoUser = userPool.getCurrentUser();
    if (cognitoUser != null) {
      cognitoUser.getSession(function(err, session) {
        if (err) {
            alert(err);
            return;
        }
        idToken = session.idToken.jwtToken;
        email = cognitoUser.username;
        cognitoUser.getUserAttributes(function(err, result) {
          if (err) {
              alert(err);
              return;
          }
          prefUserName = result[4].getValue();
          sub = result[0].getValue();
          type = result[1].getValue() == 'driver' ? DRIVER : CAR_COMPANY;
          phone = result[3].getValue();
          local = result[5].getValue();
          if (type == CAR_COMPANY) {
              businessName = result[4].getValue();
          }
          $("#companyName").text(businessName);
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
              identityID = AWS.config.credentials.identityId;
             $("#userProfileLink").html(prefUserName + "'s profile");
             $('#signout').click(function(){
               logOut();
               window.location.replace("login.php");
             });
             $('#settings').click(function(){
               if(type == DRIVER){
                 window.location.replace("account_driver.php");
               }
               else{
                 window.location.replace("account_cc.php");
               }
             });
             $('.dash').click(function(){
               if(type == DRIVER){
                 window.location.replace("dashboard.php");
               }
               else{
                 window.location.replace("customerDashboard.php");
               }
              });
              $('[data-toggle="tooltip"]').tooltip();    
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

  function logOut(){
    cognitoUser.signOut();
  }

  function getPhone() {
    return phone;
  }
  function getLocal() {
    return local;
  }

  function changePassword(oldPass, newPass, callback){
    cognitoUser.changePassword(oldPass, newPass, callback);
  }

  function deleteAccount(callback){
    cognitoUser.deleteUser(callback);
  }

  return {
    checkSession: checkSession,
    getToken: getToken,
    getUserID: getUserID,
    getType: getType,
    getEmail: getEmail,
    getUserName: getUserName,
    getIdentityID: getIdentityID,
    logOut: logOut,
    getPhone: getPhone,
    getLocal: getLocal,
    changePassword: changePassword,
    deleteAccount: deleteAccount
  }
})()
