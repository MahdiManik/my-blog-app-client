import { useRouter } from "next/router";
import PostForm from "@/components/postForm";

export const getServerSideProps = async ({ params }) => {
  try {
    const res = await fetch(
      `https://my-blog-server-eight.vercel.app/api/v1/blog/${params.id}`
    );
    const post = await res.json();
    if (!post) {
      throw new Error("Post not found");
    }

    return { props: { post } };
  } catch (error) {
    console.error("Error fetching post data:", error);
    return { props: { post: null } };
  }
};

const EditPost = ({ post }) => {
  const router = useRouter();

  const handleEditPost = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const blog_image = form.blogImage.value;
    const description = form.description.value;
    const publish_date = form.publishDate.value;
    const author_name = form.authorName.value;

    const updatedPost = {
      title,
      blog_image,
      description,
      publish_date,
      author_name,
    };
    console.log("updatedPost", updatedPost);

    try {
      const res = await fetch(
        `https://my-blog-server-eight.vercel.app/api/v1/update-blog/${post?.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedPost),
        }
      );

      const result = await res.json(); // Parse the response

      console.log("Response from backend:", result);

      if (res.ok) {
        router.push(`/post/${post?.id}`);
      } else {
        console.error("Failed to update the post");
        console.error("Response from backend:", result);
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div className="bg-white">
      <h1 className="bg-gray-300 text-4xl font-bold p-5 my-8 text-center w-4/5 mx-auto">
        Edit This Post
      </h1>
      <PostForm post={post} handleSubmit={handleEditPost} />
    </div>
  );
};

export default EditPost;
