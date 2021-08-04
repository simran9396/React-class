import React ,{useEffect}from 'react'
import { useHistory } from 'react-router-dom'
import { userData } from './config'

export const Services = () => {
       const history=useHistory()
       useEffect=(()=>{
        if(!(userData.token==localStorage.getItem("token"))){
            history.push("/login")
           
        }
       },[])
    return (
        <div>
            <h1>services</h1>
        </div>
    )
}
