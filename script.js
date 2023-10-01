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
