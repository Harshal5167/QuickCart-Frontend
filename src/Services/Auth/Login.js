import url from "../../Constants/Dev";
import axios from "axios";

export default async function Login(data) {
  try {
    const response = await axios.post(
      `${process.env.EXPO_PUBLIC_BASE_URL_CUSTOMER}auth/login`,
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response;
  } catch (error) {
    if (error.response.status == 401 || error.response.status == 500)
      throw new Error(JSON.stringify(error.response.data));
    else throw error;
  }
}
