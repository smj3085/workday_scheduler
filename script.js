$(document).ready(function () {// tells engine to load 1)html & 2)css first.
    //display current day & time.
    var dateDisplayEl = $('#current-date');
    var timeDisplayEl = $('#current-time');
    
    // display current date and time
    function displayTime() {
        var currentDate = moment().format('dddd DD MMM, YYYY');
        var currentTime = moment().format('hh:mm:ss a');
        dateDisplayEl.text(currentDate);
        timeDisplayEl.text(currentTime);
    }
    
    setInterval(displayTime, 1000);

    // get description on click of save button
    $(".saveBtn").on("click", function () {
        // taken the change from the sibling html description attribute
        var text = $(this).siblings(".description").val(); 
        // taken the change from the parent html id attribute
        var time = $(this).parent().attr("id"); 

        //set items in local storage.
        localStorage.setItem(time, text);
    })

    // load any saved data from localStorage
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    function hourUpdater() {
        // get current number of hours
        var currentHour = moment().hours();

        // loop over time blocks
        $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);

        // check if we've moved past this time
        if (blockHour < currentHour) {
            $(this).addClass("past");
        } 
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } 
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
        });
    }

    hourUpdater();

    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);

})
