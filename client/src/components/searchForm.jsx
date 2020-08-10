import React from "react";

const searchForm = () => {
  return (
    <div className="container">
      <form >
        <div className="form-group">
          <label for="bookSearch">What book are you looking for?</label>
          <input
            type="text"
            className="form-control"
            id="bookSearch"
            aria-describedby="BookSearch"
          />
          <small id="bookMesage" className="form-text text-muted">
            Happy Reading!
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default searchForm;
