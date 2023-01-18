import LikeButton from "./components/buttons/like.button";
import Post from "./interfaces";
import Link from "next/link";

const getPosts = async (): Promise<Post[]> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  }).then((res) => res.json());
};

export default async function PostsPage() {
  const posts = await getPosts();
  return posts
    .map((post) => {
      return (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <LikeButton id={parseInt(post.id)} />
        </Link>
      );
    })
    .slice(0, 5);
}
