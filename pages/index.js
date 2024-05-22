// import Image from "next/image";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Banner from "@/components/shared/Banner";
import PostCard from "@/components/ui/postsCard";
import PostListPage from "../components/postList";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const [error, setError] = useState(null);

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

  return (
    <Layout>
      <h1 className="text-center text-5xl font-bold mt-5">Latest Blogs</h1>
      <p className="text-center text-4xl p-4">
        This is the world best blog post platform
      </p>
      <Banner />
      <PostCard posts={posts} />
      {error && <p className="text-red-500">{error}</p>}
      <PostListPage posts={posts} />
    </Layout>
  );
};

export default HomePage;
