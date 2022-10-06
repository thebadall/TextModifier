import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [modeText, setModeText] = useState("Enable Darkmode")
  const [alert, setAlert] = useState(null)
  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("Disable Light Mode")
      document.body.style.backgroundColor = "#042743"
      document.body.style.color = "white"
      showAlert("Dark Mode Enabled", "success")
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      setModeText("Enable Dark Mode")
      showAlert("Light Mode Enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextModifier" mode={mode} modeText={modeText} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
          <Route exact path="/" element={<TextForm heading="Try - Enter Text To Analyse" showAlert={showAlert} />} />

          <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
