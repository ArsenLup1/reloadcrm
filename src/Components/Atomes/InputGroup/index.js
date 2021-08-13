import React from "react";
import { Label, Input } from "reactstrap";
import FormWarp from "./inputGroup.stc";


const InputGroup = (props) => {

    return (
        <FormWarp>
            <div className='input-fiel text-lg-left'>
                <input type='text' id={props.id} required />
                <label for={props.id}>{props.label}</label> 
            </div>
        </FormWarp>
    )
};

export default InputGroup;