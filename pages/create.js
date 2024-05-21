import Layout from "../components/Layout";
import PostForm from "../components/PostForm";

const CreatePostPage = () => {
  const handleSubmit = async (formData) => {
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      window.location.href = "/";
    }
  };

  return (
    <Layout>
      <h1>Create New Post</h1>
      <PostForm onSubmit={handleSubmit} />
    </Layout>
  );
};

export default CreatePostPage;
