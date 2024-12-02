import axios from "axios";

const url = "http://localhost:5000/books";

export const updateData = async (id, data) => {
  const response = await axios.put(`${url}/${id}`, data);
  return response.data;
};

export const patchData = async (id, data) => {
  const response = await axios.patch(`${url}/${id}`, data);
  return response.data;
};
