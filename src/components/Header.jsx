import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
  };

  // TOP LINE - Contact Info
  const topLineStyle = {
    backgroundColor: '#2d4a5a',
    padding: '8px 20px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  };

  const contactInfoStyle = {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
    color: 'white',
    fontSize: '0.85rem'
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '0.85rem',
    fontWeight: '500',
    color: 'white',
    textDecoration: 'none',
    whiteSpace: 'nowrap'
  };

  // BOTTOM LINE - Logo and Navigation
  const bottomLineStyle = {
    backgroundColor: 'white',
    padding: '12px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #e0e0e0'
  };

  const logoStyle = {
    height: '90px',
    width: 'auto'
  };

  const navContainerStyle = {
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  };

  const navLinkStyle = {
    color: '#2d4a5a',
    textDecoration: 'none',
    fontSize: '0.95rem',
    padding: '8px 16px',
    borderRadius: '8px',
    transition: 'all 0.3s',
    fontWeight: '500',
    backgroundColor: 'transparent',
    whiteSpace: 'nowrap'
  };

  const plainNavLinkStyle = {
    ...navLinkStyle,
    fontWeight: 'bold',
    fontSize: '1rem',
    backgroundColor: 'transparent',
    border: 'none'
  };

  const referralButtonStyle = {
    backgroundColor: '#c41e3a',
    color: 'white',
    padding: '10px 24px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 'bold',
    textTransform: 'lowercase',
    transition: 'all 0.3s',
    border: 'none',
    boxShadow: '0 4px 15px rgba(196, 30, 58, 0.4)',
    display: 'inline-block',
    whiteSpace: 'nowrap'
  };

  const getNavLinkStyle = (path, isAdmission = false, isReferral = false) => {
    const isActive = location.pathname === path;
    
    if (isReferral) {
      return {
        ...referralButtonStyle,
        backgroundColor: isActive ? '#a01828' : '#c41e3a'
      };
    }
    
    if (isAdmission) {
      let style = { ...plainNavLinkStyle };
      if (isActive) {
        style = { ...style, backgroundColor: '#f0f0f0' };
      }
      return style;
    }
    
    let style = { ...navLinkStyle };
    if (isActive) {
      style = { ...style, backgroundColor: '#f0f0f0' };
    }
    return style;
  };

  return (
    <header style={headerStyle}>
      {/* TOP LINE - Contact Info */}
      <div style={topLineStyle} className="header-top">
        <div style={contactInfoStyle} className="contact-info">
          <a 
            href="tel:6129984449" 
            style={contactItemStyle}
            className="contact-item"
          >
            📞 612-998-4449
          </a>
          <span style={{color: 'rgba(255, 255, 255, 0.3)'}} className="separator">|</span>
          <a 
            href="mailto:info@reliablerecuperative.org" 
            style={contactItemStyle}
            className="contact-item contact-email"
          >
            📧 info@reliablerecuperative.org
          </a>
          <span style={{color: 'rgba(255, 255, 255, 0.3)'}} className="separator">|</span>
          <span style={contactItemStyle} className="contact-item contact-address">
            📍 796 Capitol Heights Saint Paul, MN 55103
          </span>
        </div>
      </div>

      {/* BOTTOM LINE - Logo and Navigation */}
      <div style={bottomLineStyle} className="header-bottom">
        <Link to="/" className="logo-link">
          <img 
            src="/logo1.png" 
            alt="Reliable Recuperative Care" 
            style={logoStyle}
            className="logo"
            onError={(e) => {
              e.target.style.display = 'none';
              const parent = e.target.parentElement;
              if (parent && !parent.querySelector('h2')) {
                const heading = document.createElement('h2');
                heading.style.color = '#2d4a5a';
                heading.style.margin = '0';
                heading.style.fontSize = '1.2rem';
                heading.textContent = 'Reliable Recuperative Care';
                parent.appendChild(heading);
              }
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav style={navContainerStyle} className="desktop-nav">
          <Link to="/" style={getNavLinkStyle('/')}>Home</Link>
          <Link to="/about" style={getNavLinkStyle('/about')}>About Us</Link>
          <Link to="/services" style={getNavLinkStyle('/services', true)}>Admission and Referral</Link>
          <Link to="/contact" style={getNavLinkStyle('/contact')}>Contact</Link>
          <Link to="/referral" style={getNavLinkStyle('/referral', false, true)}>referral form</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: '#2d4a5a',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '5px',
            fontSize: '1.2rem',
            cursor: 'pointer'
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav" style={{
          backgroundColor: 'white',
          borderBottom: '2px solid #e0e0e0',
          padding: '10px 20px'
        }}>
          <Link 
            to="/" 
            style={{...navLinkStyle, display: 'block', margin: '5px 0'}}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            style={{...navLinkStyle, display: 'block', margin: '5px 0'}}
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/services" 
            style={{...plainNavLinkStyle, display: 'block', margin: '5px 0'}}
            onClick={() => setMobileMenuOpen(false)}
          >
            Admission and Referral
          </Link>
          <Link 
            to="/contact" 
            style={{...navLinkStyle, display: 'block', margin: '5px 0'}}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/referral" 
            style={{...referralButtonStyle, display: 'block', margin: '10px 0', textAlign: 'center'}}
            onClick={() => setMobileMenuOpen(false)}
          >
            referral form
          </Link>
        </div>
      )}

      {/* Responsive CSS */}
      <style>{`
        /* Desktop - normal size */
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-nav {
            display: none !important;
          }
        }

        /* Tablet */
        @media (max-width: 1200px) {
          .contact-address {
            display: none !important;
          }
          .separator:last-of-type {
            display: none !important;
          }
          .logo {
            height: 70px !important;
          }
          .desktop-nav a {
            font-size: 0.9rem !important;
            padding: 8px 12px !important;
          }
        }

        @media (max-width: 992px) {
          .contact-email {
            display: none !important;
          }
          .separator:nth-of-type(2) {
            display: none !important;
          }
        }

        /* Mobile - SMALLER HEADER */
        @media (max-width: 768px) {
          /* Hide desktop nav */
          .desktop-nav {
            display: none !important;
          }
          
          /* Show mobile menu button */
          .mobile-menu-btn {
            display: block !important;
          }

          /* Smaller top line */
          .header-top {
            padding: 5px 15px !important;
          }

          /* Smaller bottom line */
          .header-bottom {
            padding: 8px 15px !important;
          }

          /* Smaller logo on mobile */
          .logo {
            height: 50px !important;
          }

          /* Stack contact info */
          .contact-info {
            flex-direction: column;
            gap: 5px !important;
            font-size: 0.75rem !important;
          }

          .contact-item {
            font-size: 0.75rem !important;
          }

          .separator {
            display: none !important;
          }

          /* Mobile nav links */
          .mobile-nav a {
            font-size: 0.9rem !important;
            padding: 10px !important;
          }
        }

        /* Extra small phones */
        @media (max-width: 480px) {
          .header-top {
            padding: 4px 10px !important;
          }

          .header-bottom {
            padding: 6px 10px !important;
          }

          .logo {
            height: 40px !important;
          }

          .contact-info {
            font-size: 0.7rem !important;
            gap: 3px !important;
          }

          .contact-item {
            font-size: 0.7rem !important;
          }

          .mobile-menu-btn {
            padding: 6px 10px !important;
            font-size: 1rem !important;
          }

          .mobile-nav {
            padding: 8px 10px !important;
          }
        }

        /* Hover effects */
        .mobile-menu-btn:hover {
          background-color: #1a3a4a !important;
        }

        .mobile-nav a:hover {
          background-color: #f0f0f0 !important;
        }
      `}</style>
    </header>
  );
}