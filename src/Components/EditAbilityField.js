import React from 'react';
import '../App.css';
import {getModifier, capitalizeFirstLetter} from "../helpers.js";

class EditAbilityField extends React.Component  {

    render() {
        return (
            <div className="ability-div row">
                <div className="two columns">
                    {capitalizeFirstLetter(this.props.abilityName)}
                </div>
                <input 
                    className="attribute-input one column" 
                    type="number" 
                    onChange={(e) => {this.props.editAbility(this.props.abilityName, parseFloat(e.currentTarget.value))}} 
                    value={this.props.abilityValue}
                />
                <p className="attribute-modifier one column">
                    {getModifier(parseInt(this.props.abilityValue))}
                </p>
            </div>
        )
    }
}

export default EditAbilityField;