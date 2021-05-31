import React from "react";
import API from "../../utils/API";
import Form from "../../components/Form";
import { useHistory } from "react-router-dom";
import { Input, FormBtn, Text } from "../../components/FormComponents";

function Form1({ form, handleChange }) {
  let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    API.createReadme(form)
      .then((res) => {
        console.log("success");
        history.push("/done");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <Form>
      <Input
        htmlFor={"path"}
        label={"gif or image path"}
        type={"text"}
        name={"path"}
        handleChange={handleChange}
        value={form.path || ""}
      />
      <Input
        htmlFor={"license"}
        label={"type of license"}
        type={"text"}
        name="license"
        handleChange={handleChange}
        value={form.license || ""}
      />
      <Text
        htmlFor={"install"}
        label={"installation and usage instructions"}
        type={"text"}
        rows={"6"}
        name={"install"}
        handleChange={handleChange}
        value={form.install || ""}
      />
      <Text
        htmlFor={"tech"}
        label={"project technologies"}
        type={"text"}
        rows={"6"}
        name={"tech"}
        handleChange={handleChange}
        value={form.tech || ""}
      />

      <FormBtn onClick={handleSubmit}>create readme</FormBtn>
    </Form>
  );
}

export default Form1;
