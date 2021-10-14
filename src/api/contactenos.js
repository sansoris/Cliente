import { API_URL } from "../utils/constants";

export async function postContactenosApi() {
    try {
        const response = await fetch(`${API_URL}/contactenos`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}