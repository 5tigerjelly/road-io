//Constants
let DRIVER = 0;
let CAR_COMPANY = 1;

function driverRedirect(result, callback) {
    if (!result.loggedIn) {
        window.location.replace("login.php");
    }
    if (session.getType() == CAR_COMPANY) {
        window.location.replace("customerDashboard.php");
    }
    callback();
}

function carCompanyRedirect(result, callback) {
    if (!result.loggedIn) {
        window.location.replace("login.php");
    }
    if (session.getType() == DRIVER) {
        window.location.replace("dashboard.php");
    }
    callback();
}
