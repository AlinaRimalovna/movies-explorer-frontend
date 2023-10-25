import React, { useState } from 'react';

function FilterCheckbox({ onClick }) {
  const [isFilter, setIsFilter] = useState(localStorage.getItem('checkFilter') || false);
  function handleClick (isFilter) {
    onClick(isFilter)
  }
  return (
    <div className="checkbox">
      <label className="checkbox__switch" onChange={handleClick} checked={isFilter}>
        <input className="checkbox__input" type="checkbox"></input>
        <span className="checkbox__slider"></span>
      </label>
      <p className="checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;