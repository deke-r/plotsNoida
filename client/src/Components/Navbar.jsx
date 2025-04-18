import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cardData from '../Data/CardData';
import '../Styles/Navbar.css';

const Navbar = ({ setSearchTerm }) => {
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    setSearchTerm(value);

    if (value.trim() === '') {
      setSuggestions([]);
      return;
    }

    const uniqueSuggestions = cardData
      .map((item) => item.location)
      .filter((loc, idx, self) =>
        loc.toLowerCase().includes(value.toLowerCase()) && self.indexOf(loc) === idx
      );

    setSuggestions(uniqueSuggestions);
  };

  const handleSelectSuggestion = (location) => {
    setSearchInput(location);
    setSearchTerm(location);
    setSuggestions([]);
  };

  const handleReset = () => {
    setSearchInput('');
    setSearchTerm('');
    setSuggestions([]);
  };

  const handleCall = () => {
    const whatsappNumber = '9319412015';
    const message = `Hi, I'm interested in the property`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <nav className="navbar navbar-expand-lg bg_b px-3">
      <div className="container-fluid d-flex justify-content-between align-items-center w-100">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="navbar-brand f_14 fw-semibold text-light" to="/">
          Noida Properties
        </Link>

        <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
          {/* Search Input */}
          <div className="mx-auto w-40 position-relative d-none d-lg-block">
            <div className="input-group">
              <span className="input-group-text f_14 fw-semibold bg-white border-end-0">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                className="form-control f_14 fw-semibold border-start-0"
                placeholder="Search by location..."
                value={searchInput}
                onChange={handleInputChange}
              />
              {searchInput && (
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={handleReset}
                >
                  ❌
                </button>
              )}
            </div>

            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && (
              <ul className="list-group position-absolute w-100 z-3" style={{ top: '100%', left: 0 }}>
                {suggestions.map((loc, idx) => (
                  <li
                    key={idx}
                    className="list-group-item list-group-item-action fw-semibold f_14"
                    onClick={() => handleSelectSuggestion(loc)}
                    style={{ cursor: 'pointer' }}
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right-side nav */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row gap-3">
            <li className="nav-item">
              <Link className="nav-link f_14 fw-semibold active text-light" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link f_14 fw-semibold text-light" to="/">About</Link>
            </li>
            <li className="nav-item">
              <span
                className="nav-link f_14 fw-semibold text-light"
                onClick={handleCall}
                style={{ cursor: 'pointer' }}
              >
                <i className="fas fa-phone me-1"></i> +91 93194 12015
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
