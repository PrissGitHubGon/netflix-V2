import DropdownCommon from "./common/dropdown";

const Header = () => {
  const backgroundIimage: string =
    "https://res.cloudinary.com/dl6flp50k/image/upload/v1678286953/netflix/FR-fr-20230227-popsignuptwoweeks-perspective_alpha_website_small_nhytbw.jpg";
  const logoNetflix: string =
    "https://res.cloudinary.com/dl6flp50k/image/upload/v1678449128/netflix/Netflix_2015_logo_rau3pz.svg";

  return (
    <div className="relative ">
      <div className="absolute container-fluid min-h-full bg-gradient-to-r from-zinc-900 ">
        <div className="d-flex justify-content-between ">
          <img
            src={logoNetflix}
            alt=""
            className="col-2 my-auto h-5 col-sm-4 sm:h-10 sm:w-32 "
          />
          <div className="d-flex justify-content-between col-7 col-sm-4 col-md-3">
            <div className="my-auto">
              <DropdownCommon
                title={"Langue"}
                itemFirst={"Français"}
                itemSecond={"Anglais"}
                pathFirstItem={""}
                pathSecondItem={""}
              />
            </div>

            <button
              type="button"
              className="btn  btn-sm  bg-red-700 text-white"
            >
              Small button
            </button>
          </div>
        </div>
      </div>
      <img src={backgroundIimage} alt="" className="bg-cover " />
    </div>
  );
};
export default Header;
