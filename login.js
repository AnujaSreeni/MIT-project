function validateLogin() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return false;
  }

  if (password.length<5) {
    alert("Password must be atleast 5 characters long.");
    return false;
  }
  alert('Login successful!');
  window.location.href = 'home.html';
  return false;
}