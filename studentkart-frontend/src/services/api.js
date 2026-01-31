const BASE_URL = "http://localhost:5000";

export const getMaterials = async (year, subject) => {
  let url = `${BASE_URL}/materials`;

  const params = [];
  if (year) params.push(`year=${year}`);
  if (subject) params.push(`subject=${subject}`);

  if (params.length > 0) {
    url += `?${params.join("&")}`;
  }

  const res = await fetch(url);
  return res.json();
};
