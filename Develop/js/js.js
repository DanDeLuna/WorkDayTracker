// Reference moment.js
var today = moment();
// reference the whole task (time and textarea)
var timeBlockEl = document.querySelector('.container');

// REFERENCES
// Display the current date and time on the paragraph with an id of "currentDay"
$('#currentDay').text(today.format('LLLL')); // LLLL shows day of the week, date and time

// EVENT LISTENER
// Event listener for saveBtn click
$('.saveBtn').on('click', function () {
  // get nearby values of the description in jQuery
  var textValue = $(this).siblings('.description').val();
  // get the id attribute of the parent div element
  var timeKey = $(this).parent().attr('id');

  // save in local storage
  localStorage.setItem(timeKey, textValue);
});

// Get item from local storage if any
$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));

// Function tracks tasks and change colors for  past, present or future
function checkTime() {
    // get current number of hours
    var currentHour = today.hours();
  
    // loop each time block
    $('.time-block').each(function () {
      var timeId = parseInt($(this).attr('id').split("hour")[1]);
   // if loop for  Id attribute is before the current hour, add the past class
   if (timeId < currentHour) {
    $(this).addClass('past');
  } // if loop for  Id attribute is equal to the current hour, remove the past and future classes and add the present class
  else if (timeId === currentHour) {
    $(this).removeClass('past');
    $(this).removeClass('future');
    $(this).addClass('present');
  } // If loop for Id attribute is greater than the current time, remove the past and present classes and add the future class
  else {
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future');
  }
});
}
     