import { CiClock2, CiLinkedin } from "react-icons/ci";
import imageF from "../../assets/about/about2/f909efb883f56845dcebe7cdc85a607c.jpeg";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { FaFacebook, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
const Footer = () => {
  return (
    <div>
      <footer
        className="footer footer-center bg-cover bg-center bg-no-repeat h-full md:h-[700px] text-white "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imageF})`,
        }}
      >
        <aside>
          <p className="font-bold uppercase  text-5xl mb-8">
            We Ready to have you the best dinning experiences
          </p>

          <div className="flex justify-between gap-20 flex-col md:flex-row">
            <div>
              <span className="text-3xl mx-auto flex justify-center mb-4 font-bold">
                <CiClock2 className="text-yellow-500" />
              </span>
              <h3 className="uppercase ">Opening Hours</h3>
              <span>Monday - Sunday</span>
              <br />
              <span> 9:00 AM to 11:30 PM</span>
            </div>
            <div>
              <span className="text-3xl mx-auto flex justify-center mb-4">
                <FiPhoneCall className="text-yellow-500" />
              </span>
              <h3 className="uppercase ">Let's Talk</h3>
              <span>Phone: 1-800-222-4545</span>
              <br />
              <span> Fax: 1-452-687-4545</span>
            </div>
            <div>
              <span className="text-3xl mx-auto flex justify-center mb-4">
                <IoMailOutline className="text-yellow-500" />
              </span>
              <h3 className="uppercase ">Book A Table</h3>
              <span>Email: demo@gmail.com</span>
              <br />
              <span>Support: support@website.com</span>
            </div>
            <div>
              <span className="text-3xl mx-auto flex justify-center mb-4">
                <IoLocationOutline className="text-yellow-500" />
              </span>
              <h3 className="uppercase my-2">Our Address</h3>
              <span>123 Street New York City, United</span>
              <br />
              <span className="mt-2">States Of America.</span>
            </div>
          </div>
          <nav className="mt-12 text-center">
            <div className="flex justify-center gap-4 mb-4">
              <a className="flex items-center justify-center w-10 h-10 border border-white rounded-full">
                <FaFacebook className="text-white text-xl" />
              </a>
              <a className="flex items-center justify-center w-10 h-10 border border-white rounded-full">
                <FaXTwitter className="text-white text-xl" />
              </a>
              <a className="flex items-center justify-center w-10 h-10 border border-white rounded-full">
                <LuInstagram className="text-white text-xl" />
              </a>
              <a className="flex items-center justify-center w-10 h-10 border border-white rounded-full">
                <CiLinkedin className="text-white text-xl" />
              </a>
            </div>
            <p>
              © {new Date().getFullYear()} {""}
              <span className="text-yellow-500"> Niomax</span> All rights
              reserved
            </p>
          </nav>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
