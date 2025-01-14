"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export function Header() {
  const [top, setTop] = useState<boolean>(true); // Assume que a página começa no topo

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY <= 10);
    };

    // Adiciona o listener apenas no cliente
    window.addEventListener("scroll", handleScroll);

    // Define o estado inicial no cliente
    handleScroll();

    // Cleanup do event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${!top ? styles.fixed : styles.background}`}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentLogo}>
            <Link href="/">Dev Motors</Link>
          </div>

          <nav className={styles.nav}>
            <Link href="/">HOME</Link>
            <Link href="/#servicos">SERVIÇOS</Link>
            <Link href="/#contatos">CONTATOS</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
