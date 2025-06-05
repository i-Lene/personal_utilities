export default function BlogPostForm({ post, onSave, onDelete }) {
  const handleSave = () => {
    const title = document.getElementById("post-title").value;
    const content = document.getElementById("post-content").value;
    const author = document.getElementById("post-author").value;
    const date = document.getElementById("post-date").value;

    onSave({
      ...post,
      title,
      content,
      author,
      date: new Date(date).toISOString(),
    });
  };
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      onDelete(post.id);
    }
  };
  return (
    <div className="blog-post-form">
      <h2>{post ? "Edit Post" : "New Post"}</h2>
      <input
        id="post-title"
        type="text"
        placeholder="Title"
        defaultValue={post ? post.title : ""}
      />
      <textarea
        id="post-content"
        placeholder="Content"
        defaultValue={post ? post.content : ""}
      />
      <div className="form-group">
        <input
          id="post-author"
          type="text"
          placeholder="Author"
          defaultValue={post ? post.author : ""}
        />
        <input
          id="post-date"
          type="date"
          defaultValue={
            post ? new Date(post.date).toISOString().split("T")[0] : ""
          }
        />
      </div>

      <button onClick={handleSave}>Save</button>
      {post && <button onClick={handleDelete}>Delete</button>}
    </div>
  );
}
