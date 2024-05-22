import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";

const PostList = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div className="card w-full bg-base-100 shadow-xl">
          <figure>
            <Image
              src={post.blog_image}
              width={600}
              height={100}
              alt="blog image"
              className="rounded-xl h-64"
            />
          </figure>
          <div className="card-body">
            <p className="flex items-center justify-center text-accent bg-cyan-100 w-44 rounded-full py-1">
              <FaCalendar className="mr-2" />
              {post.publish_date}
            </p>
            <h2 className="card-title">
              {post.title.length > 30
                ? post.title.slice(0, 30) + "..."
                : post.title}
            </h2>
            <p className="text-gray-500">
              {post.description.length > 100
                ? post.description.slice(0, 60) + "..."
                : post.description}
              <Link href={`/posts/${post.id}`} className="text-accent">
                Read More
              </Link>
            </p>
            <div className="flex justify-between items-center mt-5">
              <div className="avatar items-center">
                <div className="w-8 mr-1 rounded-full">
                  <Image
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    width={100}
                    height={100}
                    alt="author image"
                  />
                </div>
                <span>{post.author_name}</span>
              </div>

              <div className="flex items-center">
                <AiFillLike className="text-accent text-xl" />{" "}
                {post.total_likes} Likes
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostList;
