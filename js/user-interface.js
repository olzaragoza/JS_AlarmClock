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
