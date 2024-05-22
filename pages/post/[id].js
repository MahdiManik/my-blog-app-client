import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";
import Link from "next/link";

// Fetch post data from API
export const getStaticPaths = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/v1/posts");
    const posts = await res.json();

    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error("Error to fetching posts:", error);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps = async ({ params }) => {
  try {
    const res = await fetch(`http://localhost:5000/api/v1/blog/${params.id}`);
    const post = await res.json();

    return { props: { post } };
  } catch (error) {
    console.error("Error fetching post data:", error);
    return { props: { post: null } };
  }
};

const PostDetails = ({ post }) => {
  if (!post) {
    return <div>Error loading post. Please try again later.</div>;
  }

  return (
    <div className="w-full p-12 bg-base-100 shadow-xl">
      <div className="card w-5/6  mx-auto">
        <p className="flex items-center justify-center mx-auto text-accent bg-cyan-100 w-44 px-2 py-1 rounded-full">
          <FaCalendar className="mr-2" />
          {post.publish_date}
        </p>
        <h2 className="text-center text-4xl my-5">{post.title}</h2>
        <div className="avatar items-center justify-center bg-slate-100 mb-5 py-5 rounded-lg text-2xl">
          <div className="w-8 mr-1 rounded-full">
            <Image
              src={
                post?.author_image ||
                "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              }
              width={100}
              height={100}
              alt="author image"
            />
          </div>
          <span>{post.author_name}</span>
        </div>
        <figure>
          <Image
            src={post.blog_image}
            width={600}
            height={100}
            alt="blog image"
            className="rounded-xl w-full"
          />
        </figure>
        <div className="card-body">
          <p className="text-gray-700 text-2xl text-justify">
            {post.description}
          </p>
          <div className="flex justify-between items-center mt-5">
            <div className="flex items-center text-2xl">
              <AiFillLike className="text-accent" />
              <span className="mr-1">{post.total_likes}</span>
              Likes
            </div>
          </div>
          <Link href="/" className="text-accent mt-5">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
