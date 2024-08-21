import React from "react";
import { Col, Container, Row } from "reactstrap";
import work_1 from "../assets/work-1.png";
import work_2 from "../assets/work-2.png";
import work_icon1 from "../assets/work-icon1.svg";
import work_icon2 from "../assets/work-icon2.svg";
import work_icon3 from "../assets/work-icon3.svg";
import Button from "../Comman/Button";

const WorkboxList = [
  {
    className: "work-icon icon-1",
    workImg: work_icon1,
  },
  {
    className: "work-icon icon-2",
    workImg: work_icon2,
  },
  {
    className: "work-icon icon-3",
    workImg: work_icon3,
    className2: "box",
  },
];

const Work = () => {
  return (
    <section className="work-section position-relative">
      <div>
        <img className="img-fluid w-100" src={work_1} alt="work_1" />
      </div>
      <div className="inner_work bg_green">
        <Container>
          <Row className="justify-content-center">
            <Col lg="6">
              <div className="d-flex justify-content-center">
                <img className="img-fluid" src={work_2} alt="work_1" />
              </div>
            </Col>
            <Col lg="6">
              <div className="work-text">
                <h2 className="work-title font-36 fw-bold text-white text-center text-lg-start mb-0">
                  A engaging work culture is rewarding and makes a difference
                </h2>
                <p className="work-desk font-17 font-Roboto text-white text-center text-lg-start mb-0">
                  RewardsBy is the best and the only tool to instantly reward my
                  global team members with meaningful gifts, independent of
                  their location in the world
                </p>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <div className="me-4">
                    <Button
                      className={
                        "font-14 font-Roboto fw_medium btn_primary bg_blue btn_p2 btn_border1"
                      }
                    >
                      Sign Up
                    </Button>
                  </div>
                  <div>
                    <Button
                      className={
                        "font-14 font-Roboto fw_medium btn_primary bg_orange btn_p3 btn_border1"
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
      <div className="work-container mx-auto px-3 px-xl-0">
        <div className="Work-service d-flex flex-wrap justify-content-center">
          {WorkboxList.map((data, i) => {
            return (
              <div key={i} className="work-box position-relative bg-white">
                <span className={data.className}></span>
                <span className="d-flex justify-content-center justify-content-lg-start">
                  <img src={data.workImg} alt="work-icon" />
                </span>
                <h5 className="icon-name fw-bold mb-0 text-center text-lg-start">
                  SEND
                </h5>
                <p className="icon-desk fw_medium mb-0 text-center text-lg-start">
                  Send engaging rewards that are actually appreciated by
                  employees, customers &#38; partners
                </p>
                <span className={data.className2}></span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
