"use server";
import { jwtDecode } from "jwt-decode";

export async function getDataFromUser({
  token,
  refreshToken,
}: {
  token: string;
  refreshToken: string;
}) {
  console.log("Refresh Token:", refreshToken);
  console.log("Token:", token);
  if (!token) throw new Error("No token found");
  token = token.trim();
  const decodedToken = jwtDecode(refreshToken);

  const res = await fetch(
    `http://localhost:8080/GymLog/users/${decodedToken.sub}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        credentials: "omit",
      },
    }
  );

  console.log(res);
  if (!res.ok) throw new Error("Failed to get user data");

  return await res.json();
}
