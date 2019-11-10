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

  //Country Validation
      var country = document.forms["chimpform"]["country-dropdown"].value;
      if (country !== "Canada" && country !== "United States") {
        alert("Please select a country.");
        return false;
      }

  //Description Validation
        var description = document.forms["chimpform"]["image-description"].value;
        if (description.length < 1) {
          alert("Please enter a description.");
          return false;
        }

  //Avatar Validation
    if (document.forms["chimpform"]["avatar-image"].value == "") {
      alert("Please choose an image to upload");
      return false;
    }
}
