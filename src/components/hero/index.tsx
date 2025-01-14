import styles from "./styles.module.scss";
import Image from "next/image";
import { ReactNode } from "react";

type HeroProps = {
  heading: string;
  buttonUrl: string;
  buttonTitle: string;
  bannerUrl: string;
  icon: ReactNode;
};

export function Hero({
  heading,
  bannerUrl,
  buttonTitle,
  buttonUrl,
  icon,
}: HeroProps) {
  return (
    <main className={styles.main}>
      <div className={styles.containerHero}>
        <h1 className={styles.title}>{heading}</h1>
        <a href="" target="_blank" className={styles.link}>
          {icon}
          {buttonTitle}
        </a>
      </div>
      <div className={styles.contentBanner}>
        <Image
          src={bannerUrl}
          alt={heading}
          priority
          sizes="(max-width:480px) 100vw, (max-width:1024px) 75vw, 50vw"
          quality={100}
          fill={true}
          className={styles.banner}
        />
      </div>
    </main>
  );
}
