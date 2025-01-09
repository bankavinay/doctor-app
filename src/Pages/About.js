import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import "../Styles/About.css";
const About = () => {
  const { about_image } = assets;
  return (
    <div className="about-1">
      <div>
        <div className="about-2">
          <h3>
            ABOUT <span>US</span>
          </h3>
        </div>

        <div className="about-3">
          <img src={about_image} alt="about" />
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
            <br />
            <br />
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way. <br />
            <br />
            <span>Our vision</span>
            <br />
            <br />
            Our Vision Our vision at Prescripto is to create a seamless
            healthcare experience for every user. We aim to bridge the gap
            between patients and healthcare providers, making it easier for you
            to access the care you need, when you need it.
          </p>
        </div>

        <h3 className="why">
          WHY <span>CHOOSE US</span>
        </h3>

        <div className="about-4">
          <div className="outdiv">
            <div className="inside">
              <h3>Efficiency:</h3>
              <p>
                Streamlined appointment scheduling that fits into your busy
                lifestyle.
              </p>
            </div>
          </div>

          <div className="outdiv">
            <div className="inside">
              <h3>Convenience:</h3>
              <p>
                Access to a network of trusted healthcare professionals in your
                area.
              </p>
            </div>
          </div>

          <div className="outdiv">
            <div className="inside">
              <h3>Personalization:</h3>
              <p>
                Tailored recommendations and reminders to help you stay on top
                of your health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
