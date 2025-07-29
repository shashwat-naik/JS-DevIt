// Avatar initials
document.addEventListener("DOMContentLoaded", async () => {
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
  let profileData = JSON.parse(localStorage.getItem("profileData"));

  if (!profileData) {
    let response = await fetch("data.json");
    profileData = await response.json();
    localStorage.setItem("profileData", JSON.stringify(profileData));
  }

  renderCards(profileData);
});

function renderCards(data) {
  const cardSection = document.getElementById("cardSection");

  const cardHTML = `
    <div class="col-md-4">
      <div class="card shadow p-3">
        <img src="${data.img}" class="card-img-top rounded" alt="profile" style="height: 200px; object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">
            <strong>Email:</strong> ${data.email} <br>
            <strong>College:</strong> ${data.college} (${data.college_joining_year} - ${data.college_passing_year}) <br>
            <strong>Location:</strong> ${data.city}, ${data.state}, ${data.country} <br>
            <strong>Address:</strong> ${data.address} <br>
            <strong>Gender:</strong> ${data.gender}
          </p>
        </div>
      </div>
    </div>
  `;

  cardSection.innerHTML = cardHTML;
}
