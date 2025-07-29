document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  //   getting values filled inside of input
  const userName = document.getElementById("name").value; //
  const email = document.getElementById("email").value;

  //   Storing input values in localstorage
  localStorage.setItem("name", userName); //
  localStorage.setItem("email", email);

  window.location.href = "dashboard.html";
});
