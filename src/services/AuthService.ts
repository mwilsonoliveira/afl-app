import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

type CredentialsType = {
  email: string;
  password: string;
};

export const authenticate = async ({ email, password }: CredentialsType) => {
  try {
    const response = await api.post("/login", { email, password });
    const token = response.data.access_token;
    await localStorage.setItem("token", token);
    return token;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
