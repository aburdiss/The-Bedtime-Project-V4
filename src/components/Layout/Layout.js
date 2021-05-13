import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={"container"}>
      <Header />
      <div className={"contentContainer"}>{children}</div>
      <Footer />
    </div>
  );
}
