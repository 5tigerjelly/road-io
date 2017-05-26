<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Road.io &mdash; Driver Portal</title>

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

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <link href="../css/dashboard.css" rel="stylesheet">

</head>

<body>
 <?php include('nav.php'); ?> 
  <div class="container">
        <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Your Dashboard</h1>
                </div>
        </div>
    <div class="row">
        <div class="col-lg-4 col-md-6">
            <div class="panel panel-green">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-xs-3">
                            <i class="fa fa-paypal fa-5x"></i>
                        </div>
                        <div class="col-xs-9 text-right">
                            <div id="totalAmount" class="huge"></div>
                        </div>
                    </div>
                </div>
                <b>
                    <div class="panel-footer">
                        <span class="pull-left"></span>
                        <div class="clearfix">Total Amount Made</div>
                    </div>
                </b>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="panel panel-yellow">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-xs-3">
                            <i class="fa fa-clock-o fa-5x"></i>
                        </div>
                        <div class="col-xs-9 text-right">
                            <div id="totalHours" class="huge"></div>
                        </div>
                    </div>
                </div>
                <b>
                    <div class="panel-footer">
                        <span class="pull-left"></span>
                        <div class="clearfix">Number of Hours Uploaded</div>
                    </div>
                </b>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="panel panel-red">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-xs-3">
                            <i class="fa fa-fire fa-5x"></i>
                        </div>
                        <div class="col-xs-9 text-right">
                            <div id="longestStreak" class="huge"></div>
                        </div>
                    </div>
                </div>
                <b>
                    <div class="panel-footer">
                        <span class="pull-left"></span>
                        <div class="clearfix">Longest Streak</div>
                    </div>
                </b>
            </div>
        </div>
    </div>
        <!-- /.row -->
    <div class="row">
        <div class="col-lg-6">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Income Over Time
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div id="morris-area-chart"></div>
                </div>
                <!-- /.panel-body -->
            </div>
        </div>
        <div class="col-sm-6" id="RSSfeed">
            <!-- start feedwind code --> <script type="text/javascript" src="https://feed.mikle.com/js/fw-loader.js" data-fw-param="28042/"></script> <!-- end feedwind code -->
        </div>
    </div>
</div>
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

    <script src="../js/aws-cognito-sdk.min.js"></script>
    <script src="../js/amazon-cognito-identity.min.js"></script>
    <script src="../js/jwt-decode.min.js"></script>
    <script src="../js/aws-sdk.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>
    <script src="../js/common.js"></script>
    <script src="../js/session.js"></script>
    <script src="../js/dashboard.js"></script>
</body>

</html>
