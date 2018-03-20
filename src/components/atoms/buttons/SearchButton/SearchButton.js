import React from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchButton.css'

class SearchButton extends React.Component {
  render() {
    return (
      <button className='search-button'>
        <FontAwesome
          className='search-button-icon'
          name='search'
          size='2x'
        />
      </button>
    )
  }
}

export default SearchButton;