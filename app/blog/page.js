import Link from "next/link";

export default function blog() {
  return (
    <main>
      <h1>Blogs</h1>
      <p>
        <Link href="/blog/post-1">Blog 1</Link>
      </p>
      <p>
        <Link href="/blog/post-2">Blog 2</Link>
      </p>
    </main>
  );
}
