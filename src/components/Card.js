import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <aside className="block">
        <div>
          <p data-testid="name-card">{ cardName }</p>
        </div>
        <div>
          <img
            src={ cardImage }
            alt={ cardName }
            className="card-image"
            data-testid="image-card"
          />
        </div>
        <div>
          <p data-testid="description-card">{ cardDescription }</p>
        </div>
        <div>
          <p data-testid="attr1-card">{`Vida: ${cardAttr1}`}</p>
        </div>
        <div>
          <p data-testid="attr2-card">{`Mana: ${cardAttr2}`}</p>
        </div>
        <div>
          <p data-testid="attr3-card">{`Conhecimento: ${cardAttr3}`}</p>
        </div>
        <div>
          <p data-testid="rare-card">{cardRare}</p>
        </div>
        { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : '' }
      </aside>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
