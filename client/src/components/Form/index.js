import React from 'react'
import "./form.css"

function Form(props) {
    return (
        <div className="row justify-content-center" style={{marginBottom:"0"}}>
            <div className=" col-11 col-xl-8">
                <div className="form">
                    <div className="form-header">
                        <h2>readme generator</h2>
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