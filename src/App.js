import React, { useEffect } from "react";
import bgImage from "./assets/images/serey-kim-vUePu7hAYAQ-unsplash.jpg";
import { stars } from "./utils/stars.js";
import { NavBar, Contents, Footer } from './components';
import './App.css';


function App() {
  useEffect(() => {
    console.dirxml(`Hello! 👋\n\nThanks for checking out my website!\nThe site was built using ReactJS (🙏) and styled with vanilla CSS, which I don't recommend unless you have sadistic tendencies...🤨\n\nYou can find my repo here: https://github.com/NWKendall/myPortfolio if you're curious.\n\nCheers! 🍻\n\nNic  `)
  }, [])

  // useEffect(() => {
  //   stars(".App");
  // }, []);

  return (
    <div className="App"
      style={{ backgroundImage: `url(${bgImage})` }
      }>
     <NavBar />
     <Contents />    
      <Footer />
    </div>
  );
}

export default App;
