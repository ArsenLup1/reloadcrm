import React from 'react';
import Dash from './Dash';
import "./App.css";
import SectionLogoLogin from "../src/Components/Molecules/SectionLogoLogin";
import LoginForm from "../src/Components/Atomes/Login/loginForm";
import { Router, Link } from 'react-router-dom';
import MenuLateral from './Components/Atomes/MenuLatteral';

function App() {
    return ( 
    <div className="container mx-auto" >
        <MenuLateral />
    </div>
    );
}

export default App;