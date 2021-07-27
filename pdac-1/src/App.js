
import './App.css';
import { ToggleComps } from './Component/bulb/ToggleComps';
import { CardParent } from './Component/cards/CardParent';
import { Carousalparent } from './Component/Carousel/Carousalparent';
import { GridLayout } from './Component/Grid/GridLayout';
import { Navigationtable } from './Component/Navigationtable/Navigationtable';
import { Toggling } from './Component/toggle/Toggling';
import { Counter } from './Component/Usestate/Counter';
import { Courses } from './Course/Courses';




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
    <ToggleComps/>
    </div>
  );
}

export default App;
