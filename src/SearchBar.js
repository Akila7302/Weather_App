import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a location..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
