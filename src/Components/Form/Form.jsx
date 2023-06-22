import React from 'react'
import "./Form.css"
import Logo from "../../imgs/form_logo-removebg-preview.png"
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Map1 from "../../imgs/map1.PNG"
import Map2 from "../../imgs/map2.PNG"
import Map3 from "../../imgs/map3.PNG"
import Map4 from "../../imgs/map4.PNG"
import Map5 from "../../imgs/map5.PNG"
import { useState } from 'react';





export const generatePDF = () => {


    const input = document.getElementById('component-to-pdf'); // Replace 'component-to-pdf' with the ID of the container containing your components
    html2canvas(input)
        .then((canvas) => {
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298); // Adjust the dimensions as per your requirement
          
            

            pdf.save('file1.pdf');


 
        });
        const input1 = document.getElementById('component-to-pdf-2'); // Replace 'component-to-pdf' with the ID of the container containing your components
            html2canvas(input1)
                .then((canvas) => {
                    const pdf = new jsPDF('p', 'mm', 'a4');
                    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298); // Adjust the dimensions as per your requirement

                    pdf.save('file2.pdf')
                });
               





};




function Form() {

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Submit the form or perform further actions
            alert('Form submitted successfully!');
        }
    };
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dob: "",
        phone: "",
        reffered: "",
        phone1: "",
        address: "",

    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const { name, email, dob, phone, phone1, address, reffered, } = formData;
        const errors = {};

        if (!name.trim()) {
            errors.name = 'Name is required';
        }

        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
        }

        if (!dob.trim()) {
            errors.dob = "DOB is required"
        } else if (dob.length > 10) {
            errors.dob = "enter a valid dob like 10-12-2024 "
        }
        if (!phone.trim()) {
            errors.phone = "phone is required"
        }
        if (!phone1.trim()) {
            errors.phone1 = "phone is required"
        }
        if (!address.trim()) {
            errors.address = "address is required"
        }
        if (!reffered.trim()) {
            errors.reffered = "reffered is required"
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;

    }

    return (
        <>

            < div className='main'>


                <div className="errors">
                    {errors.name && <span style={{ color: "red", border: '2px solid red' }}>{errors.name}</span>}
                    {errors.dob && <span style={{ color: "red", border: '2px solid red' }}>{errors.dob}</span>}
                    {errors.phone && <span style={{ color: "red", border: '2px solid red' }}>{errors.phone}</span>}
                    {errors.address && <span style={{ color: "red", border: '2px solid red' }}>{errors.address}</span>}
                    {errors.reffered && <span style={{ color: "red", border: '2px solid red' }}>{errors.reffered}</span>}
                    {errors.email && <span style={{ color: "red", border: '2px solid red' }}>{errors.email}</span>}
                    {/* {errors.phone1 && <span style={{color:"red" ,  border: '2px solid red' }}>{errors.phone1}</span>}  */}

                </div>


                <div className="main1" id='component-to-pdf'>
                    <div className="address-phone">
                        <div className="items">
                            <div className="item1">
                                <form >
                                    <input type="radio" name="name" id="name1" value="name1" />
                                    <label htmlFor="name1">Allen Chien ,DDS</label><br />
                                    <input type="radio" name="name" id="name2" value="name2" />
                                    <label htmlFor="name2">Ardavan Kheradpir ,DMD, </label><br />
                                    <input type="radio" name="name" id="name3" value="name3" />
                                    <label htmlFor="name3">Shannon Barnhart , DDS</label><br />
                                    <input type="radio" name="name" id="name4" value="name4" />
                                    <label htmlFor="name4">Brian Huh , DMD</label><br />
                                    <input type="radio" name="name" id="name5" value="name5" />
                                    <label htmlFor="name5">Thomas Curiel,DMD</label><br />
                                    <input type="radio" name="name" id="name6" value="name6" />
                                    <label htmlFor="name6">Shayan Salim , DDS ,MD</label>

                                </form>
                            </div>
                            <div className="item2">
                                <form>
                                    <input type="radio" name="office" id="office1" value="office1" />
                                    <label htmlFor="office1">Fresno Office</label><br />
                                    <input type="radio" name="office" id="office2" value="office2" />
                                    <label htmlFor="office2">Reedley Office </label><br />
                                    <input type="radio" name="office" id="office3" value="office3" />
                                    <label htmlFor="office3">Madera Office</label><br />
                                    <input type="radio" name="office" id="office4" value="office4" />
                                    <label htmlFor="office4">Clovis Office</label><br />
                                    <input type="radio" name="office" id="office5" value="office5" />
                                    <label htmlFor="office5">Visalia Office</label><br />


                                </form>
                                <span>Office <span style={{ color: "black" }}>(559)226-2722</span></span>
                            </div>
                        </div>
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                    <div className="appoint-date">
                        <label htmlFor="">Appointment Date:</label>
                        <input type="text" />
                        <label htmlFor="">Time:</label>
                        <input type="text" />
                    </div>
                    <div className="patient-information">
                        <h3>PATIENT INFORMATION:</h3>

                        <label htmlFor="">Name:</label>
                        <input type="text"
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                        onClick={handleSubmit}


                        />

                        <label htmlFor="">DOB:</label>
                        <input type="text" placeholder='MM DD YYYY'
                            name='dob'
                            value={formData.dob}
                            onChange={handleChange}
                            onClick={handleSubmit}

                        />

                        <label htmlFor="">Phone:</label>
                        <input type="number"
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            onClick={handleSubmit}

                        />
                        <br />
                        <label htmlFor="">Dental Insurance:</label>
                        <input type="text" id='p1' /><br />
                        <label htmlFor="">Subscriber ID#:</label>
                        <input type="text" />
                        <label htmlFor="">Subscriber DOB:</label>
                        <input type="text" /><br />
                        <label htmlFor="">Dental Insurance Address :</label>
                        <input type="text" id='p2' /><br />
                        <p>*Please attach a copy of the insurannce card (front and back)</p>
                        <label htmlFor="" >Subscriber:</label>
                        <input type="text" id='p3' /><br />
                        <label htmlFor="" > Address:</label>
                        <input type="text" id='p4'
                            name='address'
                            value={formData.address}
                            onChange={handleChange}
                            onClick={handleSubmit}

                        />

                    </div>
                    <div className="reffer-doctor-information">
                        <h3>REFERRING DOCTOR INFORMATION</h3>

                        <label htmlFor="">Referred By:</label>
                        <input type="text"
                            name='reffered'
                            value={formData.reffered}
                            onChange={handleChange}
                            onClick={handleSubmit}
                        />
                        <label htmlFor="">Phone:</label>
                        <input type="number"
                            name='phone1'
                            value={formData.phone1}
                            onChange={handleChange}
                            onClick={handleSubmit}
                        />
                        <br />
                        <label htmlFor="">Email:</label>
                        <input type="email"
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            onClick={handleSubmit}
                        />
                        <label htmlFor="">Reffering Doctor Signature:</label>
                        <input type="text" />

                    </div>
                    <div className="refrral-reason">
                        <h3>REASON FOR REFERRAL</h3>
                        <input type="checkbox" />
                        <label htmlFor="">Extraction(s)</label>
                        <input type="text" />
                        <input type="checkbox" />
                        <label htmlFor="">Implant</label>
                        <input type="text" />
                        <input type="checkbox" />
                        <label htmlFor="">Expose/Bond</label>
                        <input type="text" /><br />
                        <input type="checkbox" />
                        <label htmlFor="">Section Bridge Between Teeth #</label>
                        <input type="text" />
                        <label htmlFor="">/</label>
                        <input type="text" />
                        <input type="checkbox" />
                        <label htmlFor="">Pathology</label>
                        <input type="text" />
                    </div>
                    <div className="treat-area">
                        <span> TREATMENT/EVALUATION AREAS <span style={{ color: 'black', fontWeight: 'lighter ', fontSize: '13px' }}>(Please check teeth to be removed or area involved)</span></span>
                        <form action="">
                            <table>
                                <tr>
                                    <td> <input type="checkbox" id="checkbox1" /></td>
                                    <td>  <input type="checkbox" id="checkbox2" /></td>
                                    <td> <input type="checkbox" id="checkbox3" /></td>
                                    <td> <input type="checkbox" id="checkbox4" /></td>
                                    <td><input type="checkbox" id="checkbox5" /></td>
                                    <td><input type="checkbox" id="checkbox6" /></td>
                                    <td><input type="checkbox" id="checkbox7" /></td>
                                    <td><input type="checkbox" id="checkbox8" /></td>
                                    <td><div className='line1'></div></td>
                                    <td><input type="checkbox" id="checkbox9" /></td>
                                    <td><input type="checkbox" id="checkbox10" /></td>
                                    <td><input type="checkbox" id="checkbox11" /></td>
                                    <td><input type="checkbox" id="checkbox12" /></td>
                                    <td><input type="checkbox" id="checkbox13" /></td>
                                    <td><input type="checkbox" id="checkbox14" /></td>
                                    <td><input type="checkbox" id="checkbox15" /></td>
                                    <td><input type="checkbox" id="checkbox16" /></td>

                                </tr>
                                <tr>
                                    <td> <input type="checkbox" id="checkbox17" /></td>
                                    <td> <input type="checkbox" id="checkbox18" /></td>
                                    <td> <input type="checkbox" id="checkbox19" /></td>
                                    <td> <input type="checkbox" id="checkbox20" /></td>
                                    <td> <input type="checkbox" id="checkbox21" /></td>
                                    <td> <input type="checkbox" id="checkbox22" /></td>

                                    <td> <input type="checkbox" id="checkbox23" /></td>
                                    <td><input type="checkbox" id="checkbox24" /></td>
                                    <td><div className='line1'></div></td>
                                    <td>   <input type="checkbox" id="checkbox25" /></td>
                                    <td>   <input type="checkbox" id="checkbox26" /></td>
                                    <td>   <input type="checkbox" id="checkbox27" /></td>
                                    <td>   <input type="checkbox" id="checkbox28" /></td>
                                    <td>  <input type="checkbox" id="checkbox29" /></td>
                                    <td>  <input type="checkbox" id="checkbox30" /></td>
                                    <td>  <input type="checkbox" id="checkbox31" /></td>
                                    <td>  <input type="checkbox" id="checkbox32" /></td>

                                    <td></td>
                                </tr>
                            </table>
                            <div className="line"></div>

                            <table>

                                <tr>
                                    <td> <input type="checkbox" id="checkbox33" /></td>
                                    <td> <input type="checkbox" id="checkbox34" /></td>
                                    <td> <input type="checkbox" id="checkbox35" /></td>
                                    <td> <input type="checkbox" id="checkbox36" /></td>
                                    <td> <input type="checkbox" id="checkbox37" /></td>
                                    <td> <input type="checkbox" id="checkbox38" /></td>

                                    <td> <input type="checkbox" id="checkbox39" /></td>
                                    <td><input type="checkbox" id="checkbox40" /></td>
                                    <td><div className='line1'></div></td>
                                    <td>   <input type="checkbox" id="checkbox41" /></td>
                                    <td>   <input type="checkbox" id="checkbox42" /></td>
                                    <td>   <input type="checkbox" id="checkbox43" /></td>
                                    <td>   <input type="checkbox" id="checkbox44" /></td>
                                    <td>  <input type="checkbox" id="checkbox45" /></td>
                                    <td>  <input type="checkbox" id="checkbox46" /></td>
                                    <td>  <input type="checkbox" id="checkbox47" /></td>
                                    <td>  <input type="checkbox" id="checkbox48" /></td>
                                </tr>
                                <tr>
                                    <td> <input type="checkbox" id="checkbox49" /></td>
                                    <td> <input type="checkbox" id="checkbox50" /></td>
                                    <td> <input type="checkbox" id="checkbox51" /></td>
                                    <td> <input type="checkbox" id="checkbox52" /></td>
                                    <td> <input type="checkbox" id="checkbox53" /></td>
                                    <td> <input type="checkbox" id="checkbox54" /></td>

                                    <td> <input type="checkbox" id="checkbox55" /></td>
                                    <td><input type="checkbox" id="checkbox56" /></td>
                                    <td><div className='line1'></div></td>
                                    <td>   <input type="checkbox" id="checkbox57" /></td>
                                    <td>   <input type="checkbox" id="checkbox58" /></td>
                                    <td>   <input type="checkbox" id="checkbox59" /></td>
                                    <td>   <input type="checkbox" id="checkbox60" /></td>
                                    <td>  <input type="checkbox" id="checkbox61" /></td>
                                    <td>  <input type="checkbox" id="checkbox62" /></td>
                                    <td>  <input type="checkbox" id="checkbox63" /></td>
                                    <td>  <input type="checkbox" id="checkbox64" /></td>
                                </tr>
                            </table>
                        </form>






                    </div>
                    <div className="deciduous">
                        <h4>Deciduous</h4>
                        <form>
                            <table>
                                <tr>
                                    <td><input type="checkbox" id="checkd1" /></td>
                                    <td><input type="checkbox" id="checkd2" /></td>
                                    <td><input type="checkbox" id="checkd3" /></td>
                                    <td><input type="checkbox" id="checkd4" /></td>
                                    <td><input type="checkbox" id="checkd5" /></td>
                                    <td><div className='line1'></div></td>
                                    <td><input type="checkbox" id="checkd6" /></td>
                                    <td><input type="checkbox" id="checkd7" /></td>
                                    <td><input type="checkbox" id="checkd8" /></td>
                                    <td><input type="checkbox" id="checkd9" /></td>
                                    <td><input type="checkbox" id="checkd10" /></td>
                                </tr>
                            </table>
                            <div className="line2"></div>
                            <table>
                                <tr>
                                    <td><input type="checkbox" id="checkd11" /></td>
                                    <td><input type="checkbox" id="checkd12" /></td>
                                    <td><input type="checkbox" id="checkd13" /></td>
                                    <td><input type="checkbox" id="checkd14" /></td>
                                    <td><input type="checkbox" id="checkd15" /></td>
                                    <td><div className='line1'></div></td>
                                    <td><input type="checkbox" id="checkd16" /></td>
                                    <td><input type="checkbox" id="checkd17" /></td>
                                    <td><input type="checkbox" id="checkd18" /></td>
                                    <td><input type="checkbox" id="checkd19" /></td>
                                    <td><input type="checkbox" id="checkd20" /></td>
                                </tr>
                            </table>
                        </form>
                    </div>
                    <div className="teeth-verify">
                        <label htmlFor="">Please Verify Teeth For Extraction:</label>
                        <input type="text" />
                    </div>
                    <div className="others">
                        <h3>OTHER PROCEDURES/INSTRUCTIONS/CONCERNS:</h3><br />
                        <input type="text" />
                    </div>
                    <div className="footer">
                        <span>www.fresnooralsurgery.com | fresno@fresnooralsurgery.com</span>
                    </div>


                </div>
                <div className="form2" >
                    <div className="main-container" id='component-to-pdf-2'>
                        <div className="logo-name">
                            <div className="names">
                                <span>Allen Chien,DDS</span>
                                <span>Ardavan Kheradpir , DMD ,MD</span>
                                <span>Shannon Barnhart</span>
                                <span>Thomas Curiel, DMD</span>
                                <span>Brian Huh , DMD</span>
                                <span>Shayan Salim , DDS,MD</span>
                                <h5>fresnooralsurgery.com</h5>

                            </div>

                            <div className="logo">
                                <img src={Logo} alt="" />
                            </div>
                        </div>
                        <div className="patient-instru">
                            <h3>PATIENT INSTRUCTIONS:</h3>
                            <ul>
                                <li>Please notify our office at least 48 hours in advance if you must cancel your appointment.</li>
                                <li>Please email refferals and X-rays to <span>fresno@fresnooralsurgery.com</span></li>
                                <li>If undergoing IV anerthesia , do not eat or drinnk anything for atleast 8 hours before the time of our surgery. </li>
                                <li>If undergoing IV anerthesia , please remove contact lenses</li>
                                <li>If undergoing IV anerthesia , you must arrangments someone have with you who can remain in the office during your surgery and then drive your home and look after you the day of surgery</li>
                                <li>Minors must be accompanied by a parent or legal guardien </li>
                            </ul>
                        </div>
                        <div className="maps">
                            <div className="map1">
                                <h3>FRESNO OFFICE</h3>
                                <img src={Map1} alt="" /><br />
                                <span>1903 E Fir, Ste 101 , Fresno CA 93720 <br />P .(559) 226-2722 F .(559) 226 6989</span><br />
                                <span></span>
                            </div>
                            <div className="map2">
                                <h3>MADERA OFFICE</h3>
                                <img src={Map2} alt="" /><br />
                                <span>515 NI ST , Madera CA 93637 <br /> P .(559)637-8337 F .(559) 533 0571</span><br />

                            </div>
                            <div className="map3">
                                <h3>REEDLEY  OFFICE</h3>
                                <img src={Map3} alt="" /><br />
                                <span>1140 f st.Reedley CA 93654 <br />P .(559) 480-3002 F .(559) 743-7175 6989</span><br />

                            </div>
                        </div>
                        <div className="maps1">
                            <div className="map4">
                                <h3>CLOVIS  OFFICE</h3>
                                <img src={Map4} alt="" /><br />
                                <span>2026 Shaw Ave, Ste 101 Clovis , CA 93611<br />P .(559) 472-4050 F .(559) 472-4051</span><br />

                            </div>
                            <div className="map5">
                                <h3>VISALIA   OFFICE</h3>
                                <img src={Map5} alt="" /><br />
                                <span>242 W Caedwell Ave , Visalia CA 93277 <br />P .(559) 226-2722 F .(559) 746-0740 </span><br />

                            </div>
                        </div>
                        <div className="footer">
                            <span>www.fresnooralsurgery.com | fresno@fresnooralsurgery.com</span>
                        </div>
                    </div>

                </div>
       
            </div>
        </>
    )
}

export default Form