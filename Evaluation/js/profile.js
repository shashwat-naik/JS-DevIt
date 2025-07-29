document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("profileName").value = localStorage.getItem("name") || "";
  document.getElementById("profileEmail").value = localStorage.getItem("email") || "";

  const editBtn = document.getElementById("editBtn");
  const saveBtn = document.getElementById("saveBtn");
  const previewBtn = document.getElementById("previewBtn");

  editBtn.addEventListener("click", () => {
    document.querySelectorAll("#profileForm input").forEach(input => input.disabled = false);
    saveBtn.disabled = false;
  });

  saveBtn.addEventListener("click", () => {
    // Save to localStorage
    localStorage.setItem("dob", document.getElementById("profileDob").value);
    localStorage.setItem("age", calculateAge(document.getElementById("profileDob").value));

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
