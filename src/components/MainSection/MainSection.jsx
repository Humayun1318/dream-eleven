import { useEffect, useState } from "react";
import DisplayData from "./DisplayData";
import SelectedPlayers from "./SelectedPlayers";
import PropTypes from "prop-types";
import subscribe from '../../assets/Frame 11.png'
import bgImage from '../../assets/bg-shadow.png'

const MainSection = ({ coin, setCoin, forReactToastify, subscribed, subscribedBtn, value }) => {
  const [players, setPlayers] = useState([])
  const [toggle, setToggle] = useState(false)
  const [selected, setSelected] = useState([])

  //for choosing player
  const handleChoosePlayer = (player, biddingPrice) => {
    1
    const existingPlayer = selected.some(pl => pl.playerId === player.playerId)

    if (selected.length > 5) {
      return forReactToastify('Choose Limit (6) Exceeded!!😊', 'warn', 'top-center');
    } else if (existingPlayer) {
      return forReactToastify(`${player.name} Already Added in Your Squad!!😌`, 'warn', 'top-center');
    } else if (coin < biddingPrice) {
      return forReactToastify(`Not Enough Money to Buy ${player.name}!! Claim Free Credit!🪙`, 'warn', 'top-center');
    }
    else {
      setSelected([...selected, player])
      setCoin(coin - biddingPrice)
      forReactToastify(`Congrates!!🏏💪 ${player.name} is now in your squad`, 'success', 'top-center');
    }

  }
  //for unselect the player
  const handleDeletePlayerFromInSelectList = ({ name, playerId }) => {
    const deletedPlayer = selected.filter(pl => pl.playerId !== playerId)
    setSelected(deletedPlayer)
    forReactToastify(`${name} Removed From Your Squad!!`, 'warn', 'top-right')
  }

  useEffect(() => {
    fetch("players.json")
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, []);
  return (
    <div className="mt-20 w-11/12 sm:w-10/12 mx-auto ">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-2 sticky top-24 sm:top-28 z-10 bg-white">
        <h3 className="text-base sm:text-xl lg:text-3xl font-bold overflow-hidden">{toggle ? `Selected Players (${selected.length}/6)` : `Available Players`}</h3>
        <div className="">
          <button className={`${toggle ? '' : 'bg-[#E7FE29]'} py-1 sm:py-2 lg:py-4 px-2 sm:px-4 lg:px-7 rounded-tl-xl rounded-bl-xl border border-[#1313131A]  hover:bg-[#e9fe291f]`}
            onClick={() => setToggle(!toggle)}
          >Available</button>
          <button className={`${toggle ? 'bg-[#E7FE29]' : ''} py-1 sm:py-2 lg:py-4 px-2 sm:px-4 lg:px-7 rounded-tr-xl rounded-br-xl border border-[#1313131A] hover:bg-[#e9fe291b]`}
            onClick={() => setToggle(!toggle)}
          >Selected({selected.length})</button>
        </div>
      </div>
      {/* for the display each player card */}
      <div className={toggle ? '' : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 "}>
        {toggle ? selected.map(selectedPlayer => <SelectedPlayers
          key={selectedPlayer.playerId}
          selectedPlayer={selectedPlayer}
          handleDeletePlayerFromInSelectList={handleDeletePlayerFromInSelectList}
        ></SelectedPlayers>)
          :
          players.map(player => <DisplayData
            key={player.playerId}
            player={player}
            handleChoosePlayer={handleChoosePlayer}
          >
          </DisplayData>)
        }{toggle ?
          <p className='border border-[#131313] rounded-2xl p-2 bg-[#FFFFFF0D] inline-block hover:bg-[#e9fe292f]'>
            <button className='py-4 px-5 rounded-xl bg-[#E7FE29] shadow-inner font-bold hover:bg-[#e9fe2962]'
              onClick={() => setToggle(!toggle)}>
              Add More Player</button>
          </p> : ''}
      </div>
      {/* Subscribe card */}
      <div className=" text-center p-6 rounded-3xl border-2 border-solid border-white bg-[#FFFFFF26] relative top-40">
        <div className="py-20 px-3 rounded-3xl border border-[#1313131A] bg-white"
          style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <h3 className="text-2xl sm:text-4xl font-bold mb-4">Subscribe to our newsletter</h3>
          <p className="mb-6 text-xl font-medium">Get the latest updates and news right in your inbox!</p>
          <div className="flex justify-center flex-col sm:flex-row gap-4">
            <input type="email" placeholder="Enter your email"
              className="px-6 py-4 mr-2 rounded-xl bg-[#fff] border border-[#13131326] outline-none"
              onChange={subscribed} value={value} />
            <button className=" justify-items-center"
              onClick={subscribedBtn}
            >
              <img src={subscribe} alt="" className="rounded-tl-xl sm:rounded-tl-none rounded-bl-xl sm:rounded-bl-none " />
            </button>
          </div>
        </div>

      </div>
    </div>

  );
};

MainSection.propTypes = {
  coin: PropTypes.number,
  setCoin: PropTypes.func,
  forReactToastify: PropTypes.func,
  subscribed: PropTypes.func,
  subscribedBtn: PropTypes.func,
  value: PropTypes.string,
}

export default MainSection;