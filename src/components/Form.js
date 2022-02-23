/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          <span>Nome</span>
          <input type="text" data-testid="name-input" id="name-input" name="name-input" />
        </label>
        <label htmlFor="description-input">
          <span>Descrição</span>
          <textarea
            data-testid="description-input"
            id="description-input"
            name="description-input"
          />
        </label>
        <label htmlFor="attr1-input">
          <span>Vida</span>
          <input
            type="number"
            data-testid="attr1-input"
            id="attr1-input"
            name="attr1-input"
          />
        </label>
        <label htmlFor="attr2-input">
          <span>Mana</span>
          <input
            type="number"
            data-testid="attr2-input"
            id="attr2-input"
            name="attr2-input"
          />
        </label>
        <label htmlFor="attr3-input">
          <span>Conhecimento</span>
          <input
            type="number"
            data-testid="attr3-input"
            id="attr3-input"
            name="attr3-input"
          />
        </label>
        <label htmlFor="image-input">
          <span>Imagem</span>
          <input
            type="text"
            data-testid="image-input"
            id="image-input"
            name="image-input"
          />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <select
            data-testid="rare-input"
            id="rare-input"
            name="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          <span>Super Trunfo</span>
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo-input"
            name="trunfo-input"
          />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
