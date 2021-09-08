import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
import bootstrap from 'bootstrap';


function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Mitchell"} lastName={"Jenkins"} age={"23"} hairColor={"brown"}/>
      <PersonCard firstName={"Lauren"} lastName={"Rathjens"} age={"20"} hairColor={"brown"}/>
    </div>
  );
}

export default App;
