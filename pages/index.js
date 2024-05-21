import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("http://localhost:5000/api/v1/blogs");
      const data = await res?.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  console.log(posts);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter?.className}`}
    >
      <div>
        <h2 className="text-6xl">My Blogs</h2>
      </div>
    </main>
  );
};

export default HomePage;
