import url from "../../Constants/Dev";
import axios from "axios";

export default async function Login(data) {
  try {
    console.log(data);
    const response = await axios.post(
      `${process.env.EXPO_PUBLIC_BASE_URL_CUSTOMER}auth/login`,
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response.data);
    // console.log(response.status);
    return response;
  } catch (error) {
    throw error
  }
}
