export const BASE_URL = async (url = "", method = "GET", data = {}) => {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (method !== "GET" && Object.keys(data).length > 0) {
      options.body = JSON.stringify(data);
    }
  
    return fetch(`https://playground.4geeks.com/contact${url}`, options)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        // Manejo de errores
        console.log(error);
      });
  };
  