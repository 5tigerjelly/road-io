<?php
$title = "Road.io &mdash; Purchase History";
$css = "purchasedDatasets.css";
include_once('head.php'); ?>

    <body>

        <div id="wrapper">
            <?php include('customerNav.php'); ?>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12" id="displayNone">
                        <h1 class="page-header">Your Dashboard</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12" id="tableDiv">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                Your Purchase History
                            </div>
                            <!-- /.panel-heading -->
                            <div class="panel-body">
                                <table width="100%" class="table table-hover" id="myDatasets">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Date Purchased</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                                <!-- /.table-responsive -->
                            </div>
                            <!-- /.panel-body -->
                        </div>
                        <!-- /.panel -->
                    </div>
                    <!-- /.col-lg-12 -->
                </div>
                <!-- /.row -->
                <?php include('common_dependencies.php');?>
                <script src="../js/cart.js"></script>
                <script src="../js/purchasedDatasets.js"></script>
    </body>

    </html>
