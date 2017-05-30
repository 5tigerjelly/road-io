        <!-- Navigation -->
        <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="customerDashboard.php" id="brand"><i class="fa fa-car fa-fw" id="auto" style="margin-right: 6px;"></i>Road.io</a>
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right">
                <li class="dropdown">
                        <p id="spacingNavLinks"><a href="customerDashboard.php" class="NavLinksActions">Dashboard</a></p>
                    </li>
                    <li class="dropdown">
                        <p id="spacingNavLinks"><a href="purchasedDatasets.php" class="NavLinksActions">Purchased Datasets</a></p>
                </li>
                <li class="dropdown">
                    <a href="cart.php" class="NavLinksActions">
                      <i class="fa fa-shopping-cart" aria-hidden="true" id="cart">
                      </i>
                      <svg id ="cartCount" class="theSVG" width="27" height="27">
                        <g class="point" transform="translate(13,13)">
                          <circle></circle>
                          <text class="pointIndex" y="5">
                            <tspan id="cartCountText" text-anchor="middle">
                              0
                            </tspan>
                          </text>
                        </g>
                      </svg>
                    </a>

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
                        <li><a href="https://connect.stripe.com/express/oauth/authorize?response_type=code&client_id=ca_Ak2Y15gklfyz7VraFlZE06yXC84WVAUA&scope=read_write"><i class="fa fa-usd fa-fw" id="iconsInMenu"></i>Payment Settings</a>
                        </li>
                        <li><a href="#"><i class="fa fa-question-circle-o fa-fw" id="iconsInMenu"></i>Help &amp Support</a>
                        </li>
                        <li class="divider"></li>
                        <li><a id="signout" href="#"><i class="fa fa-sign-out fa-fw" id="iconsInMenu"></i> Logout</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->
        </nav>
