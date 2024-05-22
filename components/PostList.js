import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import swal from "sweetalert2";

const PostListPage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  // fetch all posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/v1/blogs");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPosts();
  }, []);

  if (!posts.length) {
    return <p>No blog posts available.</p>;
  }

  // delete post function
  const handleDelete = async (id) => {
    try {
      const result = await swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3A9E1E",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const res = await fetch(
          `http://localhost:5000/api/v1/delete-blog/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (res.ok) {
          swal.fire("Deleted!", "Your post has been deleted.", "success");
          setPosts(posts.filter((post) => post.id !== id));
        } else {
          swal.fire("Failed!", "Failed to delete the post.", "error");
        }
      }
    } catch (error) {
      swal.fire("Error!", "Error deleting post.", "error");
      console.error("Error deleting post:", error);
    }
  };

  return (
    <>
      <div className="mb-20">
        {error && <p className="text-red-500">{error}</p>}
        <div className="my-10 w-full rounded-full mx-auto">
          <h3 className="bg-gray-300 text-4xl font-bold p-5 text-center">
            Posts List
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* Table head */}
            <thead className="text-center bg-gray-600 text-white">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Publish Date</th>
                <th>Title</th>
                <th>description</th>
                <th>Author Name</th>
                <th>See Full Post</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            {/* Table body */}
            <tbody className="text-center font-medium">
              {posts?.map((post, index) => (
                <tr key={post?.id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="">
                      <div className="avatar">
                        <div className="mask rounded-full ">
                          <Image
                            src={post?.blog_image}
                            alt="Avatar Tailwind CSS Component"
                            width={50}
                            height={50}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td> {post.publish_date}</td>
                  <td>
                    {post?.title?.length > 20
                      ? post?.title?.slice(0, 20) + "..."
                      : post?.title}
                  </td>
                  <td>
                    {post?.description?.length > 20
                      ? post?.description?.slice(0, 20) + "..."
                      : post?.description}
                  </td>
                  <td>{post.author_name}</td>
                  <td className="text-center">
                    <Link
                      href={`/post/${post.id}`}
                      className="btn btn-sm bg-gray-600 text-accent hover:text-gray-600 hover:bg-white font-bold"
                    >
                      See Full Post
                    </Link>
                  </td>
                  <td>
                    <Link
                      href={`/edit/${post.id}`}
                      className="btn btn-sm bg-gray-600 text-accent hover:text-gray-600 hover:bg-white font-bold"
                    >
                      <FaRegEdit />
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="btn rounded-lg btn-sm bg-red-600 hover:bg-red-700 text-white"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PostListPage;
