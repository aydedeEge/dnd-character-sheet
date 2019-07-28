import React from 'react';
import '../App.css';
import { abbreviateWords } from "../helpers.js";

class EditSavingThrowField extends React.Component  {

    onClick = (event) => {
        this.props.editSavingThrow(event.currentTarget.name, event.currentTarget.checked);
        // console.log(event.currentTarget.name)
    } 

    render() {
        return (
            <div className="saving-throw-edit-div">
                <label className="switch saving-throw-item">
                    <input type="checkbox" onClick={this.onClick} name={this.props.index}/>
                    <span className="slider round"></span>
                </label>
                <h5 className="saving-throw-ability saving-throw-item">{abbreviateWords(this.props.index)}</h5>
                <p className="saving-throw-value  saving-throw-item"> 
                    {this.props.savingThrow===true?parseInt(this.props.saveAbility) + 2:parseInt(this.props.saveAbility)}
                </p>
            </div>
        )
    }
}

export default EditSavingThrowField;