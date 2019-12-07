import React from 'react';

class CharacterCard extends React.Component {


    buildName() {
        const { character } = this.props;
        return (
            <div className="CharacterCard__name-container text-truncate">
                {character.name}
            </div>
        );

    }

    buildImage() {
        const { character } = this.props;
        return (
            <img src={character.img} alt="" />
        );
    }

    render() {
        return (
            <div className="CharacterCard">
                {this.buildImage()}
                {this.buildName()}
            </div>
        );
    }
}

export default CharacterCard;
