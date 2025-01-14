import styles from "./styles.module.scss";
import Image from "next/image";
import { HomeProps } from "@/utils/home.type";

export function Services({ object }: HomeProps) {
  return (
    <>
      <section className={styles.containerAbout} id="servicos">
        <article className={styles.innerAbout}>
          <h1 className={styles.title}>Sobre</h1>
          <p>{object.metadata.about.description}</p>
        </article>
        <div className={styles.bannerAbout}>
          <Image
            src={object.metadata.about.banner.url}
            alt={"Imagem ilustrativa sobre a empresa."}
            className={styles.imageAbout}
            quality={100}
            fill={true}
            priority
            sizes="(max-width:480px) 100vw, (max-width:1024px) 75vw, 50vw"
          ></Image>
        </div>
      </section>

      <h2 className={styles.titleServices}>Conheça nossos serviços</h2>

      <section className={styles.services}>
        {object.metadata.services.map((service) => (
          <article key={service.description} className={styles.service}>
            <div className={styles.innerService}>
              <Image
                src={service.image.url}
                alt={"Imagem do serviço"}
                className={styles.imageService}
                quality={100}
                fill={true}
                priority
                sizes="(max-width:480px) 100vw, (max-width:1024px) 75vw, 50vw"
              ></Image>
            </div>
            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
