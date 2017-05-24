'use strict';

$(function() {
  session.checkSession(function(result){
    driverRedirect(result, populateData);
  });
});

function populateData() {
  console.log(session.getEmail());
  $('#email').text(session.getEmail());
  $('#username').text(session.getUserName());
  $('#local').text(session.getLocal());
  $('#phone').text(session.getPhone());
}
