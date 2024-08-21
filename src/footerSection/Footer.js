import React from "react";
import { Col, Row } from "reactstrap";
import { ReactComponent as Insta } from "../assets/instagram.svg";
import { ReactComponent as Twitter } from "../assets//twitter.svg";
import { ReactComponent as Fb } from "../assets//facebook.svg";
import { ReactComponent as Linkedin } from "../assets//linkedin.svg";

const SocialList = [
  {
    socialIcon: <Insta />,
  },
  {
    socialIcon: <Twitter />,
  },
  {
    socialIcon: <Fb />,
  },
  {
    socialIcon: <Linkedin />,
  },
];

const Footer = () => {
  return (
    <footer className="footer-section bg_green">
      <div className="footer-inner mx-auto">
        <Row>
          <Col lg="5">
            <p className="copyright font-16 fw-semibold text-white text-center text-lg-start mb-3 mb-sm-4 mb-xl-0">
              © 2021 Gifti Global . All Rights Reserved
            </p>
          </Col>
          <Col lg="7">
            <div className="f-right d-flex flex-column flex-sm-row justify-content-lg-end justify-content-center">
              <div className="terms text-center text-sm-start mb-3 mb-sm-0">
                <a
                  href="#term"
                  className="link font-16 fw-semibold text-white me-4"
                >
                  Terms of use
                </a>
                <a href="#term" className="link font-16 fw-semibold text-white">
                  Terms of use
                </a>
              </div>
              <div className="social d-flex justify-content-center justify-content-sm-start">
                {SocialList.map((data, i) => {
                  return (
                    <a key={i} className="social-button" href="#social">
                      {data.socialIcon}
                    </a>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
