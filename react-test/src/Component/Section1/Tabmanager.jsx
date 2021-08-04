import React from 'react'
import {Tab,Tabs} from 'react-bootstrap'
import { Sample } from './Sample'

import './Tab.css'
export const Tabmanager = () => {
    return (
        <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
           <Tab eventKey="section1" title="Section1">
      <Sample/>
               </Tab>
           <Tab eventKey="section2" title="Section2">
        Tab2
           </Tab>
       <Tab eventKey="section3" title="Section3">
       Tab3
        </Tab>
         </Tabs>
        </div>
    )
}
