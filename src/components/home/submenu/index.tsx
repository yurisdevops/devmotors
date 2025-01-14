"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import styles from "./styles.module.scss";
import { X, Menu } from "lucide-react";
import { MenuProps } from "@/utils/menu.type";

interface SubMenuProp {
  menu: MenuProps;
}

export function Submenu({ menu }: SubMenuProp) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <main>
      <section className={styles.submenu}>
        <div className={styles.submenuIcon} onClick={toggleMenu}>
          <Menu size={34} color="#121212" className={styles.icon} />
          Menu
        </div>
        <ul className={`${styles.ul} ${open ? styles.open : ""}`}>
          {open && (
            <button onClick={toggleMenu}>
              <X size={54} color="#121212" className={styles.closeButton} />
            </button>
          )}
          {menu.objects.map((item) => (
            <li key={item.title}>
              <Link href={`/post/${item.slug}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
