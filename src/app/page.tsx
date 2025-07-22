async function getPosts() {
  const res = await fetch('http://localhost:3000/api/posts');
  return res.json();
}

export default async function HomePage() {
  //const posts = await getPosts();

  return (
    <main>
      <h1>My Posts</h1>
      <ul> TEST1
        {/* {
        posts.map((post: any) => (
          <li key={post._id}>{post.title}</li>
        ))
        } */}
      </ul>
    </main>
  );
}
