// import Image from "next/image";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PostList from "../components/PostList";
import Banner from "@/components/shared/Banner";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("http://localhost:5000/api/v1/blogs");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  console.log(posts);
  return (
    <Layout>
      <h1 className="text-center text-5xl font-bold mt-5">
        Latest Blogs {posts.length}
      </h1>
      <Banner />
      <PostList posts={posts} />
    </Layout>
  );
};

export default HomePage;
