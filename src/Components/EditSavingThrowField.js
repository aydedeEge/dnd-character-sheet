import React from 'react';
import '../App.css';

class EditSavingThrowField extends React.Component  {

    render() {
        return (
            <div className="saving-throw-edit-div">
                <label className="switch saving-throw-item">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
                <input 
                    type="number"
                    value={this.props.saveAbility}
                    className="saving-throw-input number-input saving-throw-item"
                />
                <h4 className="saving-throw-ability saving-throw-item">{this.props.index}</h4>
            </div>
        )
    }
}

export default EditSavingThrowField;