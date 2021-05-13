import Link from "next/link";
import "./HeaderButton.module.css";

export default function HeaderButton({ children, link }) {
  return (
    <Link href={link}>
      <div className="HeaderButtonContainer">{children}</div>
    </Link>
  );
}
