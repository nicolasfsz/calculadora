"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Text from "../components/text";
import Text2 from "../components/text2";
import { useState } from "react";


export default function Pares() {
  const [a, setA] = useState(0);

  return (
    <>
      <button onClick={(e) => {
        setA(a + 1);
      }}>Somar</button>

      {
        a % 2 === 0 ? <Text /> : <Text2 />
      }

      <p>{a}</p>
    </>
  );
}
