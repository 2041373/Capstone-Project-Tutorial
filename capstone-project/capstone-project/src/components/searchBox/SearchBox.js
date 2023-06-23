import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBox(props) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      props.onEnterPress(event.target.value); // this is the value of the input
    }
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 50 }}>
      <div style={{ width: '50%', position: 'relative' }}>
        <input
          type='text'
          placeholder='Search Weather'
          style={{
            backgroundColor: 'black',
            color: 'white',
            border: '1px solid white',
            paddingLeft: '40px',
            paddingRight: '40px',
            height: '50px',
            width: '100%',
          }}
          value={searchQuery}
          onChange={handleChange}
          onKeyDown={handleEnterPress}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '15px',
            color: 'white',
            padding: '5px',
            transform: 'translateY(-50%)',
          }}
        >
          <FaSearch />
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
