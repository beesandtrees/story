import Link from "next/link";

function Links() {
  return (
    <ul className="header-links">
      <li>
        <Link href="/">
          <button>Home</button>
        </Link>
      </li>
      <style jsx>{`
        .header-links {
          display: flex;
          list-style-type: none;
        }

        .header-links li {
          margin: 0 0 0 2rem;
        }

        .header-links button {
          font-size: 16px;
        }
      `}</style>
    </ul>
  );
}

export default Links;
