import logo from './logo.svg';
import './App.css';
import{Courseinfo} from"./Components/Courseinfo"

function App() {
  return (
    <div className="App">
       <h1>List of institute</h1>
      <table><tr><td>
      <Courseinfo courseName="PDAC" instituteName="Pdac" contact="956565656" city="pune"/>
      </td>
      <td><Courseinfo courseName="CDAC" instituteName="Stack" contact="976565656" city="mumbai"/>
      </td><td><Courseinfo courseName="REACT" instituteName="star" contact="966565656" city="nanded" />
      </td></tr></table>
      <hr />
      <table><tr><td>
      <Courseinfo courseName="PDAC" instituteName="Pdac" contact="956565656" city="pune"/>
      </td>
      <td><Courseinfo courseName="CDAC" instituteName="Stack" contact="976565656" city="mumbai"/>
      </td>
      <td><Courseinfo courseName="CDAC" instituteName="Stack" contact="976565656" city="mumbai"/>
      </td></tr></table>
    </div>
  );
}

export default App;
