import React, {useState} from 'react'
import "./form.css"

function Form() {
    const [form, setFom] = useState({});

    function handleChange(event) {

    }

    return (
        <div className="row justify-content-center">
            <div className=" col-10 col-xl-5">
                <div class="form">
                    <div class="form-header">
                        <h1>readme generator</h1>
                    </div>
                    <div class="form-content">
                        <form>
                            <div class="form-group">
                                <label for="github">github username</label>
                                <input type="text" 
                                name="username"
                                onChange={handleChange}
                                value= {form.username || ""}/>
                            </div>
                            <div class="form-group">
                                <label for="email">email</label>
                                <input type="text" 
                                name="email"
                                onChange={handleChange}
                                value= {form.email || ""}/>
                            </div>
                            <div class="form-group">
                                <label for="repo">repo url</label>
                                <input type="text" 
                                name="repo"
                                onChange={handleChange}
                                value= {form.repo || ""}/>
                            </div>
                            <div class="form-group">
                                <label for="title">project title</label>
                                <input type="text" 
                                name="title"
                                onChange={handleChange}
                                value= {form.title || ""}/>
                            </div>
                            <div class="form-group">
                                <label for="description">project description</label>
                                <input type="description" 
                                name="description"
                                onChange={handleChange}
                                value= {form.description || ""}/>
                            </div>
                            <div class="form-group">
                                <label for="install">installation instructions</label>
                                <input type="text" 
                                name="install"
                                onChange={handleChange}
                                value= {form.install || ""}/>
                            </div>
                            <div class="form-group">
                                <label for="usage">Usage</label>
                                <input type="text" 
                                name="usage"
                                onChange={handleChange}
                                value= {form.usage || ""}/>
                            </div>
                            <div class="form-group">
                                <label for="path">gif or image path</label>
                                <input type="text" 
                                name="path"
                                onChange={handleChange}
                                value= {form.path || ""}/>
                            </div>
                            <div class="form-group">
                                <label for="tech">project technologies</label>
                                <input type="text" 
                                name="tech"
                                onChange={handleChange}
                                value= {form.tech || ""}/>
                            </div>
                            <div class="form-group">
                                <label for="license">type of license</label>
                                <input type="text" 
                                name="license"
                                onChange={handleChange}
                                value= {form.license || ""}/>
                            </div>
                           
                            <div class="form-group">
                                <button type="submit">create readme</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form