"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const password = formData.get("password") as string;
  
  if (password === "alto7528") {
    (await cookies()).set("adminAuth", "true", { httpOnly: true, path: "/" });
    redirect("/admin");
  } else {
    throw new Error("Invalid password");
  }
}

export async function logout() {
  (await cookies()).delete("adminAuth");
  redirect("/admin/login");
}
