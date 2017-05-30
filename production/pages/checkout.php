<?php
$title = "Road.io &mdash; Checkout";
$css = "checkout.css";
include_once('head.php'); ?>

    <body>

        <div id="wrapper">
            <?php include('customerNav.php'); ?>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">Order Confirmation</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="panel panel-default">
                            <div class="panel-body">
                                <table width="100%" class="table table-striped" id="orderCheckout">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                                <div style="clear: both">
                                    <h1 id="grand">GRAND TOTAL:</h1>
                                    <h1 id="total"></h1>
                                </div>
                                <!-- /.table-responsive -->
                            </div>
                            <!-- /.panel-body -->
                        </div>
                        <!-- /.panel -->
                    </div>
                    <!-- /.col-lg-12 -->
                </div>
                <div>
                    <form action="/your-server-side-code" method="POST">

                        <script src="https://checkout.stripe.com/checkout.js"></script>

                        <button id="customButton" type="button" class="btn btn-primary btn-lg btn-block">Purchase with card</button>

                    </form>
                </div>
                <!-- /.row -->
                <?php include('common_dependencies.php'); ?>
                <script src="../js/cart.js"></script>
                <script src="../js/checkout.js"></script>
    </body>

    </html>
