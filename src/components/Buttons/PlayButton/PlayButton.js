import Link from "next/link";

import "./PlayButton.module.css";

export default function PlayButton({ children, link }) {
  return (
    <Link href={link}>
      <div>{children}</div>
    </Link>
  );
}
