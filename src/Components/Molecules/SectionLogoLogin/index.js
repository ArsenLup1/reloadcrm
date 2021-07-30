import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Image } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import SectionloginLogoStc from "./SectionLogoLogin.stc";

const SectionLogoLogin = () => {

    return ( 
        <SectionloginLogoStc>
            <div className="row py-5 rounded">
                <div className="col-lg-md-5">
                    <Image src="logo512.png" rounded />
                </div>
            </div>
        </SectionloginLogoStc>
    

        )
}

export default SectionLogoLogin;