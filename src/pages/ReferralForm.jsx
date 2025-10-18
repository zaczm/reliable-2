import { useState } from 'react';
import '../ReferralForm.css';

export default function ReferralForm() {
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles([...files, ...newFiles]);
    e.target.value = '';
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      
      // Add Web3Forms access key
      formData.append('access_key', 'cc5f7691-cd9b-4c16-bb2e-f270495d69ed');
      
      // Add redirect URL (optional - prevents default thank you page)
      formData.append('redirect', 'false');
      
      // Add files with proper field name for Web3Forms
      files.forEach((file) => {
        formData.append('attachment', file);
      });

      console.log('Submitting form...');
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      console.log('Response status:', response.status);
      const result = await response.json();
      console.log('Response data:', result);

      if (result.success) {
        alert('✅ Referral form submitted successfully! We will contact you soon.');
        e.target.reset();
        setFiles([]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        console.error('Submission failed:', result);
        alert(`❌ Error: ${result.message || 'Submission failed'}. Please email us at Info@reliablerecuperative.org`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      console.error('Error type:', error.name);
      console.error('Error message:', error.message);
      alert('❌ Network error. Please check your internet connection or email us at Info@reliablerecuperative.org');
    } finally {
      setIsSubmitting(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="referral-container">
      <div className="referral-form-wrapper">
        <div className="form-header">
          <h1>Reliable Recuperative Care Referral Form</h1>
          <div className="contact-info">
            <p><strong>Fax:</strong> (612) 444-8950</p>
            <p><strong>Email:</strong> Info@reliablerecuperative.org</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Member Information */}
          <div className="form-section">
            <div className="section-title">Member Information</div>
            
            <div className="form-row">
              <label htmlFor="memberName">Member Full Name <span className="required">*</span></label>
              <input type="text" id="memberName" name="Member_Name" required />
            </div>
            
            <div className="form-row">
              <label htmlFor="dob">Date of Birth <span className="required">*</span></label>
              <input type="date" id="dob" name="Date_of_Birth" required />
            </div>
            
            <div className="form-row">
              <label htmlFor="memberId">MHCP Member ID <span className="required">*</span></label>
              <input type="text" id="memberId" name="MHCP_Member_ID" required />
            </div>
            
            <div className="form-row">
              <label>Gender</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input type="radio" id="male" name="Gender" value="Male" />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="female" name="Gender" value="Female" />
                  <label htmlFor="female">Female</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="other" name="Gender" value="Other" />
                  <label htmlFor="other">Other</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="noSay" name="Gender" value="Prefer not to say" />
                  <label htmlFor="noSay">Prefer not to say</label>
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <label htmlFor="phone">Phone Number <span className="required">*</span></label>
              <input type="tel" id="phone" name="Phone" required />
            </div>
            
            <div className="form-row">
              <label htmlFor="email">Email (if available)</label>
              <input type="email" id="email" name="Email" />
            </div>
          </div>

          {/* Referral Source Information */}
          <div className="form-section">
            <div className="section-title">Referral Source Information</div>
            
            <div className="form-row">
              <label htmlFor="facilityName">Referring Facility Name <span className="required">*</span></label>
              <input type="text" id="facilityName" name="Facility_Name" required />
            </div>
            
            <div className="form-row">
              <label>Facility Type</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input type="radio" id="hospital" name="Facility_Type" value="Hospital" />
                  <label htmlFor="hospital">Hospital</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="clinic" name="Facility_Type" value="Clinic" />
                  <label htmlFor="clinic">Clinic</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="providerOffice" name="Facility_Type" value="Provider Office" />
                  <label htmlFor="providerOffice">Provider Office</label>
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <label htmlFor="providerName">Referring Provider Name <span className="required">*</span></label>
              <input type="text" id="providerName" name="Provider_Name" required />
            </div>
            
            <div className="form-row">
              <label>Provider Type</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input type="radio" id="md" name="Provider_Type" value="MD" />
                  <label htmlFor="md">MD</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="do" name="Provider_Type" value="DO" />
                  <label htmlFor="do">DO</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="aprn" name="Provider_Type" value="APRN" />
                  <label htmlFor="aprn">APRN</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="pa" name="Provider_Type" value="PA" />
                  <label htmlFor="pa">PA</label>
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <label htmlFor="contactPerson">Referring Contact Person</label>
              <input type="text" id="contactPerson" name="Contact_Person" />
            </div>
            
            <div className="form-row">
              <label htmlFor="contactPhone">Phone Number</label>
              <input type="tel" id="contactPhone" name="Contact_Phone" />
            </div>
            
            <div className="form-row">
              <label htmlFor="faxEmail">Fax / Email (for discharge paperwork)</label>
              <input type="text" id="faxEmail" name="Fax_Email" />
            </div>
          </div>

          {/* Medical Summary */}
          <div className="form-section">
            <div className="section-title">Medical Summary and Needs</div>
            
            <div className="form-row">
              <label htmlFor="primaryDiagnosis">Primary Diagnosis (ICD-10) <span className="required">*</span></label>
              <input type="text" id="primaryDiagnosis" name="Primary_Diagnosis" required />
            </div>
            
            <div className="form-row">
              <label htmlFor="secondaryDiagnosis">Secondary Diagnosis (if applicable)</label>
              <input type="text" id="secondaryDiagnosis" name="Secondary_Diagnosis" />
            </div>
            
            <div className="form-row">
              <label htmlFor="reasonReferral">Reason for Referral <span className="required">*</span></label>
              <textarea id="reasonReferral" name="Reason_for_Referral" required></textarea>
            </div>
          </div>

          {/* File Upload */}
          <div className="form-section">
            <div className="section-title">Required Attachments</div>
            <p style={{marginBottom: '15px', color: '#555'}}>
              Please attach: Discharge Summary/Instructions, Medication List, Care Plan
            </p>
            
            <div className="file-upload">
              <input 
                type="file" 
                id="fileInput" 
                multiple 
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                style={{display: 'none'}}
              />
              <label htmlFor="fileInput" className="file-upload-label">
                Choose Files to Upload
              </label>
              <p style={{marginTop: '10px', color: '#666', fontSize: '14px'}}>
                Max 5MB per file
              </p>
              <div className="file-list">
                {files.map((file, index) => (
                  <div key={index} className="file-item">
                    <span>{file.name} ({formatFileSize(file.size)})</span>
                    <button 
                      type="button" 
                      onClick={() => removeFile(index)}
                      className="remove-file-btn"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Signature */}
          <div className="form-section">
            <div className="section-title">Referring Provider Signature / Date</div>
            
            <div className="form-row">
              <label htmlFor="providerSignature">Provider Signature <span className="required">*</span></label>
              <input type="text" id="providerSignature" name="Provider_Signature" placeholder="Type full name" required />
            </div>
            
            <div className="form-row">
              <label htmlFor="signatureDate">Date <span className="required">*</span></label>
              <input type="date" id="signatureDate" name="Signature_Date" required defaultValue={today} />
            </div>
          </div>

          {/* Submit */}
          <div className="submit-section">
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Referral Form'}
            </button>
            <p style={{marginTop: '15px', color: '#666'}}>
              Form will be sent to: <strong>Info@reliablerecuperative.org</strong>
            </p>
          </div>

          <div className="instructions">
            <h3>Instructions for Submission:</h3>
            <ul>
              <li>Complete all required fields marked with <span className="required">*</span></li>
              <li>Attach necessary documents</li>
              <li>Click "Submit Referral Form" to send via email</li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}