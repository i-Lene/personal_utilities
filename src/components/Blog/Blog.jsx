import { useEffect, useState } from "react";
import BlogPost from "./BlogPost";
import BlogPostForm from "./BlogPostForm";
import { addClassToBody } from "../../utils/utils_funcs";
import "./Blog.scss";

const LOCAL_STORAGE_KEY = "my_blog_posts";

export default function Blog({ posts: initialPosts = [] }) {
  const [posts, setPosts] = useState(initialPosts);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const cleanup = addClassToBody("blog_page");
    return () => {
      cleanup && cleanup();
    };
  }, []);

    useEffect(() => {
      const storedPosts = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedPosts) {
        setPosts(JSON.parse(storedPosts));
      }
    }, []);


      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
      }, [posts]);


  const handleSave = (updatedPost) => {
    setPosts((prev) =>
      prev.some((p) => p.id === updatedPost.id)
        ? prev.map((p) => (p.id === updatedPost.id ? updatedPost : p))
        : [...prev, { ...updatedPost, id: Date.now() }]
    );
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
    setEditingId(null);
  };

  if (!posts || posts.length === 0) {
    return (
      <div className="blog">
        <h1>Blog</h1>
        <p>No posts available.</p>
        <BlogPostForm post={null} onSave={handleSave} onDelete={handleDelete} />
      </div>
    );
  }

  return (
    <div className="blog">
      <h1>Blog</h1>
      <button onClick={() => setEditingId("new")}>New Post</button>
      {editingId === "new" && (
        <BlogPostForm post={null} onSave={handleSave} onDelete={handleDelete} />
      )}
      <div className="blog-posts">
        {posts.map((post) =>
          editingId === post.id ? (
            <BlogPostForm
              key={post.id}
              post={post}
              onSave={handleSave}
              onDelete={handleDelete}
            />
          ) : (
            <div key={post.id} className="blog-post-outer">
              <BlogPost post={post} />
              <button onClick={() => setEditingId(post.id)}>Edit</button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
