import "./Caption.css";

const Caption = ({ openDonationPopup }) => {
  return (
    <section className="caption">
      <h1>Save our home</h1>
      <p>
        Help us to provide a green and healthy life. We need to protect our
        forests and wild life
      </p>

      <button type="button" className="captionBtn" onClick={openDonationPopup}>
        Make a Donation
      </button>
    </section>
  );
};

export default Caption;
