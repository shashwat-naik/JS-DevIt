document.addEventListener("DOMContentLoaded", async () => {
  let profileData = JSON.parse(localStorage.getItem("profileData"));

  if (!profileData) {
    let res = await fetch("data.json");
    profileData = await res.json();
    localStorage.setItem("profileData", JSON.stringify(profileData));
  }

  document.getElementById("profileName").value =
    localStorage.getItem("name") || "";
  document.getElementById("profileEmail").value =
    localStorage.getItem("email") || "";
  if (profileData.dob) {
    document.getElementById("profileDob").value = profileData.dob;
    document.getElementById("profileAge").value = calculateAge(profileData.dob);
  }
  const editBtn = document.getElementById("editBtn");
  const saveBtn = document.getElementById("saveBtn");
  const previewBtn = document.getElementById("previewBtn");

  editBtn.addEventListener("click", () => {
    document
      .querySelectorAll("#profileForm input")
      .forEach((input) => (input.disabled = false));
    saveBtn.disabled = false;
  });

  saveBtn.addEventListener("click", () => {
    // Save to localStorage
    profileData.name = document.getElementById("profileName").value;
    profileData.email = document.getElementById("profileEmail").value;
    profileData.dob = document.getElementById("profileDob").value;
    profileData.age = calculateAge(profileData.dob);

    localStorage.setItem("profileData", JSON.stringify(profileData));

    previewBtn.disabled = false;
    alert("Profile saved!");
  });

  previewBtn.addEventListener("click", () => {
    window.location.href = "dashboard.html";
  });
});

function calculateAge(dob) {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
