import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Input, Select } from "./components/FormComponents";
import Form from "./components/Form"
import Header from "./components/Header";
import Form1 from "./pages/Form1";
import Form2 from "./pages/Form2";
import Done from "./pages/Done";
import Modal from "./components/Modal"
import './App.css';

function App() {
  const initalForm = {}
  const [form, setForm] = useState(initalForm);
  const [published, setPublished] = useState("");
  const [modal, setModal] = useState(true)

  function handleChange(event) {
    let { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  function handleSelectChange(event) {
    const { name, value } = event.target
    if (value === "") {
      return
    } else {
      setPublished({ [name]: value })
      setModal(false)
    }
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
            <Done setForm={setForm} initalForm={initalForm} setModal={setModal}/>
          </Route>
        </Switch>
      </main>
      {
        modal ?
          <Modal>
            <Form>
              <Select
                htmlFor={"select"}
                label={"Is this application published online?"}
                name={"published"}
                type={"select"}
                handleChange={handleSelectChange}
              />
            </Form>
          </Modal> :
          null
      }
    </Router>
  );
}

export default App;
