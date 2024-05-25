import PostForm from "@/stories/postForm/postForm";
import { useRouter } from "next/router";

const CreatePostPage = () => {
  const router = useRouter();

  const handleCreatePost = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const blog_image = form.blogImage.value;
    const description = form.description.value;
    const publish_date = form.publishDate.value;
    const author_name = form.authorName.value;

    const postData = {
      title,
      blog_image,
      description,
      publish_date,
      author_name,
    };

    try {
      const res = await fetch(
        "https://my-blog-server-eight.vercel.app/api/v1/create-blog",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      if (res.ok) {
        router.push("/");
      } else {
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="bg-white">
      <h1 className="bg-gray-300 text-4xl font-bold p-5 my-8 text-center w-4/5 mx-auto">
        Create New Post
      </h1>
      <PostForm handleSubmit={handleCreatePost} />
    </div>
  );
};

export default CreatePostPage;
