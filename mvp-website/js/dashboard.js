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
            idenittyID = AWS.config.credentials.identityId;
        }
        });
/*AWS.config.credentials.get(function(){

    var accessKeyId = AWS.config.credentials.accessKeyId;
    var secretAccessKey = AWS.config.credentials.secretAccessKey;
    var sessionToken = AWS.config.credentials.sessionToken;
    console.log(accessKeyId);
    console.log(secretAccessKey);

});*/

//        var s3 = new AWS.S3({
//  apiVersion: '2006-03-01',
//  params: {Bucket: 'driver-videos'}});
//  var prefix = encodeURIComponent('InfoCapstone2017.mp4');
//  s3.getObject({Bucket: 'driver-videos/us-west-2:8355b030-71cf-4a95-8ab2-d7a9ae9f5abe', Key: prefix}, function(err, data) { if(err) { console.log(err); } else { console.log(data);} });
//s3.listObjects({Delimiter: '/'}, function(err, data) {
//    if(err) { console.log(err); } else { console.log(data); } 
//});
      });
      $('#signout').click(function(){
        cognitoUser.signOut();
        window.location.replace("login.html");
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

 //   cognitoUser.signOut();
       
    });
  }
  else {
    window.location.replace("login.html");
 
  }
}

function populateChart(payments) {


var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

Morris.Line({
  element: 'morris-area-chart',
  data: [{
    m: '2017-01', // <-- valid timestamp strings
    a: payments["1"],
  }, {
    m: '2017-02',
    a: payments["2"],
  }, {
    m: '2017-03',
    a: payments["3"],
  }, {
    m: '2017-04',
    a: payments["4"],
  }, {
    m: '2017-05',
    a: payments["5"],
  }, {
    m: '2017-06',
    a: payments["6"],
  }, {
    m: '2017-07',
    a: payments["7"],
  }, {
    m: '2017-08',
    a: payments["8"],
  }, {
    m: '2017-09',
    a: payments["9"],
  }, {
    m: '2017-10',
    a: payments["10"],
  }, {
    m: '2017-11',
    a: payments["11"],
  }, {
    m: '2017-12',
    a: payments["12"],
  }, ],
  xkey: 'm',
  ykeys: ['a'],
  labels: ['2017'],
  xLabelFormat: function(x) {
    var month = months[x.getMonth()];
    return month;
  },
  yLabelFormat: function(y) {
    return "$" + y;
  },
  dateFormat: function(x) {
    var month = months[new Date(x).getMonth()];
    return month;
  },
});
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
}

