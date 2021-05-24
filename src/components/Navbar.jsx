import React from "react";
import { Link } from "react-router-dom";
export const Navbar = ({ get_detail, search, setSearch, handleSearch }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            GameDatabase
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search for the Game"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                required
              />
              <Link to="/search" className="btn btn-info">
                Submit
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
