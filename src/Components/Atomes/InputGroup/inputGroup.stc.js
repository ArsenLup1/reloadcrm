import styled from "styled-components";
import { FormGroup } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const FormWarp = styled(FormGroup)`

    margin: 40px 0px;

    & .input-field{
        position: relative;
        height: 44px;
        line-height: 15px;
    }

    & label {
        position: absolute;
        top: 10px;
        left: 0;
        width: 100%;
        color: #000;
        font-size: 16px;
        transition: .2s all;
        cursor: text;
    }
    & input {
        width: 100%;
        border: 1rem;
        outline: transparent !important;
        padding: .5rem 0;
        border-bottom: 2px solid #000 !important;
        box-sizing: none;
        color: #000;
    }

    & input:invalid {
        outline: 0;
    }

    & input:focus,& input:valid{
        border: 0;
    }

    & input:focus~label,& input:valid~label {
        font-size: 24px;
        top: -29px;
        color: #000;
    }
`;

export default FormWarp;