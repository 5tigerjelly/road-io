'use strict';

$(function() {
    session.checkSession(function(result) {
        driverRedirect(result, start);
    });
});


function upload(file) {
    $(".progressTitle").css("display", "")
    console.log("id: " + session.getUserID());
    var s3 = new AWS.S3({
        apiVersion: '2006-03-01',
        params: {
            Bucket: 'driver-videos'
        }
    });
    var filename = file.name;
    var trimmedFilename = filename.replace('.', '');

    // Programatically create progress bar
    var progressArea = $("#progressArea");
    var progressContainer = $("<div class=\"panel panel-default\"><div class=\"panel-body\">", {
        'id': trimmedFilename + "Container"
    }).appendTo(progressArea);
    $("<h3>" + filename + "</h3>").prependTo(progressContainer);
    var currentProg = $("<div>", {
        'id': trimmedFilename,
        'class': "progress",
    });
    currentProg.appendTo(progressContainer);
    $("<div>", {
        'class': "progress-bar progress-bar-striped active",
        'role': "progressbar",
        'aria-valuenow': "0",
        'aria-valuemin': "0",
        'aria-valuemax': "100",
        css: {
            'width': "0%"
        }
    }).append(
        $("<span>", {
            'class': "sr-only"
        }).html("45% Complete")
    ).appendTo(currentProg);

    var prefix = session.getUserID() + '|' + encodeURIComponent(filename);
    s3.putObject({
        Bucket: 'driver-videos/' + session.getIdentityID(),
        Key: prefix,
        Body: file
    }, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    }).on('httpUploadProgress', function(progress) {
        var currentPercent = Math.round(progress.loaded / progress.total * 100);
        console.log(Math.round(currentPercent) + '% done');
        var currentBar = $("#" + trimmedFilename).children(".progress-bar");
        currentBar.attr('area-valuenow', currentPercent).css("width", currentPercent + "%");
        if (currentPercent == 100) {
            currentBar.toggleClass("active");
            currentBar.addClass("progress-bar-success");
        }
    });
}

function start() {
    var uploadForm = document.getElementById('js-upload-form');
    $('button').click(function(e) {
        $("#progressTitle").css("display", "block");
        var uploadFiles = document.getElementById('js-upload-files').files;
        e.preventDefault();
        $.each(uploadFiles, (index, value) => upload(value));
    });
}
