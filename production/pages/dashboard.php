<?php 
$title = "Road.io &mdash; Driver Portal";
$css = "dashboard.css";
include_once('head.php'); ?>
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

<?php include('common_dependencies.php');?>
</body>

</html>
