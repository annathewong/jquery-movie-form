$(document).ready(function () {
  // validate Movie Type
  $("#selectType").on("click", function () {
    if (("#selectType option#horror") === "Horror") {
      return true;
    } else if (("#selectType option#comedy") === "Comedy") {
      return true;
    } else if (("#selectType option#action") === "Action") {
      return true;
    } else if (("#selectType option#sci-fi") === "Sci-fi") {
      return true;
    } else return false;
  });


  // box office price allows decimal and numbers only
  $("#boxOffice").on("keypress", function (event) {
    // console.log(event.keyCode);
    var kc = event.keyCode;
    if ((kc != 46 || $(this).val().indexOf(".") != -1) &&
      (kc > 32 && (kc < 48 || kc > 57))) {
      event.preventDefault();
    }
  });


  // textarea characters update
  $("#textarea_feedback").html(" characters");

  $("#description").on("keyup", function () {
    var text_length = $("#description").val().length;

    $("#textarea_feedback").html(text_length + " characters");
  });

});


function formCheck() {
  var success = true;
  
  $("#divMessage").html("");

  //Reset the colour of the textboxes to white
  $("#movieName").attr("class", "white");
  $("#pictureName").attr("class", "white");
  $("#director").attr("class", "white");
  $("#boxOffice").attr("class", "white");
  $("#description").attr("class", "white");

  //Shows error message, highlight colour and Boolean value to prevent submission of form
  if ($("#movieName").val() == ""){
    var string = $("#divMessage").html();
    $("#divMessage").html(string + "Please enter Name");
    $("#movieName").attr("class", "yellow");
    success = false;
  }

  if ($("#selectType").val() === "-1"){
    var string = $("#divMessage").html();
    $("#divMessage").html(string + "<br/>Please select Movie Type");
    success = false;
  }

  if ($("#pictureName").val() == ""){
    var string = $("#divMessage").html();
    $("#divMessage").html(string + "<br/>Please enter Picture Name");
    $("#pictureName").attr("class", "yellow");
    success = false;
  }

  if ($("#director").val() == ""){
    var string = $("#divMessage").html();
    $("#divMessage").html(string + "<br/>Please enter Director");
    $("#director").attr("class", "yellow");
    success = false;
  }

  if ($("#boxOffice").val() == ""){
    var string = $("#divMessage").html();
    $("#divMessage").html(string + "<br/>Please enter Box Office amount");
    $("#boxOffice").attr("class", "yellow");
    success = false;
  }

  if ($("#description").val() == ""){
    var string = $("#divMessage").html();
    $("#divMessage").html(string + "<br/>Please enter Description");
    $("#description").attr("class", "yellow");
    success = false;
  }

  return success;
}

