import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/assets/images/logo.svg";
import hero_img from "../../public/assets/images/main.svg";

const Home: FC = () => {
  return (
    <div className="max-w-[70rem] px-5 mx-auto">
      <div className="py-6">
        <img src={logo} alt="logo" />
      </div>

      <div className="w-full h-[calc(100vh-98px)] flex items-center justify-between gap-10">
        <div className="flex flex-col items-start justify-start gap-8 w-[35rem]">
          <h1 className="text-5xl text-[#102A43] font-bold capitalize leading-[4rem]">
            job <span className="text-[#3B82F6]">tracking</span> app
          </h1>
          <p className="text-[#486581] leading-[1.8rem]">
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>

          <Link
            to={"/login"}
            className="bg-[#3B82F6] text-white font-medium text-xl px-7 py-2 rounded-md "
          >
            Login/Register
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={hero_img} alt="hero_img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
