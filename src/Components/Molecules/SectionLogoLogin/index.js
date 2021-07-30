import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Image } from 'react-bootstrap';
//import logo512 from './logo512.png'; 
//import Image from 'react-bootstrap/Image'
import logo from '../../../logo.svg';
import SectionloginLogoStc from "./SectionLogoLogin.stc";

const SectionLogoLogin = () => {

    return ( 
        <SectionloginLogoStc>
            <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
        </SectionloginLogoStc>
    

        )
}

export default SectionLogoLogin;