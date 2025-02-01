import axios from "axios";

const BASE_URL = "http://localhost:5000/api/matches";

// Fetch all matches
export const fetchMatches = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to fetch matches");
  }
};

// Fetch a single match by ID
export const fetchMatchById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to fetch match");
  }
};

// Create a new match
export const createMatch = async (matchData) => {
  try {
    const response = await axios.post(BASE_URL, matchData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to create match");
  }
};

// Update a match by ID
export const updateMatch = async (id, matchData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, matchData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to update match");
  }
};

// Delete a match by ID
export const deleteMatch = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Failed to delete match");
  }
};
