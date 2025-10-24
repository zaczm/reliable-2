import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Contact.css';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS
      emailjs.init('xcHnyHWnOHp0mXian');

      const formData = new FormData(formRef.current);
      const templateParams = {
        from_name: formData.get('name') || 'Not provided',
        from_email: formData.get('email') || 'Not provided',
        subject: formData.get('subject') || 'No subject',
        message: formData.get('message') || 'No message',
        to_email: 'info@reliablerecuperative.org'
      };

      // Send email
      const result = await emailjs.send(
        'service_ew1i6oe',
        'template_qls35gm', // You might want to create a separate template for contact form
        templateParams
      );

      if (result.status === 200) {
        alert('✅ Message sent successfully!\n\nThank you for contacting us. We will get back to you soon.');
        formRef.current.reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('❌ Submission error:', error);
      alert('❌ Error sending message. Please try calling us at (612) 998-4449 or email info@reliablerecuperative.org');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Book A Bed & Connect With Our Intake Team</h1>
          <p className="hero-subtitle">
            Start your recovery journey today. Our team is ready to guide you through every step, 
            ensuring your comfort, safety, and personalized care.
          </p>
          <div className="contact-methods">
            <a href="tel:6129984449" className="contact-method-card">
              <div className="icon">📞</div>
              <h3>Phone</h3>
              <p className="contact-value">(612) 998-4449</p>
              <p className="contact-desc">Call us for immediate assistance</p>
            </a>
            <a href="mailto:info@reliablerecuperative.org" className="contact-method-card">
              <div className="icon">📧</div>
              <h3>Email</h3>
              <p className="contact-value">info@reliablerecuperative.org</p>
              <p className="contact-desc">Send us a message anytime</p>
            </a>
            <a href="https://maps.google.com/?q=796+Capitol+Heights+Saint+Paul+MN+55103" target="_blank" rel="noopener noreferrer" className="contact-method-card">
              <div className="icon">📍</div>
              <h3>Location</h3>
              <p className="contact-value">796 Capitol Heights Saint Paul</p>
              <p className="contact-value">MN 55103</p>
              <p className="contact-desc">Visit us at our facility</p>
            </a>
            <div className="contact-method-card">
              <div className="icon">🕐</div>
              <h3>Hours</h3>
              <p className="contact-value">24/7 Care Available</p>
              <p className="contact-desc">We're here when you need us</p>
            </div>
          </div>
          <a 
            href="#contact-form" 
            className="cta-button"
            style={{
              display: 'inline-block',
              marginTop: '30px',
              padding: '15px 40px',
              backgroundColor: '#c8a882',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '25px',
              fontSize: '18px',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#b89872'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#c8a882'}
          >
            Contact Intake Team
          </a>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <h2>Send Us a Message</h2>
            <p className="form-subtitle">
              Fill out the form below and we'll get back to you as soon as possible. 
              We're here to answer any questions you may have about our services.
            </p>
            
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name <span className="required">*</span></label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message <span className="required">*</span></label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="6" 
                  required
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              title="Reliable Recuperative Care Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2821.5!2d-93.1!3d44.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDU3JzAwLjAiTiA5M8KwMDYnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="emergency-contact">
        <div className="container">
          <div className="emergency-card">
            <h2>🚨 Need Immediate Assistance?</h2>
            <p>Our intake team is available 24/7 to help you</p>
            <a href="tel:6129984449" className="emergency-button">
              Call Now: (612) 998-4449
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}