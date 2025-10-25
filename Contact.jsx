import React from 'react';

export default function Contact() {
  // Google Maps link for the address
  const address = "796 Capitol Heights Saint Paul, MN 55103";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  const pageStyle = {
    minHeight: '80vh',
    backgroundColor: '#f5f5f0',
    padding: '60px 20px'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#2d4a5a',
    textAlign: 'center',
    marginBottom: '60px'
  };

  const cardsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    padding: '0 20px'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '40px 30px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'default'
  };

  const clickableCardStyle = {
    ...cardStyle,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'block',
    color: 'inherit'
  };

  const iconStyle = {
    fontSize: '3rem',
    marginBottom: '20px'
  };

  const cardTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#2d4a5a',
    marginBottom: '15px'
  };

  const cardTextStyle = {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '10px'
  };

  const cardSubtextStyle = {
    fontSize: '0.95rem',
    color: '#999',
    fontStyle: 'italic'
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>Contact Information</h1>
        
        <div style={cardsContainerStyle}>
          {/* Phone Card */}
          <a 
            href="tel:6129984449"
            style={clickableCardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div style={iconStyle}>📞</div>
            <h3 style={cardTitleStyle}>Phone</h3>
            <p style={cardTextStyle}>612-998-4449</p>
            <p style={cardSubtextStyle}>Call us for immediate assistance</p>
          </a>

          {/* Email Card */}
          <a 
            href="mailto:info@reliablerecuperative.org"
            style={clickableCardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div style={iconStyle}>📧</div>
            <h3 style={cardTitleStyle}>Email</h3>
            <p style={cardTextStyle}>info@reliablerecuperative.com</p>
            <p style={cardSubtextStyle}>Send us a message anytime</p>
          </a>

          {/* Location Card - CLICKABLE! */}
          <a 
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={clickableCardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.backgroundColor = '#e8f4f8';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.backgroundColor = 'white';
            }}
          >
            <div style={iconStyle}>📍</div>
            <h3 style={cardTitleStyle}>Location</h3>
            <p style={cardTextStyle}>796 Capitol Heights Saint Paul<br />MN 55103</p>
            <p style={cardSubtextStyle}>Visit us at our facility<br />Click to open in maps</p>
          </a>

          {/* Hours Card */}
          <div 
            style={cardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div style={iconStyle}>🕐</div>
            <h3 style={cardTitleStyle}>Hours</h3>
            <p style={cardTextStyle}>24/7 Care Available</p>
            <p style={cardSubtextStyle}>We're here when you need us</p>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem !important;
          }
          
          .cards-container {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width: 480px) {
          h1 {
            font-size: 1.75rem !important;
          }
        }
      `}</style>
    </div>
  );
}