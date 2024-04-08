import axios from "axios";

export default async function getProductsListed(token) {
  try {
    const response = await axios.get(
      `${process.env.EXPO_PUBLIC_BASE_URL_PRODUCT}listedByUser`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    if (error.response.status == 500)
      throw new Error(JSON.stringify(error.response.data));
    else throw error;
  }
}
