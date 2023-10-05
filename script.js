// -- SELECTORS --
// all elements selector
$(document).ready(function () {
  $("*").css("background-color", "yellow");
});

// id selector
$(document).ready(function () {
  $("#idSelector").css("background-color", "red");
});

// class selector
$(document).ready(function () {
  $(".classSelector").css("background-color", "green");
});

// hidden selectors
$(document).ready(function () {
  $("p:hidden").show(2000);
});

$(document).ready(function () {
  $("#first_form").submit(function (e) {
    e.preventDefault();
    var first_name = $("#first_name").val();
    var last_name = $("#last_name").val();
    var email = $("#email").val();
    var password = $("#password").val();

    $(".error").remove();

    if (first_name.length < 1) {
      $("#first_name").after(
        '<span class="error">This field is required</span>'
      );
    }
    if (last_name.length < 1) {
      $("#last_name").after(
        '<span class="error">This field is required</span>'
      );
    }

    if (password.length < 8) {
      $("#password").after(
        '<span class="error">Password must be at least 8 characters long</span>'
      );
    }
  });
});

// without ajax
let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  //   console.log(this.readyState);
  if (this.readyState === 4 && this.status == 200) {
    let responseObject = JSON.parse(this.responseText);
    console.log(responseObject);
  }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhttp.send();

// with ajax
$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts",
  type: "GET",
  dataType: "json",
  success: function (responseObject) {
    console.log(responseObject);
  },
  error: function () {
    console.log("error in request");
  },
});
