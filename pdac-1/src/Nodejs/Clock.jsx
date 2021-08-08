import React,{useState,useEffect} from "react";
import { Card } from "react-bootstrap";
import './Clock.css'

export const Clock = () => {
    const[sec,setSec]= useState(0)
    const[min,setMin]=useState(0)
    const[hour,setHour]=useState(0)
    setTimeout(()=>{
        setSec(sec+1)
        if (sec===60){
        setMin(min+1)
        setSec(0)
     
        if(min===60){
            setHour(hour+1)
            setMin(0)
            setSec(0)
          
        }
    }
    },200)
   
  return (
    <Card className="clock">
      <div>{hour}:{min}:{sec}</div>
    </Card>
  );
};
