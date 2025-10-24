import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../ReferralForm.css';

export default function ReferralForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      emailjs.init('xcHnyHWnOHp0mXian'); // ✅ Your EmailJS public key

      const formData = new FormData(formRef.current);
      const templateParams = {};

      for (let [key, value] of formData.entries()) {
        templateParams[key] = value || 'Not provided';
      }

      // ✅ Get Uploadcare file URLs
      const uploadcareValue = formRef.current.querySelector('[name="uploadcare_files"]').value;
      const fileLinks = uploadcareValue
        ? uploadcareValue.split('~').map((url, i) => `• File ${i + 1}: ${url}`).join('\n')
        : 'No files attached';

      const result = await emailjs.send(
        'service_qmoausf',
        'template_ngtmb6m',
        {
          ...templateParams,
          file_links: fileLinks,
          file_count: uploadcareValue ? uploadcareValue.split('~').length : 0
        }
      );

      if (result.status === 200) {
        alert('✅ Referral form submitted successfully!\n\nThank you for your submission. Files have been uploaded via Uploadcare. We will review it shortly.');
        formRef.current.reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('❌ Error submitting form. Please try again or email us at info@reliablerecuperative.org');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="referral-container">
      <div className="referral-form-wrapper">
        <div className="form-header">
          <h1>Reliable Recuperative Care Referral Form</h1>
          <div className="contact-info">
            <p><strong>Fax:</strong> (612) 444-8950</p>
            <p><strong>Email:</strong> info@reliablerecuperative.org</p>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit}>
          {/* 🔁 All your existing form sections stay the same */}

          {/* ✅ Uploadcare File Upload Section */}
          <div className="form-section">
            <div className="section-title">Required Attachments</div>
            <p>Please attach: Discharge Summary, Medication List, Care Plan</p>
            <p style={{marginBottom: '15px', color: '#28a745', fontWeight: 'bold'}}>
              ✓ Files will be securely uploaded via Uploadcare
            </p>

            <input
              type="hidden"
              role="uploadcare-uploader"
              data-public-key="1f06b8a02fb2b325d3e5"
              data-multiple="true"
              data-tabs="file camera url"
              data-clearable
              name="uploadcare_files"
            />

            <p style={{marginTop: '10px', color: '#666', fontSize: '14px'}}>
              Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB per file)
            </p>
          </div>

          {/* Submit Button */}
          <div className="submit-section">
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting & Uploading...' : 'Submit Referral Form'}
            </button>
            <p style={{marginTop: '15px', color: '#666'}}>
              Form will be sent to: <strong>info@reliablerecuperative.org</strong><br />
              Files will be uploaded via: <strong>Uploadcare</strong>
            </p>
          </div>

          {/* Instructions */}
          <div className="instructions">
            <h3>Instructions for Submission:</h3>
            <ul>
              <li>Complete all required fields marked with <span className="required">*</span></li>
              <li>Attach necessary documents (Discharge Summary, Medication List, Care Plan)</li>
              <li>Click "Submit Referral Form" to send via email and upload files</li>
              <li>Alternatively, you can fax this form and documents to (612) 444-8950</li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}