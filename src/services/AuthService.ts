import axios from "axios";

const url = "https://localhost:3000";

type AuthType = {
  username: string;
  password: string;
};

const authentication = async ({ username, password }: AuthType) => {
  try {
    const response = await axios.post(`${url}/auth/login`, {
      username,
      password,
    });
    console.log(response.data);
    // Handle successful login, e.g., save token to local storage and redirect
  } catch (error) {
    console.error("Login failed:", error);
    // Handle login failure, e.g., display error message
  }
};

export { authentication };
