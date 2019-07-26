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
        />
    }

    render() {
        return (
            <div className="saving-throws-div">
                <h2>Saving Throws</h2>
                {Object.keys(this.props.abilities).map(this.savingThrowMap)}
            </div>
        )
    }
}

export default SavingThrows;