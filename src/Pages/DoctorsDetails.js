import React from "react";
import { useParams } from "react-router-dom";
import { doctors } from "../assets/assets_frontend/assets";
import { assets } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";
import "../Styles/DoctorsDetails.css";
const DoctorsDetails = () => {
  const { id } = useParams();

  let filterDoc = doctors.find((item) => {
    if (item._id === id) {
      return item;
    }
  });
  const relatedData = doctors.filter((item) => {
    if (item.speciality === filterDoc.speciality && item._id !== id) {
      return item;
    }
  });
  console.log(relatedData);

  const { name, image, speciality, degree, experience, about, fees } =
    filterDoc;
  const { verified_icon, info_icon } = assets;
  return (
    <div>
      <div className="docdetail-1">
        <img className="doc-img" src={image} />

        <div className="docdetails-2">
          <div className="divof">
            <h3>{name} </h3>
            <img src={verified_icon} />
          </div>

          <div className="divof-2">
            <p>{degree}</p>
            <p>-</p>
            <p>{speciality}</p>
            <div>{experience}</div>
          </div>

          <div className="divof-3">
            <div>
              <p>About</p>
              <img src={info_icon} />
            </div>

            <p>{about}</p>
            <h3>
              Appointment fee: $<span>{fees}</span>
            </h3>
          </div>
        </div>
      </div>

      <div className="docdetail-2">
        <h2>Related Doctors</h2>
        <p>Simply browse through our extensive list of trusted doctors.</p>
      </div>

      <ul className="doctors-ul-list">
        {relatedData.map((i) => (
          <Link className="link" to={`/appointment/${i._id}`}>
            <li key={i._id} onClick={() => window.scroll(0,0)}>
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
  );
};

export default DoctorsDetails;
