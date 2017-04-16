window.onload = function() {
  document.getElementById("submit_signup").onclick = function() {signup()};
};
function test(){
  var country = document.getElementById("country").value;
  console.log(country);
}
function signup(){
    // When using loose Javascript files:
    var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

    var poolData = {
        UserPoolId : 'us-west-2_MYShzuD5Z', // Your user pool id here
        ClientId : '188m6mqmv2fo4mugieb8snnidj' // Your client id here
    };
    var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);

    var attributeList = [];

    var email = document.getElementById("email").value;
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var country = document.getElementById("country").value;


    var dataEmail = {
        Name : 'email',
        Value : email
    };

    var dataUserName = {
        Name : 'preferred_username',
        Value : userName
    };

    var dataPhoneNumber = {
        Name : 'custom:phoneNumber',
        Value : phone
    };

    var dataCountry = {
        Name : 'locale',
        Value : country
    };
    var attributeEmail = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail);
    var attributeUserName = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataUserName);
    var attributePhoneNumber = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataPhoneNumber);
    var attributeCountry = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataCountry);


    attributeList.push(attributeEmail);
    attributeList.push(attributeUserName);
    attributeList.push(attributePhoneNumber);
    attributeList.push(attributeCountry);

    userPool.signUp(email, password, attributeList, null, function(err, result){
        if (err) {
            alert(err);
            return;
        }
        cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
    });
}
