import React, { useEffect } from "react";
import { useState } from "react";
import { specialityData } from "../assets/assets_frontend/assets";
import { doctors } from "../assets/assets_frontend/assets";

import { Link, useParams, NavLink } from "react-router-dom";
import "../Styles/CategoryFilter.css";
const CategoryFilter = () => {
  const [list, setList] = useState([]);
  // const [full, setFull] = useState(false);
  const { category } = useParams();
  //   console.log(category);
  //   console.log(doctors);
  const filterOfData = () => {
    if (category) {
      const filterList = doctors.filter((item) => item.speciality === category);
      console.log(filterList);
      setList(filterList);
    } else {
      setList(doctors);
    }
  };
  useEffect(() => {
    filterOfData();
  }, [category]);

  // const naigete = useNavigate();
  // useEffect(() => {
  //   if (full) {
  //     setList(doctors)
  //   } else {
  //     filterOfData();
  //   }
  // }, [full]);
  // const fullOf = () => {
  //   setFull(!full);
  // };

  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div className="doc-2">
        <div className="buttons-con">

          {specialityData.map((i, index) => (
            <NavLink key={index} to={`/doctors/${i.speciality}`}>
              <button>{i.speciality}</button>
            </NavLink>

          ))}
        </div>

        <div>
          <ul className="doctors-ul-list">
            
            {list.map((i, index) => (
              <Link key={index} className="link" to={`/appointment/${i._id}`}>
                <li>
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

export default CategoryFilter;
