import React from 'react';
import PropTypes from 'prop-types';

class Deck extends React.Component {
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
      onDeleteButtonClick,
    } = this.props;
    return (
      <article className="card-block">
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
          <div
            data-testid="attr1-card"
            className="card-result row"
          >
            <p>Vida</p>
            { cardAttr1 }
          </div>
          <div
            data-testid="attr2-card"
            className="card-result row"
          >
            <p>Mana</p>
            { cardAttr2 }
          </div>

          <div
            data-testid="attr3-card"
            className="card-result row"
          >
            <p>Conhecimento</p>
            { cardAttr3 }
          </div>
          <div className="row card-result">
            <p data-testid="rare-card">{cardRare}</p>
            { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : '' }
          </div>
        </section>
        <section>
          <button
            type="button"
            data-testid="delete-button"
            className="button"
            value={ cardName }
            onClick={ onDeleteButtonClick }
          >
            Excluir
          </button>
        </section>
      </article>
    );
  }
}

Deck.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};

export default Deck;
