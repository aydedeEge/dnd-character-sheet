import React from 'react';
import '../App.css';
import EditSavingThrowField from "./EditSavingThrowField.js";
import { getModifier } from "../helpers.js";

class SavingThrows extends React.Component  {

    savingThrowMap = (key) => {
        return <EditSavingThrowField
            key={key}
            index={key}
            saveAbility={getModifier(this.props.abilities[key])}  
            savingThrow={this.props.savingThrows[key]}  
            level={this.props.level}
            editSavingThrow={this.props.editSavingThrow}
        />
    }

    render() {
        return (
            <div className="saving-throws-div">
                <p>Saving Throws</p>
                {Object.keys(this.props.abilities).map(this.savingThrowMap)}
            </div>
        )
    }
}

export default SavingThrows;