
import React from "react";
import { Coursereducer } from "../Reducer/Coursereducer";
import { Cource } from "./Cource";


export const Courses=()=>{

  return (
    <div >
     
      <table>
          <tr>
          {Coursereducer.Data.map((item)=>(
          <td>
           
          
      <Cource
       courseName={item.courseName}
        instituteName={item.instituteName}
         contact={item.contact} 
         city={item.city}/>
         </td>
            
      
           ) )}
      </tr>
      </table>
    </div>
 
  )
};

