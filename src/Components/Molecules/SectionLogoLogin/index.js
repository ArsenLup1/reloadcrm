import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo_CRM from "../../../img/Logo_CRM.png";
import SectionloginLogoStc from "./SectionLogoLogin.stc";

const SectionLogoLogin = () => {

    return ( 
        <SectionloginLogoStc>
            <div className="col-lg-12 align-middle d-flex justify-content-center">
              <img src={Logo_CRM} className="rounded thumbnail pt-5 mt-5" alt="logo" width="400px"/>
            </div>
        </SectionloginLogoStc>

        )
}

export default SectionLogoLogin;