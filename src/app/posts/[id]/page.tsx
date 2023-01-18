import Post from "../interfaces";
import Comments from "./components/comments";

interface PageProps {
  params: { id: string };
}

const getPost = (id: string): Promise<Post> => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  }).then((resp) => resp.json());
};

const getPosts = (): Promise<Post[]> => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

export default async function PostPage({ params }: PageProps) {
  const { id } = params;
  const post = await getPost(id);
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Comments id={id} />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();

  const trimmedPost = posts.slice(0, 10);

  return trimmedPost.map((post) => ({
    id: post.id.toString(),
  }));
}
