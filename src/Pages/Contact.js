import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import '../Styles/Contact.css'
const Contact = () => {
  const {contact_image} = assets
  return (
    <div className='contat-1'>
      <h3>
        CONTACT <span>US</span>
      </h3>
      <div className='contact-2'>
        <img src={contact_image} />
        <div>
          <h4>OUR OFFICE</h4>
          
          <p>
            00000 Willms Station <br /> Suite 000, Washington, USA
          </p>
          
          <p>
            Tel:6302823218 <br />
            Email: bankavinay630@gmail.com
          </p>
          
          <h4>CAREERS AT PRESCRIPTO</h4>
          
          <p>Learn more about our teams and job openings.</p>
          
          <button className='button'>Explore jobs</button>
        </div>
      </div>
    </div>
  );
}

export default Contact