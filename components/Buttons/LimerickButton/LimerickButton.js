import Link from "next/link";

import "./LimerickButton.module.css";

export default function LimerickButton({ children, link }) {
  return (
    <Link href={link}>
      <div>{children}</div>
    </Link>
  );
}
