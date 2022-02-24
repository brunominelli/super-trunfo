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
        <section className="card">
          <div>
            <p data-testid="name-card" className="card-result">{ cardName }</p>
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
            <p
              data-testid="description-card"
              className="card-result"
            >
              { cardDescription }
            </p>
          </div>
          <div>
            <p
              data-testid="attr1-card"
              className="card-result"
            >
              {`Vida: ${cardAttr1}`}
            </p>
          </div>
          <div>
            <p
              data-testid="attr2-card"
              className="card-result"
            >
              {`Mana: ${cardAttr2}`}
            </p>
          </div>
          <div>
            <p
              data-testid="attr3-card"
              className="card-result"
            >
              {`Conhecimento: ${cardAttr3}`}
            </p>
          </div>
          <div className="row card-result">
            <p data-testid="rare-card">{cardRare}</p>
            { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : '' }
          </div>
        </section>
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
