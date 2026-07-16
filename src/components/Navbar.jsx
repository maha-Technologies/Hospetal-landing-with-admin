import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/',                 label: 'Home' },
  { to: '/services',        label: 'Services' },
  { to: '/doctors',         label: 'Doctors' },
  { to: '/clinical-precision', label: 'Technology' },
  { to: '/about',           label: 'About' },
];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`mc-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between py-2">
        {/* Brand */}
        <Link to="/" className="mc-navbar-brand">
          <div className="d-flex align-items-center justify-content-center rounded-3 bg-primary text-white" style={{ width: 40, height: 40 }}>
            <span className="material-symbols-outlined fill-icon" style={{ fontSize: 22 }}>medical_services</span>
          </div>
          MediCore
        </Link>

        {/* Desktop Nav */}
        <div className="d-none d-lg-flex align-items-center gap-4">
          {NAV_LINKS.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`mc-nav-link ${location.pathname === l.to ? 'active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="d-none d-lg-flex align-items-center gap-3">
          <Link to="/admin" className="mc-nav-link" style={{ fontSize: 13, color: 'var(--mc-text-light)' }}>
            Admin ↗
          </Link>
          <Link to="/appointment" className="btn-mc-primary" style={{ fontSize: 14, padding: '9px 22px' }}>
            Book Appointment
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="btn border-0 d-lg-none"
          data-bs-toggle="collapse"
          data-bs-target="#mobileMenu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="collapse" id="mobileMenu">
        <div className="container pb-3 d-flex flex-column gap-2">
          {NAV_LINKS.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`mc-nav-link py-2 ${location.pathname === l.to ? 'active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/appointment" className="btn-mc-primary mt-2 justify-content-center">
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
