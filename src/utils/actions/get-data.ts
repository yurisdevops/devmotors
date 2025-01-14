import { redirect } from "next/navigation";
import { PostProps } from "../post.type";

export async function getDataHome() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/67817d06971b263cbc8fb17c?pretty=true&read_key=${process.env.READ_KEY}&props=slug,title,metadata,type`,
      { next: { revalidate: 120 } }
    );

    if (!res.ok) {
      throw new Error("Falha na requisição");
    }

    return res.json();
  } catch (error) {
    throw new Error("Falha na requisição");
  }
}

export async function getSubMenu() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&props=slug,title`,
      { next: { revalidate: 120 } }
    );

    if (!res.ok) {
      throw new Error("Falha na requisição");
    }

    return res.json();
  } catch (error) {
    throw new Error("Falha na requisição do submenu");
  }
}

export async function getItemBySlug(itemSlug: string): Promise<PostProps> {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects/`;

  const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug: itemSlug,
    }),
    props: "slug, title, content, metadata",
    read_key: process.env.READ_KEY as string,
  });

  const url = `${baseUrl}?${queryParams.toString()}`;

  try {
    const res = await fetch(url, { next: { revalidate: 120 } });

    if (!res.ok) {
      throw new Error("Falha na requisição");
    }

    const data = await res.json();

    // Verifica se a propriedade "objects" existe e retorna a estrutura esperada
    if (data.objects) {
      return { object: data.objects }; // Ajustar como os dados são retornados, se necessário
    } else {
      return { object: [] }; // Retorne um array vazio se não encontrar objetos
    }
  } catch (error) {
    redirect("/");
  }
}
