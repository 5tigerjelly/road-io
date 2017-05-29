'use strict';

$(function() {
  session.checkSession(function(result){
    if(document.location.href.match(/[^\/]+$/)[0] == 'account_driver.php'){
      driverRedirect(result, populateData);
    }
    else{
      carCompanyRedirect(result, populateData);
    }
  });
});

function populateData() {
  console.log(session.getEmail());
  $('#change_pass').hide();
  $('#email').text(session.getEmail());
  $('#username').text(session.getUserName());
  $('#local').text(session.getLocal());
  $('#phone').text(session.getPhone());
  $('#open_change_pass').click(function(){
    $('#change_pass').show();
  });
  $('#submit_change_pass').click(function(){
    var cur_pass = $('#cur_pass').val();
    var new_pass = $('#new_pass').val();
    console.log(cur_pass);
    if(new_pass == $('#new_pass_conf').val()){
      session.changePassword(cur_pass, new_pass, function(err, result){
        if (err) {
          alert(err);
        }
        else{
          alert('success');
          $('#change_pass').hide();
        }
      });
    }
    else{
      alert('passwords don\'t match');
    }
  });

  $('#delete_account').click(function(){
    //remember to add prompt beforehand
    session.deleteAccount(function(err, result){
      if(err) {
        alert(err);
      }
      else{
       window.location.replace('index.html');
      }
    });
  }); 
      
}
