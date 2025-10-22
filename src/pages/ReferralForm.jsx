import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../ReferralForm.css';

export default function ReferralForm() {
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const validFiles = newFiles.filter(file => {
      if (file.size > 10 * 1024 * 1024) {
        alert(`File ${file.name} is too large. Maximum size is 10MB per file.`);
        return false;
      }
      return true;
    });
    setFiles([...files, ...validFiles]);
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

  // Upload files to Google Drive via backend
  const uploadToGoogleDrive = async (file, memberName) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('memberName', memberName);

      // Call backend API
      const response = await fetch('http://localhost:3001/api/upload-to-drive', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      return data.fileUrl; // Returns the shareable Google Drive link
    } catch (error) {
      console.error('Error uploading to Google Drive:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      emailjs.init('tZ-VyVTP-kzl3VuRh');

      const formData = new FormData(formRef.current);
      const templateParams = {};
      
      for (let [key, value] of formData.entries()) {
        templateParams[key] = value || 'Not provided';
      }

      // Upload files to Google Drive and get shareable links
      let fileLinks = 'No files attached';
      if (files.length > 0) {
        const uploadPromises = files.map(file => 
          uploadToGoogleDrive(file, templateParams.Member_Name)
        );
        
        const uploadedUrls = await Promise.all(uploadPromises);
        
        // Format file links for email
        fileLinks = files.map((file, index) => 
          `• ${file.name}: ${uploadedUrls[index]}`
        ).join('\n');
      }

      // Send email with Google Drive links
      const result = await emailjs.send(
        'service_qmoausf',
        'template_6fcdx5i',
        {
          ...templateParams,
          file_links: fileLinks,
          file_count: files.length
        }
      );

      if (result.status === 200) {
        alert('✅ Referral form submitted successfully!\n\nThank you for your submission. Files have been uploaded to Google Drive. We will review it shortly.');
        formRef.current.reset();
        setFiles([]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('❌ Error submitting form. Please try again or email us at info@bullale.com');
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
            <p><strong>Email:</strong> info@bullale.com</p>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit}>
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
                  <input type="radio" id="np" name="Provider_Type" value="NP" />
                  <label htmlFor="np">NP</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="pa" name="Provider_Type" value="PA" />
                  <label htmlFor="pa">PA</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="rn" name="Provider_Type" value="RN" />
                  <label htmlFor="rn">RN</label>
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <label htmlFor="referringPhone">Referring Facility Phone <span className="required">*</span></label>
              <input type="tel" id="referringPhone" name="Referring_Phone" required />
            </div>
            
            <div className="form-row">
              <label htmlFor="referringFax">Referring Facility Fax</label>
              <input type="tel" id="referringFax" name="Referring_Fax" />
            </div>
          </div>

          {/* Medical Information */}
          <div className="form-section">
            <div className="section-title">Medical Information</div>
            
            <div className="form-row">
              <label htmlFor="primaryDiagnosis">Primary Diagnosis <span className="required">*</span></label>
              <textarea id="primaryDiagnosis" name="Primary_Diagnosis" rows="3" required></textarea>
            </div>
            
            <div className="form-row">
              <label htmlFor="secondaryDiagnosis">Secondary Diagnosis (if applicable)</label>
              <textarea id="secondaryDiagnosis" name="Secondary_Diagnosis" rows="3"></textarea>
            </div>
            
            <div className="form-row">
              <label htmlFor="reasonForReferral">Reason for Referral <span className="required">*</span></label>
              <textarea id="reasonForReferral" name="Reason_for_Referral" rows="4" required></textarea>
            </div>
            
            <div className="form-row">
              <label htmlFor="medications">Current Medications</label>
              <textarea id="medications" name="Current_Medications" rows="4" placeholder="List all current medications"></textarea>
            </div>
            
            <div className="form-row">
              <label htmlFor="functionalStatus">Functional Status/Mobility</label>
              <textarea id="functionalStatus" name="Functional_Status" rows="3"></textarea>
            </div>
            
            <div className="form-row">
              <label>Needs Medical Equipment</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input type="radio" id="equipmentYes" name="Needs_Equipment" value="Yes" />
                  <label htmlFor="equipmentYes">Yes</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="equipmentNo" name="Needs_Equipment" value="No" />
                  <label htmlFor="equipmentNo">No</label>
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <label htmlFor="equipmentDetails">If yes, specify equipment needed</label>
              <textarea id="equipmentDetails" name="Equipment_Details" rows="2"></textarea>
            </div>
          </div>

          {/* Additional Clinical Information */}
          <div className="form-section">
            <div className="section-title">Additional Clinical Information</div>
            
            <div className="form-row">
              <label>Communicable Disease</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input type="radio" id="diseaseYes" name="Communicable_Disease" value="Yes" />
                  <label htmlFor="diseaseYes">Yes</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="diseaseNo" name="Communicable_Disease" value="No" />
                  <label htmlFor="diseaseNo">No</label>
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <label>Behavioral Concerns</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input type="radio" id="behaviorYes" name="Behavioral_Concerns" value="Yes" />
                  <label htmlFor="behaviorYes">Yes</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="behaviorNo" name="Behavioral_Concerns" value="No" />
                  <label htmlFor="behaviorNo">No</label>
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <label>Illegal substance use</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input type="radio" id="substanceYes" name="Substance_Use" value="Yes" />
                  <label htmlFor="substanceYes">Yes</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="substanceNo" name="Substance_Use" value="No" />
                  <label htmlFor="substanceNo">No</label>
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <label>Probation/parole</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input type="radio" id="probationYes" name="Probation_Parole" value="Yes" />
                  <label htmlFor="probationYes">Yes</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="probationNo" name="Probation_Parole" value="No" />
                  <label htmlFor="probationNo">No</label>
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <label>Any Issues with Bowel Control</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input type="radio" id="bowelYes" name="Bowel_Control" value="Yes" />
                  <label htmlFor="bowelYes">Yes</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="bowelNo" name="Bowel_Control" value="No" />
                  <label htmlFor="bowelNo">No</label>
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <label>Any Issues with Bladder Control</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input type="radio" id="bladderYes" name="Bladder_Control" value="Yes" />
                  <label htmlFor="bladderYes">Yes</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="bladderNo" name="Bladder_Control" value="No" />
                  <label htmlFor="bladderNo">No</label>
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <label>Diet Allergies</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input type="radio" id="dietYes" name="Diet_Allergies" value="Yes" />
                  <label htmlFor="dietYes">Yes</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="dietNo" name="Diet_Allergies" value="No" />
                  <label htmlFor="dietNo">No</label>
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <label>Medication Allergies</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input type="radio" id="medAllergyYes" name="Medication_Allergies" value="Yes" />
                  <label htmlFor="medAllergyYes">Yes</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="medAllergyNo" name="Medication_Allergies" value="No" />
                  <label htmlFor="medAllergyNo">No</label>
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <label htmlFor="otherAllergies">Any other Allergies</label>
              <textarea id="otherAllergies" name="Other_Allergies"></textarea>
            </div>
          </div>

          {/* File Upload Section */}
          <div className="form-section">
            <div className="section-title">Required Attachments</div>
            <p style={{marginBottom: '15px', color: '#555'}}>
              Please attach: Discharge Summary/Instructions, Medication List (if available), Care Plan (if available)
            </p>
            <p style={{marginBottom: '15px', color: '#28a745', fontWeight: 'bold'}}>
              ✓ Files will be securely uploaded to Google Drive
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
                Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB per file)
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
              {files.length > 0 && (
                <p style={{marginTop: '10px', color: '#28a745', fontSize: '14px', fontWeight: 'bold'}}>
                  ✓ {files.length} file(s) ready to upload to Google Drive
                </p>
              )}
            </div>
          </div>

          {/* Referring Provider Signature */}
          <div className="form-section">
            <div className="section-title">Referring Provider Signature / Date</div>
            
            <div className="form-row">
              <label htmlFor="providerSignature">Referring Provider Signature <span className="required">*</span></label>
              <input type="text" id="providerSignature" name="Provider_Signature" placeholder="Type full name as signature" required />
            </div>
            
            <div className="form-row">
              <label htmlFor="signatureDate">Date <span className="required">*</span></label>
              <input type="date" id="signatureDate" name="Signature_Date" required defaultValue={today} />
            </div>
            
            <div className="form-row">
              <label htmlFor="printName">Print Name</label>
              <input type="text" id="printName" name="Print_Name" />
            </div>
            
            <div className="form-row">
              <label htmlFor="facilityRep">Facility Representative (if different)</label>
              <input type="text" id="facilityRep" name="Facility_Representative" />
            </div>
            
            <div className="form-row">
              <label htmlFor="facilityRepDate">Date</label>
              <input type="date" id="facilityRepDate" name="Facility_Rep_Date" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="submit-section">
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting & Uploading to Drive...' : 'Submit Referral Form'}
            </button>
            <p style={{marginTop: '15px', color: '#666'}}>
              Form will be sent to: <strong>info@bullale.com</strong><br />
              Files will be uploaded to: <strong>Google Drive</strong>
            </p>
          </div>

          {/* Instructions */}
          <div className="instructions">
            <h3>Instructions for Submission:</h3>
            <ul>
              <li>Complete all required fields marked with <span className="required">*</span></li>
              <li>Attach necessary documents (Discharge Summary, Medication List, Care Plan)</li>
              <li>Click "Submit Referral Form" to send via email and upload files to Google Drive</li>
              <li>Alternatively, you can fax this form and documents to (612) 444-8950</li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}
