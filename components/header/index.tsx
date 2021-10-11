import { GithubOutlined } from "@ant-design/icons";

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
      <h1 className="text-4xl w-1/3 text-center flex-1 ">Pokemon Wiki 🚀</h1>
      <span className="mr-8 w-1/3 text-right text-1xl">
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
