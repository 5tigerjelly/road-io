<?php 
$title = "Road.io &mdash; Cart";
$css = "cart.css";
include_once('head.php'); ?>

<body>

    <div id="wrapper">
        <?php include('customerNav.php'); ?>
        <div class="container">
            <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">Your Cart</h1>
                    </div>
            </div>
            <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-body">
                    <table width="100%" class="table table-striped table-hover" id="cart-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Date Added</th>
                                <th>Remove?</th>
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
    <div>
    <button id="checkout" type="submit" class="btn btn-primary btn-lg btn-block">Proceed to Checkout</button>
    </div>
            <!-- /.row -->
    <?php include('common_dependencies.php'); ?>
    <script src="../js/cart.js"></script>
    <script src="../js/cart_pg.js"></script>
</body>
</html>
