function validateForm() {
  // Get values from the form fields
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  // Validate name (it should not be empty)
  if (name === "") {
    showMessage("Name is required.", false);
    return false;
  }

  // Validate email (it should be a valid email format)
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    showMessage("Please enter a valid email.", false);
    return false;
  }

  // Validate message (it should not be empty)
  if (message === "") {
    showMessage("Message is required.", false);
    return false;
  }

  // If all fields are valid, allow form submission
  return true;
}
