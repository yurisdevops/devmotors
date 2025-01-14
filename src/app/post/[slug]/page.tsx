import { PostProps } from "@/utils/post.type";
import styles from "./styles.module.scss";
import { getItemBySlug } from "@/utils/actions/get-data";
import { Hero } from "@/components/hero";
import { MessageCircleMore } from "lucide-react";
export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
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
    </>
  );
}
