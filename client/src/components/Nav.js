import React from 'react';

const Nav = ({ setSearchTerm, handleSearch }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-warning"
      role="navigation"
      align="center"
    >
      <a href="/">
        <img
          src="https://i.ibb.co/2tZyxNP/9e4b1a42-72e1-4c83-a1f2-3bf885a1c944-200x200.png"
          className="d-inline-block align-center brand"
          alt=""
          height="50%"
          width="50%"
        />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Features
            </a>
          </li>
        </ul>
      </div>

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