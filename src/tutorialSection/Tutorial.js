import React from "react";
import { Col, Row } from "reactstrap";
import tutorial from "../assets/tutorial.png";
import step_1 from "../assets/tutorial-1.svg";
import step_2 from "../assets/tutorial-2.svg";
import step_3 from "../assets/tutorial-3.svg";

const StepsList = [
  {
    stepsImg: step_1,
    step: "Step 1",
    stepDesk: "Sign Up to your account & setup your branded gift cards.",
  },
  {
    stepsImg: step_2,
    step: "Step 2",
    stepDesk: "Choose your rewards value, input recipients and send instantly or schedule a send time.",
    className: "bg-white bg-step",
  },
  {
    stepsImg: step_3,
    step: "Step 3",
    stepDesk: "Follow the redemption tracking reports of your sent rewards.",
  },
];

const Tutorial = () => {
  return (
    <section className="tutorial-section px-3">
      <Row className="justify-content-center align-items-center">
        <Col xl="7">
          <div className="tutorial-img">
            <img
              className="img-fluid w-100"
              src={tutorial}
              alt="tutorial-img"
            />
          </div>
        </Col>
        <Col md="10" lg="9" xl="5">
          <div className="tutorial-text text-center text-lg-start mt-4 mt-lg-0">
            <h2 className="t-title font-36 fw-bold pb-3 mb-0 me-xl-5">
              Your easy to use self-serving SaaS tool
            </h2>
            <p className="t-desk font-17 font-Roboto mb-3 pe-xl-5 me-xl-5">
              Enabling instant delivery of your company branded reward e gift
              cards
            </p>
            <div className="t-chain">
              {StepsList.map((data, i) => {
                return (
                  <div key={i} className={`t-steps d-flex flex-column flex-sm-row align-items-center ${data.className}`}>
                    <div className="t-steps-icon">
                      <img src={data.stepsImg} alt="steps-icon" />
                    </div>
                    <div className="t-steps-text text-center text-sm-start">
                      <p className="font-Roboto py-2 mb-0">{data.step}</p>
                      <h3 className="fw-bold font-17 pb-2 mb-0">
                        {data.stepDesk}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Tutorial;
