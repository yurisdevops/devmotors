"use client";

import Link from "next/link";
import styles from "./error.module.scss";

export default function Error() {
  return (
    <div className={styles.error}>
      <h1>Error 404 - Página não encontrada</h1>
      <Link href={"/"}>Retorne ao HOME</Link>
    </div>
  );
}
