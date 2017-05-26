<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Road.io &mdash; DaaS Portal</title>

    <!-- Bootstrap Core CSS -->
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../vendor/metisMenu/metisMenu.min.css" rel="stylesheet">

    <!-- DataTables CSS -->
    <link href="../vendor/datatables-plugins/dataTables.bootstrap.css" rel="stylesheet">

    <!-- DataTables Responsive CSS -->
    <link href="../vendor/datatables-responsive/dataTables.responsive.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

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

    <link href="../css/cart.css" rel="stylesheet">

</head>

<body>

    <div id="wrapper">

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
                        <p id="spacingNavLinks"><a href="customerDashboard.html" class="NavLinksActions">Dashboard</a></p>
                    </li>
                    <li class="dropdown">                        
                        <p id="spacingNavLinks"><a href="purchasedDatasets.html" class="NavLinksActions">Purchased Datasets</a></p>
                </li>
                <li class="dropdown">
                    <a href="customerDashboard.html" class="NavLinksActions"><i class="fa fa-shopping-cart" aria-hidden="true" id="cart"></i></a>
                </li>
                <li class="dropdown">
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw" id="account"></i> <i class="fa fa-caret-down" id="caretDown"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="#"><i class="fa fa-id-card" id="iconsInMenu"></i> User Profile</a> <p id="companyName">Ford Motors</p>
                        <li class="divider"></li>
                        </li>
                        <li><a href="#"><i class="fa fa-gear fa-fw" id="iconsInMenu"></i>Account Settings</a>
                        </li>
                        <li><a href="#"><i class="fa fa-usd fa-fw" id="iconsInMenu"></i>Payment Settings</a>
                        </li>
                        <li><a href="#"><i class="fa fa-question-circle-o fa-fw" id="iconsInMenu"></i>Help &amp Support</a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="../../LandingPage/index.html"><i class="fa fa-sign-out fa-fw" id="iconsInMenu"></i> Logout</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->
        </nav>
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                      <!--      <tr class="odd gradeX">
                                <td>somethingElse.zip</td>
                                <td>$260.99</td>
                                <td>2017-04-02</td>
                                <td><i class="fa fa-minus-circle" id="remove"></i></td>
                            </tr>
                            <tr class="even gradeC">
                                <td>somethingElse.zip</td>
                                <td>$320.99</td>
                                <td>2016-10-28</td>
                                <td><i class="fa fa-minus-circle" id="remove"></i></td>
                            </tr>
                            <tr class="odd gradeA">
                                <td>somethingElse.zip</td>
                                <td>$150.99</td>
                                <td>2016-10-22</td>
                                <td><i class="fa fa-minus-circle" id="remove"></i></td>
                            </tr>
                            <tr class="even gradeA">
                                <td>somethingElse.zip</td>
                                <td>$180.99</td>
                                <td>2016-07-12</td>
                                <td><i class="fa fa-minus-circle" id="remove"></i></td>
                            </tr>
                            <tr class="odd gradeA">
                                <td>somethingElse.zip</td>
                                <td>$420.99</td>
                                <td>2016-06-05</td>
                                <td><i class="fa fa-minus-circle" id="remove"></i></td>
                            </tr>
                            <tr class="even gradeA">
                                <td>somethingElse.zip</td>
                                <td>$260.99</td>
                                <td>2015-11-31</td>
                                <td><i class="fa fa-minus-circle" id="remove"></i></td>
                            </tr>
                            <tr class="gradeA">
                                <td>somethingElse.zip</td>
                                <td>$310.99</td>
                                <td>2015-10-21</td>
                                <td><i class="fa fa-minus-circle" id="remove"></i></td>
                            </tr>
                            <tr class="gradeA">
                                <td>somethingElse.zip</td>
                                <td>$290.99</td>
                                <td>2015-04-16</td>
                                <td><i class="fa fa-minus-circle" id="remove"></i></td>
                            </tr> -->
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
    <!-- jQuery -->
    <script src="../vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="../vendor/metisMenu/metisMenu.min.js"></script>

    <!-- DataTables JavaScript -->
    <script src="../vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script src="../vendor/datatables-plugins/dataTables.bootstrap.min.js"></script>
    <script src="../vendor/datatables-responsive/dataTables.responsive.js"></script>

    <!-- Morris Charts JavaScript -->
    <script src="../vendor/raphael/raphael.min.js"></script>
    <script src="../vendor/morrisjs/morris.min.js"></script>
    <script src="../data/morris-data.js"></script>

    <script src="../js/aws-cognito-sdk.min.js"></script>
    <script src="../js/amazon-cognito-identity.min.js"></script>
    <script src="../js/jwt-decode.min.js"></script>
    <script src="../js/aws-sdk.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>
    <script src="../js/common.js" type="text/javascript"></script>
    <script src="../js/session.js"></script>
    <script src="../js/cart.js"></script>
    <script src="../js/cart_pg.js"></script>
</body>
</html>