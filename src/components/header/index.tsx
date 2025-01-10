"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export function Header() {
  const [top, setTop] = useState(true);

  const handleScroll = () => {
    window.screenY > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return(
    <header className={`${styles.header} ${!top ? styles.fixed : styles.background}`}>

      <div className={styles.container}>

        <div className={styles.content}>

          <div className={styles.contentLogo}>
            <Link href="/">
              Dev Motors
            </Link>
          </div>

          <nav className={styles.nav}>
            <Link href="/">
              HOME
            </Link>
            <Link href="/#servicos">
              SERVIÇOS
            </Link>
            <Link href="/#contatos">
              CONTATOS
            </Link>
          </nav>

        </div>

      </div>

    </header>
  )
}