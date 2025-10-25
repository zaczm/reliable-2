import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  // Sticky header styles
  const headerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
  };

  // Top section with logo and phone
  const topSectionStyle = {
    backgroundColor: '#3d5a99',
    padding: '15px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const logoStyle = {
    height: '60px',
    width: 'auto'
  };

  const phoneButtonStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    padding: '10px 25px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    transition: 'all 0.3s',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  };

  // Navigation section
  const navSectionStyle = {
    backgroundColor: '#3d5a99',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '15px 40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px'
  };

  // Regular nav link style
  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '10px 20px',
    borderRadius: '8px',
    transition: 'all 0.3s',
    fontWeight: '500',
    backgroundColor: 'transparent',
    border: 'none'
  };

  // Bold nav link (for Admission and Referral)
  const boldNavLinkStyle = {
    ...navLinkStyle,
    fontWeight: 'bold',
    fontSize: '1.05rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '2px solid rgba(255, 255, 255, 0.2)'
  };

  // Red circular button style (like the hero button)
  const referralButtonStyle = {
    backgroundColor: '#c41e3a',
    color: 'white',
    padding: '12px 30px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    transition: 'all 0.3s',
    border: 'none',
    boxShadow: '0 4px 15px rgba(196, 30, 58, 0.4)',
    display: 'inline-block',
    letterSpacing: '0.5px'
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
      {/* Top Section - Logo and Phone */}
      <div style={topSectionStyle}>
        <Link to="/">
          <img 
            src="/logo.png" 
            alt="Reliable Recuperative Care" 
            style={logoStyle}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<h2 style="color: white; margin: 0;">Reliable Recuperative Care</h2>';
            }}
          />
        </Link>
        <a 
          href="tel:6129984449" 
          style={phoneButtonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
        >
          📞 Call now to reserve a bed: 612-998-4449
        </a>
      </div>

      {/* Navigation Section */}
      <nav style={navSectionStyle}>
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
          Referral Form
        </Link>
      </nav>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          header > div:first-child {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
          
          header nav {
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
