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

  // Top section with logo and phone - GREEN COLOR
  const topSectionStyle = {
    backgroundColor: '#2d4a5a', // Green/teal color
    padding: '15px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const logoStyle = {
    height: '60px',
    width: 'auto'
  };

  // GREEN phone button
  const phoneButtonStyle = {
    backgroundColor: '#5a8a9a', // Lighter green
    color: 'white',
    padding: '10px 25px',
    borderRadius: '30px',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    border: '2px solid #6a9aaa',
    transition: 'all 0.3s',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  };

  // Navigation section - GREEN
  const navSectionStyle = {
    backgroundColor: '#2d4a5a', // Same green
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
            src="/logo1.png" 
            alt="Reliable Recuperative Care" 
            style={logoStyle}
            onError={(e) => {
              console.error('Logo failed to load');
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
        <a 
          href="tel:6129984449" 
          style={phoneButtonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#6a9aaa'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#5a8a9a'}
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
            padding: 15px 20px !important;
          }
          
          header nav {
            flex-direction: column;
            gap: 10px;
            padding: 15px 20px !important;
          }
          
          header nav a {
            width: 100%;
            text-align: center;
          }
        }
        
        @media (max-width: 480px) {
          header img {
            height: 50px !important;
          }
          
          header > div:first-child a {
            font-size: 0.9rem !important;
            padding: 8px 15px !important;
          }
        }
      `}</style>
    </header>
  );
}