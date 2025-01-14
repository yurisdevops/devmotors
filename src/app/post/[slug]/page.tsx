import { PostProps } from "@/utils/post.type";
import styles from "./styles.module.scss";
import { getItemBySlug } from "@/utils/actions/get-data";
import { Hero } from "@/components/hero";
import { MessageCircleMore } from "lucide-react";
import { Container } from "@/components/container";
import Image from "next/image";

interface Params {
  slug: string;
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const { object }: PostProps = await getItemBySlug(slug);

  return (
    <>
      <Hero
        heading={object[0].title}
        buttonUrl={object[0].metadata.button.url}
        buttonTitle={object[0].metadata.button.title}
        bannerUrl={object[0].metadata.banner.url}
        icon={<MessageCircleMore />}
      />
      <Container>
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            <h1 className={styles.title}>
              {object[0].metadata.description.title}
            </h1>
            <p>{object[0].metadata.description.text}</p>
            {object[0].metadata.description.button_active && (
              <a
                href={object[0].metadata.description.button_url as string}
                target="_blank"
                className={styles.link}
              >
                {object[0].metadata.description.button_title}
              </a>
            )}
          </article>
          <div className={styles.bannerAbout}>
            <Image
              src={object[0].metadata.description.banner.url}
              alt={object[0].title}
              fill
              quality={100}
              className={styles.imageAbout}
              priority
              sizes="(max-width:480px) 100vw, (max-width:1024px) 75vw, 50vw"
            />
          </div>
        </section>
      </Container>
    </>
  );
}
