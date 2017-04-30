var bullshit_random_videos = {
  "videos":[ 
    {
      "title" : "vid1.mp4",
      "url" : "https://www.youtube.com/embed/iMgYFucGKD0",
      "timestamp" : "12/12/12 12:12:12",
      "private": 0
    },
    {
      "title" : "vid2.mp4",
      "url" : "https://www.youtube.com/embed/MpZFVM800f8",
      "timestamp" : "12/12/12 12:12:12",
      "private": 0
    },
    {
      "title" : "vid3.mp4",
      "url" : "https://www.youtube.com/embed/L9r-aOQb3XM",
      "timestamp" : "12/12/12 12:12:12",
      "private": 0
    },
    { 
      "title" : "vid4.mp4",
      "url" : "https://www.youtube.com/embed/FmcFoOvb9R8",
      "timestamp" : "12/12/12 12:12:12",
      "private": 0
    }
  ]
}

var access = {
  0 : "public",
  1 : "private"
}

$(function(){

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
            loadVideoData();
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
  console.log(prefix);
  s3.putObject({Bucket: 'driver-videos/' + identityID, Key: prefix, Body: file}, function(err, data) { if(err) { console.log(err); } else { console.log(data);} });

 

}


function loadVideoData(){
   var vidContainer = $("#vid-container");
   vidContainer.html("");
   var noMoreVids = 0;
   var thisRow = document.createElement('div');
   thisRow.className = "row";
   if(bullshit_random_videos.videos.length == 0){
     thisRow.innerHTML = "<p>You currently have no videos to manage</p>";
   }
   else {
     $.each(bullshit_random_videos.videos, function(index, element) {
       if(index % 3 == 0 && index != 0) {
        vidContainer.append(thisRow);
        thisRow = document.createElement('div');
       }
       var thisCol = document.createElement('div');
       thisCol.className = "col-md-3";
       var content = "<p>Title: " + element["title"] + "</p><p>Date Uploaded: " + (new Date (element["timestamp"])).toString('dddd MMM yyyy') + "<p><button id=\"preview-" + index + "\" class=\"preview\">preview</button></p><p><button id=\"access-" + index +"\" class=\"access\">Make video " + access[(element["private"] + 1) % 2] + "</button></p>";
       thisCol.innerHTML = content;
       thisRow.append(thisCol);
     });
  }
  vidContainer.append(thisRow);

  $('.preview').click(function(){
    previewVideo(this.id);
    $('#previewVid').modal('show');
  });

  $('.access').click(function(){
    changeAccess(this.id);
  });
      
}

function previewVideo(vid){
  var index = parseInt(vid.match(/\d+/g));
  $("#previewFrame").attr("src", bullshit_random_videos.videos[index]["url"]  + "?autoplay=1&end=15");
  $(".modal-header").html(bullshit_random_videos.videos[index]["title"]);
} 

function changeAccess(vid){
  var index = parseInt(vid.match(/\d+/g));
  bullshit_random_videos.videos[index]["private"] = (bullshit_random_videos.videos[index]["private"] + 1) % 2;
  if(bullshit_random_videos.videos[index]["private"]) {
    alert(bullshit_random_videos.videos[index]["title"] + " no longer visible to taggers");
  }
  else{
    alert(bullshit_random_videos.videos[index]["title"] + " is now visible to taggers!");
  }
  loadVideoData();
} 
