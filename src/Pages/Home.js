import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { specialityData } from "../assets/assets_frontend/assets";
import { doctors } from "../assets/assets_frontend/assets";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Home.css";
const Home = () => {
  const { appointment_img, group_profiles, arrow_icon, header_img } = assets;
  const navigate = useNavigate();
  const naviageteToDoctors = () => {
    navigate("/doctors");
    window.scroll(0, 0);
  };

  const categoryRedirect = (e) => {
    navigate(`/doctors/${e}`);
    window.scroll(0, 0);
  };
  return (
    <div className="main">
      <div className="book-appointment-con">
        <div className="book-apint-con">
          <h1>Book Appointment With Trusted Doctors</h1>
          <div className="group-img">
            <img src={group_profiles} alt="group" />
            <p>
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>
          <button onClick={() => navigate("/doctors")}>
            Book appointment
            <img src={arrow_icon} alt="logo" className="arro-img" />
          </button>
        </div>

        <div className="image-con">
          <img className="image1" src={header_img} alt="image1" />
        </div>
      </div>
      <div className="specilaty-con">
        <h1>Find by Speciality</h1>

        <ul className="ul-list">
          {specialityData.map((i) => (
            <li className="list" onClick={() => categoryRedirect(i.speciality)}>
              <img src={i.image} alt="speciality" />
              <p>{i.speciality}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="home-con-3">
        <h1>Top Doctors to Book</h1>
        <p>Simply browse through our extensive list of trusted doctors.</p>

        <ul className="doctors-ul-list">
          {doctors.slice(0, 10).map((i, index) => (
            <Link className="link" to={`/appointment/${i._id}`} key={index}>
              <li onClick={() => window.scroll(1, 1)}>
                <div className="doctors-img-con">
                  <img src={i.image} />
                </div>
                <div className="details">
                  <div className="available">
                    <div className="dot"></div> <p>Available</p>
                  </div>
                  <h3>{i.name}</h3>
                  <p>{i.speciality}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="more-button-con">
        <button onClick={naviageteToDoctors}>more</button>
      </div>

      <div className="trusted-doc-con">
        <div>
          <h1>
            Book Appointment
            <br />
            With 100+ Trusted Doctors
          </h1>
          <button onClick={() => { navigate("/signup"); window.scroll(0,0) } }>Create account</button>
        </div>
        <div className="last-image">
          <img src={appointment_img} />
        </div>
      </div>
    </div>
  );
};

export default Home;
