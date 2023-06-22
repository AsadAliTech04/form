import React from 'react'
import "./Leftbar.css"
import { UilPrint } from '@iconscout/react-unicons'
import { UilLinkAdd } from '@iconscout/react-unicons'
import { UilSave } from '@iconscout/react-unicons'
import { UilTimesCircle } from '@iconscout/react-unicons'
import { generatePDF } from '../Form/Form'
// import { generatePDF2 } from '../Form/Form2/Form2'
import { saveAs } from 'file-saver';

const savePage = () => {
  // Get the current page as a Blob object
  const blob = new Blob([document.documentElement.outerHTML], {
    type: 'text/html',
  });

  // Save the Blob as a file
  saveAs(blob, 'page.html');
};


// import Form from "../Form/Form"

   
const Leftbar = () => {

  return (
 <div className="main-left-bar">
   <div className="main-icons">
     <div className="icons"> 
      <div className="link">
           <UilLinkAdd  size="40px" /> 

      </div>
     
          <div id='print' onClick={ generatePDF}>
          <UilPrint size="40px"  />  
          </div>
         
            
          <div className="save">
           <UilSave onClick={savePage}  size="40px" />
                
          </div>
          <div className="stop">
           <UilTimesCircle  size="40px" />

          </div>

     </div>
     </div>
 </div>
  ) 
}

export default Leftbar  