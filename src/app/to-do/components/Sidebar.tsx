"use client";

import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-100 flex flex-col">
      <h2 className="text-2xl font-bold text-center p-4">
        App <span className="text-blue-300">to-do</span>
      </h2>

      <div className="flex flex-col justify-center items-center">
        <Image
          src="https://avatars.githubusercontent.com/u/110923804?v=4"
          alt="Avatar User"
          width={100}
          height={100}
          className="rounded-full"
        />
        <h4 className="mt-3 text-xl">Jeison Ortiz</h4>
      </div>
      <div className="flex flex-col">
        <Link href="/to-do/task-list">Task List</Link>
        <Link href="/to-do/task-done">Finished tasks</Link>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
