import React from 'react';
import PropTypes from 'prop-types';
import searchOptions from '../data/searchOptions';

class Search extends React.Component {
  render() {
    const {
      cardNameFilter,
      cardRareFilter,
      cardTrunfoFilter,
      onReadSearchInput,
      onReadSearchSelect,
      onReadSearchCheckbox,
    } = this.props;
    return (
      <form>
        <label htmlFor="name-filter" className="row">
          Nome
          <input
            data-testid="name-filter"
            type="text"
            id="name-filter"
            name="cardNameFilter"
            className="form-input"
            value={ cardNameFilter }
            onChange={ onReadSearchInput }
          />
        </label>
        <label htmlFor="rare-filter">
          Raridade
          <select
            data-testid="rare-filter"
            id="rare-filter"
            name="cardRareFilter"
            className="form-input"
            value={ cardRareFilter }
            onChange={ onReadSearchSelect }
          >
            {
              searchOptions
                .map((option) => (
                  <option
                    key={ option }
                    value={ option }
                  >
                    { option }
                  </option>))
            }
          </select>
        </label>
        <label htmlFor="trunfo-filter" className="row">
          Super Trunfo
          <input
            data-testid="trunfo-filter"
            type="checkbox"
            id="trunfo-filter"
            name="cardTrunfoFilter"
            value={ cardTrunfoFilter }
            onChange={ onReadSearchCheckbox }
          />
        </label>
      </form>
    );
  }
}

Search.propTypes = {
  cardNameFilter: PropTypes.string.isRequired,
  cardRareFilter: PropTypes.string.isRequired,
  cardTrunfoFilter: PropTypes.bool.isRequired,
  onReadSearchInput: PropTypes.func.isRequired,
  onReadSearchSelect: PropTypes.func.isRequired,
  onReadSearchCheckbox: PropTypes.func.isRequired,
};

export default Search;
