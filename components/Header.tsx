import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 h-8 object-contain cursor-pointer"
            src="/images/blogger-logo.jpg"
            alt="logo"
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3
            className="cursor-pointer text-white bg-green-600 px-4 py-1 rounded-full hover:bg-white hover:text-green-600 
          hover:border hover:border-spacing-3 hover:border-green-600"
          >
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>
        <h3 className="border px-4 py-1 rounded-full border-green-600">
          Get Started
        </h3>
      </div>
    </header>
  );
}
