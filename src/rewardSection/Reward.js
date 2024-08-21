import React from "react";

const RewardList = [
  {
    className: "bg_green",
    reNumber: "1",
    reDesk: "The Reward arrives in the recipients inbox and is instantly ready to be used.",
  },
  {
    className: "bg_orange number-a-bg",
    reNumber: 2,
    reDesk: "The recipient goes to <a href=''>www.giftiglobal.com</a>, logs in to redeem the reward value",
  },
  {
    className: "bg_green",
    reNumber: 3,
    reDesk: "The recipients selects a e-gift card from any of the 86 countries and gets it delivered.",
  },
];

const Reward = () => {
  return (
    <section className="reward-section position-relative">
      <div className="reward-inner text-center text-md-start">
        <h2 className="re-title fw-bold ms-md-2">Redeem Your Reward</h2>
        <p className="re-sub-title font-Roboto font-17 text-white ms-md-2">
          Get Stared with 3 simple steps
        </p>
        {RewardList.map((data, i) => {
          return (
            <div key={i} className="re-box d-flex flex-column flex-sm-row justify-content-center justify-content-md-start align-items-center">
              <div className={`re-number d-flex justify-content-center align-items-center me-sm-3 mb-4 mb-sm-0 ${data.className}`}>
                <span className="num font-raleway fw-bold text-white">{data.reNumber}</span>
              </div>
              <p className="re-discription text-center text-sm-start fw-semibold text-white mb-0" dangerouslySetInnerHTML={{__html: data.reDesk}}/>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Reward;
