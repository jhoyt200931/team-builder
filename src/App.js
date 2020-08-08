import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Form";
import Member from "./Member";

function App() {
  const [team, setTeam] = useState([]);
  const [member, setMember] = useState({
    name: "Name",
    email: "email",
    role: "Role",
})
  console.log(team);
  return (
    <div>
      <Form  member={member} setMember={setMember} setTeam={setTeam} team={team}/>
      <Member team={team}/>
    </div>
  );
}

export default App;
