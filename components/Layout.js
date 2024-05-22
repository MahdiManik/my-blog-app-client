import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className=" ">
      {/* Head part */}
      <Head>
        <title>My Blog App</title>
        <meta
          name="description"
          content="A simple blog platform using Next.js"
        />
        <link rel="icon" href="logo.png" />
      </Head>

      {/* header part */}
      <header className="bg-gray-800 p-4">
        <nav className="flex justify-center">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <p className="text-white hover:underline">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/create">
                <p className="text-white hover:underline">Create Post</p>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* children */}
      <main className="p-4 min-h-screen">{children}</main>

      {/* footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} My Blog App</p>
      </footer>
    </div>
  );
};

export default Layout;
