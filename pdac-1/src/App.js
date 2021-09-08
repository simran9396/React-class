import React from 'react';

// import './App.css';
import { ToggleComps } from './Component/bulb/ToggleComps';
import { EMICalculator } from './Component/Calculator/EMICalculator';
import { Memoemi } from './Component/Calculator/Memoemi';
import { CardParent } from './Component/cards/CardParent';
import { Carousalparent } from './Component/Carousel/Carousalparent';
import { Dictionarymain } from './Component/Dictionary/Dictionarymain';
import { GridLayout } from './Component/Grid/GridLayout';
import { Login } from './Component/Login/Login';
import { Navigationtable } from './Component/Navigationtable/Navigationtable';
import { Audioplayer } from './Component/piano/Audioplayer';
import { Piano } from './Component/piano/Piano';
import { Pianomain } from './Component/piano/Pianomain';

import { Parentcard } from './Component/Practicecard/Parentcard';
import { Dynamiccomp } from './Component/search employee/Dynamiccomp';
import Testing from './Component/Testing';
import { Toggling } from './Component/toggle/Toggling';
import { Counter } from './Component/Usestate/Counter';
import { Courses } from './Course/Courses';
import { Clock } from './Nodejs/Clock';
import { Empdetails } from './reactRedux/Empdetails';

import  FetchingDataFromRedux  from './REdux/FetchingDataFromRedux';




function App() {
  return (
    <div className="App">
     
    {/* <Courses/> */}
    {/* <CardParent/> */}
    {/* <Carousalparent/> */}
    {/* <Counter/> */}
    {/* <Navigationtable/> */}
    {/* <GridLayout/> */}
    {/* <Toggling/> */}
    {/* <ToggleComps/> */}
    {/* <EMICalculator/> */}
    {/* <Piano/> */}
    {/* <Pianomain/> */}
    {/* <Audioplayer/> */}
    {/* <Parentcard/> */}
    {/* <Login/> */}
    {/* <Clock/> */}
    {/* <Dictionarymain/> */}
    {/* <Memoemi/> */}
    {/* <FetchingDataFromRedux/> */}
    {/* <Testing/> */}
    {/* <Empdetails/> */}
   <Dynamiccomp/>
    </div>
  );
}

export default App;
