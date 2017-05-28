<?php 
$title = "Road.io &mdash; Upload Video";
$css = "upload.css";
include_once('head.php'); ?>
  <body>
   <?php include('nav.php'); ?> 
   <div id=UploadDiv class="container">
        <div class="panel panel-default">
          <div class="panel-heading"><strong>Upload Files</strong></div>
          <div class="panel-body">
            <!-- Progress Bar -->
            <!-- <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
                <span class="sr-only">60% Complete</span>
              </div>
            </div> -->
            <!-- Standar Form -->
            <h4>Select files from your computer</h4>
              <div class="form-inline">
                <div class="form-group">
                  <input type="file" name="files[]" id="js-upload-files" multiple>
                </div>
                <button id="uploadDatShit" class="btn btn-sm btn-primary">upload files</button>
              </div>
            <!-- Drop Zone -->
            <!-- <h4>Or drag and drop files below</h4>
            <div class="upload-drop-zone" id="drop-zone">
              Just drag and drop files here
            </div> -->
          </div>
        </div>
      </div> <!-- /container -->
  <?php include('common_dependencies.php'); ?>
  <script src="../js/upload.js" type="text/javascript"></script>

  </body>
    

</html>
