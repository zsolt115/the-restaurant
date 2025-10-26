import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{post.content}</p>
      <p>{post.content}</p>
      <p>{post.content}</p>
    </>
  );
}
