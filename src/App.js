import React from 'react';
import Dash from './Dash';
import "./App.css";
import SectionLogoLogin from "../src/Components/Molecules/SectionLogoLogin";
import LoginForm from "../src/Components/Atomes/Login/loginForm";
import { Router, Link } from 'react-router-dom';

function App() {
    return ( 
    <div className="container p-5" >
        <div className="row rounded ranger">
            <div className="col-lg mb-2">
                <SectionLogoLogin />
            </div>

            <div className="col-lg mb-2">
                <LoginForm />
            </div>
        </div>
        
    </div>
    );
}

export default App;