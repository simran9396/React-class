
import './App.css';
import { CardParent } from './Component/cards/CardParent';
import { Carousalparent } from './Component/Carousel/Carousalparent';
import { Navigationtable } from './Component/Navigationtable/Navigationtable';
import { Counter } from './Component/Usestate/Counter';
import { Courses } from './Course/Courses';




function App() {
  return (
    <div className="App">
    {/* <Courses/> */}
    {/* <CardParent/> */}
    {/* <Carousalparent/> */}
    {/* <Counter/> */}
    <Navigationtable/>
    </div>
  );
}

export default App;
