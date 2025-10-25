import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const headerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
  };

  // TOP LINE (smaller) - Contact Info Only
  const topLineStyle = {
    backgroundColor: '#2d4a5a',
    padding: '10px 40px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  };

  const contactInfoStyle = {
    display: 'flex',
    gap: '25px',
    alignItems: 'center',
    color: 'white'
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.9rem',
    fontWeight: '500',
    color: 'white',
    textDecoration: 'none'
  };

  // BOTTOM LINE (bigger) - Logo and Navigation - WHITE
  const bottomLineStyle = {
    backgroundColor: 'white',
    padding: '20px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #e0e0e0'
  };

  const logoStyle = {
    height: '70px',
    width: 'auto'
  };

  const navContainerStyle = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  };

  const navLinkStyle = {
    color: '#2d4a5a',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '10px 20px',
    borderRadius: '8px',
    transition: 'all 0.3s',
    fontWeight: '500',
    backgroundColor: 'transparent'
  };

  const boldNavLinkStyle = {
    ...navLinkStyle,
    fontWeight: 'bold',
    fontSize: '1.05rem',
    backgroundColor: '#e8f0f5',
    border: '2px solid #2d4a5a'
  };

  const referralButtonStyle = {
    backgroundColor: '#c41e3a',
    color: 'white',
    padding: '12px 30px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'lowercase',
    transition: 'all 0.3s',
    border: 'none',
    boxShadow: '0 4px 15px rgba(196, 30, 58, 0.4)',
    display: 'inline-block'
  };

  const getNavLinkStyle = (path, isBold = false, isReferral = false) => {
    const isActive = location.pathname === path;
    
    if (isReferral) {
      return {
        ...referralButtonStyle,
        backgroundColor: isActive ? '#a01828' : '#c41e3a'
      };
    }
    
    let style = isBold ? { ...boldNavLinkStyle } : { ...navLinkStyle };
    
    if (isActive) {
      style = {
        ...style,
        backgroundColor: '#d0e0eb'
      };
    }
    
    return style;
  };

  return (
    <header style={headerStyle}>
      {/* TOP LINE (smaller) - Contact Info */}
      <div style={topLineStyle}>
        <div style={contactInfoStyle}>
          <a 
            href="tel:6129984449" 
            style={contactItemStyle}
            onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
          >
            📞 612-998-4449
          </a>
          <span style={{color: 'rgba(255, 255, 255, 0.3)'}}>|</span>
          <a 
            href="mailto:info@reliablerecuperative.org" 
            style={contactItemStyle}
            onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
          >
            📧 info@reliablerecuperative.org
          </a>
          <span style={{color: 'rgba(255, 255, 255, 0.3)'}}>|</span>
          <span style={contactItemStyle}>
            📍 796 Capitol Heights Saint Paul, MN 55103
          </span>
        </div>
      </div>

      {/* BOTTOM LINE (bigger) - Logo and Navigation - WHITE */}
      <div style={bottomLineStyle}>
        {/* Logo on left */}
        <Link to="/">
          <img 
            src="/logo1.png" 
            alt="Reliable Recuperative Care" 
            style={logoStyle}
            onError={(e) => {
              e.target.style.display = 'none';
              const parent = e.target.parentElement;
              if (parent && !parent.querySelector('h2')) {
                const heading = document.createElement('h2');
                heading.style.color = '#2d4a5a';
                heading.style.margin = '0';
                heading.textContent = 'Reliable Recuperative Care';
                parent.appendChild(heading);
              }
            }}
          />
        </Link>

        {/* Navigation on right */}
        <nav style={navContainerStyle}>
          <Link 
            to="/" 
            style={getNavLinkStyle('/')}
            onMouseOver={(e) => {
              if (location.pathname !== '/') {
                e.target.style.backgroundColor = '#f0f0f0';
              }
            }}
            onMouseOut={(e) => {
              if (location.pathname !== '/') {
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            Home
          </Link>

          <Link 
            to="/about" 
            style={getNavLinkStyle('/about')}
            onMouseOver={(e) => {
              if (location.pathname !== '/about') {
                e.target.style.backgroundColor = '#f0f0f0';
              }
            }}
            onMouseOut={(e) => {
              if (location.pathname !== '/about') {
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            About Us
          </Link>

          <Link 
            to="/admission" 
            style={getNavLinkStyle('/admission', true)}
            onMouseOver={(e) => {
              if (location.pathname !== '/admission') {
                e.target.style.backgroundColor = '#d0e0eb';
              }
            }}
            onMouseOut={(e) => {
              if (location.pathname !== '/admission') {
                e.target.style.backgroundColor = '#e8f0f5';
              }
            }}
          >
            Admission and Referral
          </Link>

          <Link 
            to="/contact" 
            style={getNavLinkStyle('/contact')}
            onMouseOver={(e) => {
              if (location.pathname !== '/contact') {
                e.target.style.backgroundColor = '#f0f0f0';
              }
            }}
            onMouseOut={(e) => {
              if (location.pathname !== '/contact') {
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            Contact
          </Link>

          <Link 
            to="/referral" 
            style={getNavLinkStyle('/referral', false, true)}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#a01828';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(196, 30, 58, 0.5)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = location.pathname === '/referral' ? '#a01828' : '#c41e3a';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(196, 30, 58, 0.4)';
            }}
          >
            referral form
          </Link>
        </nav>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1200px) {
          header > div:first-child > div {
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
          }
          
          header > div:first-child > div > span[style*="rgba"] {
            display: none;
          }
          
          header > div:last-child {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
          
          header > div:last-child > nav {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        
        @media (max-width: 768px) {
          header > div:first-child {
            padding: 8px 20px !important;
          }
          
          header > div:first-child > div {
            flex-direction: column;
            gap: 8px;
          }
          
          header > div:first-child > div > a,
          header > div:first-child > div > span {
            font-size: 0.85rem;
          }
          
          header > div:last-child {
            padding: 15px 20px !important;
          }
          
          header img {
            height: 55px !important;
          }
          
          header nav {
            flex-direction: column;
            width: 100%;
          }
          
          header nav a {
            width: 100%;
            text-align: center;
          }
        }
        
        @media (max-width: 480px) {
          header img {
            height: 45px !important;
          }
          
          header > div:first-child > div {
            font-size: 0.75rem;
          }
          
          header nav a {
            font-size: 0.9rem;
            padding: 8px 15px;
          }
        }
      `}</style>
    </header>
  );
}