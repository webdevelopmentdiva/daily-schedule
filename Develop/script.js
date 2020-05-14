const today = $("#today");

updatePage();

setInterval(function () {
  updatePage();
}, 1000);

// Get stored textarea values from localStorage
$("#9am").children("textarea").val(localStorage.getItem("9am"));
$("#10am").children("textarea").val(localStorage.getItem("10am"));
$("#11am").children("textarea").val(localStorage.getItem("11am"));
$("#12pm").children("textarea").val(localStorage.getItem("12pm"));
$("#1pm").children("textarea").val(localStorage.getItem("1pm"));
$("#2pm").children("textarea").val(localStorage.getItem("2pm"));
$("#3pm").children("textarea").val(localStorage.getItem("3pm"));
$("#4pm").children("textarea").val(localStorage.getItem("4pm"));
$("#5pm").children("textarea").val(localStorage.getItem("5pm"));
// Add event listener to buttons that references their parent div
$("button").on("click", function () {
  let time = $(this).parent().attr("id");
  let text = $(this).siblings("textarea").val();
  // Store key: values for time and text
  localStorage.setItem(time, text);
});



function updatePage() {
  today.text("Today is " + moment().format("MMMM Do YYYY, h:mm:ss a") + ".");


  switch (moment().format("h")) {
    case "9":
      $("#9am").prevAll().children("textarea").css("background-color", "#0000FF");
      $("#9am").children("textarea").css("background-color", "#FF0080");
      $("#9am").nextAll().children("textarea").css("background-color", "#AC58FA");
      break;
    case "10":
      $("#10am").prevAll().children("textarea").css("background-color", "#0000FF");
      $("#10am").children("textarea").css("background-color", "#FF0080");
      $("#10am").nextAll().children("textarea").css("background-color", "#AC58FA");
      break;
    case "11":
      $("#11am").prevAll().children("textarea").css("background-color", "#0000FF");
      $("#11am").children("textarea").css("background-color", "#FF0080");
      $("#11am").nextAll().children("textarea").css("background-color", "#AC58FA");
      break;
    case "12":
      $("#12pm").prevAll().children("textarea").css("background-color", "#0000FF");
      $("#12pm").children("textarea").css("background-color", "#FF0080");
      $("#12pm").nextAll().children("textarea").css("background-color", "#AC58FA");
      break;
    case "1":
      $("#1pm").prevAll().children("textarea").css("background-color", "#0000FF");
      $("#1pm").children("textarea").css("background-color", "#FF0080");
      $("#1pm").nextAll().children("textarea").css("background-color", "#AC58FA");
      break;
    case "2":
      $("#2pm").prevAll().children("textarea").css("background-color", "#0000FF");
      $("#2pm").children("textarea").css("background-color", "#FF0080");
      $("#2pm").nextAll().children("textarea").css("background-color", "#AC58FA");
      break;
    case "3":
      $("#3pm").prevAll().children("textarea").css("background-color", "#0000FF");
      $("#3pm").children("textarea").css("background-color", "#FF0080");
      $("#3pm").nextAll().children("textarea").css("background-color", "#AC58FA");
      break;
    case "4":
      $("#4pm").prevAll().children("textarea").css("background-color", "#0000FF");
      $("#4pm").children("textarea").css("background-color", "#FF0080");
      $("#4pm").nextAll().children("textarea").css("background-color", "#AC58FA");
      break;
    case "5":
      $("#5pm").prevAll().children("textarea").css("background-color", "#0000FF");
      $("#5pm").children("textarea").css("background-color", "#FF0080");
      $("#5pm").nextAll().children("textarea").css("background-color", "#AC58FA");
      break;
    default:
      $("textarea").css("background-color", "#AC58FA");
  }
}