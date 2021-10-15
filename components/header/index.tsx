import { GithubOutlined } from "@ant-design/icons";
import styles from "./style.module.css";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center mt-5 mb-3">
      <span className="ml-8 w-1/3">
        <a
          href="https://github.com/iamsurajdev/pokemonApp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl"
        >
          <GithubOutlined />
        </a>
      </span>
      <h1 className={styles.headerTitle}>Pokemon Wiki 🚀</h1>
      <span className={styles.linkText}>
        Created with 💖 by{" "}
        <a
          href="https://iamsurajdev.in"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-600"
        >
          {" "}
          iamsurajdev
        </a>
      </span>
    </div>
  );
};

export default Header;
