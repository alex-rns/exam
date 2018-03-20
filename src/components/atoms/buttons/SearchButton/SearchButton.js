import React from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchButton.css'

const SearchButton = () => {
  return(
    <button className='search-button'>
      <FontAwesome
        name='search'
        size='2x'
      />
    </button>
  )
};


export default SearchButton;