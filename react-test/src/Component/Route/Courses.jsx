import React,{useEffect} from 'react'
import { userData } from './config'


import {useHistory} from 'react-router-dom'
export const Courses = () => {
       const history=useHistory()
    useEffect=(() => {
       
            if(!(userData.token==localStorage.getItem("token"))){

                history.push("/login")
               
            }
        
    }, [])
    return (
        <div>
           <h1>courses</h1> 
        </div>
    )
}
