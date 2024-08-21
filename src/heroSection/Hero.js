import React from "react";
import { Col, Container, Row } from "reactstrap";

const HeroList = [
  {
    ratio: "35K",
    des: "Happy Clients",
  },
  {
    ratio: "278",
    des: "Total Rewards",
  },
  {
    ratio: "5K",
    des: "Satisfied Clients.",
  },
];
const Hero = () => {
  return (
    <section className="hero-section bg-white">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg="6">
            <h1 className="fw-bold mb-4 mb-lg-0 text-center text-lg-start">Recognize customers hidden achievements</h1>
          </Col>
          <Col lg="6">
            <p className="description font-17 font-Roboto mb-5 text-center text-lg-start">
              The world’s simplest way to Engage your employees by sending
              rewards and corporate gifts. <br />
              Boost customer engagement and motivate team spirits across the
              globe.
            </p>
            <div className="d-flex flex-wrap justify-content-around justify-content-sm-center justify-content-lg-start wraper_ratio">
              {HeroList.map((data, i) => {
                return (
                  <div key={i} className="ratio-1">
                    <span className="font-36 fw-bold">{data.ratio}</span>
                    <p className="font-14 fw-semibold mb-0">{data.des}</p>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
