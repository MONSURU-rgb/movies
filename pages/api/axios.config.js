import axios from "axios";
const NewInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {},
});

// API key
// hash key
