import { Container } from "react-bootstrap";
import "./App.css";
import SectionLogoLogin from "../src/Components/Molecules/SectionLogoLogin";
import LoginForm from "../src/Components/Atomes/Login/loginForm";

function App() {
    return ( 
    <Container className="p-5" >
        <div className="row rounded ranger">
            <div className="col-lg mb-2">
                <SectionLogoLogin />
            </div>

            <div className="col-lg mb-2">
                <LoginForm />
            </div>
        </div>
    </Container>
    );
}

export default App;