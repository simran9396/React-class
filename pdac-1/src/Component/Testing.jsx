import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllGroup } from "../state/Selector/selector";

const Testing = () => {
  const selector = useSelector(getAllGroup);
  const [data, setData] = useState(selector);
  console.log("selecgor==.", selector);
  return (
    <div>
      {data.map((items) => {
        return (
          <Card>
            <Card.Title>
              Hello=={items.name} surname= {items.sname}
            </Card.Title>
            <Card.Body>This is react-Redux</Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Testing;
