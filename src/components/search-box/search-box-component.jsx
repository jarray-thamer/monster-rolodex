import React, { Component } from 'react';
import './search-box.style.css';

class SearchBox extends Component {
  render() {
    const {onSearchChange, className, placeholder} = this.props;
    return (
      <div>
        <input 
          className={`search-box ${className}`} 
          type='search' 
          placeholder={placeholder}
          onChange={onSearchChange}
        />
      </div>
    );
  }
}

export default SearchBox;