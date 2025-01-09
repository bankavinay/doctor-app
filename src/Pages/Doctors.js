import React from "react";
import { useState } from "react";
import { specialityData } from "../assets/assets_frontend/assets";
import { doctors } from "../assets/assets_frontend/assets";

import { Link } from "react-router-dom";
import "../Styles/Doctors.css";
const Doctors = () => {
  
  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div className="doc-2">
        <div className="buttons-con">
          {specialityData.map((i) => (
            <Link to={`/doctors/${i.speciality}`}>
              <button>{i.speciality}</button>
            </Link>
          ))}
        </div>

        <div>
          <ul className="doctors-ul-list">
            {doctors.map((i) => (
              <Link className="link" to={`/appointment/${i._id}`}>
                <li key={i._id}>
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
      </div>
    </div>
  );
};

export default Doctors;
