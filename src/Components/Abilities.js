import React from 'react';
import EditAbilityField from "./EditAbilityField.js";

class Abilities extends React.Component {

    mapAbilities = (key) => {
        return <EditAbilityField 
            key={key} 
            abilityName={key}
            abilityValue={this.props.abilities[key]}
            editAbility={this.props.editAbility}
            />
    }

    render() {
        return <div className="abilities-div item">
            <h2>Ability Scores</h2>
            <div className="ability-list">
                {Object.keys(this.props.abilities).map(this.mapAbilities)}
            </div>
        </div>
    }
}

export default Abilities;