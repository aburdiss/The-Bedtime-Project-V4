import Link from "next/link";
import HeaderButton from "../Buttons/HeaderButton/HeaderButton";

import "./Header.module.css";

export default function Header() {
  return (
    <div className={"HeaderContainer"}>
      <Link href="/">
        <div className={"HeaderLogoContainer"}>
          {/* <Image src="/logo.png" width={50} height={50} /> */}
          <div className={"HeaderTitle"}>The Bedtime Project</div>
        </div>
      </Link>
      <nav>
        <ul className="HeaderNavigationList">
          <li>
            <HeaderButton link={"/"}>Home</HeaderButton>
          </li>
          <li>
            <HeaderButton link="/play">Play</HeaderButton>
          </li>
          <li>
            <HeaderButton link="/stories">Stories</HeaderButton>
          </li>
          <li>
            <HeaderButton link="/about">About</HeaderButton>
          </li>
        </ul>
      </nav>
    </div>
  );
}
