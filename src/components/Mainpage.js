import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import {Form, DropdownButton,  Dropdown,Button,ButtonGroup} from 'react-bootstrap';


function Mainpage() {

    let linkHighlight=(obj)=>{
        if(obj.isActive){
            return{backgroundColor:"Orange", color:"white"}
        }
    }
  return (
    <div>
       <div className="mainHeading">
       <div className="mainHeadingDiv" style={{paddingLeft:"20px" ,width:"100px"}}><p>phno:📱</p> </div>
       <div className="mainHeadingDiv"><p>WhatApp</p></div>
       <div className="mainHeadingDiv" style={{padding:"11px" ,width:"200px"}}>
        {/* <select style={{width:"150px"}}>
          <option>English</option>
          <option>Hindi</option>
          <option>Telugu</option>
          <option>Urdu</option>
        </select> */}
      <Form.Select aria-label="Default select example">
      
      <option value="1">English</option>
      <option value="2">Hindi</option>
      <option value="3">Telugu</option>
      <option value="4">Urdu</option>
      </Form.Select>
       </div>
      </div>

      <div className='mainMediCoverLogo'>

        <div>
            <img src="./images/logo.png"></img>

        </div>
        
          {/* <NavLink to="/Doctors">
            {/* <select>Doctors
              <option>Telangana</option>
              <option>Andhra Pradesh</option>
              <option>Maharashtra</option>
              <option>Karnataka</option>
              <option>Women & Child</option>
            </select>  */} 
          <div>
          <NavLink to="/Doctors">
           Doctors
          </NavLink>
          </div>


        <div>
          <NavLink to="/Specialties">
           Specialties
          </NavLink>
        </div>
        <div>
          <NavLink to="/ForPatients">
           For Patients
          </NavLink>
        </div>
        <div>
          <NavLink to="/InternationalPatients">
          International Patients
          </NavLink>
        </div>
        <div>
          <NavLink to="/OurCompany">
           OurCompany
          </NavLink>
        </div>
        <div>
          <NavLink to="/News">
          News
          </NavLink>
        </div>
      
        <div className='navBP'>
            <NavLink style={(obj)=>{
                return linkHighlight(obj);
            }} to ="/BookAppointment" className="BP">
               BookAppointment
            </NavLink>
        </div>
        <div >
            <NavLink to="/Allinone.js">
                <img className="allInOnePic"src="./images/3linespic.webp"></img>
            </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Mainpage