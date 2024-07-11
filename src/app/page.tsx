'use client';
import ActionButton from "./action-button";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World, {count}</h1>
      <ActionButton text="Increment" onAction={increment}/>
    </main>
  );
}
