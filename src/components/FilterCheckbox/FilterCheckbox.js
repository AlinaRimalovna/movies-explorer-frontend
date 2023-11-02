import React, { useState } from "react";

function FilterCheckbox({ onClick, isFilter }) {
  function handleClick(evt) {
    onClick(evt);
  }
  return (
    <div className="checkbox">
      <label className="checkbox__switch">
        <input
          className="checkbox__input"
          type="checkbox"
          onChange={handleClick}
          checked={isFilter}
        ></input>
        <span className="checkbox__slider"></span>
      </label>
      <p className="checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
