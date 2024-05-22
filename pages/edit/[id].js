import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// Fetch post data from API
export const getServerSideProps = async ({ params }) => {
  try {
    const res = await fetch(`http://localhost:5000/api/v1/blog/${params.id}`);
    const post = await res.json();

    return { props: { post } };
  } catch (error) {
    console.error("Error fetching post data:", error);
    return { props: { post: null } };
  }
};

const EditPost = ({ post }) => {
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [authorName, setAuthorName] = useState(post.author_name);
  const [authorImage, setAuthorImage] = useState(post.author_image);
  const [blogImage, setBlogImage] = useState(post.blog_image);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPost = {
      title,
      description,
      author_name: authorName,
      author_image: authorImage,
      blog_image: blogImage,
    };

    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/update-blog/${post.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedPost),
        }
      );

      if (res.ok) {
        router.push(`/post/${post.id}`);
      } else {
        console.error("Failed to update the post");
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div className="w-full p-12 bg-base-100 shadow-xl">
      <div className="card w-5/6 mx-auto">
        <h2 className="text-center text-4xl my-5">Edit Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-lg">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-lg">Author Name:</label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-lg">Author Image URL:</label>
            <input
              type="text"
              value={authorImage}
              onChange={(e) => setAuthorImage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-lg">Blog Image URL:</label>
            <input
              type="text"
              value={blogImage}
              onChange={(e) => setBlogImage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded"
          >
            Update Post
          </button>
          <Link
            href={`/post/${post.id}`}
            className="text-accent mt-5 block text-center"
          >
            Back to Post
          </Link>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
