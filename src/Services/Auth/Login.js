import url from '../../Constants/Dev'

export default async function Login(data) {
  try {
    const response = await fetch(`${url.BASE_URL_CUSTOMER}auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}