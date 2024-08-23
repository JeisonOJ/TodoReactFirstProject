import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    // <div className="flex justify-center items-center flex-col min-h-screen gap-4">
    <div className="flex items-center flex-col gap-4 mt-8">
      <p className="text-3xl font-bold">
        Counter: <span>{count}</span>{" "}
      </p>
      <div className="flex gap-4">
        <button className="bg-blue-400 p-4" onClick={() => setCount(count - 1)}>Decrease</button>
        <button className="bg-blue-400 p-4" onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </div>
  );
}
