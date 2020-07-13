import React, { useState } from 'react'
import "./form.css"
import API from "../../utils/API"

function Form() {
    const initalForm = {}
    const [form, setForm] = useState(initalForm);

    function handleChange(event) {
        let { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

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
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="github">github username</label>
                                        <input type="text"
                                            name="username"
                                            onChange={handleChange}
                                            value={form.username || ""} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="repo">repo url</label>
                                        <input type="text"
                                            name="repo"
                                            onChange={handleChange}
                                            value={form.repo || ""} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="email">email</label>
                                        <input type="text"
                                            name="email"
                                            onChange={handleChange}
                                            value={form.email || ""} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="title">project title</label>
                                        <input type="text"
                                            name="title"
                                            onChange={handleChange}
                                            value={form.title || ""} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="path">gif or image path</label>
                                        <input type="text"
                                            name="path"
                                            onChange={handleChange}
                                            value={form.path || ""} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="license">type of license</label>
                                        <input type="text"
                                            name="license"
                                            onChange={handleChange}
                                            value={form.license || ""} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">project description</label>
                                <textarea type="text"
                                    rows="5"
                                    name="description"
                                    onChange={handleChange}
                                    value={form.description || ""} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="install">installation instructions</label>
                                <textarea type="text"
                                    rows="5"
                                    name="install"
                                    onChange={handleChange}
                                    value={form.install || ""} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="usage">Usage</label>
                                <textarea type="text"
                                    rows="5"
                                    name="usage"
                                    onChange={handleChange}
                                    value={form.usage || ""} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tech">project technologies</label>
                                <textarea type="text"
                                    rows="5"
                                    name="tech"
                                    onChange={handleChange}
                                    value={form.tech || ""} />
                            </div>
                            <div className="row justify-content-center mt-4">
                                <div className="form-group" style={{ width: "55%" }}>
                                    <button type="submit"
                                        onClick={handleSubmit}>create readme</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form