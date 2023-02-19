"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <main className="flex justify-center content-center p-5">
      <div className="flex flex-col space-y-5">
        <h1 className="text-6xl content-center">Hello World</h1>
        <div className="divider">Counter</div>
        <h2 className=" flex justify-center content-center text-6xl text-bold">
          {count}
        </h2>

        <button
          className="btn"
          onClick={(e) => {
            setCount(count + 1);
          }}
        >
          ADD + 1
        </button>
        <button className="btn" onClick={(e) => setCount(count - 1)}>
          REM - 1
        </button>
        <button className="btn" onClick={(e) => setCount(0)}>
          RESET
        </button>
      </div>
    </main>
  );
}
