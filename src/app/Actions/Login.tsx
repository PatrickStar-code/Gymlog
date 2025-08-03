"use server";
import { cookies } from "next/headers";
import { TokenJwt } from "../Types";

export default async function Login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const cookieStore = await cookies();

  const route = "http://localhost:8080/login";
  const errors: string[] = [];
  let successOperation = false;
  let info = null;

  if (!email || !password) {
    errors.push("Email and password are required.");
    return { info, errors, successOperation };
  }

  try {
    const res = await fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      errors.push(`Server responded with status ${res.status}`);
      return { info, errors, successOperation };
    }

    const data = await res.json();
    info = data as TokenJwt;

    cookieStore.set("refresh-token", info.refreshJwt, {
      secure: true,
      path: "/",
    });
    successOperation = true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    errors.push(err.message ?? "Unknown error occurred.");
  }

  return { info, errors, successOperation };
}
