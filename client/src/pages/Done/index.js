import React from "react";
import download from "downloadjs"
import API from "../../utils/API";
import { useHistory, useLocation } from "react-router-dom";
import Form from "../../components/Form";
import { FormBtn } from "../../components/FormComponents";

function Done({setForm, initalForm}) {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    function handleSubmit(event) {
        event.preventDefault()
        API.download()
            .then(res => {
                download(res.data, "README.md")
                setForm(initalForm)
                history.replace(from)
            })
            .catch(err => {
                console.error(err);
            })

    }
    return (
        <Form>
            <h3 style={{ textAlign: "center" }}>Your README was Successfully Created</h3>
            <FormBtn onClick={handleSubmit}>download readme</FormBtn>
        </Form>
    )
}

export default Done