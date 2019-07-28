import React from 'react';
import '../App.css';
import EditSkillsField from "./EditSkillsField.js";
import sampleSkills from "../sample-skills.js";
import { getModifier } from "../helpers.js";

class Skills extends React.Component  {

    mapSkills = (key) => {
        return <EditSkillsField
            key={key}
            index={key}
            name={sampleSkills[key].name}
            skillProficiency={this.props.skills[key]}
            abilityModifier={getModifier(this.props.abilities[sampleSkills[key].ability])}
            editSkill={this.props.editSkill}
        />
    }

    render() {
        return (
            <div className="skills-div">
                <p>Skills</p>
                {Object.keys(sampleSkills).map(this.mapSkills)}
            </div>
        )
    }
}

export default Skills;