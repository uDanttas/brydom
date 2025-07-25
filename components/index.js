// pages/index.js
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona direto para login
    router.replace("/login");
  }, [router]);

  return null;
}
