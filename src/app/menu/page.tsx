import Link from 'next/link';
import { posts } from '@/lib/posts';

export default function MenuPage() {
  return (
    <main>
      <h1>Menu</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
