<?php 
$title = "Road.io &mdash; Driver Portal";
$css = "dashboard.css";
include_once('head.php'); ?>

<body>
    <?php include('nav.php'); ?>
    <div class="container">
        <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Payment Settings</h1>
                </div>
        </div>
    <div class="row">
        <a target="_blank" href="https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_32D88BD1qLklliziD7gYQvctJIhWBSQ7&scope=read_write"><img src="../blue-on-light/blue-on-light@2x.png" width="250" height="42"></a>
    </div>
        <!-- /.row -->
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

    <script src="../js/dashboard.js"></script>
</body>

</html>
