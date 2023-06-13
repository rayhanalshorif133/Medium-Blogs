import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="https://www.onblastblog.com/wp-content/uploads/2017/08/blogger-logo.jpg"
            alt="logo"
          />
        </Link>
        <div className="hidden md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3>Follow</h3>
        </div>
      </div>
      <div></div>
    </header>
  );
}
