import bgImage from '../../assets/bg-shadow.png';
import bannerImage from '../../assets/banner-main.png'
import PropTypes from 'prop-types';

const Banner = ({ handleSetFreeCoin }) => {
  return (
    <div>
      <div className="border mt-40 bg-[#131313] rounded-3xl w-11/12 sm:w-10/12 mx-auto" style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <div className='  py-16 px-3 w-11/12 mx-auto flex flex-col justify-center items-center gap-6'>
          <img src={bannerImage} alt="" />
          <h1 className='text-3xl sm:text-5xl font-bold text-white text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className='text-xl sm:text-2xl font-medium text-[#FFFFFFB2] text-center inter-google-fonts'>Beyond Boundaries Beyond Limits</p>
          <p className='border border-[#E7FE29] rounded-2xl p-2 bg-[#FFFFFF0D]'>
            <button className='py-4 px-5 rounded-xl bg-[#E7FE29] shadow-inner font-bold hover:bg-[#e9fe29ae]' onClick={handleSetFreeCoin}>Claim Free Credit</button>
          </p>
        </div>

      </div>

    </div>
  );
};
Banner.propTypes = {
  handleSetFreeCoin: PropTypes.func,
}
export default Banner;