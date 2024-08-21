import React from "react";
import { Col, Container, Row } from "reactstrap";
import icon_1 from "../assets/Icon_Like.svg";
import icon_2 from "../assets/Icon_Substract.svg";
import icon_3 from "../assets/Icon_Application.svg";
import icon_4 from "../assets/Icon_Syntax.svg";
import icon_5 from "../assets/Icon_Workflow.svg";
import icon_6 from "../assets/Icon_Multiple.svg";

const ServiceList = [
  {
    iconImg: icon_1,
    sTitle: "Global",
    sDesk:
      "One branded e-gift card can be used to purchase any of the 5000+ gift cards from 90+ countries at GiftiGlobal.com",
  },
  {
    iconImg: icon_2,
    sTitle: "Trasparent",
    sDesk:
      "Pay only for rewards that are redeemed unused rewards are credited to your account.",
  },
  {
    iconImg: icon_3,
    sTitle: "Team",
    sDesk:
      "Setup wallets for team managers or Departments to reward at their own will.",
  },
  {
    iconImg: icon_4,
    sTitle: "Efficiency",
    sDesk:
      "All company rewards in one place as instant delivery or planing tool, it saves time and money.",
  },
  {
    iconImg: icon_5,
    sTitle: "Branding",
    sDesk: "Build loyalty with a company branded Rewards experience.",
  },
  {
    iconImg: icon_6,
    sTitle: "Tracking",
    sDesk:
      "Get reports of usage and redemption data to track engagement results.",
  },
];

const Services = () => {
  return (
    <section className="services pt-90">
      <Container className="px-xl-0">
        <Row className="justify-content-center">
          <Col lg="9">
            <h2 className="services-title font-36 fw-semibold text-center mb-0">
              ‘Rewards By’ Platform &#38; Branded E-Gift Card Benefits
            </h2>
          </Col>
        </Row>
        <div className="service-inner">
          <Row className="g-4 justify-content-center px-xl-0">
            {ServiceList.map((data, i) => {
              return (
                <Col key={i} lg="4" md="6">
                  <div className="s-box bg-white">
                    <div className="s-imag">
                      <img src={data.iconImg} alt="s-icon" />
                      <h4 className="s-title fw-semibold mb-0">
                        {data.sTitle}
                      </h4>
                      <p className="s-description font-Roboto mb-0">
                        {data.sDesk}
                      </p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Services;
