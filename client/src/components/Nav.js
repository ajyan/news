import React from 'react';

const Nav = ({ setSearchTerm, handleSearch }) => {
  return (
    <nav className="navbar navbar-dark bg-warning" role="navigation">
      <a className="navbar-brand brand" href="/">
        <img
          src="https://i.ibb.co/2tZyxNP/9e4b1a42-72e1-4c83-a1f2-3bf885a1c944-200x200.png"
          width="30%"
          height="30%"
          className="d-inline-block align-center"
          alt=""
        />
      </a>

      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        />
        <img src="../images/logo.png" alt="" />
        <button
          className="btn btn-light my-2 my-sm-0"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Nav;
