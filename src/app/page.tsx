import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-semibold text-blue-600">
        Tailwind v3 works perfectly!
      </h1>
    </main>
  );
}