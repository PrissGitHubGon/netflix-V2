import DropdownCommon from "./common/dropdown";
import {
  initLocalize,
  Translate,
  setActiveLanguage,
} from "react-localize-alias";
import { useEffect } from "react";
import translations from "../Translate";

const Header = () => {
  useEffect(() => {
    initLocalize({
      languages: [
        { code: "en", name: "English" },
        { code: "fr", name: "French" },
      ],
      translations,
      options: {
        defaultLanguage: "fr",

        onMissing: (data) => console.log(data),

        onAlias: (alias) => alias,
      },
    });
  }, []);
  const backgroundIimage: string =
    "https://res.cloudinary.com/dl6flp50k/image/upload/v1678286953/netflix/FR-fr-20230227-popsignuptwoweeks-perspective_alpha_website_small_nhytbw.jpg";
  const logoNetflix: string =
    "https://res.cloudinary.com/dl6flp50k/image/upload/v1678449128/netflix/Netflix_2015_logo_rau3pz.svg";

  return (
    <div className="relative ">
      <div className="absolute container-fluid min-h-full bg-gradient-to-r from-zinc-900 pt-2 ">
        <div className="container md:px-20 d-flex justify-content-center justify-content-between ">
          <img
            src={logoNetflix}
            alt=""
            className="col-2 my-auto h-10 w-32 col-sm-4 sm:h-10 sm:w-32  "
          />
          <div className="d-flex justify-content-between col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="my-auto mx-3">
              <DropdownCommon
                title={"Langue"}
                itemFirst={"Français"}
                itemSecond={"Anglais"}
                pathFirstItem={""}
                pathSecondItem={""}
                size={"md"}
                classNameContainer=" "
                onFirstLangClick={() => setActiveLanguage("fr")}
                onSecondLangClick={() => setActiveLanguage("en")}
              />
            </div>

            <button
              type="button"
              className="btn btn-login text-sm  bg-red-700 hover:bg-red-800 text-white "
            >
              <Translate id="identify" />
            </button>
          </div>
        </div>
        <div className="mt-10 sm:mt-20 md:mt-32 lg:mt-50 container d-flex justify-content-center text-center">
          <div>
            {" "}
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-light font-bold">
              <Translate id="firstHeaderTitle" />
            </p>
            <p className="text-light text-lg sm:text-xl md:text-1xl lg:text-2xl my-2 lg:my-9 font-bold">
              <Translate id="secondHeaderTitle" />
            </p>
            <p className="text-light text-sm sm:text-base md:text-lg lg:text-xl font-bold">
              <Translate id="thirdHeaderTitle" />
            </p>
          </div>
        </div>
      </div>

      <img src={backgroundIimage} alt="" className="bg-cover " />
    </div>
  );
};
export default Header;
