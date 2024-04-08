import { logo } from "../assets/images";
import { useState } from "react";

import axios from "axios";
import "./Donation.css";

const Donation = ({ closeDonationPopup }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
  });

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = (e) => {
    donationHandler(user.name, user.email, user.phone, user.amount);
    e.preventDefault();
    e.target.reset();
    console.log(user);
  };

  const donationHandler = async (name, email, phone, amount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:5000/api/getkey");

    const {
      data: { order },
    } = await axios.post("http://localhost:5000/api/checkout", {
      amount,
    });
    console.log(order);

    var options = {
      key, // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Save wild life NGO",
      description: "Test Transaction",
      image: logo,
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        alert("Transaction Successful !");
      },
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#2edb76",
      },
    };

    var rzp1 = new Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
  };

  return (
    <section>
      <div className="donationSection" onClick={closeDonationPopup}></div>
      <div className="popUp">
        <img src={logo} alt="" />

        <div className="wrapper">
          <form action="" onSubmit={formSubmitHandler}>
            <div className="input-box">
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                onChange={inputHandler}
              />
              <i class="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                onChange={inputHandler}
              />
              <i class="bx bxs-envelope"></i>
            </div>
            <div className="input-box">
              <input
                type="number"
                placeholder="Phone"
                name="phone"
                required
                onChange={inputHandler}
              />
              <i class="bx bxs-phone"></i>
            </div>

            <div className="input-box">
              <input
                type="number"
                placeholder="Amount"
                name="amount"
                required
                onChange={inputHandler}
              />
              <i class="bx bx-rupee"></i>
              <button type="submit" className="btn">
                Donate
              </button>
            </div>
          </form>
        </div>
        <button type="button" className="closeBtn" onClick={closeDonationPopup}>
          X
        </button>
      </div>
    </section>
  );
};

export default Donation;
