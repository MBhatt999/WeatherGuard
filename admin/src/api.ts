import axios from "axios";

export const api = axios.create({
  baseURL: "https://weatherguard-ijs5.onrender.com",
  withCredentials: true,
});