import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <div className="row">
      <div 
        className="col-6 anchor"
        style={{
          backgroundColor: "#2b2b2a",
          color: "white",
          height: "100vh",
          width: "40vh",
          position:"fixed"
        }}
      >
        <h1 className="text-center mt-3 mb-5">Sliderbar</h1>
        <a
          className="p-3"
          href="#"
          style={{ textDecoration: "none", color: "white" }}
        >
          <i class="fa-solid fa-house"></i> &nbsp; Home
        </a>
        <br />
        <br />
        <a
          className="p-3 "
          href="#"
          style={{ textDecoration: "none", color: "white" }}
        >
          <i class="fa-solid fa-list-check"></i> &nbsp; Orders
        </a>
        <br />
        <br />
        <a
          className="p-3"
          href="#"
          style={{ textDecoration: "none", color: "white" }}
        >
          <i class="fa-solid fa-user"></i>&nbsp; Customers
        </a>
        <br />
        <br />
        <a
          className="p-3"
          href="#"
          style={{ textDecoration: "none", color: "white" }}
        >
          <i class="fa-solid fa-wallet"></i>&nbsp; Billing
        </a>
        <br />
        <br />
        <a
          className="p-3"
          href="#"
          style={{ textDecoration: "none", color: "white" }}
        >
          <i class="fa-solid fa-gauge"></i>&nbsp; Dashboard
        </a>
        <br />
        <br />
        <a
          className="p-3"
          href="#"
          style={{ textDecoration: "none", color: "white" }}
        >
          <i class="fa fa-user"></i>&nbsp; Profile
        </a>
        <br />
      </div>
      <div className="col-6 mt-5 container">
        <div className="mt-5 cards" style={{height:"35%",width:"30%",border:"1px solid black"}}>card1</div>
        <div className="mt-5 cards" style={{height:"35%",width:"20%",border:"1px solid black"}}>card2</div>
        <div className="mt-5 cards" style={{height:"35%",width:"30%",border:"1px solid black"}}>card3</div>
        <div className="mt-3 cards" style={{height:"35%",width:"30%",border:"1px solid black"}}>card4</div>
        <div className="mt-3 cards" style={{height:"35%",width:"30%",border:"1px solid black"}}>card5</div>
        <div className="mt-3 cards" style={{height:"35%",width:"20%",border:"1px solid black"}}>card6</div>
      </div>
    </div>
  );
}

export default Hero;
