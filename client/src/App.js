import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Header from "./components/Header";
import Form1 from "./pages/Form1";
import Form2 from "./pages/Form2";
import Done from "./pages/Done";
// import Form from "./components/Form";
import './App.css';

function App() {
  const initalForm = {}
  const [form, setForm] = useState(initalForm);

  function handleChange(event) {
    let { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  return (
    <Router>
      <main>
        <Header />
        <Switch>
          <Route exact path="/">
            <Form1 form={form} handleChange={handleChange} />
          </Route>
          <Route exact path="/details">
            <Form2 form={form} handleChange={handleChange} />
          </Route>
          <Route exact path="/done">
            <Done/>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
