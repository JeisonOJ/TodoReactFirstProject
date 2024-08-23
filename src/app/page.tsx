'use client';
import Link from "next/link";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <>
      <h1 className="text-center font-bold text-9xl">TO-DO APP</h1>
      <div className="flex justify-center">
      <Link href="/to-do" className="text-center font-bold bg-blue-300 p-4">Go to the APP</Link>

      </div>
      <Counter />
    </>
  );
}
