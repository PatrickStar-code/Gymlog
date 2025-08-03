"use server";

export async function verifyRefreshTokenClient(refreshToken: string) {
  console.log(refreshToken);
  const res = await fetch("http://localhost:8080/refresh-token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  });

  if (!res.ok) throw new Error("Failed to refresh token");

  return await res.json();
}
