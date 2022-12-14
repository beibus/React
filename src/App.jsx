import './App.css';
import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState({});


  const handleSubmit = (event) => {
    // setEmail(event.target.value);
    // setPassword(event.target.value);
    event.preventDefault();
    setEmail("");
    setPassword("");
    console.log('email and password', email, password);

    let payload = {
      email: email,
      password: password
    }
    console.log('payload', payload);
    setLogin(payload);
    console.log('login', login);
  }

  async function doRequest() {
    let url = 'https://reqres.in/api/login';
    let data = {"email": "eve.holt@reqres.in", "password": "cityslicka"};

    let res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      let ret = await res.json();
      console.log(ret.token)
      // return JSON.parse(ret.token);
    } else {
      return 'HTTP Error: ${res.status}';
    }
  }

  doRequest().then(token => {
    console.log(token);
  });




    return (
      <div className="App">
        <form className='form-login' onSubmit={handleSubmit}>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  export default App;
