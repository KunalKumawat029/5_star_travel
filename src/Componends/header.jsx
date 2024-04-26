import React from 'react'

export default function Header() {
  return (
    <>
      <>
  {/* Navbar & Hero Start */}
  <div className="container-fluid position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <a href="" className="navbar-brand p-0">
        <h1 className="text-primary m-0">
          <i className="fa fa-map-marker-alt me-3" />
          Tourist
        </h1>
        {/* <img src="img/logo.png" alt="Logo"> */}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <a href="index.html" className="nav-item nav-link active">
            Home
          </a>
          <a href="about.html" className="nav-item nav-link">
            About
          </a>
          <a href="service.html" className="nav-item nav-link">
            Services
          </a>
          <a href="package.html" className="nav-item nav-link">
            Packages
          </a>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu m-0">
              <a href="destination.html" className="dropdown-item">
                Destination
              </a>
              <a href="booking.html" className="dropdown-item">
                Booking
              </a>
              <a href="team.html" className="dropdown-item">
                Travel Guides
              </a>
              <a href="testimonial.html" className="dropdown-item">
                Testimonial
              </a>
              <a href="404.html" className="dropdown-item">
                404 Page
              </a>
            </div>
          </div>
          <a href="contact.html" className="nav-item nav-link">
            Contact
          </a>
        </div>
        <a href="" className="btn btn-primary rounded-pill py-2 px-4">
          Register
        </a>
      </div>
    </nav>
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Enjoy Your Vacation With Us
            </h1>
            <p className="fs-4 text-white mb-4 animated slideInDown">
              Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum
              lorem sit
            </p>
            <div className="position-relative w-75 mx-auto animated slideInDown">
              <input
                className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Eg: Thailand"
              />
              <button
                type="button"
                className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                style={{ marginTop: 7 }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Navbar & Hero End */}
</>

    </>
  )
}
