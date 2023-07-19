import React, { useState } from "react";

const Search = ({ setQuery, setPage }) => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    setQuery(inputText);
    setPage(1); 
  };

  return (
    <div className="container">
      <form
        action=""
        className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4"
      >
        <input
          onChange={handleInputChange}
          value={inputText}
          placeholder="Поиск новостей"
          type="text"
          className="form-control fs-5"
        />
        <button onClick={handleButtonClick} className="btn text-light fs-5 bg-pink px-4">
          Поиск
        </button>
      </form>
    </div>
  );
};

export default Search;
