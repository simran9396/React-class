
import './App.css';
import { Counter } from './Component/Section1/Counter';
import { Aboutus } from './Component/Route/Aboutus';
import { Contactus } from './Component/Route/Contactus';
import { Courses } from './Component/Route/Courses';
import { Navigationbar } from './Component/Route/Navigationbar';
import { Services } from './Component/Route/Services';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { Home } from './Component/Route/Home';
import { Parentcourse } from './Component/exampractice/Parentcourse';
import { Login } from './Component/Route/Login';




function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <Parentcourse/> */}
      <Router>

        
             <Navigationbar/>
             
             <div>
               <Route path="/home">
                 <Home/>
               </Route>
               <Route path="/login">
                 <Login/>
               </Route>
               <Route path="/contact us">     
                    <Contactus/>
                    </Route>
                    <Route path="/course">
             <Courses/>
             </Route>
                    <Route path="/services">
             <Services/>
             </Route>
                    <Route path="/about us">
             <Aboutus/>
             </Route>
             </div>
      </Router>
    </div>
  );
}

export default App;
