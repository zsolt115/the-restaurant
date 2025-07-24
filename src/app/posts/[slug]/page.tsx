import { posts } from '@/lib/posts';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }));
}

export default async function PostPage({ params }: Props) {
  params = await params // for the error Error: Route "/posts/[slug]" used `params.slug`. `params` should be awaited before using its properties
  const post = posts.find(p => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{post.content}</p>
      <p>{post.content}</p>
      <p>{post.content}</p>
    </main>
  );
}
