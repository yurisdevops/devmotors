import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Services } from "@/components/home/services";
import { Submenu } from "@/components/home/submenu";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/actions/home.type";
import { MessageCircleMore } from "lucide-react";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();

  return (
    <main>
      <Submenu />
      <Hero
        heading={object.metadata.heading}
        buttonUrl={object.metadata.cta_button.url}
        buttonTitle={object.metadata.cta_button.title}
        bannerUrl={object.metadata.banner.url}
        icon={<MessageCircleMore />}
      />

      <Container>
        <Services object={object} />
      </Container>
    </main>
  );
}
