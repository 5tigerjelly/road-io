var bullshit_random_videos = {
  "videos":[ 
    {
      "title" : "vid1.mp4",
      "url" : "https://www.youtube.com/embed/iMgYFucGKD0",
      "timestamp" : "12/12/12 12:12:12",
      "private": 0
    },
    {
      "title" : "vid2.mp4",
      "url" : "https://www.youtube.com/embed/MpZFVM800f8",
      "timestamp" : "12/12/12 12:12:12",
      "private": 0
    },
    {
      "title" : "vid3.mp4",
      "url" : "https://www.youtube.com/embed/L9r-aOQb3XM",
      "timestamp" : "12/12/12 12:12:12",
      "private": 0
    },
    { 
      "title" : "vid4.mp4",
      "url" : "https://www.youtube.com/embed/FmcFoOvb9R8",
      "timestamp" : "12/12/12 12:12:12",
      "private": 0
    }
  ]
}

var access = {
  0 : "public",
  1 : "private"
}

$(function(){

  loadVideoData();



});


function loadVideoData(){
   var vidContainer = $("#vid-container");
   vidContainer.html("");
   var noMoreVids = 0;
   var thisRow = document.createElement('div');
   thisRow.className = "row";
   if(bullshit_random_videos.videos.length == 0){
     thisRow.innerHTML = "<p>You currently have no videos to manage</p>";
   }
   else {
     $.each(bullshit_random_videos.videos, function(index, element) {
       if(index % 3 == 0 && index != 0) {
        vidContainer.append(thisRow);
        thisRow = document.createElement('div');
       }
       var thisCol = document.createElement('div');
       thisCol.className = "col-md-3";
       var content = "<p>Title: " + element["title"] + "</p><p>Date Uploaded: " + (new Date (element["timestamp"])).toString('dddd MMM yyyy') + "<p><button id=\"preview-" + index + "\" class=\"preview\">preview</button></p><p><button id=\"access-" + index +"\" class=\"access\">Make video " + access[(element["private"] + 1) % 2] + "</button></p>";
       thisCol.innerHTML = content;
       thisRow.append(thisCol);
     });
  }
  vidContainer.append(thisRow);

  $('.preview').click(function(){
    previewVideo(this.id);
    $('#previewVid').modal('show');
  });

  $('.access').click(function(){
    changeAccess(this.id);
  });
      
}

function previewVideo(vid){
  var index = parseInt(vid.match(/\d+/g));
  $("#previewFrame").attr("src", bullshit_random_videos.videos[index]["url"]  + "?autoplay=1&end=15");
  $(".modal-header").html(bullshit_random_videos.videos[index]["title"]);
} 

function changeAccess(vid){
  var index = parseInt(vid.match(/\d+/g));
  bullshit_random_videos.videos[index]["private"] = (bullshit_random_videos.videos[index]["private"] + 1) % 2;
  if(bullshit_random_videos.videos[index]["private"]) {
    alert(bullshit_random_videos.videos[index]["title"] + " no longer visible to taggers");
  }
  else{
    alert(bullshit_random_videos.videos[index]["title"] + " is now visible to taggers!");
  }
  loadVideoData();
} 

