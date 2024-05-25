// import Link from "next/link";
// import React, { useState } from "react";

// const PostForm = ({ post, handleSubmit }) => {
//   // console.log("post in postForm", post);

//   const [title, setTitle] = useState(post?.title);
//   const [publishDate, setPublishDate] = useState(post?.publish_date);
//   const [description, setDescription] = useState(post?.description);
//   const [authorName, setAuthorName] = useState(post?.author_name);
//   const [blogImage, setBlogImage] = useState(post?.blog_image);

//   return (
//     <div className="w-full p-12 bg-base-100 shadow-xl">
//       <div className="card w-5/6 mx-auto">
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-lg">Title:</label>
//             <input
//               type="text"
//               defaultValue={title}
//               name="title"
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-lg">Publish Date:</label>
//             <input
//               type="date"
//               defaultValue={publishDate}
//               name="publishDate"
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-lg">Description:</label>
//             <textarea
//               defaultValue={description}
//               name="description"
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             ></textarea>
//           </div>
//           <div>
//             <label className="block text-lg">Author Name:</label>
//             <input
//               type="text"
//               defaultValue={authorName}
//               name="authorName"
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>

//           <div>
//             <label className="block text-lg">Blog Image URL:</label>
//             <input
//               type="url"
//               defaultValue={blogImage}
//               name="blogImage"
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full p-2 btn btn-ghost text-lg bg-blue-500 hover:text-gray-700 text-white rounded"
//           >
//             Submit
//           </button>
//           <Link
//             href={`/`}
//             className="text-accent bg-gray-600 text-lg btn btn-ghost hover:text-gray-700 w-full mt-5 text-center"
//           >
//             Back to Home
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PostForm;
