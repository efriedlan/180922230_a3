function validateForm() {
  // Email Validation
    var email = document.forms["chimpform"]["email"].value;
    var emailDot = email.split('.').length - 1;
    var emailAt = email.split('@').length - 1;

    if (email.length > 128 || email.length == 0) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (emailAt !== 1) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (emailDot < 1) {
      alert("Please enter a valid email address.");
      return false;
    }

// Username Validation
  var user = document.forms["chimpform"]["username"].value;
  var userNumber = user.charAt("0");

  if (user.length > 24 || user.length < 8) {
    alert("Please enter a valid username.");
    return false;
  }

  if (userNumber == 1 ||
      userNumber == 2 ||
      userNumber == 3 ||
      userNumber == 4 ||
      userNumber == 5 ||
      userNumber == 6 ||
      userNumber == 7 ||
      userNumber == 8 ||
      userNumber == 9 ||
      userNumber == 0) {
    alert("Please enter a valid username.");
    return false;
  }

  if (user.includes(" ") == true) {
    alert("Please enter a valid username.");
    return false;
  }


// Password Validation
  var password = document.forms["chimpform"]["password"].value;
  var passwordNumber = password.charAt("0");

  if (password.length > 24 || password.length < 8) {
    alert("Please enter a valid password.");
    return false;
  }

  if (passwordNumber == 1 ||
      passwordNumber == 2 ||
      passwordNumber == 3 ||
      passwordNumber == 4 ||
      passwordNumber == 5 ||
      passwordNumber == 6 ||
      passwordNumber == 7 ||
      passwordNumber == 8 ||
      passwordNumber == 9 ||
      passwordNumber == 0) {
    alert("Please enter a valid password.");
    return false;
  }

  if (password.includes(" ") == true) {
    alert("Please enter a valid password.");
    return false;
  }
}

function revealPassword() {
  var visibility = document.getElementById("password");
 if (visibility.type == "password") {
   visibility.type = "text";
 } else {
   visibility.type = "password";
 }
}
