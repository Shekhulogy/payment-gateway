import { logo } from "../assets/images";
import "./Navbar.css";

const Navbar = ({ openDonationPopup }) => {
  return (
    <section className="navbar">
      <div>
        <img src={logo} alt="logo" className="logo" />
        <h2>
          Save <br /> Wildlife
        </h2>
      </div>
      <button type="button" className="navBtn" onClick={openDonationPopup}>
        {" "}
        Donate
      </button>
    </section>
  );
};

export default Navbar;
