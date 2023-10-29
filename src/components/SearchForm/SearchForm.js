import React from "react";

function SearchForm({ handleSubmit, handleSearch, searchName }) {
  function onChange(evt) {
    handleSearch(evt);
  }

  function onSubmit(e) {
    e.preventDefault();
    handleSubmit(searchName);
  }

  return (
    <form className="searchForm" onSubmit={onSubmit} noValidate>
      <input
        className="searchForm__input"
        type="text"
        placeholder="Фильм"
        value={searchName || ""}
        onChange={onChange}
        required
      ></input>
      <button className="searchForm__button"></button>
    </form>
  );
}

export default SearchForm;
