<?php
$title = "Road.io &mdash; Upload Video";
$css = "upload.css";
include_once('head.php'); ?>

<body>
    <?php include('nav.php'); ?>
    <div id=UploadDiv class="container">

        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Upload Videos</h1>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading"><strong>Upload Files</strong></div>
            <div class="panel-body">
                <!-- Progress Bar -->
                <!-- <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
                <span class="sr-only">60% Complete</span>
              </div>
            </div> -->
                <!-- Standard Form -->
                <div id="uploadArea">
                    <h4>Select files from your computer</h4>
                    <div class="form-inline">
                        <div class="form-group">
                            <input type="file" name="files[]" id="js-upload-files" multiple>
                        </div>
                        <button id="uploadDatShit" class="btn btn-sm btn-primary">upload files</button>
                    </div>
                    <!-- <div class="form-inline">
                  <div class="from-group">
                    <form action="/" class="dropzone" id="dropzoneArea"></form>
                  </div>
                </div> -->
                </div>
            </div>
        </div>

        <!-- Currently uploading videos -->
        <h3 id="progressTitle" style="display:none">Current Uploads</h3>
        <div id="progressArea"></div>
    </div>
    <!-- /container -->
    <?php include('common_dependencies.php'); ?>
    <script src="../js/upload.js" type="text/javascript"></script>

</body>


</html>
