// storage.js
async function fetchJSONData() {
  const res = await fetch("data.json");
  const data = await res.json();
  return data;
}

function getUserData() {
  // Get from localStorage if available
  const storedData = localStorage.getItem("profileData");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return null;
}

function saveUserData(data) {
  localStorage.setItem("profileData", JSON.stringify(data));
}
