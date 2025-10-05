import React from "react";
import * as images from "../include/images.js";

const CertificationsPage = () => {
  return (
    <div>
      {" "}
      <section id="certifications" className="section scrollspy">
        <h2 className="section-heading">Certifications</h2>
        <div className="container">
          <div className="card">
            <div className="card-content">
              <div className="skill-section" id="certifications">
                <ul className="skill-list">
                  <li>
                    <img
                      alt="Google Cybersecurity"
                      className="cert-logo"
                      src={images.googlecybersecurity}
                    />
                    <p className="cert-label">Google Cybersecurity</p>
                  </li>
                  <li>
                    <img
                      alt="Pace University Customer Service Training"
                      id="customer-service"
                      className="cert-logo"
                      src={images.customerservice}
                    />
                    <p className="cert-label">
                      Pace University Customer Service Training
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationsPage;
