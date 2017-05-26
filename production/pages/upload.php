<html>
<head>

<title>Road.io &mdash; Upload</title>

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

<link rel="shortcut icon" type="image/png" href="../resources/favicon.ico" />
</head>
  <body>
    <!-- Navigation -->
     <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="customerDashboard.html" id="brand"><i class="fa fa-car fa-fw" id="auto" style="margin-right: 6px;"></i>Road.io</a>
        </div>
        <!-- /.navbar-header -->

        <ul class="nav navbar-top-links navbar-right">
            <li class="dropdown">
                    <p id="spacingNavLinks"><a href="dashboard.html" class="NavLinksActions">Your Dashboard</a></p>
            </li>
            <li class="dropdown">
                <p id="spacingNavLinks"><a href="upload.html" class="NavLinksActions">Upload Videos</a></p>
            </li>
            <li class="dropdown">
                <p id="spacingNavLinks"><a href="payment_history.html" class="NavLinksActions">Payment History</a></p>
            </li>
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i class="fa fa-user fa-fw" id="account"></i> <i class="fa fa-caret-down" id=caretDown></i>
                </a>
                <ul class="dropdown-menu dropdown-user">
                    <li><a href="account.html"><i class="fa fa-id-card-o" id="iconsInMenu"></i><span id="userProfileLink">User Profile</span></a>
                    </li>
                    <li><a href="#"><i class="fa fa-usd fa-fw" id="iconsInMenu"></i>Payment Settings</a>
                    </li>
                    <li><a href="#"><i class="fa fa-question-circle-o fa-fw" id="iconsInMenu"></i>Help &amp Support</a>
                    </li>
                    <li class="divider"></li>
                    <li><a href="../../LandingPage/index.html"><i class="fa fa-sign-out fa-fw" id="iconsInMenu"></i> Logout</a>
                    </li>
                </ul>
            </li>
        </ul>


  </nav>
    <div id=UploadDiv class="container">
        <div class="panel panel-default">
          <div class="panel-heading"><strong>Upload Files</strong></div>
          <div class="panel-body">
            <!-- Progress Bar -->
            <!-- <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
                <span class="sr-only">60% Complete</span>
              </div>
            </div> -->
            <!-- Standar Form -->
            <h4>Select files from your computer</h4>
              <div class="form-inline">
                <div class="form-group">
                  <input type="file" name="files[]" id="js-upload-files" multiple>
                </div>
                <button id="uploadDatShit" class="btn btn-sm btn-primary">upload files</button>
              </div>
            <!-- Drop Zone -->
            <!-- <h4>Or drag and drop files below</h4>
            <div class="upload-drop-zone" id="drop-zone">
              Just drag and drop files here
            </div> -->
          </div>
        </div>
      </div> <!-- /container -->

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
    <script src="../js/upload.js" type="text/javascript"></script>

</html>
