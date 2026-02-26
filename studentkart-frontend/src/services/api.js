//const BASE_URL = "http://localhost:5000";
const BASE_URL = "https://studentkart.onrender.com";

export const getMaterials = async (year, subject, category) => {
  let url = `${BASE_URL}/materials`;

  const params = [];
  if (year) params.push(`year=${year}`);
  if (subject) params.push(`subject=${subject}`);
  if (category) params.push(`category=${category}`);

  if (params.length > 0) {
    url += `?${params.join("&")}`;
  }

  const res = await fetch(url);
  return res.json();
};

export const registerUser = async (userData) => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  return res.json();
};

export const loginUser = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const addMaterial = async (materialData) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/materials`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(materialData),
  });
  return res.json();
};

export const deleteMaterial = async (id) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/materials/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

export const updateMaterial = async (id, updatedData) => {
  const res = await fetch(`${BASE_URL}/materials/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(updatedData),
  });

  if (!res.ok) throw new Error("Update failed");

  return res.json();
};

// Add bookmark
export const addBookmark = async (materialId) => {
  const res = await fetch(`${BASE_URL}/users/bookmark/${materialId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.json();
};

// Remove bookmark
export const removeBookmark = async (materialId) => {
  const res = await fetch(`${BASE_URL}/users/bookmark/${materialId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.json();
};

// Get bookmarks
export const getBookmarks = async () => {
  const res = await fetch(`${BASE_URL}/users/bookmarks`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.json();
};
