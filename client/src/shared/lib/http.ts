import axios from "axios";
import { env } from "./env";

export const http = axios.create({
  baseURL: env.API_URL,   // e.g. http://localhost:3000/api from .env
  timeout: 10_000, // 10 seconds
});

// Centralized error handling (customize later: toasts, logging, etc.)
http.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
