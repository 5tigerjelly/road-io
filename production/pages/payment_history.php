<?php 
$title = "Road.io &mdash; Upload Video";
$css = "upload.css";
include_once('head.php'); ?>

  <body>
   <?php include('nav.php'); ?> 
   <div class="container">
        <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Payment History</h1>
                </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Payment Datasets
                    </div>
                    <!-- /.panel-heading -->
                    <div class="panel-body">
                        <table width="100%" class="table table-striped table-bordered table-hover" id="datasetsTable">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>Amount</th>
                                    <th>Balance</th>
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
    </div>
    <?php include("common_dependencies.php"); ?>
    <script src="../js/paymenthistory.js" type="text/javascript"></script>

  </body>
    
</html>
