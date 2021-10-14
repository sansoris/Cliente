import { API_URL } from "../utils/constants";

export async function postContactenosApi(formData) {

    try {
      const url = `${API_URL}/contactenos`;
      const params = {
        method: "POST",
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
// LÍNEA 6 igual que register 

export async function getComentarios(limit = 1000) {
    try {
      const response = await fetch(
        `${API_URL}/contactenos${limit}`
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
}
  
export function deleteComentario(idContactenos) {
    const contactenos = getComentarios();
  
    const index = contactenos.indexOf(idContactenos);
    if (index > -1) contactenos.splice(index, 1);
  
    localStorage.setItem(CONTACTENOS, JSON.stringify(contactenos));
  }