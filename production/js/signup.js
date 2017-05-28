//https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-with-identity-providers.html
'use strict';

$(function() {
	$('nav').load('nav.html');
	session.checkSession(function(result) {
		if (result.loggedIn) {
			if (session.getType() == "driver") {
				window.location.replace("dashboard.html");
			} else {
				window.location.replace("customerDashboard.html");
			}
		} else {
			document.getElementById("submit_signup").onclick = function() {
				signup.signup()
			};
			document.getElementById("check_corporate").onchange = function() {
				signup.showhidden()
			};
		}
	});
});



var signup = (function() {
	var isEntity = false;

	function showhidden() {
		var check_box = document.getElementById("check_corporate").checked;
		var lower_box = document.getElementById("corporate_account")
		if (check_box) {
			lower_box.style.display = 'block';
			isEntity = true;
		} else {
			lower_box.style.display = 'none';
			isEntity = false;
		}
	};

	function validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	function validate() {
		var email = $("#email").val();
		if (validateEmail(email)) {
			$("#email_help_text").text("");
			$("#email_form_group").removeClass("has-error");
		} else {
			$("#email_help_text").text("Not valid email.");
      $("#email_form_group").addClass("has-error");
		}
		return false;
	}

  function validatePassword() {
    var password = $("#password").val();
    if (password.length >= 8) {
      $("#password_help_text").text("");
      $("#password_form_group").removeClass("has-error");
    } else {
      $("#password_help_text").text("Password must be at least 8 characters");
      $("#password_form_group").addClass("has-error");
    }
    return false;
  }

$("#email").keyup(validate);
$("#password").keyup(validatePassword);

	function checkPassword() {
		var password = document.getElementById("password").value;
	}

	function signup() {
		// When using loose Javascript files:
		var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

		var poolData = {
			UserPoolId: 'us-west-2_dEcrjTcVl',
			ClientId: '2kkhe3k563aocuioe4sklhokg4'
		};
		var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);

		var attributeList = [];

		var email = document.getElementById("email").value;
		var userName = document.getElementById("userName").value;
		var password = document.getElementById("password").value;
		var phone = document.getElementById("phone").value;
		var country = document.getElementById("country").value;


		var dataEmail = {
			Name: 'email',
			Value: email
		};

		var dataUserName = {
			Name: 'preferred_username',
			Value: userName
		};

		var dataPhoneNumber = {
			Name: 'custom:phoneNumber',
			Value: phone
		};

		var dataCountry = {
			Name: 'locale',
			Value: country
		};
		var dataCustomerType;

		// ADDITIONL INFORMATION ONLY FOR COMPANIES
		if (isEntity) {

			var UBIcode = document.getElementById("ubi").value;
			var businessName = document.getElementById("businessName").value;
			var naicsCode = document.getElementById("naicsCode").value;

			var dataUbi = {
				Name: 'custom:UBI',
				Value: UBIcode
			};
			var dataBusinessName = {
				Name: 'custom:businessName',
				Value: businessName
			};
			var dataNaicsCode = {
				Name: 'custom:naicsCode',
				Value: naicsCode
			};
			dataCustomerType = {
				Name: 'custom:customerType',
				Value: 'entity'
			};

			var attributeUbi = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataUbi);
			var attributeBusinessName = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataBusinessName);
			var attributeNaicsCode = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataNaicsCode);

			attributeList.push(attributeUbi);
			attributeList.push(attributeBusinessName);
			attributeList.push(attributeNaicsCode);

		} else {
			dataCustomerType = {
				Name: 'custom:customerType',
				Value: 'driver'
			};
		}

		var attributeEmail = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail);
		var attributeUserName = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataUserName);
		var attributePhoneNumber = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataPhoneNumber);
		var attributeCountry = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataCountry);
		var attributeCustomerType = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataCustomerType);


		attributeList.push(attributeEmail);
		attributeList.push(attributeUserName);
		attributeList.push(attributePhoneNumber);
		attributeList.push(attributeCountry);
		attributeList.push(attributeCustomerType);
		userPool.signUp(email, password, attributeList, null, function(err, result) {
			if (err) {
				alert(err);
				return;
			} else {

				var authenticationData = {
					Username: email,
					Password: password,
				};
				var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
				var poolData = {
					UserPoolId: 'us-west-2_dEcrjTcVl',
					ClientId: '2kkhe3k563aocuioe4sklhokg4'
				};
				var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
				var userData = {
					Username: email,
					Pool: userPool
				};
				var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
				cognitoUser.authenticateUser(authenticationDetails, {
					onSuccess: function(result) {
						cognitoUser.getUserAttributes(function(err, attr) {
							console.log(result);
							AWS.config.update({
								credentials: new AWS.CognitoIdentityCredentials({
									IdentityPoolId: 'us-west-2:88b13c2b-9ce8-4370-8071-13f8cd379e01'
								}),
								region: 'us-west-2'
							});
							AWS.config.credentials.clearCachedId();
							AWS.config.credentials = new AWS.CognitoIdentityCredentials({
								IdentityPoolId: 'us-west-2:88b13c2b-9ce8-4370-8071-13f8cd379e01',
								Logins: {
									'cognito-idp.us-west-2.amazonaws.com/us-west-2_dEcrjTcVl': result.getIdToken().getJwtToken()
								}
							});
							AWS.config.credentials.refresh((error) => {
								if (error) {
									console.error(error);
								} else {
									session.checkSession(function(result) {
										if (!result.loggedIn) {
											return;
										}
										console.log('Successfully logged!');
										$.ajax({
											url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/user-profile",
											type: "PUT",
											headers: {
												"Authorization": session.getToken(),
												"IdentityID": session.getIdentityID(),
												"Content-Type": "application/json"
											},
											success: function(res) {
												console.log(res);
												if (attr[1].getValue() == DRIVER) {
													//window.location.replace("dashboard.html")
													var decoded = jwt_decode(result.getAccessToken().getJwtToken());
													console.log(decoded);
													console.log('access token + ' + result.getAccessToken().getJwtToken());
												} else {
													// window.location.replace("customerDashboard.html")
												}
											}
										});
									});
								}
							});
						});
					},
					onFailure: function(err) {
						alert(err);
					},
				});
			}
		});
	}

	function isEntity() {
		return isEntity;
	}

	return {
		signup: signup,
		showhidden: showhidden,
		isEntity: isEntity
	}
})()
