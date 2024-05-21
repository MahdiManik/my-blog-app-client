import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>My Blog App</title>
        <meta
          name="description"
          content="A simple blog platform using Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-gray-800 p-4">
        <nav className="flex justify-center">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <a className="text-white hover:underline">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/create">
                <a className="text-white hover:underline">Create Post</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-1 p-4">{children}</main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} My Blog App</p>
      </footer>
    </div>
  );
};

export default Layout;
