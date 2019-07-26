import React from 'react';
import '../Style/style.css';

class InspirationProficiency extends React.Component  {

    render() {
        return (
            <div className="prof-insp-div">
                <h3 className="insp-title">Inspiration</h3>
                <input 
                    className="insp-input input-text"
                    type="text"
                    value={this.props.inspiration}
                />
                <h3 className="prof-title">Proficiency Bonus</h3>
                <input 
                    className="prof-input input-number"
                    type="number"
                    value={this.props.proficiencyBonus}
                />
            </div>
        )
    }
}

export default InspirationProficiency;