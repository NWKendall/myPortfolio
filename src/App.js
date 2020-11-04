import './App.css';
import { NavBar, Contents } from './components';
import bgImage from "./assets/serey-kim-vUePu7hAYAQ-unsplash.jpg";


function App() {
  return (
    <div className="App"
      style={{ backgroundImage: `url(${bgImage})` }}>
     <NavBar />
     <Contents />
     <div className="wave"></div>
    </div>
  );
}

export default App;
