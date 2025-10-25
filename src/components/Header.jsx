import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const headerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
  };

  // TOP LINE - Logo and Contact Info
  const topLineStyle = {
    backgroundColor: '#2d4a5a',
    padding: '15px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const logoStyle = {
    height: '60px',
    width: 'auto'
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
    fontSize: '0.95rem',
    fontWeight: '500',
    color: 'white',
    textDecoration: 'none'
  };

  // BOTTOM LINE - Navigation
  const navLineStyle = {
    backgroundColor: '#2d4a5a',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '15px 40px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '10px'
  };

  const navLinkStyle = {
    color: 'white',
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
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '2px solid rgba(255, 255, 255, 0.2)'
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
        backgroundColor: 'rgba(255, 255, 255, 0.15)'
      };
    }
    
    return style;
  };

  return (
    <header style={headerStyle}>
      {/* TOP LINE - Logo and Contact Info */}
      <div style={topLineStyle}>
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
                heading.style.color = 'white';
                heading.style.margin = '0';
                heading.textContent = 'Reliable Recuperative Care';
                parent.appendChild(heading);
              }
            }}
          />
        </Link>

        {/* Contact info on right */}
        <div style={contactInfoStyle}>
          <a 
            href="tel:6129984449" 
            style={contactItemStyle}
            onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
          >
            📞 Call now to reserve a bed: 612-998-4449
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

      {/* BOTTOM LINE - Navigation */}
      <nav style={navLineStyle}>
        <Link 
          to="/" 
          style={getNavLinkStyle('/')}
          onMouseOver={(e) => {
            if (location.pathname !== '/') {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
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
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
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
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            }
          }}
          onMouseOut={(e) => {
            if (location.pathname !== '/admission') {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
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
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
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
          Referral form
        </Link>
      </nav>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1200px) {
          header > div:first-child > div {
            flex-direction: column;
            gap: 10px;
            align-items: flex-end;
          }
          
          header > div:first-child > div > a,
          header > div:first-child > div > span {
            font-size: 0.85rem;
          }
        }
        
        @media (max-width: 768px) {
          header > div:first-child {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
          
          header > div:first-child > div {
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }
          
          header > div:first-child > div > span[style*="rgba"] {
            display: none;
          }
          
          header nav {
            justify-content: center;
            flex-wrap: wrap;
          }
          
          header nav a {
            font-size: 0.9rem;
            padding: 8px 15px;
          }
        }
        
        @media (max-width: 480px) {
          header img {
            height: 50px !important;
          }
          
          header > div:first-child {
            padding: 15px 20px !important;
          }
          
          header nav {
            padding: 15px 20px !important;
            flex-direction: column;
            gap: 10px;
          }
          
          header nav a {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </header>
  );
}