import React from 'react';
import "./header.css"


function Header() {
    return (
        <header>
            <div className="container-fluid content">
                <h1>Don't Forget to <span>README</span></h1>
                <h3>Clean and Consistent Documentation</h3>
                <p>Keep your documentation styling consistent across all your projects simply with this README.md formatter. 
                    Its simple to use and feel free to taylor it to your liking. Check out the Repo below for more information. </p>
                <br />
                
                <a className="github" href="https://www.github.com/brianlfarmerllc/" target="blank"><i
                  className="fa fa-github"></i></a>
            </div>
        </header>
    )
}

export default Header