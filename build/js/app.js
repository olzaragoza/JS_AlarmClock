(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function update() {
  $('#time').text(moment().format('H:mm:ss'));
}
setInterval(update, 1000);


$(document).ready(function(){
  $('#alarm-form').submit(function(event){
    event.preventDefault();
    var hour = parseInt($('#hour').val());
    var minute = parseInt($('#minute').val());
    $(".alarm-set").text("Your alarm is set for " + hour + ":" + minute);
    $("h2").hide();

    function alarmTimer() {
      var currentHour = parseInt(moment().format('H'));
      var currentMinute = parseInt(moment().format('mm'));

      if ((hour === currentHour) && (minute === currentMinute)) {
        $('#alarm').show();
        $('.alarm-set').hide();
      } else {
        $('#alarm').hide();
      }
    }
    setInterval(alarmTimer, 1000);
  });
});

},{}]},{},[1]);
