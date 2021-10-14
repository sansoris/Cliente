import { API_URL } from "../utils/constants"

export async function getUsers(limit = 1000) {
     try {
      const url = `${API_URL}/users`;
      const params = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
      const response = await fetch(url, params);
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }