import { GiCoins } from "react-icons/gi";
import { TiThMenu } from "react-icons/ti";
import { FaXmark } from "react-icons/fa6";
import logo from '../../assets/logo.png';
import { useState } from "react";
import Banner from "./Banner";
import PropTypes from "prop-types";

const Header = ({ coin, handleSetFreeCoin}) => {
  const [menubar, setMenubar] = useState(true);
  
  return (
    <div className="relative">
      <div className="glass fixed top-0 right-0 left-0 z-20">
        <div className="w-11/12 sm:w-10/12 mx-auto pt-3 sm:pt-6 mb-2 pb-2">
          <nav className="flex items-center justify-between ">
            {/* logo */}
            <div>
              <img src={logo} alt="" />
            </div>
            {/* menu */}
            <div className="flex items-center gap-4">
              <ul className={menubar ? 'hidden sm:flex items-center gap-6 text-base text-[#131313B2]' : " absolute top-24 right-6 text-[#131313B2] space-y-4  shadow-sm p-2 rounded-xl bg-white "}>
                <li className="hover:bg-[#13131312] hover:p-1 hover:rounded"><a href="#" >Home</a></li>
                <li className="hover:bg-[#13131312] hover:p-1 hover:rounded"><a href="#">Fixture</a></li>
                <li className="hover:bg-[#13131312] hover:p-1 hover:rounded"><a href="#">Teams</a></li>
                <li className="hover:bg-[#13131312] hover:p-1 hover:rounded"><a href="#">Schedules</a></li>
              </ul>
              <p className=" flex items-center gap-2 py-2 sm:py-4 px-3 sm:px-5 content-center border border-solid 
            border-[#13131319] rounded-xl font-semibold">
                <span>{coin}</span>Coins
                <span><GiCoins className="text-yellow-500 text-xl md:text-3xl" /></span>
              </p>
              <button onClick={() => setMenubar(!menubar)} className="sm:hidden font-semibold text-3xl">{menubar ? <TiThMenu /> : <FaXmark />}</button>
            </div>
          </nav>
        </div>
      </div>
      <Banner
        handleSetFreeCoin={handleSetFreeCoin}
      ></Banner>
    </div>

  );
};

Header.propTypes = {
  coin: PropTypes.number,
  handleSetFreeCoin: PropTypes.func,
}

export default Header;