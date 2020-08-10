import React from "react";

const searchForm = () => {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">What book are you looking for?</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
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
