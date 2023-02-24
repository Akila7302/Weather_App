import React from "react";
import "../weather.css";

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="input-group">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search for a location..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          style={{ border: "1px solid #007bff" }}
        />
        <button
          className="btn btn-primary search-btn"
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(event) =>
            (event.target.style.backgroundColor = "#0056b3")
          }
          onMouseOut={(event) =>
            (event.target.style.backgroundColor = "#007bff")
          }
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
