const today = $('#today");

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
      $("#9am").prevAll().children("textarea").css("background-color", "#ccccff");
      $("#9am").children("textarea").css("background-color", "#ffccff");
      $("#9am").nextAll().children("textarea").css("background-color", "#ffffcc");
      break;
    case "10":
      $("#10am").prevAll().children("textarea").css("background-color", "#ccccff");
      $("#10am").children("textarea").css("background-color", "#ffccff");
      $("#10am").nextAll().children("textarea").css("background-color", "#ffffcc");
      break;
    case "11":
      $("#11am").prevAll().children("textarea").css("background-color", "#ccccff");
      $("#11am").children("textarea").css("background-color", "#ffccff");
      $("#11am").nextAll().children("textarea").css("background-color", "#ffffcc");
      break;
    case "12":
      $("#12pm").prevAll().children("textarea").css("background-color", "#ccccff");
      $("#12pm").children("textarea").css("background-color", "#ffccff");
      $("#12pm").nextAll().children("textarea").css("background-color", "#ffffcc");
      break;
    case "1":
      $("#1pm").prevAll().children("textarea").css("background-color", "#ccccff");
      $("#1pm").children("textarea").css("background-color", "#ffccff");
      $("#1pm").nextAll().children("textarea").css("background-color", "#ffffcc");
      break;
    case "2":
      $("#2pm").prevAll().children("textarea").css("background-color", "#ccccff");
      $("#2pm").children("textarea").css("background-color", "#ffccff");
      $("#2pm").nextAll().children("textarea").css("background-color", "#ffffcc");
      break;
    case "3":
      $("#3pm").prevAll().children("textarea").css("background-color", "#ccccff");
      $("#3pm").children("textarea").css("background-color", "#ffccff");
      $("#3pm").nextAll().children("textarea").css("background-color", "#ffffcc");
      break;
    case "4":
      $("#4pm").prevAll().children("textarea").css("background-color", "#ccccff");
      $("#4pm").children("textarea").css("background-color", "#ffccff");
      $("#4pm").nextAll().children("textarea").css("background-color", "#ffffcc");
      break;
    case "5":
      $("#5pm").prevAll().children("textarea").css("background-color", "#ccccff");
      $("#5pm").children("textarea").css("background-color", "#ffccff");
      $("#5pm").nextAll().children("textarea").css("background-color", "#ffffcc");
      break;
    default:
      $("textarea").css("background-color", "#ffffcc");
  }
}