/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="block">
        <label htmlFor="name-input" className="row">
          <span>Nome</span>
          <input
            type="text"
            data-testid="name-input"
            id="name-input"
            name="cardName"
            className="form-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description-input" className="row">
          <span>Descrição</span>
          <textarea
            data-testid="description-input"
            id="description-input"
            name="cardDescription"
            className="form-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1-input" className="row">
          <span>Vida</span>
          <input
            type="number"
            data-testid="attr1-input"
            id="attr1-input"
            name="cardAttr1"
            min={ 1 }
            max={ 90 }
            className="form-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2-input" className="row">
          <span>Mana</span>
          <input
            type="number"
            data-testid="attr2-input"
            id="attr2-input"
            name="cardAttr2"
            min={ 1 }
            max={ 90 }
            className="form-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3-input" className="row">
          <span>Conhecimento</span>
          <input
            type="number"
            data-testid="attr3-input"
            id="attr3-input"
            name="cardAttr3"
            min={ 1 }
            max={ 90 }
            className="form-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image-input" className="row">
          <span>Imagem</span>
          <input
            type="text"
            data-testid="image-input"
            id="image-input"
            name="cardImage"
            className="form-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare-input" className="row">
          Raridade
          <select
            data-testid="rare-input"
            id="rare-input"
            name="cardRare"
            className="form-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        {
          !hasTrunfo
            ? (
              <label htmlFor="trunfo-input" className="row">
                Super Trunfo
                <input
                  type="checkbox"
                  data-testid="trunfo-input"
                  id="trunfo-input"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              </label>
            ) : <span>Você já tem um Super Trunfo em seu baralho</span>
        }
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
