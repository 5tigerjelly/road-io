<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Road.io - The DaaS Marketplace</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="generator" content="Codeply">

    <link rel="shortcut icon" type="image/png" href="../resources/favicon.ico" />
    <link rel="stylesheet" href="../css/bootstrap.min.css" />
    <link rel="stylesheet" href="../css/animate.min.css" />
    <link rel="stylesheet" href="../css/ionicons.min.css" />
    <link rel="stylesheet" href="../css/styles.css" />

    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" integrity="sha512-07I2e+7D8p6he1SIM+1twR5TIrhUQn9+I6yjqD53JQjFiMf8EtC93ty0/5vJTZGF8aAocvHYNEDJajGdNx1IsQ==" crossorigin="" />

    <script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js" integrity="sha512-A7vV8IFfih/D732iSSKi20u/ooOfj/AGehOKq0f4vLT1Zr2Y+RX7C+w8A1gaSasGtRUZpF/NZgzSAu4/Gc41Lg==" crossorigin=""></script>

    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css" />

</head>

<body>
    <nav id="topNav" class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand page-scroll" href="#first"><i class="fa fa-car fa-fw" id="auto"></i> Road.io</a>
            </div>
            <div class="navbar-collapse collapse" id="bs-navbar">
                <ul class="nav navbar-nav">
                    <li>
                        <a class="page-scroll" href="#one"></a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#two"></a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#three">About</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#four"></a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#features">Features</a>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a title="Create an Account with Us!" href="signup.php">Sign Up</a>
                    </li>
                    <li>
                        <a title="Welcome Back!" href="login.php">Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <header id="first">
        <video autoplay="" loop="" class="fillWidth fadeIn wow collapse in" data-wow-delay="0.5s" poster="http://privesociety.com/content/uploads/2011/09/highway-traffic-moving-night-city.png" id="video-background">
            <source src="http://road.io.assets.s3-us-west-2.amazonaws.com/captioned+video.mp4" type="video/mp4">
            <track kind="subtitles" srclang="en" label="English" src="subtitle.vtt">
            Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>
    </header>
    <section id="three">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img class="first-slide" src="../resources/dashboardCamera.jpg" alt="First slide">
                    <div class="container carousel-text" id="firstText">
                        <h1>Grab Your Dashcam</h1>
                        <p>and hit the road! As you go about your day, make sure to hit play.</p>
                        <p>When you've finished your trip, upload the footage! You'll be paid per video.</p>
                    </div>
                </div>
                <div class="item">
                    <img class="second-slide" src="../resources/marking.jpeg" alt="Second slide">
                    <div class="container carousel-text" id="secondText">
                        <h1>We generate stills</h1>
                        <p>from the videos you submit and associate each image with some tags.</p>
                        <p>These are then compiled into datasets ready to be purchased by enterprises.</p>
                    </div>
                </div>
                <div class="item">
                    <img class="third-slide" src="../resources/coworking.jpg" alt="Third slide">
                    <div class="container carousel-text" id="secondText">
                        <h1>Your contributions make a huge impact </h1>
                        <p>to the hundreds of Computer Vision Specialists bringing exciting new technologies into the market.</p>
                        <p>Thank You for being a part of a global community advancing the state-of-the art in science and engineering.</p>
                    </div>
                </div>
            </div>
            <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span><i id="left" class="fa fa-chevron-left" aria-hidden="true"></i></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <i id="right" class="fa fa-chevron-right" aria-hidden="true"></i>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <!-- /.carousel -->
    </section>
    <section id="Features" class="no-padding">
        <div id=CONTAINMENT>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 id="features" class="margin-top-0 text-primary">Features</h2>
                        <hr class="primary">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 text-center">
                        <div class="feature">
                            <!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                            <svg class="threeColPics" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 484.184 484.184" style="enable-background:new 0 0 484.184 484.184;" xml:space="preserve">
                    <g><path d="M309.43,219.944c-19-10.5-39.2-18.5-59.2-26.8c-11.6-4.8-22.7-10.4-32.5-18.2c-19.3-15.4-15.6-40.4,7-50.3   c6.4-2.8,13.1-3.7,19.9-4.1c26.2-1.4,51.1,3.4,74.8,14.8c11.8,5.7,15.7,3.9,19.7-8.4c4.2-13,7.7-26.2,11.6-39.3   c2.6-8.8-0.6-14.6-8.9-18.3c-15.2-6.7-30.8-11.5-47.2-14.1c-21.4-3.3-21.4-3.4-21.5-24.9c-0.1-30.3-0.1-30.3-30.5-30.3   c-4.4,0-8.8-0.1-13.2,0c-14.2,0.4-16.6,2.9-17,17.2c-0.2,6.4,0,12.8-0.1,19.3c-0.1,19-0.2,18.7-18.4,25.3c-44,16-71.2,46-74.1,94   c-2.6,42.5,19.6,71.2,54.5,92.1c21.5,12.9,45.3,20.5,68.1,30.6c8.9,3.9,17.4,8.4,24.8,14.6c21.9,18.1,17.9,48.2-8.1,59.6   c-13.9,6.1-28.6,7.6-43.7,5.7c-23.3-2.9-45.6-9-66.6-19.9c-12.3-6.4-15.9-4.7-20.1,8.6c-3.6,11.5-6.8,23.1-10,34.7   c-4.3,15.6-2.7,19.3,12.2,26.6c19,9.2,39.3,13.9,60,17.2c16.2,2.6,16.7,3.3,16.9,20.1c0.1,7.6,0.1,15.3,0.2,22.9   c0.1,9.6,4.7,15.2,14.6,15.4c11.2,0.2,22.5,0.2,33.7-0.1c9.2-0.2,13.9-5.2,13.9-14.5c0-10.4,0.5-20.9,0.1-31.3   c-0.5-10.6,4.1-16,14.3-18.8c23.5-6.4,43.5-19,58.9-37.8C386.33,329.544,370.03,253.444,309.43,219.944z"/>
                    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>

                            <h3>Extra Cash</h3>
                            <p class="text-muted">Get paid for your spare dashcam footage by uploading it to your platform.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 text-center">
                        <div class="feature">
                            <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                            <svg class="threeColPics" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
                    <g><g><path d="M436.921,75.079C389.413,27.571,326.51,1.066,259.464,0.18C258.296,0.074,257.137,0,255.999,0s-2.297,0.074-3.465,0.18
                    C185.488,1.065,122.585,27.57,75.077,75.078C26.752,123.405,0.138,187.657,0.138,255.999s26.614,132.595,74.94,180.921
                    c47.508,47.508,110.41,74.013,177.457,74.898c1.168,0.107,2.327,0.18,3.464,0.18c1.138,0,2.297-0.074,3.465-0.18
                    c67.047-0.885,129.95-27.39,177.457-74.898c48.325-48.325,74.939-112.577,74.939-180.921
                    C511.861,187.657,485.247,123.405,436.921,75.079z M96.586,96.587c27.181-27.181,60.086-46.552,95.992-57.018
                    c-8.093,9.317-15.96,20.033-23.282,31.908c-9.339,15.146-17.425,31.562-24.196,48.919H75.865
                    C82.165,112.063,89.071,104.102,96.586,96.587z M56.486,150.813h78.373c-8.15,28.522-12.97,58.908-14.161,89.978H31.071
                    C33.176,208.987,41.865,178.465,56.486,150.813z M56.487,361.186c-14.623-27.652-23.312-58.174-25.417-89.978h89.627
                    c1.191,31.071,6.011,61.457,14.161,89.978H56.487z M96.587,415.412c-7.517-7.515-14.423-15.475-20.722-23.809h69.236
                    c6.771,17.357,14.856,33.773,24.196,48.919c7.322,11.875,15.189,22.591,23.282,31.908
                    C156.674,461.964,123.769,442.593,96.587,415.412z M240.79,475.322c-12.671-8.29-29.685-24.946-45.605-50.764
                    c-6.385-10.354-12.124-21.382-17.197-32.954h62.801V475.322z M240.79,361.186h-74.195c-8.888-28.182-14.163-58.651-15.459-89.978
                    h89.654V361.186z M240.79,240.791h-89.654c1.295-31.327,6.57-61.797,15.459-89.978h74.195V240.791z M240.79,120.395h-62.801
                    c5.073-11.572,10.812-22.6,17.197-32.954c15.919-25.818,32.934-42.475,45.605-50.764V120.395z M455.512,150.813
                    c14.623,27.653,23.311,58.174,25.416,89.978H391.3c-1.191-31.071-6.011-61.457-14.161-89.978H455.512z M415.413,96.587
                    c7.515,7.515,14.421,15.476,20.721,23.809h-69.235c-6.771-17.357-14.856-33.773-24.196-48.919
                    c-7.322-11.875-15.188-22.591-23.282-31.908C355.326,50.035,388.231,69.406,415.413,96.587z M271.208,36.677
                    c12.671,8.29,29.685,24.946,45.605,50.764c6.385,10.354,12.124,21.382,17.197,32.954h-62.801V36.677z M271.208,150.813h74.195
                    c8.889,28.182,14.164,58.653,15.459,89.978h-89.654V150.813z M360.861,271.208c-1.295,31.327-6.57,61.797-15.459,89.978h-74.195
                    v-89.978H360.861z M271.208,475.322v-83.718h62.801c-5.073,11.572-10.812,22.6-17.197,32.954
                    C300.893,450.377,283.879,467.032,271.208,475.322z M415.413,415.413c-27.182,27.181-60.086,46.551-95.992,57.018
                    c8.093-9.317,15.96-20.033,23.282-31.908c9.339-15.146,17.425-31.562,24.196-48.919h69.235
                    C429.835,399.937,422.928,407.898,415.413,415.413z M455.512,361.186h-78.373c8.15-28.521,12.971-58.907,14.161-89.978h89.627
                    C478.822,303.012,470.133,333.534,455.512,361.186z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>

                            <h3>Meaningful Impact</h3>
                            <p class="text-muted">Make a difference in the Autonomous Car industry by providing them with the data they need.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 text-center">
                        <div class="feature">
                            <!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                            <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                            <svg class="threeColPics" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 59.998 59.998" style="enable-background:new 0 0 59.998 59.998;" xml:space="preserve">
                    <g><path d="M59.206,0.293c-0.391-0.391-1.023-0.391-1.414,0L54.085,4H30.802L1.532,33.511c-0.666,0.666-1.033,1.553-1.033,2.495
                    s0.367,1.829,1.033,2.495l20.466,20.466c0.687,0.687,1.588,1.031,2.491,1.031c0.907,0,1.814-0.347,2.509-1.041l28.501-29.271V5.414
                    l3.707-3.707C59.597,1.316,59.597,0.684,59.206,0.293z M53.499,28.874L25.574,57.553c-0.596,0.596-1.566,0.596-2.162,0
                    L2.946,37.087c-0.596-0.596-0.596-1.566,0.003-2.165L31.636,6h20.449l-4.833,4.833C46.461,10.309,45.516,10,44.499,10
                    c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5c0-1.017-0.309-1.962-0.833-2.753l4.833-4.833V28.874z M47.499,15
                    c0,1.654-1.346,3-3,3s-3-1.346-3-3s1.346-3,3-3c0.462,0,0.894,0.114,1.285,0.301l-1.992,1.992c-0.391,0.391-0.391,1.023,0,1.414
                    C43.987,15.902,44.243,16,44.499,16s0.512-0.098,0.707-0.293l1.992-1.992C47.386,14.106,47.499,14.538,47.499,15z"/>
                    <path d="M34.049,39.479L23.441,50.085c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293
                    s0.512-0.098,0.707-0.293l10.607-10.606c0.391-0.391,0.391-1.023,0-1.414S34.439,39.088,34.049,39.479z"/>
                    <path d="M37.579,35.939c-0.181,0.19-0.29,0.45-0.29,0.71c0,0.261,0.109,0.521,0.29,0.71c0.189,0.181,0.45,0.29,0.71,0.29
                    c0.27,0,0.529-0.109,0.71-0.29c0.18-0.189,0.29-0.439,0.29-0.71c0-0.27-0.11-0.529-0.29-0.71
                    C38.639,35.569,37.949,35.569,37.579,35.939z"/>
                    <path d="M29.099,27.457c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L17.078,36.65c-0.391,0.391-0.391,1.023,0,1.414
                    c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293L29.099,27.457z"/>
                    <path d="M25.563,39.479c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l7.071-7.071c0.391-0.391,0.391-1.023,0-1.414
                    s-1.023-0.391-1.414,0l-7.071,7.071C25.173,38.455,25.173,39.088,25.563,39.479z"/>
                    <path d="M19.906,43.721l-1.414,1.415c-0.391,0.391-0.391,1.024,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293
                    s0.512-0.098,0.707-0.293l1.414-1.415c0.391-0.391,0.391-1.024,0-1.414C20.93,43.33,20.297,43.33,19.906,43.721z"/>
                    <path d="M20.613,24.629c-0.391-0.391-1.023-0.391-1.414,0L8.593,35.235c-0.391,0.391-0.391,1.023,0,1.414
                    c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l10.606-10.606C21.004,25.652,21.004,25.02,20.613,24.629z"/>
                    <path d="M23.438,22.8c0.271,0,0.521-0.11,0.71-0.29c0.181-0.19,0.29-0.45,0.29-0.71c0-0.27-0.109-0.53-0.29-0.71
                    c-0.369-0.37-1.05-0.37-1.409,0c-0.19,0.19-0.301,0.44-0.301,0.71c0,0.26,0.11,0.52,0.29,0.71
                    C22.919,22.689,23.179,22.8,23.438,22.8z"/>
                    <path d="M14.249,39.479c-0.19,0.181-0.29,0.44-0.29,0.71c0,0.261,0.1,0.521,0.29,0.7c0.189,0.19,0.439,0.3,0.71,0.3
                    c0.26,0,0.52-0.109,0.71-0.3c0.18-0.189,0.29-0.439,0.29-0.7c0-0.27-0.11-0.52-0.3-0.71C15.289,39.109,14.619,39.109,14.249,39.479
                    z"/> <path d="M24.148,42.31c0.19-0.189,0.29-0.45,0.29-0.71s-0.1-0.52-0.29-0.71c-0.369-0.37-1.05-0.37-1.42,0
                    c-0.18,0.19-0.29,0.45-0.29,0.71s0.11,0.521,0.29,0.71c0.19,0.181,0.45,0.29,0.71,0.29C23.709,42.6,23.959,42.49,24.148,42.31z"/>
                    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>

                            <h3>Many ways to Contribute</h3>
                            <p class="text-muted">Get even more pay outs tagging images.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="MapMission">
        <div class="container" id="mapContainer">
            <div class="container" id="missionContainer">
                <h1 id="missionStatement">A safer world, starting from your dashcam.
                    <h1>
            </div>
            <div id="mapid" style="width: 1150px; height: 600px; position: relative; outline: none;" class="leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom" tabindex="0">
                <div class="leaflet-pane leaflet-map-pane" style="transform: translate3d(-20px, 29px, 0px);">
                    <div class="leaflet-pane leaflet-tile-pane">
                        <div class="leaflet-layer " style="z-index: 1; opacity: 1;">
                            <div class="leaflet-tile-container leaflet-zoom-animated" style="z-index: 17; transform: translate3d(239px, 106px, 0px) scale(0.5);">
                            </div>
                            <div class="leaflet-tile-container leaflet-zoom-animated" style="z-index: 18; transform: translate3d(239px, 105px, 0px) scale(1);">
                                <img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.streets/12/2046/1361.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(-100px, -173px, 0px); opacity: 1;">
                                <img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.streets/12/2047/1361.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(156px, -173px, 0px); opacity: 1;">
                                <img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.streets/12/2046/1362.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(-100px, 83px, 0px); opacity: 1;">
                                <img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.streets/12/2047/1362.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(156px, 83px, 0px); opacity: 1;">
                                <img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.streets/12/2048/1361.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(412px, -173px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.streets/12/2048/1362.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(412px, 83px, 0px); opacity: 1;">
                                <img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.streets/12/2045/1361.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(-356px, -173px, 0px); opacity: 1;">
                                <img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.streets/12/2045/1362.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(-356px, 83px, 0px); opacity: 1;"><img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.streets/12/2046/1360.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(-100px, -429px, 0px); opacity: 1;">
                                <img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.streets/12/2045/1360.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(-356px, -429px, 0px); opacity: 1;">
                                <img alt="" role="presentation" src="https://api.tiles.mapbox.com/v4/mapbox.streets/12/2047/1360.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" class="leaflet-tile leaflet-tile-loaded" style="width: 256px; height: 256px; transform: translate3d(156px, -429px, 0px); opacity: 1;">
                            </div>
                        </div>
                    </div>
                    <div class="leaflet-pane leaflet-shadow-pane">
                        <img src="https://unpkg.com/leaflet@1.0.3/dist/images/marker-shadow.png" class="leaflet-marker-shadow leaflet-zoom-animated" alt="" style="margin-left: -12px; margin-top: -41px; width: 41px; height: 41px; transform: translate3d(389px, 229px, 0px);">
                    </div>
                    <div class="leaflet-pane leaflet-overlay-pane">
                        <svg pointer-events="none" class="leaflet-zoom-animated" width="720" height="480" viewBox="-40 -69 720 480" style="transform: translate3d(-40px, -69px, 0px);"><g><path class="leaflet-interactive" stroke="red" stroke-opacity="1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="#f03" fill-opacity="0.5" fill-rule="evenodd" d="M309.60177777777426,191.47352300095372a21,21 0 1,0 42,0 a21,21 0 1,0 -42,0 "></path><path class="leaflet-interactive" stroke="#3388ff" stroke-opacity="1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="#3388ff" fill-opacity="0.2" fill-rule="evenodd" d="M418 187L476 215L514 182z"></path></g>
                </svg>
                    </div>
                    <div class="leaflet-pane leaflet-marker-pane">
                        <img src="https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" tabindex="0" style="margin-left: -12px; margin-top: -41px; width: 25px; height: 41px; transform: translate3d(389px, 229px, 0px); z-index: 229;"></div>
                    <div class="leaflet-pane leaflet-tooltip-pane">
                    </div>
                    <div class="leaflet-pane leaflet-popup-pane"></div>
                    <div class="leaflet-proxy leaflet-zoom-animated" style="transform: translate3d(523957px, 348655px, 0px) scale(2048);">
                    </div>
                </div>
            </div>
        </div>
        <div class="container" id="Hours">
            <h1 id="hoursStatement">343,228 hours of footage collected.
                <h1>
        </div>
    </section>
    <aside class="bg-dark">
        <div class="container text-center">
            <!-- Bootstrap Images
            <div class="row">
                <div class="col-lg-10 col-lg-offset-1">
                    <div class="row">
                        <h6 class="wide-space text-center">BOOTSTRAP IS BASED ON THESE STANDARDS</h6>
                        <div class="col-sm-3 col-xs-6 text-center">
                            <i class="icon-lg ion-social-html5-outline" title="html 5"></i>
                        </div>
                        <div class="col-sm-3 col-xs-6 text-center">
                            <i class="icon-lg ion-social-sass" title="sass"></i>
                        </div>
                        <div class="col-sm-3 col-xs-6 text-center">
                            <i class="icon-lg ion-social-javascript-outline" title="javascript"></i>
                        </div>
                        <div class="col-sm-3 col-xs-6 text-center">
                            <i class="icon-lg ion-social-css3-outline" title="css 3"></i>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <hr/>
            <br>
            -->
            <div class="call-to-action">
                <h2 class="text-primary">Get Started</h2>
                <a href="signup.php" class="btn btn-default btn-lg wow flipInX">Sign Up</a>
            </div>
        </div>
    </aside>
    <!-- Contact Section
    <section id="last">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 text-center">
                    <h2 class="margin-top-0 wow fadeIn" id="contactText">Get in Touch</h2>
                    <hr class="primary">
                    <p id="contactText">We love feedback. Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>
                <div class="col-lg-10 col-lg-offset-1 text-center">
                    <form class="contact-form row">
                        <div class="col-md-4">
                            <label></label>
                            <input type="text" class="form-control" placeholder="Name">
                        </div>
                        <div class="col-md-4">
                            <label></label>
                            <input type="text" class="form-control" placeholder="Email">
                        </div>
                        <div class="col-md-4">
                            <label></label>
                            <input type="text" class="form-control" placeholder="Phone">
                        </div>
                        <div class="col-md-12">
                            <label></label>
                            <textarea class="form-control" rows="9" placeholder="Your message here.."></textarea>
                        </div>
                        <div class="col-md-4 col-md-offset-4">
                            <label></label>
                            <button type="button" data-toggle="modal" data-target="#alertModal" class="btn btn-primary btn-block btn-lg">Send <i class="ion-android-arrow-forward"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    -->
    <div id="galleryModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-body">
                    <img src="" id="galleryImage" class="img-responsive" />
                    <p>
                        <br/>
                        <button class="btn btn-primary btn-lg center-block" data-dismiss="modal" aria-hidden="true">Close <i class="ion-android-close"></i></button>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div id="aboutModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <h2 class="text-center">Landing Zero Theme</h2>
                    <h5 class="text-center">
                        A free, responsive landing page theme built by BootstrapZero.
                    </h5>
                    <p class="text-justify">
                        This is a single-page Bootstrap template with a sleek dark/grey color scheme, accent color and smooth scrolling. There are vertical content sections with subtle animations that are activated when scrolled into view using the jQuery WOW plugin. There is also a gallery with modals that work nicely to showcase your work portfolio. Other features include a contact form, email subscribe form, multi-column footer. Uses Questrial Google Font and Ionicons.
                    </p>
                    <p class="text-center"><a href="http://www.bootstrapzero.com">Download at BootstrapZero</a></p>
                    <br/>
                    <button class="btn btn-primary btn-lg center-block" data-dismiss="modal" aria-hidden="true"> OK </button>
                </div>
            </div>
        </div>
    </div>
    <div id="alertModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-body">
                    <h2 class="text-center">Nice Job!</h2>
                    <p class="text-center">You clicked the button, but it doesn't actually go anywhere because this is only a demo.</p>
                    <p class="text-center"><a href="http://www.bootstrapzero.com">Learn more at BootstrapZero</a></p>
                    <br/>
                    <button class="btn btn-primary btn-lg center-block" data-dismiss="modal" aria-hidden="true">OK <i class="ion-android-close"></i></button>
                </div>
            </div>
        </div>
    </div>
    <!--scripts loaded here -->
    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script src="../js/jquery.easing.min.js"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/wow.js"></script>
    <script src="../js/scripts.js"></script>
    <script src="../js/map.js"></script>
</body>

</html>
