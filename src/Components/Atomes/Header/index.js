import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import SectionloginLogoStc from "./SectionLogoLogin.stc";
import { Container } from 'reactstrap';

const Header = () => {

    return ( 
        <Container fluid>
            <div className="col-lg-12 align-middle d-flex justify-content-center">
                <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
                    <span>Menu Dash</span>
                </nav>
            </div>
        </Container>

        )
}

export default Header;