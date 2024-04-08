import Donation from "./components/Donation";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Caption from "./components/Caption";
import "./App.css";

import { useState } from "react";

const App = () => {
  const [donationPopup, setDonationPopup] = useState(false);

  const closeDonationPopup = (e) => {
    setDonationPopup(false);
    // e.preventDefault();
  };
  const openDonationPopup = (e) => {
    setDonationPopup(true);
    // e.preventDefault();
  };

  return (
    <div className="home">
      <Slider />
      <Navbar openDonationPopup={openDonationPopup} />
      <Caption openDonationPopup={openDonationPopup} />

      {donationPopup && <Donation closeDonationPopup={closeDonationPopup} />}
    </div>
  );
};

export default App;
