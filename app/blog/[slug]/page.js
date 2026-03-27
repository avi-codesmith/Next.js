export default function BlogPost({ params }) {
  return (
    <main>
      <h1>This is the blog post....</h1>
      <p>{params.slug}</p>
    </main>
  );
}
