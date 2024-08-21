import React from "react";
import "./App.css";
import "./Scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./headerSection/Header";
import Hero from "./heroSection/Hero";
import Work from "./workSection/Work";
import Tutorial from "./tutorialSection/Tutorial";
import Experience from "./experienceSection/Experience";
import Services from "./rewardService/Services";
import Employe from "./employeSection/Employe";
import Reward from "./rewardSection/Reward";
import Signup from "./signupSection/Signup";
import Footer from "./footerSection/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Work />
      <Tutorial />
      <Experience />
      <Services />
      <Employe />
      <Reward />
      <Signup />
      <Footer />
    </>
  );
}

export default App;
