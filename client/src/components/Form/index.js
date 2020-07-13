import React from 'react'
import "./form.css"

function Form() {
    return (
        <div className="row justify-content-center">
            <div className=" col-11 col-xl-8">
                <div className="form">
                    <div className="form-header">
                        <h1>readme generator</h1>
                    </div>
                    <div className="form-content">
                        <form>
                            {props.children}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form