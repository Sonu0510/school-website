function validateForm() {
  // Get values from the form fields
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  // Validate name (it should not be empty)
  if (name === "") {
    alert("Name is required.");
    return false;
  }

  // Validate email (it should be a valid email format)
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Validate message (it should not be empty)
  if (message === "") {
    alert("Message is required.");
    return false;
  }

  // If all fields are valid, allow form submission
  return true;
}
