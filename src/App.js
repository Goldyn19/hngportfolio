import './App.css';
import Aboutme from './component/Aboutme';
import Goals from './component/Goals';
import NavBar from './component/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Aboutme/>
      <Goals/>
    </div>
  );
}

export default App;
