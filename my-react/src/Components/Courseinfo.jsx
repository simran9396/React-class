import React from "react";
export const Courseinfo=({courseName,courseName1,instituteName,contact,city})=>{
    return(
      
       
        <table >
        <tr>
          <td >Course Name:</td>
          <td className="co">{courseName}</td>
          
 
        </tr>
        <tr>
          <td>Institite:</td>
          <td>{instituteName}</td>
        </tr>
        <tr>
          <td>Contact</td>
          <td>{contact}</td>
        </tr>
        <tr>
          <td>city:</td>
          <td>{city}</td>
        </tr>
      </table>
     
    )
}