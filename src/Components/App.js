import React from 'react';
import '../Style/normalize.css';
import '../Style/style.css';
import Abilities from "./Abilities.js";
import InspirationProficiency from "./InspirationProficiency.js";
import SavingThrows from "./SavingThrows.js";
import Skills from "./Skills.js";
import About from "./About.js";

class App extends React.Component {

  constructor(){
    super();

    //Move the skills to a helper method or something, doesn't need to be in state
    this.state = {
      character: {
        name: "",
        characterClass: "",
        level: 1,
        playerName: "",
        race: "",
        alignment: "",
        inspiration: "",
        background: "",
        proficiencyBonus: 0,
        experience: 0,
        physical:{
          armorClass: 0,
          initiative: 0,
          speed: 30,
          hitPointMax: 1,
          hitPointCurrent: 1,
          tempHitPoints: 0
        },
        abilities: {
          strength: 1,
          dexterity: 1,
          constitution: 1,
          intelligence: 1,
          wisdom: 1,
          charisma: 1,
        },
        savingThrows: {
          strength: false,
          dexterity: false,
          constitution: false,
          intelligence: false,
          wisdom: false,
          charisma: false,
        },
        skills: {
          acrobatics: false,
          animalHandling: false,
          arcana: false,
          athletics: false,
          deception: false,
          history: false,
          insight: false,
          intimidation: false,
          investigation: false,
          medicine: false,
          nature: false,
          perception: false,
          performance: false,
          persuasion: false,
          religion: false,
          sleightOfHand: false,
          stealth: false,
          survival: false,
        },
      },
      changeLog: {}
    }
  }

  editAbility = (name, value) => {
    //1. take snapshot of state
    const character = {...this.state.character}
    //2. update snapshot
    character.abilities[name] = value;
    //3. set state
    this.setState({character});
  }

  editProficiency = (proficiency) => {
    const character = {...this.state.character};
    character.proficiencyBonus = proficiency;
    this.setState({character});
  }

  editInspiration = (inspiration) => {
    const character = {...this.state.character};
    character.inspiration = inspiration;
    this.setState({character});
  }

  editSavingThrow = (ability, value) => {
    const character = {...this.state.character};
    character.savingThrows[ability] = value;
    this.setState({character});
  }

  editSkill = (skillName, value) => {
    const character = {...this.state.character};
    character.skills[skillName] = value;
    this.setState({character});
  }

  editName = (name) => {
    const character = {...this.state.character};
    character.name = name;
    this.setState({character});
  }

  editCharacterClass = ( characterClass ) => {
    const character = {...this.state.character};
    character.characterClass = characterClass;
    this.setState({character});
  }

  editLevel = (level) => {
    const character = {...this.state.character};
    character.level = level;
    this.setState({character});
  }

  editPlayerName = (playerName) => {
    const character = {...this.state.character};
    character.playerName = playerName;
    this.setState({character});
  }

  editRace = (race) => {
    const character = {...this.state.character};
    character.race = race;
    this.setState({character});
  }

  editAlignment = (alignment) => {
    const character = {...this.state.character};
    character.alignment = alignment;
    this.setState({character});
  }

  editExperience = (experience) => {
    const character = {...this.state.character};
    character.experience = experience;
    this.setState({character});
  }

  editBackground = (background) => {
    const character = {...this.state.character};
    character.background = background;
    this.setState({character});
  }

  render() {
    return (
      <div className="App">
        <About
          name={this.state.character.name}
          characterClass={this.state.character.characterClass}
          level={this.state.character.level}
          playerName={this.state.character.playerName}
          race={this.state.character.race}
          alignment={this.state.character.alignment}
          experience={this.state.character.experience}
          background={this.state.character.background}
          editName={this.editName}
          editCharacterClass={this.editCharacterClass}
          editLevel={this.editLevel}
          editPlayerName={this.editPlayerName}
          editRace={this.editRace}
          editAlignment={this.editAlignment}
          editExperience={this.editExperience}
          editBackground={this.editBackground}
        />
        <Abilities
          abilities={this.state.character.abilities}
          editAbility={this.editAbility}
        />
        <InspirationProficiency
          inspiration={this.state.character.inspiration}
          level={this.state.character.level}
          editProficiency={this.editProficiency}
          editInspiration={this.editInspiration}
        />
        <SavingThrows
          abilities={this.state.character.abilities}
          level={this.state.character.level}
          savingThrows={this.state.character.savingThrows}
          editSavingThrow={this.editSavingThrow}
        />
        <Skills
          skills={this.state.character.skills}
          abilities={this.state.character.abilities}
          level={this.state.character.level}
          editSkill={this.editSkill}
        />
      </div>
    );
  }
}

export default App;
