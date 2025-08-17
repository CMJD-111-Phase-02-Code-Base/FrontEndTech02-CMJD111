import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Test } from "./Test";
import { Concept } from "./Concept";
import { CourseMaterial } from "./components/CourseMaterial";
import { NavBar } from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
    <NavBar/>
    <CourseMaterial/>
    </>
  );
}

export default App;
