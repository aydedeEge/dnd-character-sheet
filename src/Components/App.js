import React from 'react';
import '../Style/normalize.css';
import '../Style/skeleton.css';
import Abilities from "./Abilities.js";
import SavingThrows from "./SavingThrows.js";
import Skills from "./Skills.js";

class App extends React.Component {

  constructor(){
    super();

    //Move the skills to a helper method or something, doesn't need to be in state
    this.state = {
      character: {
        abilities: {
          strength: 1,
          dexterity: 1,
          constitution: 1,
          intelligence: 1,
          wisdom: 1,
          charisma: 1,
        },
        savingThrows: {},
        skills: {
          acrobatics: {
            name: "Acrobatics",
            ability: "dexterity",
            proficient: false
          },
          animalHandling:{
            name: "Animal Handling",
            ability: "wisdom",
            proficient: false
          },
          arcana:{
            name: "Arcana",
            ability: "intelligence",
            proficient: false
          },
          athletics:{
            name: "Athletics",
            ability: "strength",
            proficient: false
          },
          deception:{
            name: "Deception",
            ability: "charisma",
            proficient: false
          },
          history:{
            name: "History",
            ability: "intelligence",
            proficient: false
          },
          insight:{
            name: "Insight",
            ability: "wisdom",
            proficient: false
          },
          intimidation:{
            name: "Intimidation",
            ability: "charisma",
            proficient: false
          },
          investigation:{
            name: "Investication",
            ability: "intelligence",
            proficient: false
          },
          medicine:{
            name: "Medicine",
            ability: "wisdom",
            proficient: false
          },
          nature:{
            name: "Nature",
            ability: "intelligence",
            proficient: false
          },
          perception:{
            name: "Perception",
            ability: "wisdom",
            proficient: false
          },
          performance:{
            name: "Performance",
            ability: "charisma",
            proficient: false
          },
          persuasion:{
            name: "Persuasion",
            ability: "charisma",
            proficient: false
          },
          religion:{
            name: "Religion",
            ability: "intelligence",
            proficient: false
          },
          sleightOfHand: {
            name: "Sleight of Hand",
            ability: "dexterity",
            proficient: false
          },
          stealth:{
            name: "Stealth",
            ability: "dexterity",
            proficient: false
          },
          survival:{
            name: "Survival",
            ability: "wisdom",
            proficient: false
          },
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

  render() {
    return (
      <div className="App">
        <h1>Character Sheet</h1>
        <Abilities
          abilities={this.state.character.abilities}
          editAbility={this.editAbility}
        />
        <SavingThrows
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
