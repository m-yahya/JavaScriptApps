setInterval(function () {
  var currentDate = new Date();

  var hours = currentDate.getHours();
  var mints = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() +1;
  var day = currentDate.getDate();

  var period = 'am';
  if (hours >= 12) {
    period = 'pm';
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  if (mints < 10) {
    mints = '0' + mints;
  }
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }

  var time = hours + ':' + mints + ':' + seconds + ' ' + period;
  var date = day + "-" + month + "-" + year;
  var clock = document.getElementById('clock');
  clock.innerText = time + "\n" + date;

}, 1000);
