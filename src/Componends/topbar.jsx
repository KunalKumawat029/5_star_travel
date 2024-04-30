import React from 'react'
import { Link } from 'react-router-dom'

export default function Topbar() {
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <small className="me-3 text-light">
                <i className="fa fa-map-marker-alt me-2" />
                202PEARL BUSSINES PARK, INDORE,INDIA
              </small>
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2" />
                +91 72555*****
              </small>
              <small className="text-light">
                <i className="fa fa-envelope-open me-2" />
                5startravel@example.com
              </small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: 45 }}
            >
              <Link
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                  to=""
              >
                <i className="fab fa-twitter fw-normal" />
              </Link>
              <Link
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                to=""
              >
                <i className="fab fa-facebook-f fw-normal" />
              </Link>
              <Link
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                to=""
              >
                <i className="fab fa-linkedin-in fw-normal" />
              </Link>
              <Link
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                to=""
              >
                <i className="fab fa-instagram fw-normal" />
              </Link>
              <Link
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
                to=""
              >
                <i className="fab fa-youtube fw-normal" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
    </>
  )
}
