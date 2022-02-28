import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const { onReadSearchInput, cardNameFilter } = this.props;
    return (
      <form>
        <label htmlFor="name-filter" className="row">
          Nome
          <input
            data-testid="name-filter"
            type="text"
            name="cardNameFilter"
            value={ cardNameFilter }
            className="form-input"
            onChange={ onReadSearchInput }
          />
        </label>
      </form>
    );
  }
}

Search.propTypes = {
  onReadSearchInput: PropTypes.func.isRequired,
  cardNameFilter: PropTypes.string.isRequired,
};

export default Search;
