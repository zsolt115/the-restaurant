import Link from 'next/link';
import { posts } from '@/lib/posts';

export default function HomePage() {
  return (
    <main>
      <h1>My Blog</h1>
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

// async function getPosts() {
//   const res = await fetch('http://localhost:3000/api/posts');
//   return res.json();
// }

// export default async function HomePage() {
//   //const posts = await getPosts();

//   return (
//     <main>
//       <h1>Welcome</h1>
//       <ul> My Posts
//         {/* {
//         posts.map((post: any) => (
//           <li key={post._id}>{post.title}</li>
//         ))
//         } */}
//       </ul>
//     </main>
//   );
// }
