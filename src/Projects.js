import React from 'react';
import './index.css';
import logo from './logo.svg';
import "./styles/index.css"

function Projects(){
    return(
        <div className="App">
            <header className="App-header"> 
                <view>
                    <h3>Here are my projects</h3>
                    </view>
            </header>
            <body className='App-body'>
                <ul>
                    <li><a>Home</a></li>
                    <li><a className='active' href='##'>Projects</a></li>
                    <li><a href="##">My OS</a></li>
                    <li style={{float:"right",}}><img src={logo} className="App-logo" alt="logo" style={{height: 60, width: 60}}/></li>
                </ul>

                <h2 className='title1'>Projects Page</h2>
            </body>
        </div>
    )
}

export default Projects