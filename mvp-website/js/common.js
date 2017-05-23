//Constants
let DRIVER = 0;
let CAR_COMPANY = 1;


function driverRedirect(result, callback){
    $('nav').load('nav.html');
    if(!result.loggedIn){
      window.location.replace("login.html");
    }
    if(session.getType() == CAR_COMPANY){
       window.location.replace("customerDashboard.html");
    }
    callback();
}

function carCompanyRedirect(result, callback){
    if(!result.loggedIn){
      window.location.replace("login.html");
    }
    if(session.getType() == DRIVER){
      window.location.replace("dashboard.html");
    }
    callback();
}
