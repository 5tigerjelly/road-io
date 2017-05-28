<?php 
$title = "Road.io &mdash; Dashboard";
$css = "customerDashboard.css";
include_once('head.php'); ?>

<body>

    <div id="wrapper">
        <?php include('customerNav.php'); ?>
        <div class="container">
            <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">Your Dashboard</h1>
                    </div>
            </div>
            <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Available Datasets
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <table width="100%" class="table table-striped table-bordered table-hover" id="datasetsTable">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Country</th>
                                <th>Price</th>
                                <th>Date Compiled</th>
                                <th>Add to Cart</th>
                            </tr>
                        </thead>
                        <tbody id="AllDatasets">
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
    <div>
    <button id="cartInsert" type="submit" class="btn btn-primary btn-lg btn-block disabled" onclick=>Submit</button>
    </div>
            <!-- /.row -->
    <?php include('common_dependencies.php');?>
    <script src="../js/cart.js"></script>
    <script src="../js/customerDashboard.js"></script>

</body>

</html>
