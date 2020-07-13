
import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input className="form-control"
                type={props.type}
                name={props.name}
                onChange={props.handleChange}
                value={props.value} />
        </div>
    );
}

export function FormBtn(props) {
    return (
        // <div className="row mt-4" style={{textAlign:"center"}}>
        <div className="form-group" style={{ textAlign: "center", }}>
            <button {...props} style={{ width: "55%", }} type="submit">
                {props.children}
            </button>
        </div>
        // </div>
    );
}

export function Text(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <textarea className="form-control"
                type={props.type}
                name={props.name}
                onChange={props.handleChange}
                value={props.value}
                rows={props.rows} />
        </div>
    );
}