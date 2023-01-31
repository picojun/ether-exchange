import logo from "../../e2.png";

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="logo" className="w-8" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full text-white">
          <p>Market</p>
          <p>Exchange</p>
          <p>Tutorials</p>
          <p>Login</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-xs text-center opacity-70">
          Get in touch
          <br />
          <a
            href="https://www.github.com/luztambor"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@e-squared.com
          </a>
        </p>
      </div>
      <div className="w-full h-[0.25px] bg-gray-400 mt-5" />
      <div className="w-full flex justify-between items-center mt-3">
        <p className="text-white text-xs text-center opacity-70">
          <a
            href="https://www.github.com/luztambor"
            target="_blank"
            rel="noopener noreferrer"
          >
            made by luztambor
          </a>
        </p>
        <p className="text-white text-xs text-center opacity-70">
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
