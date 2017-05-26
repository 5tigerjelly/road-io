<html>
	<head>
		<link href="../css/upload.css" rel="stylesheet">
		<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<!-- Bootstrap Core CSS -->
		<link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<!-- MetisMenu CSS -->
		<link href="../vendor/metisMenu/metisMenu.min.css" rel="stylesheet">
		<!-- Custom CSS -->
		<link href="../dist/css/sb-admin-2.css" rel="stylesheet">
		<!-- Morris Charts CSS -->
		<link href="../vendor/morrisjs/morris.css" rel="stylesheet">
		<!-- Custom Fonts -->
		<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
		<script src="https://code.jquery.com/jquery-3.2.1.min.js"
			integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
			crossorigin="anonymous"></script>
		</script>
	</head>
	<body>
	<?php include('nav.php'); ?>	
      <div id=UploadDiv class="container">
      <h1>User Profile</h1>
			<div class="panel panel-info">
				<div class="panel-heading">
					<h2 class="panel-title">Manage Account Information
            <!-- <span class="pull-right">
  					<a href="#" data-original-title="Edit this user" data-toggle="tooltip" type="button" class="btn btn-sm btn-warning"><i class="glyphicon glyphicon-edit"></i></a>
  					</span> -->
          </h2>
				</div>
				<div class="panel-body">
					<div class="row">
						<div class="col-md-3 col-lg-3 " align="center">
              <span style="font-size:12em;" class="fa fa-user"></span>
            </div>
						<div class=" col-md-9 col-lg-9 ">
							<table class="table table-user-information">

								<tr>
									<td><b>Email</b></td>
									<td><span id="email"></span></td>
								</tr>
								<tr>
									<td><b>Username</b></td>
									<td><span id="username"></span></td>
								</tr>
								<tr>
									<td><b>Country</b></td>
									<td><span id="local"></span></td>
								</tr>
                <tr>
									<td><b>Phone</b></td>
									<td><span id="phone"></span></td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
      <div class="panel panel-default">
        <div class="panel-body">
          <button id="open_change_pass" type="button" class="btn btn-outline btn-primary btn-lg">Change Password</button>
          <button id="delete_account" type="button" class="btn btn-outline btn-danger btn-lg">Delete Account</button>
        </div>
      </div>
  

      <div id="change_pass" class="panel panel-default">
        <div class="panel-body">
        Current Password: <input id="cur_pass" type="password">
        New Password: <input id="new_pass" type="password">
        New Password Confirm: <input id="new_pass_conf" type="password">
        <button id="submit_change_pass" class="btn">Submit</button>
        </div>
      </div>
		</div>
		<!-- /container -->
		<script src="../vendor/jquery/jquery.min.js"></script>
		<!-- Bootstrap Core JavaScript -->
		<script src="../vendor/bootstrap/js/bootstrap.min.js"></script>
		<!-- Metis Menu Plugin JavaScript -->
		<script src="../vendor/metisMenu/metisMenu.min.js"></script>
		<!-- Morris Charts JavaScript -->
		<script src="../vendor/raphael/raphael.min.js"></script>
		<script src="../vendor/morrisjs/morris.min.js"></script>
		<!--<script src="../data/morris-data.js"></script>-->
		<!-- AWS --!>
			<script src="../js/aws-cognito-sdk.min.js"></script>
			<script src="../js/amazon-cognito-identity.min.js"></script>
			<script src="../js/jwt-decode.min.js"></script>
			<script src="../js/aws-sdk.min.js"></script>

			<!-- Custom Theme JavaScript -->
		<script src="../dist/js/sb-admin-2.js"></script>
	</body>
	<!-- jQuery -->
	<script src="../vendor/jquery/jquery.min.js"></script>
	<!-- Bootstrap Core JavaScript -->
	<script src="../vendor/bootstrap/js/bootstrap.min.js"></script>
	<!-- Metis Menu Plugin JavaScript -->
	<script src="../vendor/metisMenu/metisMenu.min.js"></script>
	<!-- Morris Charts JavaScript -->
	<script src="../vendor/raphael/raphael.min.js"></script>
	<script src="../vendor/morrisjs/morris.min.js"></script>
	<!--<script src="../data/morris-data.js"></script>-->
	<!-- AWS --!>
		<script src="../js/aws-cognito-sdk.min.js"></script>
		<script src="../js/amazon-cognito-identity.min.js"></script>
		<script src="../js/jwt-decode.min.js"></script>
		<script src="../js/aws-sdk.min.js"></script>

		<!-- Custom Theme JavaScript -->
	<script src="../dist/js/sb-admin-2.js"></script>
	<script src="../js/common.js" type="text/javascript"></script>
	<script src="../js/session.js" type="text/javascript"></script>
  <script src="../js/account.js" type="text/javascript"></script>
</html>
