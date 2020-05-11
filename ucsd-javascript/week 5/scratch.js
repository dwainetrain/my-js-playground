function validateForm(e) {
  const form = document.forms;
  validateName();
  validateGender();
  validateHobbies();
  validateFavShow();
  validateComments();
  //   for(let i of form[0]){
  //   console.log(i.value)}

  // so you could make a large loop over everything
  // that might not work, because checkboxes and radio buttons have different validation checks
  // Switch structure?

  function validateName() {
    var name = document.getElementsByName("fullname");
    if (name[0].value === name[0].defaultValue) {
      e.preventDefault();
      let field = document.createTextNode("Please enter your name");
      document.body.appendChild(field);
    }
  }

  function validateGender() {
    var check = function() {
      var gender = document.getElementsByName("gender");
      for (i of gender) {
        if (i.checked) {
          return true;
        }
      }
      return false;
    };

    if (!check()) {
      e.preventDefault();
      let field = document.createTextNode("Please enter your gender.");
      document.body.appendChild(field);
    }
  }

  function validateHobbies() {
    var check = function() {
      var hobbies = document.getElementsByName("hobbies[]");
      console.log(hobbies);
      for (i of hobbies) {
        if (i.checked) {
          return true;
        }
      }
      return false;
    };

    if (!check()) {
      e.preventDefault();
      let field = document.createTextNode("Please pick your hobbies.");
      document.body.appendChild(field);
    }
  }

  function validateFavShow() {
    var show = document.getElementsByName("show");

    if (show[0].value === "") {
      e.preventDefault();
      let field = document.createTextNode("Please pick a favorite show, ");
      document.body.appendChild(field);
    }
  }

  function validateComments() {
    var comment = document.getElementsByName("comments");

    if (comment[0].value === comment[0].defaultValue) {
      e.preventDefault();
      let field = document.createTextNode("Please add a comment, ");
      document.body.appendChild(field);
    }
  }
}

const button = document.querySelector("input[name=submit]");
button.addEventListener("click", e => {
  validateForm(e);
});
