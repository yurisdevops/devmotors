export async function getDataHome() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/67817d06971b263cbc8fb17c?pretty=true&read_key=${process.env.READ_KEY}&props=slug,title,metadata,type`
    );

    if (!res.ok) {
      throw new Error("Falha na requisição");
    }

    return res.json();
  } catch (error) {
    throw new Error("Falha na requisição");
  }
}
