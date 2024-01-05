import About from "./components/About.js";
import Alert from "./components/Alert.js";
import Navbar from "./components/Navbar.js";
import TextBox from "./components/TextBox.js";
import "./App.css";
import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };
  const [Mode, setDarkMode] = useState("light");
  const togglemode = () => {
    if (Mode === "dark") {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtiles" mode={Mode} togglemode={togglemode} />
        <Alert alert={alert} mode={Mode} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <TextBox
                  heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces, Capitalize, Title Case, Sentence Case, On Copy"
                  mode={Mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/About" element={<About mode={Mode} />} />
          </Routes>
        </div>
      </Router>
      
    </>
  );
}
