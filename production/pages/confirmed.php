<?php
$title = "Road.io &mdash; Purchase Confirmation";
$css = "confirmed.css";
include_once('head.php'); ?>
<body>

    <div id="wrapper">
        <?php include('customerNav.php'); ?>
        <div class="container">
            <div class="row">
                <div class="col-lg-12" style="clear: both">
                    <div class=container id="checkIconDiv"><i id="checkmark" class="fa fa-check-circle" id="iconsInMenu"></i></div>
                    <div class=container id="textDiv">
                        <h1 id="confirm" class="page-header">Confirmed!</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Your Order
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <table width="100%" class="table table-hover" id="myOrders">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
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
            <p>
                <button id="checkout" type="submit" class="btn btn-success btn-lg btn-block">Download As...</button>
            </p>
            <p>
                <button id="checkout" type="submit" class="btn btn-primary btn-lg btn-block">Download Later</button>
            </p>
            <!-- /.row -->
            <?php include('common_dependencies.php'); ?>
            <script src="../js/cart.js"></script>            
            <script src="../js/confirmed.js"></script>
            </body>

            </html>
