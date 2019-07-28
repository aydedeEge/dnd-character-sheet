import React from 'react';
import '../Style/style.css';

class About extends React.Component {
    render() {
        return <div className="about-div">
            <div className="name-div about-item">
                <h4 className="name-title">Character Name</h4>
                <input 
                    type="text" 
                    value={this.props.name}
                    onChange={(event) => {this.props.editName(event.currentTarget.value)}}
                    className="name-value name-input about-input"
                />
            </div>
            <div className="level-div about-item">
                <h4 className="level-title">Level</h4>
                <input 
                    type="number" 
                    value={this.props.level}
                    onChange={(event) => {this.props.editLevel(event.currentTarget.value)}}
                    className="level-value level-input about-input"
                />
            </div>
            <div className="characterClass-div about-item">
                <h4 className="characterClass-title">Class(s)</h4>
                <input 
                    type="text" 
                    value={this.props.characterClass}
                    onChange={(event) => {this.props.editCharacterClass(event.currentTarget.value)}}
                    className="characterClass-value characterClass-input about-input"
                />
            </div>
            <div className="background-div about-item">
                <h4 className="background-title">Background</h4>
                <input 
                    type="text" 
                    value={this.props.background}
                    onChange={(event) => {this.props.editBackground(event.currentTarget.value)}}
                    className="background-value background-input about-input"
                />
            </div>
            <div className="playerName-div about-item">
                <h4 className="playerName-title">Player Name</h4>
                <input 
                    type="text" 
                    value={this.props.playerName}
                    onChange={(event) => {this.props.editPlayerName(event.currentTarget.value)}} 
                    className="playerName-value playerName-input about-input"
                />
            </div>
            <div className="race-div about-item">
                <h4 className="race-title">Race</h4>
                <input 
                    type="text" 
                    value={this.props.race}
                    onChange={(event) => {this.props.editRace(event.currentTarget.value)}} 
                    className="race-value race-input about-input"
                />
            </div>
            <div className="alignment-div about-item">
                <h4 className="alignment-title">Alignment</h4>
                <input 
                    type="text" 
                    value={this.props.alignment}
                    onChange={(event) => {this.props.editAlignment(event.currentTarget.value)}} 
                    className="alignment-value alignment-input about-input"
                />
            </div>
            <div className="experience-div about-item">
                <h4 className="experience-title">Experience</h4>
                <input 
                    type="number" 
                    value={this.props.experience}
                    onChange={(event) => {this.props.editExperience(event.currentTarget.value)}} 
                    className="experience-value experience-input about-input"
                />
            </div>
        </div>
    }
}

export default About;