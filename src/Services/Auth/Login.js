import url from '../../Constants/Dev'

export default async function Login(data) {
  try {
    const response = await fetch(`${process.env.EXPO_PUBLIC_URL}auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(response);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}