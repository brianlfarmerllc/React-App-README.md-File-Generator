import React from 'react'
import "./form.css"
import API from "../../utils/API"
import { Input, FormBtn, Text } from "../../components/FormComponents"

function Form1({form, handleChange}) {

    function handleSubmit(event) {
        event.preventDefault()
        API.createReadme(form)
            .then(res => console.log("success"))
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <div className="row justify-content-center">
            <div className=" col-11 col-xl-8">
                <div className="form">
                    <div className="form-header">
                        <h1>readme generator</h1>
                    </div>
                    <div className="form-content">
                        <form>
                            <Input
                                htmlFor={"path"}
                                label={"gif or image path"}
                                type={"text"}
                                name={"path"}
                                handleChange={handleChange}
                                value={form.path || ""} />
                            <Input
                                htmlFor={"license"}
                                label={"type of license"}
                                type={"text"}
                                name="license"
                                handleChange={handleChange}
                                value={form.license || ""} />
                            <Text
                                htmlFor={"install"}
                                label={"installation and usage instructions"}
                                type={"text"}
                                rows={"6"}
                                name={"install"}
                                handleChange={handleChange}
                                value={form.install || ""} />
                            <Text
                                htmlFor={"tech"}
                                label={"project technologies"}
                                type={"text"}
                                rows={"6"}
                                name={"tech"}
                                handleChange={handleChange}
                                value={form.tech || ""} />

                            <FormBtn onClick={handleSubmit}>create readme</FormBtn>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form1