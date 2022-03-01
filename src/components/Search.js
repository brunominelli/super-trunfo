import React from 'react';
import PropTypes from 'prop-types';
import searchOptions from '../data/searchOptions';

class Search extends React.Component {
  render() {
    const {
      cardNameFilter,
      cardRareFilter,
      onReadSearchInput,
      onReadSearchSelect,
    } = this.props;
    return (
      <form>
        <label htmlFor="name-filter" className="row">
          Nome
          <input
            data-testid="name-filter"
            type="text"
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
            name="rare-filter"
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
      </form>
    );
  }
}

Search.propTypes = {
  cardNameFilter: PropTypes.string.isRequired,
  cardRareFilter: PropTypes.string.isRequired,
  onReadSearchInput: PropTypes.func.isRequired,
  onReadSearchSelect: PropTypes.func.isRequired,
};

export default Search;
