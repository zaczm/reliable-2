import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const headerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    background: 'white',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
  };

  const topBarStyle = {
    background: 'linear-gradient(135deg, #2c5aa0 0%, #1a3a6b 100%)',
    color: 'white',
    padding: '12px 0'
  };

  const topBarContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 30px',
    maxWidth: '1200px',
    margin: '0 auto',
    flexWrap: 'wrap',
    gap: '15px'
  };

  const logoStyle = {
    height: '65px',
    width: 'auto'
  };

  const phoneStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.15rem',
    fontWeight: '600',
    padding: '8px 20px',
    borderRadius: '25px',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s'
  };

  const navStyle = {
    backgroundColor: '#2c5aa0',
    borderTop: '3px solid rgba(255, 255, 255, 0.15)',
    padding: '12px 20px'
  };

  const navMenuStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
    margin: 0,
    padding: 0,
    flexWrap: 'wrap',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '12px 20px',
    borderRadius: '8px',
    transition: 'all 0.3s',
    display: 'inline-block',
    fontWeight: '500',
    background: 'rgba(255, 255, 255, 0.05)'
  };

  const boldLinkStyle = {
    ...navLinkStyle,
    fontWeight: 'bold',
    fontSize: '1.05rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '2px solid rgba(255, 255, 255, 0.25)'
  };

  const referralButtonStyle = {
    ...boldLinkStyle,
    background: 'linear-gradient(135deg, #d4e157 0%, #aed581 100%)',
    color: '#1a3a6b',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    padding: '12px 25px',
    border: '3px solid #c0ca33',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const getNavLinkStyle = (path, isBold = false, isReferral = false) => {
    const isActive = location.pathname === path;
    let style = isBold ? { ...boldLinkStyle } : { ...navLinkStyle };
    
    if (isReferral) {
      style = { ...referralButtonStyle };
    }
    
    if (isActive) {
      style = {
        ...style,
        backgroundColor: isReferral ? '#afb42b' : 'rgba(255, 255, 255, 0.2)'
      };
    }
    
    return style;
  };

  return (
    <header style={headerStyle}>
      {/* Top Bar */}
      <div style={topBarStyle}>
        <div style={topBarContentStyle}>
          <div>
            <Link to="/">
              <img src="/logo.png" alt="Reliable Recuperative Care" style={logoStyle} />
            </Link>
          </div>
          <div>
            <a href="tel:6129984449" style={phoneStyle}>
              📞 Call now to reserve a bed: 612-998-4449
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav style={navStyle}>
        <ul style={navMenuStyle}>
          <li style={{ margin: 0 }}>
            <Link to="/" style={getNavLinkStyle('/')}>
              Home
            </Link>
          </li>
          <li style={{ margin: 0 }}>
            <Link to="/about" style={getNavLinkStyle('/about')}>
              About Us
            </Link>
          </li>
          <li style={{ margin: 0 }}>
            <Link to="/admission" style={getNavLinkStyle('/admission', true)}>
              Admission and Referral
            </Link>
          </li>
          <li style={{ margin: 0 }}>
            <Link to="/contact" style={getNavLinkStyle('/contact')}>
              Contact
            </Link>
          </li>
          <li style={{ margin: 0 }}>
            <Link to="/referral" style={getNavLinkStyle('/referral', true, true)}>
              Referral form
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}