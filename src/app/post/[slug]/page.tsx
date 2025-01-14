import { Suspense } from "react";
import { Metadata } from "next";
import { Content } from "./components/content";
import styles from "./styles.module.scss";
import { LoadingPost } from "./components/loading";

interface MetadataProps {
  slug: string;
}

interface Params {
  slug: string;
}

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<MetadataProps>;
// }): Promise<Metadata> {
//   const { slug } = await params;

//   try {
//     const { object }: PostProps = await getItemBySlug(slug);

//     return {
//       title: `DevMotors | ${object[0].title}`,
//       description: object[0].metadata.description.text,
//       keywords: [
//         "oficina",
//         "carros",
//         "carros clássicos",
//         "manuntencao",
//         "alinhamento",
//         "pintura",
//         "troca de oleo",
//         "oficina de carros",
//       ],
//       openGraph: {
//         title: `DevMotors | ${object[0].title}`,
//         images: [`${object[0].metadata.banner.url}`],
//       },
//       robots: {
//         index: true,
//         follow: true,
//         nocache: true,
//         googleBot: {
//           index: true,
//           follow: true,
//           noimageindex: true,
//         },
//       },
//     };
//   } catch (err) {
//     return {
//       title: "DevMotors - Sua oficina especializada",
//       description: "Especialista em carros clássicos",
//     };
//   }
// }

export default async function Page({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  return (
    <>
      <Suspense fallback={<LoadingPost />}>
        <Content slug={slug} />
      </Suspense>
    </>
  );
}
