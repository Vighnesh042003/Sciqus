import React from "react";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg fixed-top" style={{backgroundColor:"black",height:"70px"}}>
      <div class="container-fluid">
        <a href="#"><img  src="/logo.png" class="navbar-brand" style={{height:"60px",width:"90px"}}/></a>
      
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" style={{color:"white"}}>
                Home
              </a>
            </li>
            <li class="nav-item">
              <a style={{color:"white"}} class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a style={{color:"white"}} class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a  style={{color:"white"}} class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a style={{color:"white"}} class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <span style={{color:"white"}} class="navbar-text">Header Section</span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
