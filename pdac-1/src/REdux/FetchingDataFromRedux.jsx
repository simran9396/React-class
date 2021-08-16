import React, { useState } from "react";

import { Card,Image } from "react-bootstrap";
import { getAllGroup } from "../state/Selector/selector";
import { useSelector } from "react-redux";

const FetchingDataFromRedux = () => {
  const selector = useSelector(getAllGroup);
  const [data, setdata] = useState(selector);
  return (
    <div>
      {data.map((item)=>{
        return(
  
      <Card
        style={{
          width: "20rem",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <img src={item.imgs} alt="" />
        <Card.Title>Hello {item.name}  {item.sname}</Card.Title>
        <Card.Body>{item.desc}</Card.Body>
      </Card>
        )
          })}
    </div>
  );
};
export default FetchingDataFromRedux;
