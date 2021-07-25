import React from "react";



export const Cource=({courseName,instituteName,contact,city})=>{
    
    return(
      
       
        <table border="3px">
        <tr>
          <td >Course Name:</td>
          <td >{courseName}</td>
          
 
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