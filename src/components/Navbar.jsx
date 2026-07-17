import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/',              label: 'Home' },
  { to: '/services',     label: 'Departments' },
  { to: '/doctors',      label: 'Doctors' },
  { to: '/lab',          label: 'Lab & Diagnostics' },
  { to: '/about',        label: 'About Us' },
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
        <Link to="/" className="text-decoration-none d-flex align-items-center gap-2">
          <div style={{ width: 42, height: 42, borderRadius: 12, background: 'linear-gradient(135deg, #1565C0, #00897B)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="material-symbols-outlined fill-icon" style={{ fontSize: 22, color: '#fff' }}>local_hospital</span>
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>Town Hospital</div>
            <div style={{ fontSize: 10, color: '#64748b', fontWeight: 500, letterSpacing: '0.04em', lineHeight: 1, marginTop: 2 }}>SARJAPURA, BANGALORE</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="d-none d-lg-flex align-items-center gap-4">
          {NAV_LINKS.map(l => (
            <Link key={l.to} to={l.to}
              className={`mc-nav-link ${location.pathname === l.to ? 'active' : ''}`}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="d-none d-lg-flex align-items-center gap-3">
          <a href="tel:08027823388" className="d-flex align-items-center gap-2" style={{ color: '#1565C0', fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
            <span className="material-symbols-outlined fill-icon" style={{ fontSize: 18 }}>call</span>
            080-27823388
          </a>
          <Link to="/admin" style={{ fontSize: 12, color: '#94a3b8', textDecoration: 'none' }}>Staff Login</Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="btn border-0 d-lg-none" data-bs-toggle="collapse" data-bs-target="#mobileMenu">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="collapse" id="mobileMenu">
        <div className="container pb-3 d-flex flex-column gap-2 border-top pt-3">
          {NAV_LINKS.map(l => (
            <Link key={l.to} to={l.to} className={`mc-nav-link py-2 ${location.pathname === l.to ? 'active' : ''}`}>{l.label}</Link>
          ))}
          <a href="tel:08027823388" className="btn-mc-primary mt-2 justify-content-center">
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>call</span>
            080-27823388
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
