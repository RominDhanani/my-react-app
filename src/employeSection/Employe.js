import React from "react";
import { Col, Row } from "reactstrap";
import employe from "../assets/employe.png";

const EmployeList = [
  {
    percentage: "78%",
    eDescription: "of employees prefer prepaid rewards",
    color1: "text-white",
    color2: "text-white",
  },
  {
    percentage: "2.7",
    eDescription: "Times higher engagement for employees with recognition",
    color1: "em-color1",
    color2: "em-color2",
  },
  {
    percentage: "52.5%",
    eDescription: "Of employees want recognition from their managers",
    color1: "em-color1",
    color2: "em-color2",
  },
];

const Employe = () => {
  return (
    <section className="employe-section mx-auto pt-90 px-1">
      <Row className="justify-content-center">
        <Col xl="7">
          <div className="employe-title font-48 fw-bold text-center text-xl-start pt-xl-5 mt-xl-4">
            Redeem <br /> your reward
          </div>
          <div className="employe-detail d-flex flex-column flex-lg-row justify-content-center justify-content-xl-start position-relative">
            {EmployeList.map((data, i) => {
              return (
                <div key={i} className="e-data bg-white text-center mb-4">
                  <h3 className={`font-48 fw-bold mb-0 ${data.color1}`}>
                    {data.percentage}
                  </h3>
                  <p
                    className={`font-Roboto fw_medium px-2 mb-0 ${data.color2}`}
                  >
                    {data.eDescription}
                  </p>
                </div>
              );
            })}
          </div>
        </Col>
        <Col xl="5">
          <div className="d-flex justify-content-center pt-4 mt-xl-0">
            <img className="img-fluid" src={employe} alt="employe" />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Employe;
