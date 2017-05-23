'use strict';

$(function() {
  session.checkSession(function(result){
    driverRedirect(result, start);
  });
});


function upload(file) {
  console.log("id: " + session.getUserID());
  var s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: {Bucket: 'driver-videos'}
  });    
  var filename = file.name;
  var prefix = session.getUserID() + '|' + encodeURIComponent(filename);
  s3.putObject({Bucket: 'driver-videos/' + session.getIdentityID(), Key: prefix, Body: file}, function(err, data) {
    if(err) {
      console.log(err); 
    } else { 
      console.log(data);
    }
  });
}

function start() {
  var uploadForm = document.getElementById('js-upload-form');
  var startUpload = function(files) {
      console.log(files);
      upload(files[0]);
  }
  $('button').click(function(e) {
    var uploadFiles = document.getElementById('js-upload-files').files;
    e.preventDefault()
    startUpload(uploadFiles)
  });
}
