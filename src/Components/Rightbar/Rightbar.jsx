import React from 'react'
import Logo from "../../imgs/form_logo-removebg-preview.png"
import "./Rightbar.css"

const Rightbar = () => {
  return (
    <div className="main-right-bar">
      <div className="right-bar">

     
      <div className="bar-items">
        <img src={Logo} alt="" />
        <div className="address">
          <h6>Address:</h6>
          <span>Fresno</span><br />
          <span>1903 E Fir Ave <br />
            Ste 101 <br />
            Fresno, CA 93720</span>
        </div>
        <div className="locat">
          <h6>Other Locations:</h6>
          <span>Clovis</span><br />
          <span>Reedley</span><br />
          <span>Madera</span><br />
          <span>Visalia</span><br />
        </div>
        <div className="phone">
          <h6>Phone:</h6>
          <span>(559) 226-2722 - Fresno</span><br />
          <span>(559) 472-4050 - Clovis</span><br />
          <span>(559) 480-3002 - Reedley</span><br />
          <span>(559) 673-8337 - Madera (559)</span><br />
          <span>226-2722 - Visalia</span>
        </div>
        <div className="time">
                 <h6>Hours:</h6>
                 <span>Mon-Thu: 8:00 AM-5:00 PM</span><br />
                 <span>Fri: 7:00 AM-4:00 PM</span>

        </div>
        <button className='button'>Contact Us</button>
      </div>
      </div>
    </div>
  )
}

export default Rightbar