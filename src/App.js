import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Form";

function App() {
  const [team, setTeam] = useState([]);

  return (
    <Form />
  );
}

export default App;
