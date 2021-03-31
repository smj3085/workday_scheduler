var dateNow = $('#currentDate');
var timeNow = $('#currentTime');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    dateNow.text(rightNow);
    console.log(displayTime)
}

