import React from "react";
import { Col, Row } from "reactstrap";
import Button from "../Comman/Button";

const Signup = () => {
  return (
    <section className="signup-section bg_blue">
      <div className="sign-up mx-auto">
        <Row className="justify-content-center align-items-center">
          <Col xl="7">
            <h2 className="font-Roboto text-white text-center text-xl-start mb-3">
              Your easy to use self-serving SaaS tool
            </h2>
            <p className="text-white text-center text-xl-start mb-0">
              Sign Up to your account &#38; setup your branded gift cards
            </p>
          </Col>
          <Col xl="5">
            <div className="d-flex flex-column flex-sm-row text-center justify-content-center justify-content-xl-end mt-5 mt-xl-0">
              <div className="me-sm-4 mb-3 mb-sm-0">
                <Button
                  className={
                    "font-17 font-Roboto fw_medium btn_primary bg_blue btn_p4 btn_border1 active"
                  }
                >
                  Sign Up
                </Button>
              </div>
              <div>
                <Button
                  className={
                    "font-17 font-Roboto fw_medium btn_primary bg_orange btn_p5 btn-border2"
                  }
                >
                  Login
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Signup;
