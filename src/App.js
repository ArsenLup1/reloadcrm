import { Container } from "react-bootstrap";
import "./App.css";
import SectionLogoLogin from "../src/Components/Molecules/SectionLogoLogin";
import LoginForm from "../src/Components/Atomes/Login/loginForm";

function App() {
    return ( 
    <Container className = "p-5" >
        <div className="row rounded">
            <div className="col-sm mb-2">
                <SectionLogoLogin />
            </div>

            <div className="col-sm mb-2">
                <LoginForm />
            </div>
        </div>
    </Container>
    );
}

export default App;