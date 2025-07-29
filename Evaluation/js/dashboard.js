// Avatar initials
document.addEventListener("DOMContentLoaded", () => {
  const userName = localStorage.getItem("name") || "User";
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  document.getElementById("avatarBtn").textContent = initials;

  // clears the data stored after signing out
  document.getElementById("signoutBtn").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "index.html";
  });

  // later card
});
