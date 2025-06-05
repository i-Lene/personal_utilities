export default function BlogPost({ post }) {
  if (!post) return null;
  return (
    <div className="blog-post">
      <h2>{post.title || "Untitled"}</h2>
      <p>{post.content || "No content available."}</p>
      <p>
        <strong>Author:</strong> {post.author || "Unknown"}
      </p>
      <p>
        <strong>Date:</strong>{" "}
        {post.date ? new Date(post.date).toLocaleDateString() : "No date"}
      </p>
    </div>
  );
}
