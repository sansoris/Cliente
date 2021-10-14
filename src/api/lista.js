import { API_URL } from "../utils/constants"

export async function getUsers(limit = 1000) {
    try {
      const response = await fetch(
        `${API_URL}/content-manager/collection-types/:model/:id`
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }