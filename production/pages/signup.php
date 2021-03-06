<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Road.io &mdash; Sign Up</title>

    <!-- Bootstrap Core CSS -->
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../vendor/metisMenu/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <link rel="shortcut icon" type="image/png" href="../resources/favicon.ico" />

</head>

<body>

    <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="page-header">
                    <h1>Welcome to Road.IO </h1>
                </div>
                <div class="login-panel panel panel-info">
                    <div class="panel-heading">
                        <h3 class="panel-title">Sign Up</h3>
                    </div>
                    <div class="panel-body">
                        <form id="signupSubmit" role="form">
                            <fieldset>
                                <div class="form-group" id="email_form_group">
                                    <label for="email">Email</label>
                                    <input class="form-control" placeholder="E-mail" id="email" name="email" type="email" autofocus>
                                    <span id="email_help_text" class="help-block"></span>
                                </div>
                                <div class="form-group" id="userName_form_group">
                                    <label for="userName">User Name</label>
                                    <input class="form-control" placeholder="User Name" id="userName" name="userName" type="text">
                                    <span id="userName_help_text" class="help-block"></span>
                                </div>
                                <div class="form-group" id="password_form_group">
                                    <label for="password">Password</label>
                                    <input class="form-control" placeholder="Password" id="password" name="password" type="password" value="">
                                    <span id="password_help_text" class="help-block"></span>
                                </div>
                                <div class="form-group" id="phone_form_group">
                                    <label for="phone">Phone</label>
                                    <input class="form-control" type="tel" placeholder="1-(555)-555-5555" id="phone" name="phone">
                                    <span id="phone_help_text" class="help-block"></span>
                                </div>
                                <div class="form-group">
                                    <label for="country">Country</label>
                                    <select class="form-control" id="country">
                                        <option value="en-US">United States</option>
                                        <option value="ko-KR">South Korea</option>
                                        <option value="ja-JP">Japan</option>
                                    </select>
                                </div>

                                <div class="form-check">
                                    <label class="form-check-label">
                                    <input id="check_corporate" type="checkbox" class="form-check-input">
                                    Corporate Account
                                  </label>
                                </div>
                                <div id="corporate_account" style="display:none" ;>
                                    <hr>
                                    <div class="form-group">
                                        <label for="ubi">Unique Business Identifier</label>
                                        <input class="form-control" type="text" id="ubi" name="ubi">
                                    </div>
                                    <div class="form-group">
                                        <label for="businessName">Business Name</label>
                                        <input class="form-control" type="text" id="businessName" name="businessName">
                                    </div>
                                    <div class="form-group">
                                        <label for="naicsCode">NAICS Code</label>
                                        <input class="form-control" type="text" id="naicsCode" name="naicsCode">
                                    </div>
                                </div>

                                <!-- Change this to a button or input when using this as a form -->
                                <input type="submit" value="Sign Up" id="submit_signup" class="btn btn-lg btn-primary btn-block"></input>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div class="panel">
                    <div class="checkbox text-center">
                        Already have an account? <a href="login.php"> Log in Here!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- jQuery -->
    <script src="../vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="../vendor/metisMenu/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>

    <script src="../js/aws-cognito-sdk.min.js"></script>
    <script src="../js/amazon-cognito-identity.min.js"></script>
    <script src="../js/aws-sdk.min.js"></script>
    <script src="../js/common.js"></script>
    <script src="../js/session.js"></script>
    <script src="../js/signup.js"></script>



</body>

</html>
