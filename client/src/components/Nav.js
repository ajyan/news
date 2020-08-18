import React from 'react';

const Nav = ({ setSearchTerm, handleSearch }) => {
  return (
    <nav
      className="navbar navbar-dark bg-warning justify-content-space-between"
      role="navigation"
      align="center"
    >
      <img
        src="https://i.ibb.co/2tZyxNP/9e4b1a42-72e1-4c83-a1f2-3bf885a1c944-200x200.png"
        className="d-inline-block align-center brand"
        alt=""
        height="5%"
        width="5%"
      />

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#">
              Link
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="/#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/#">
                Action
              </a>
              <a class="dropdown-item" href="/#">
                Another action
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="/#">
                Something else here
              </a>
            </div>
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
