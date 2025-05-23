import PropTypes from "prop-types";
import footerLogo from "../../assets/logo-footer.png"


const Footer = ({ subscribedBtn, subscribed }) => {
  return (
    <div className="bg-black pt-40">
      <div className=" w-11/12 sm:w-10/12 mx-auto mt-9">
        <div className="mb-16 flex justify-center">
          <img src={footerLogo} alt="" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          <div className="w-4/5 ">
            <h6 className="text-lg font-semibold text-white mb-4">About Us</h6>
            <p className="text-[#FFFFFF99]">We are a passionate team dedicated to providing the best services to our customers.</p>
          </div>
          <div className="">
            <h6 className="text-lg font-semibold text-white mb-4">Quick Links</h6>
            <ul className="text-[#FFFFFF99] list-disc space-y-3">
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className=" col-span-2 sm:col-span-1">
            <h6 className="text-lg font-semibold text-white mb-4">Subscribe</h6>
            <p className="text-[#FFFFFF99] mb-5">Subscription to our newsletter for the latest update.</p>
            <div className="flex w-full">
              <input type="email" placeholder="Enter your email" className="px-3 py-5 rounded-tl-xl rounded-bl-xl bg-white w-full outline-none"
                onChange={subscribed} />
              <button className="px-3 py- rounded-tr-xl rounded-br-xl bg-[#E7FE29] text-[#040D11] font-bold hover:bg-[#e9fe29bc]"
                onClick={subscribedBtn}
              >Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <hr className="" />
      <div className="text-center py-8">
        <p className="text-[#FFFFFF99]">@2025 Dream 11, All Rights Reserved.</p>
      </div>
    </div>
  );
};

Footer.propTypes = {
  subscribed: PropTypes.func,
  subscribedBtn: PropTypes.func,
}

export default Footer;