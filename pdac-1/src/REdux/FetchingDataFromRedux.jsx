import React, { useState } from "react";

import { Card } from "react-bootstrap";
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
        <Card.Title>Hello=={item.name} surname= {item.sname}</Card.Title>
        <Card.Body>redux practice reducer</Card.Body>
      </Card>
        )
          })}
    </div>
  );
};
export default FetchingDataFromRedux;
