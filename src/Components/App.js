import React from 'react';
import '../Style/normalize.css';
import '../Style/style.css';
import Abilities from "./Abilities.js";
import InspirationProficiency from "./InspirationProficiency.js";
import SavingThrows from "./SavingThrows.js";
import Skills from "./Skills.js";

class App extends React.Component {

  constructor(){
    super();

    //Move the skills to a helper method or something, doesn't need to be in state
    this.state = {
      character: {
        about: {
          name: "",
          class: "",
          level: 1,
          playerName: "",
          race: "",
          alignment: ""
        },
        inspiration: "",
        proficiencyBonus: 0,
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
        savingThrows: {},
        skills: {},
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

  render() {
    return (
      <div className="App">
        <Abilities
          abilities={this.state.character.abilities}
          editAbility={this.editAbility}
        />
        <InspirationProficiency
          inspiration={this.state.character.inspiration}
          proficiencyBonus={this.state.character.proficiencyBonus}
        />
        <SavingThrows
          abilities={this.state.character.abilities}
          savingThrows={this.state.character.savingThrows}
        />
        <Skills
          skills={this.skills}
        />
      </div>
    );
  }
}

export default App;
