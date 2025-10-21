import { useState } from 'react';
import emailjs from '@emailjs/browser';
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
      // Initialize EmailJS with your public key
      emailjs.init('tZ-VyVTP-kzl3VuRh');

      const form = e.target;
      const formData = new FormData(form);
      
      // Convert FormData to object for EmailJS
      const templateParams = {};
      for (let [key, value] of formData.entries()) {
        templateParams[key] = value;
      }

      // Send email with EmailJS
      const result = await emailjs.send(
        'service_qmoausf',
        'template_6fcdx5i',
        templateParams
      );

      if (result.status === 200) {
        alert('✅ Referral form submitted successfully!\n\nThank you for your submission.');
        form.reset();
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

          {/* Member Eligibility Confirmation */}
          <div className="form-section">
            <div className="section-title">Member Eligibility Confirmation</div>
            
            <div className="form-group">
              <div className="checkbox-item" style={{marginBottom: '10px'}}>
                <input type="checkbox" id="eligMA" name="Eligibility_Insurance" value="yes" />
                <label htmlFor="eligMA">Member is with MA/ Hennepin Health/ UCare/ Blue Cross</label>
              </div>
              
              <div className="checkbox-item" style={{marginBottom: '10px'}}>
                <input type="checkbox" id="eligHomeless" name="Eligibility_Homeless" value="yes" />
                <label htmlFor="eligHomeless">Member is experiencing homelessness or is unhoused</label>
              </div>
              
              <div className="checkbox-item" style={{marginBottom: '10px'}}>
                <input type="checkbox" id="eligShortTerm" name="Eligibility_Short_Term" value="yes" />
                <label htmlFor="eligShortTerm">Member requires short-term medical care (expected duration):</label>
              </div>
              <div className="inline-input" style={{marginLeft: '30px', marginBottom: '10px'}}>
                <div className="checkbox-item">
                  <input type="radio" id="duration21" name="Duration" value="≤21 days" />
                  <label htmlFor="duration21">≤21 days</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="durationExt" name="Duration" value="Extension" />
                  <label htmlFor="durationExt">Requesting Extension:</label>
                  <input type="text" id="extensionDays" name="Extension_Days" placeholder="days" style={{width: '100px', marginLeft: '5px'}} />
                </div>
              </div>
              
              <div className="checkbox-item" style={{marginBottom: '10px'}}>
                <input type="checkbox" id="eligADL" name="Eligibility_ADL" value="yes" />
                <label htmlFor="eligADL">Member can independently perform Activities of Daily Living (ADLs)</label>
              </div>
            </div>
          </div>

          {/* Medical Summary and Needs */}
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
              <label htmlFor="reasonReferral">Reason for Referral to Recuperative Care <span className="required">*</span></label>
              <textarea id="reasonReferral" name="Reason_for_Referral" required></textarea>
            </div>
            
            <div className="form-row">
              <label>HPI/Assessment and Discharge Care Plan Attached?</label>
              <div className="checkbox-item">
                <input type="checkbox" id="carePlanAttached" name="Care_Plan_Attached" value="yes" />
                <label htmlFor="carePlanAttached">Yes</label>
              </div>
            </div>
            
            <div className="form-row">
              <label>Medication Needs</label>
              <div className="checkbox-item">
                <input type="checkbox" id="selfAdminister" name="Self_Administer_Meds" value="yes" />
                <label htmlFor="selfAdminister">Self-administer</label>
              </div>
            </div>
            
            <div className="form-row">
              <label>Wound Care Needed?</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input type="radio" id="woundYes" name="Wound_Care" value="Yes" />
                  <label htmlFor="woundYes">Yes</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="woundNo" name="Wound_Care" value="No" />
                  <label htmlFor="woundNo">No</label>
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <label>Follow-up Appointments Scheduled?</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input type="radio" id="apptYes" name="Appointments" value="Yes" />
                  <label htmlFor="apptYes">Yes</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="apptNo" name="Appointments" value="No" />
                  <label htmlFor="apptNo">No</label>
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <label htmlFor="apptList">If Yes, list:</label>
              <textarea id="apptList" name="Appointment_List"></textarea>
            </div>
          </div>

          {/* Additional Patient History */}
          <div className="form-section">
            <div className="section-title">Additional Patient History</div>
            
            <div className="form-row">
              <label>Physical aggression</label>
              <div className="checkbox-group">
                <div className="checkbox-item">
                  <input type="radio" id="aggressionYes" name="Physical_Aggression" value="Yes" />
                  <label htmlFor="aggressionYes">Yes</label>
                </div>
                <div className="checkbox-item">
                  <input type="radio" id="aggressionNo" name="Physical_Aggression" value="No" />
                  <label htmlFor="aggressionNo">No</label>
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

          {/* File Upload Note */}
          <div className="form-section">
            <div className="section-title">Required Attachments</div>
            <div className="instructions" style={{marginTop: '0'}}>
              <h3 style={{fontSize: '16px', marginBottom: '10px'}}>📎 Document Submission</h3>
              <p style={{color: '#856404', lineHeight: '1.8'}}>
                Please email the following documents separately to <strong>info@bullale.com</strong> after submitting this form:
              </p>
              <ul style={{marginTop: '10px'}}>
                <li>Discharge Summary or Instructions (from MD, DO, PA, or APRN)</li>
                <li>Medication List (if available)</li>
                <li>Care Plan (if available)</li>
              </ul>
              <p style={{color: '#856404', marginTop: '10px', fontStyle: 'italic'}}>
                Reference the member name in your email subject line.
              </p>
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
              {isSubmitting ? 'Submitting...' : 'Submit Referral Form'}
            </button>
            <p style={{marginTop: '15px', color: '#666'}}>
              Form will be sent to: <strong>info@bullale.com</strong>
            </p>
          </div>

          {/* Instructions */}
          <div className="instructions">
            <h3>Instructions for Submission:</h3>
            <ul>
              <li>Complete all required fields marked with <span className="required">*</span></li>
              <li>Click "Submit Referral Form" to send your information</li>
              <li>Email required documents separately to info@bullale.com</li>
              <li>Alternatively, you can fax this form and documents to (612) 444-8950</li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}
