import Link from "next/link";

import "./Header.module.css";

export default function Header() {
  return (
    <div className={"HeaderContainer"}>
      <div>The Bedtime Project</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/play">Play</Link>
          </li>
          <li>
            <Link href="/stories">Stories</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
