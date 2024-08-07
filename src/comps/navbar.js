import { Link } from "react-router-dom";
import menu from "./menu.svg";

const Navbar = () => {
  const showMenu = () => {
    const menu = document.getElementById("Menu");
    const home = document.getElementById("Home");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      home.classList.add("blur-sm");
      menu.classList.add("block");
      // menu.classList.add("translate-x-0");
    } else {
      menu.classList.add("hidden");
      home.classList.remove("blur-sm");
      menu.classList.remove("block");
    }
  };

  return (
    <div className="flex  justify-between items-center py-10 px-4">
      <div className="logo hover:shadow-sm hover:shadow-purple-400 rounded-sm border-none">
        Logo
      </div>
      <div className="md:block hidden">
        <div className="flex">
          <ol className=" list-decimal list-inside marker:text-purple-500 flex justify-between mx-6">
            <li>About</li>
            <li className="mx-4">Experience</li>
            <li className="">Work</li>
            <li className="mx-4">Contract</li>
          </ol>
          <div className="">
            <button className="border px-1 rounded-md hover:shadow-sm hover:shadow-purple-400">
              Resume
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={showMenu}
        className="showmenu bg-gray-100 transition ease-in-out duration-300 hover:scale-110 block md:hidden "
      >
        <img className="w-10 h-10" src="./menu.svg" alt="" />
        <div></div>
      </div>
      <div
        id="Menu"
        className="Menu pt-10 hidden h-full top-0 right-0 w-4/6 bg-opacity-80 bg-slate-500 fixed  "
      >
        <img
          onClick={showMenu}
          className="w-12 h-10  fixed right-0 mr-4 bg-red-500"
          src="./clsmenu.svg"
          alt=""
          width={80}
        />
        <div className="text-white mt-[200px] flex justify-center items-center">
          <ol className=" list-decimal list-inside font-semibold font-sans marker:text-2lg text-4xl marker:text-blue-500">
            <li className="">
              <Link to="./homepage">Home</Link>
            </li>
            <li className="my-10">
              <Link to="./About">About</Link>
            </li>
            <li className="my-10">
              <Link to="./contact">Contact</Link>
            </li>

            <button className="p-3 pb-4 border-2 rounded-lg mt-4">
              Resume
            </button>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
