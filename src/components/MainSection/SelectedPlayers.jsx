import PropTypes from "prop-types";
import { MdOutlineDeleteOutline } from "react-icons/md";

const SelectedPlayers = ({ selectedPlayer, handleDeletePlayerFromInSelectList }) => {
  const { profileImage, role, name } = selectedPlayer;
  return (
    <div className="flex  items-center justify-between p-6 rounded-2xl border border-[#1313131A] mb-6">
      <div className="flex items-center gap-6">
        <div className="h-[80px] w-[80px]">
          <img src={profileImage} alt="" className="h-full w-full object-cover rounded-2xl" />
        </div>
        <div className="space-y-3">
          <h5 className="font-semibold text-2xl text-black">{name}</h5>
          <p className="text-[#13131399]">{role}</p>
        </div>
      </div>
      <div>
        <button onClick={() => handleDeletePlayerFromInSelectList(selectedPlayer)}>
          <MdOutlineDeleteOutline className="text-yellow-500 text-3xl sm:text-5xl" /></button>
      </div>

    </div>
  );
};

SelectedPlayers.propTypes = {
  selectedPlayer: PropTypes.object,
  handleDeletePlayerFromInSelectList: PropTypes.func
}

export default SelectedPlayers;