import React from 'react';
import '../Style/style.css';
import {findProficiencyBonus} from "../helpers.js";

class InspirationProficiency extends React.Component  {

    onChangeProf = (event) => {
        this.props.editProficiency(event.currentTarget.value);
    }

    onChangeInspiration = (event) => {
        this.props.editInspiration(event.currentTarget.value);
    }

    render() {
        return (
            <div className="prof-insp-div">
                <h4 className="insp-title">Inspiration</h4>
                <input 
                    className="insp-input input-text"
                    type="text"
                    value={this.props.inspiration}
                    onChange={this.onChangeInspiration}
                />
                <h4 className="prof-title">Prof. Bonus</h4>
                <p className="prof-value">{this.props.level}</p>
            </div>
        )
    }
}

export default InspirationProficiency;