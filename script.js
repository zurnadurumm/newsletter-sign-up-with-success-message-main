document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  let email = document.getElementById("email").value; // Get the value of the email input

  // Store the email value in localStorage
  localStorage.setItem("email", email);

  // Redirect to successful.html
  window.location.href = "success.html";
});
