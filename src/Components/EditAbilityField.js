import React from 'react';
import '../App.css';
import {getModifier, capitalizeFirstLetter} from "../helpers.js";

class EditAbilityField extends React.Component  {

    render() {
        return (
            <div className="ability-div item">
                <div className="ability-name item">
                    {capitalizeFirstLetter(this.props.abilityName)}
                </div>
                <input 
                    className="ability-input item" 
                    type="number" 
                    onChange={(e) => {this.props.editAbility(this.props.abilityName, parseFloat(e.currentTarget.value))}} 
                    value={this.props.abilityValue}
                />
                <p className="ability-modifier item">
                    {getModifier(parseInt(this.props.abilityValue))}
                </p>
            </div>
        )
    }
}

export default EditAbilityField;