"use server";
export default async function Login({
  email,
  password,
}: Readonly<{
  email: string;
  password: string;
}>) {
  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .catch((error) => console.warn(error));
}
