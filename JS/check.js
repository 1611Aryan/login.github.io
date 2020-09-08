// JavaScript Document
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}


///////////////////////////////////////////////////////////////////////////
$('#submit').click(function () {
    $("#message").css("color","red");
  var error = "";
  var missing = "";
  var success = "SignUp Successful";
  if ($('#email').val() == "") {
    missing += "Please enter your Email Address";
  }
  if ($('#phone').val() == "") {
    missing += "<br>Please enter your Phone Number";
  }
  if ($('#password').val() == "") {
    missing += "<br>Please enter your password";
  }
  if ($('#repassword').val() == "") {
    missing += "<br>Please confirm your passsword";
  }
  if (isEmail($('#email').val()) == false) {
    error += "<br>Invalid Email Address";
  }
  if ($.isNumeric($('#phone').val()) == false) {
    error += "<br>Invalid Phone Number";
  }
  if ($("#password").val() != $("#repassword").val()) {
    error += "<br>Passwords don't Match";
  }
  $("#message").html(missing + error);
  if (missing == "" && error == "") {
      $("#message").css("color","green")
    $("#message").html(success);
  }
})
