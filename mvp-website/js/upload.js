'use strict';
var idToken = "";
var email = "";
var prefUserName = "";
var identityID = "";
var sub = "";

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
        console.log(result);
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
            identityID = AWS.config.credentials.identityId;
            start();
        }
        });
AWS.config.credentials.get(function(){

    var accessKeyId = AWS.config.credentials.accessKeyId;
    var secretAccessKey = AWS.config.credentials.secretAccessKey;
    var sessionToken = AWS.config.credentials.sessionToken;
    console.log(accessKeyId);
    console.log(secretAccessKey);

});
});
});
      
  }
  else {
    window.location.replace("login.html");
 
  }
}

function upload(file) {
        var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {Bucket: 'driver-videos'}});
    
  var filename = file.name;
  var prefix = encodeURIComponent(filename);
  console.log(identityID);
  s3.putObject({Bucket: 'driver-videos/' + identityID, Key: prefix, Body: file}, function(err, data) { if(err) { console.log(err); } else { console.log(data);} });

 

}

function start() {

    // UPLOAD CLASS DEFINITION
    // ======================

    //var dropZone = document.getElementById('drop-zone');
    var uploadForm = document.getElementById('js-upload-form');

    var startUpload = function(files) {
        console.log(files);
        upload(files[0]);
    }

    uploadForm.addEventListener('submit', function(e) {
        var uploadFiles = document.getElementById('js-upload-files').files;
        e.preventDefault()

        startUpload(uploadFiles)
    })

    /*dropZone.ondrop = function(e) {
        e.preventDefault();
        this.className = 'upload-drop-zone';

        startUpload(e.dataTransfer.files)
    }

    dropZone.ondragover = function() {
        this.className = 'upload-drop-zone drop';
        return false;
    }

    dropZone.ondragleave = function() {
        this.className = 'upload-drop-zone';
        return false;
    }*/

};
