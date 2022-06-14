import React from 'react';

import { useState } from "react";
const axios = require('axios').default;

function CardList(props) {
  return (
    <div>
      {props.Employ.map(Employ => <Card {...Employ} />)}
    </div>
  );
}

function Form(props) {

  const [userinput] = useState('');


  async function handleSubmit(event) {
    event.preventDefault();
    const res = await axios.get(`http://localhost:8000/api/v1/user/`);
    props.onSubmit(res.data);
    const clean = () => changeValue('');
    clean();
  }

  return (
    <div>
      <div style={{ textAlign: "center", fontWeight: "bolder", fontSize: 30 }}> Add aiio Users:</div>
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text"
          value={userinput}
          placeholder="aiio UserName..." required
          onChange={(e) => changeValue(e.target.value)}
        />

        <button>Add</button>
      </form>
    </div>
  );
}

function Card(props) {
  const profile = props;
  return (
    <div className="aiio-app">
      <img src={profile.avatar_url} alt='Employ' />
      <div className="info">
        <div className="name">{Employ.name}</div>
        <div className="company">{Employ.company}</div>
      </div>
    </div>
  );
}

function App() {

  const [Employ, addEmploy] = useState([]);

  const updatedEmploy= (Employdata) => addEmploy([...Employ, Employdata]);


  return (
    <div>
     
      <Form onSubmit={updatedEmploy} />
      <CardList Employes={Employ} />
    </div>
  );
}



export default App;