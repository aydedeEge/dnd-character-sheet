import React from 'react';
import '../App.css';

class EditSkillsField extends React.Component  {

    onClick = (event) => {
        this.props.editSkill(event.currentTarget.name, event.currentTarget.checked);
    } 

    render() {
        return (
            <div className="skill-edit-div">
                <label className="switch skill-item">
                    <input type="checkbox" onClick={this.onClick} name={this.props.index}/>
                    <span className="slider round"></span>
                </label>
                <h5 className="skill-ability skill-item">{this.props.name}</h5>
                <p className="skill-value skill-item"> 
                    {this.props.skillProficiency===true ? parseInt(this.props.abilityModifier) + 2 : parseInt(this.props.abilityModifier)}
                </p>
            </div>
        )
    }
}

export default EditSkillsField;