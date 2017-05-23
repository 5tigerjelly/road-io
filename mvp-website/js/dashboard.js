'use strict';

$(function() {
  session.checkSession(function(result){
    driverRedirect(result, populateData);
  });
});

function populateData() {
  $.ajax({
    url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/driver-payments?type=total",
    type: "GET",
    headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
    success: function(result) { $('#totalAmount').html("$" + result.totalAmount.toFixed(2)); }
  });

  $.ajax({
    url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/videos?request=totalHours",
    type: "GET",
    headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
    success: function(result) { $('#totalHours').html(result.totalHours + " hours"); }
  });

  $.ajax({
    url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/videos?request=streak",
    type: "GET",
    headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
    success: function(result) { $('#longestStreak').html(result.longestStreak + " days"); }
  });

  $.ajax({
     url: "https://sejeqwt9og.execute-api.us-west-2.amazonaws.com/Dev/driver-payments?year=2017",
     type: "GET",
     headers: {"Authorization": session.getToken(), "Content-Type": "application/json"},
     success: function(result) { populateChart(result.payments); }
  }); 
}

function populateChart(payments) {

  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 
  Morris.Line({
    element: 'morris-area-chart',
    data: [{
      m: '2017-01', // <-- valid timestamp strings
      a: payments["1"],
    }, {
      m: '2017-02',
      a: payments["2"],
    }, {
      m: '2017-03',
      a: payments["3"],
    }, {
      m: '2017-04',
      a: payments["4"],
    }, {
      m: '2017-05',
      a: payments["5"],
    }, {
      m: '2017-06',
      a: payments["6"],
    }, {
      m: '2017-07',
      a: payments["7"],
    }, {
      m: '2017-08',
      a: payments["8"],
    }, {
      m: '2017-09',
      a: payments["9"],
    }, {
      m: '2017-10',
      a: payments["10"],
    }, {
      m: '2017-11',
        a: payments["11"],
    }, {
      m: '2017-12',
      a: payments["12"],
    }, ],
    xkey: 'm',
    ykeys: ['a'],
    labels: ['2017'],
    xLabelFormat: function(x) {
      var month = months[x.getMonth()];
      return month;
    },
    yLabelFormat: function(y) {
      return "$" + y;
    },
    dateFormat: function(x) {
      var month = months[new Date(x).getMonth()];
      return month;
    },
  }); 
}
