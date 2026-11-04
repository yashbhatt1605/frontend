const BIKE_API =
  "https://6a6212aa1bffb2ffab8ae502.mockapi.io/bikesdetails/bikesdetails";

export const getBikes = async () => {
  const response = await fetch(BIKE_API);
  if (!response.ok) throw new Error("Failed to fetch bikes");
  return response.json();
};

export const addBike = async (bike) => {
  const response = await fetch(BIKE_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bike),
  });
  if (!response.ok) throw new Error("Failed to add bike");
  return response.json();
};

export const updateBike = async (id, bike) => {
  const response = await fetch(`${BIKE_API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bike),
  });
  if (!response.ok) throw new Error("Failed to update bike");
  return response.json();
};

export const deleteBike = async (id) => {
  const response = await fetch(`${BIKE_API}/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete bike");
  return true;
};
