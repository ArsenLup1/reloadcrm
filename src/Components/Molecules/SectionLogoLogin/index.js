import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Image } from 'react-bootstrap';
//import logo512 from './logo512.png'; 
import Logo_CRM from "../../../img/Logo_CRM.png";
//import logo from '../../../logo.svg';
import SectionloginLogoStc from "./SectionLogoLogin.stc";

const SectionLogoLogin = () => {

    return ( 
        <SectionloginLogoStc>
            <div className="col-md-6 app d-flex">
              <img src={Logo_CRM} className="rounded thumbnail" alt="logo" width="400px"/>
            </div>
        </SectionloginLogoStc>

        )
}

export default SectionLogoLogin;