import React from "react";
import { Col, Container, Row } from "reactstrap";
import videoImg from "../assets/experience-video.png";
import Button from "../Comman/Button";

const CountList = [
  {
    number: "1000+",
    descrip: "Trusted Active Clients",
  },
  {
    number: "5000+",
    descrip: "Rewards",
  },
  {
    number: "90+",
    descrip: "Countries Incentives Awards 2019",
  },
];

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="experience-bg">
        <Container>
          <Row className="justify-content-center">
            <Col xl="11">
              <div className="experience-inner d-flex justify-content-sm-between flex-column flex-sm-row px-xl-3">
                {CountList.map((data, i) => {
                  return (
                    <div
                      key={i}
                      className="count text-center text-lg-start pb-4 pb-sm-0"
                    >
                      <span className="number fw-bold text-white">
                        {data.number}
                      </span>
                      <p className="ps-lg-3 font-Roboto fw_medium text-white mb-0">
                        {data.descrip}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="experience-video">
        <Container className="px-xl-0">
          <Row className="justify-content-center g-5">
            <Col lg="10" xl="8" className="px-xl-0">
              <div className="video-img">
                <img
                  className="img-fluid w-100"
                  src={videoImg}
                  alt="videoImg"
                />
              </div>
            </Col>
            <Col sm="9" md="8" lg="6" xl="4" className="pe-xl-0">
              <div className="account mt-xl-0 bg_green">
                <p className="fw-bold font-Roboto text-white text-center pb-4 pb-sm-5 mb-0">
                  Sign Up to your account &#38; setup your branded gift cards
                </p>
                <div className="d-flex flex-column flex-sm-row text-center justify-content-center">
                  <div className="me-sm-4 mb-3 mb-sm-0">
                    <Button
                      className={
                        "font-14 font-Roboto fw_medium btn_primary bg_blue btn_p2 btn_border1 active"
                      }
                    >
                      Sign Up
                    </Button>
                  </div>
                  <div>
                    <Button
                      className={
                        "font-14 font-Roboto fw_medium btn_primary bg_orange btn_p3 btn-border2"
                      }
                    >
                      Login
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Experience;
