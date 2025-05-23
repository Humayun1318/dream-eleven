import PropTypes from "prop-types";
import { FaFlag } from "react-icons/fa";

const DisplayData = ({ player, handleChoosePlayer }) => {
  const { profileImage, battingType
    , biddingPrice, bowlingType, country, coverImage
    , name, role
  } = player;
  return (
    <div className=" p-6 rounded-2xl border border-[#1313131A] space-y-5">
      <div className="h-[240px] mb-6">
        <img src={coverImage} alt="" className="h-full w-full rounded-2xl" />
      </div>
      <div className="flex gap-4 items-center ">
        <img src={profileImage} alt="" className="w-[50px] h-[50px] object-cover rounded-full" />
        <p className="text-xl sm:text-2xl font-semibold text-[#131313]">{name}</p>
      </div>
      <div className="flex justify-between">
        <p className="flex items-center gap-4">
          <FaFlag className="text-[#131313] opacity-[0.5]" />
          <span className="text-[#131313] opacity-[0.5]">{country}</span>
        </p>
        <p className="py-2 px-4 rounded-lg bg-[#1313131a] text-sm text-black">
          {role}
        </p>
      </div>
      <hr className="bg-[#1313131A]" />
      <p className="font-bold text-[#131313]">Rating</p>
      <div className="flex justify-between ">
        <p className="font-semibold text-[#131313]"> {battingType}</p>
        <p className="text-[#131313B3] items-end">{bowlingType}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-semibold text-[#131313]">Price: ${biddingPrice}</p>
        <button className="py-2 px-4 rounded-lg border border-[#1313131A] text-sm test-[#131313] hover:bg-[#e9fe294d]"
          onClick={() => handleChoosePlayer(player, biddingPrice)}
        >Choose Player</button>
      </div>
    </div>
  );
};

DisplayData.propTypes = {
  player: PropTypes.object.isRequired,
  handleChoosePlayer: PropTypes.func,
}
export default DisplayData;