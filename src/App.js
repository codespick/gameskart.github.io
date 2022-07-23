import './App.css';
// import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import About from './components/About.js';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Alert from './components/Alert';
import Navbar2 from './components/Navbar2';
// import Practice from './components/Practice';



function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [buttonText, setButtonText] = useState("Enable Dark Mode")
  const toggleMode = () => {
    // console.log("toggle mode is called");
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      setButtonText("Enable Light mode");
      showAlert(" Dark Mode has been enabled", " Success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setButtonText("Enable Dark Mode")
      showAlert(" Light Mode has been enabled", " Success");
    }
  }


  const [alert, setAlert] = useState(null);
  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1800);
  }







  return (
    <>
      <Router>
        <Navbar2 title="TextUtils" mode={mode} toggleMode={toggleMode} buttonText={buttonText} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>

        </div>



      </Router>
    </>
  );
}

export default App;
