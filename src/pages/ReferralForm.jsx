import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../ReferralForm.css';

export default function ReferralForm() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    // Initialize Uploadcare widget
    if (window.uploadcare) {
      const widget = window.uploadcare.Widget('[role=uploadcare-uploader]');
      
      widget.onUploadComplete((fileInfo) => {
        setUploadedFiles(prev => [...prev, {
          name: fileInfo.name,
          url: fileInfo.cdnUrl,
          size: fileInfo.size
        }]);
      });
    }
  }, []);

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const removeFile = (index) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const handlePrint = () => {
    // Get all form values
    const formData = new FormData(formRef.current);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value || 'Not provided';
    }

    // Create printable content
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Referral Form - ${data.Member_Name || 'Patient'}</title>
        <style>
          @media print {
            body { margin: 0; padding: 20px; }
            .no-print { display: none !important; }
          }
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            text-align: center;
            border-bottom: 3px solid #2c5aa0;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .header h1 {
            color: #2c5aa0;
            margin: 0 0 10px 0;
          }
          .section {
            margin-bottom: 30px;
            page-break-inside: avoid;
          }
          .section-title {
            background-color: #2c5aa0;
            color: white;
            padding: 10px 15px;
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 15px;
          }
          .field {
            margin-bottom: 15px;
            padding: 10px;
            background-color: #f9f9f9;
            border-left: 3px solid #2c5aa0;
          }
          .field-label {
            font-weight: bold;
            color: #2c5aa0;
            margin-bottom: 5px;
          }
          .field-value {
            color: #333;
            padding-left: 10px;
          }
          .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #ddd;
            color: #666;
            font-size: 14px;
          }
          .print-button {
            background-color: #2c5aa0;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            font-size: 16px;
            margin: 20px auto;
            display: block;
          }
          .print-button:hover {
            background-color: #1d4070;
          }
        </style>
      </head>
      <body>
        <button onclick="window.print()" class="print-button no-print">🖨️ Print This Form</button>
        
        <div class="header">
          <h1>Reliable Recuperative Care</h1>
          <h2>Referral Form</h2>
          <p><strong>Fax:</strong> (612) 444-8950 | <strong>Email:</strong> info@reliablerecuperative.org</p>
          <p><strong>Date Printed:</strong> ${new Date().toLocaleDateString()}</p>
        </div>

        <div class="section">
          <div class="section-title">📋 MEMBER INFORMATION</div>
          <div class="field">
            <div class="field-label">Member Name:</div>
            <div class="field-value">${data.Member_Name}</div>
          </div>
          <div class="field">
            <div class="field-label">Date of Birth:</div>
            <div class="field-value">${data.Date_of_Birth}</div>
          </div>
          <div class="field">
            <div class="field-label">MHCP Member ID:</div>
            <div class="field-value">${data.MHCP_Member_ID}</div>
          </div>
          <div class="field">
            <div class="field-label">Gender:</div>
            <div class="field-value">${data.Gender}</div>
          </div>
          <div class="field">
            <div class="field-label">Phone:</div>
            <div class="field-value">${data.Phone}</div>
          </div>
          <div class="field">
            <div class="field-label">Email:</div>
            <div class="field-value">${data.Email}</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">🏥 REFERRAL SOURCE INFORMATION</div>
          <div class="field">
            <div class="field-label">Referring Facility Name:</div>
            <div class="field-value">${data.Facility_Name}</div>
          </div>
          <div class="field">
            <div class="field-label">Facility Type:</div>
            <div class="field-value">${data.Facility_Type}</div>
          </div>
          <div class="field">
            <div class="field-label">Referring Provider Name:</div>
            <div class="field-value">${data.Provider_Name}</div>
          </div>
          <div class="field">
            <div class="field-label">Provider Type:</div>
            <div class="field-value">${data.Provider_Type}</div>
          </div>
          <div class="field">
            <div class="field-label">Referring Phone:</div>
            <div class="field-value">${data.Referring_Phone}</div>
          </div>
          <div class="field">
            <div class="field-label">Referring Fax:</div>
            <div class="field-value">${data.Referring_Fax}</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">⚕️ MEDICAL INFORMATION</div>
          <div class="field">
            <div class="field-label">Primary Diagnosis:</div>
            <div class="field-value">${data.Primary_Diagnosis}</div>
          </div>
          <div class="field">
            <div class="field-label">Secondary Diagnosis:</div>
            <div class="field-value">${data.Secondary_Diagnosis}</div>
          </div>
          <div class="field">
            <div class="field-label">Reason for Referral:</div>
            <div class="field-value">${data.Reason_for_Referral}</div>
          </div>
          <div class="field">
            <div class="field-label">Current Medications:</div>
            <div class="field-value">${data.Current_Medications}</div>
          </div>
          <div class="field">
            <div class="field-label">Functional Status/Mobility:</div>
            <div class="field-value">${data.Functional_Status}</div>
          </div>
          <div class="field">
            <div class="field-label">Needs Medical Equipment:</div>
            <div class="field-value">${data.Needs_Equipment}</div>
          </div>
          <div class="field">
            <div class="field-label">Equipment Details:</div>
            <div class="field-value">${data.Equipment_Details}</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">🩺 ADDITIONAL CLINICAL INFORMATION</div>
          <div class="field">
            <div class="field-label">Communicable Disease:</div>
            <div class="field-value">${data.Communicable_Disease}</div>
          </div>
          <div class="field">
            <div class="field-label">Behavioral Concerns:</div>
            <div class="field-value">${data.Behavioral_Concerns}</div>
          </div>
          <div class="field">
            <div class="field-label">Substance Use:</div>
            <div class="field-value">${data.Substance_Use}</div>
          </div>
          <div class="field">
            <div class="field-label">Probation/Parole:</div>
            <div class="field-value">${data.Probation_Parole}</div>
          </div>
          <div class="field">
            <div class="field-label">Bowel Control Issues:</div>
            <div class="field-value">${data.Bowel_Control}</div>
          </div>
          <div class="field">
            <div class="field-label">Bladder Control Issues:</div>
            <div class="field-value">${data.Bladder_Control}</div>
          </div>
          <div class="field">
            <div class="field-label">Diet Allergies:</div>
            <div class="field-value">${data.Diet_Allergies}</div>
          </div>
          <div class="field">
            <div class="field-label">Medication Allergies:</div>
            <div class="field-value">${data.Medication_Allergies}</div>
          </div>
          <div class="field">
            <div class="field-label">Other Allergies:</div>
            <div class="field-value">${data.Other_Allergies}</div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">✍️ SIGNATURE INFORMATION</div>
          <div class="field">
            <div class="field-label">Provider Signature:</div>
            <div class="field-value">${data.Provider_Signature}</div>
          </div>
          <div class="field">
            <div class="field-label">Signature Date:</div>
            <div class="field-value">${data.Signature_Date}</div>
          </div>
          <div class="field">
            <div class="field-label">Print Name:</div>
            <div class="field-value">${data.Print_Name}</div>
          </div>
          <div class="field">
            <div class="field-label">Facility Representative:</div>
            <div class="field-value">${data.Facility_Representative}</div>
          </div>
          <div class="field">
            <div class="field-label">Facility Rep Date:</div>
            <div class="field-value">${data.Facility_Rep_Date}</div>
          </div>
        </div>

        ${uploadedFiles.length > 0 ? `
        <div class="section">
          <div class="section-title">📎 ATTACHED FILES</div>
          ${uploadedFiles.map((file, index) => `
            <div class="field">
              <div class="field-label">File ${index + 1}:</div>
              <div class="field-value">${file.name} (${formatFileSize(file.size)})</div>
            </div>
          `).join('')}
        </div>
        ` : ''}

        <div class="footer">
          <strong>Reliable Recuperative Care</strong><br>
          796 Capitol Heights Saint Paul, MN 55103<br>
          Phone: (612) 998-4449 | Fax: (612) 444-8950<br>
          Email: info@reliablerecuperative.org
        </div>

        <button onclick="window.print()" class="print-button no-print">🖨️ Print This Form</button>
      </body>
      </html>
    `);
    printWindow.document.close();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS
      emailjs.init('xcHnyHWnOHp0mXian');

      const formData = new FormData(formRef.current);
      const templateParams = {};
      
      // Collect form data
      for (let [key, value] of formData.entries()) {
        templateParams[key] = value || 'Not provided';
      }

      // Format file links for email
      let fileLinks = 'No files attached';
      if (uploadedFiles.length > 0) {
        fileLinks = uploadedFiles.map((file, index) => 
          `${index + 1}. ${file.name}: ${file.url}`
        ).join('\n');
      }

      console.log('📧 Sending email with params:', {
        service: 'service_ew1i6oe',
        template: 'template_ngtmb6m',
        fileCount: uploadedFiles.length,
        hasFiles: uploadedFiles.length > 0
      });

      // Send email with Uploadcare file links
      const result = await emailjs.send(
        'service_ew1i6oe',
        'template_ngtmb6m',
        {
          ...templateParams,
          file_links: fileLinks,
          file_count: uploadedFiles.length,
          to_email: 'info@reliablerecuperative.org'
        }
      );

      console.log('✅ EmailJS Response:', result);

      if (result.status === 200) {
        alert('✅ Referral form submitted successfully!\n\nThank you for your submission. We will review it shortly.');
        formRef.current.reset();
        setUploadedFiles([]);
        // Reset Uploadcare widget
        if (window.uploadcare) {
          window.uploadcare.Widget('[role=uploadcare-uploader]').value(null);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error(`Submission failed with status: ${result.status}`);
      }
    } catch (error) {
      console.error('❌ Submission error details:', {
        error: error,
        message: error.message,
        text: error.text,
        status: error.status
      });
      
      let errorMessage = '❌ Error submitting form. ';
      if (error.text === 'The public key is invalid' || error.status === 403) {
        errorMessage += 'Invalid EmailJS public key. ';
      } else if (error.text === 'Service ID or Template ID is invalid' || error.status === 404) {
        errorMessage += 'Invalid service or template ID. ';
      } else if (error.status === 400) {
        errorMessage += 'Missing required fields or invalid template parameters. ';
      }
      errorMessage += 'Please try again or email us at info@reliablerecuperative.org';
      
      alert(errorMessage);
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
            <p><strong>Email:</strong> info@reliablerecuperative.org</p>
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

          {/* File Upload Section with Uploadcare */}
          <div className="form-section">
            <div className="section-title">Required Attachments</div>
            <p style={{marginBottom: '15px', color: '#555'}}>
              Please attach: Discharge Summary/Instructions, Medication List (if available), Care Plan (if available)
            </p>
            <p style={{marginBottom: '15px', color: '#28a745', fontWeight: 'bold'}}>
              ✓ Files will be securely uploaded to cloud storage
            </p>
            
            <div className="file-upload">
              <input 
                type="hidden"
                role="uploadcare-uploader"
                data-public-key="1f06b8a02fb2b325d3e5"
                data-multiple="true"
                data-images-only="false"
                data-tabs="file url"
                data-max-size="10485760"
                data-input-accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
              
              <p style={{marginTop: '10px', color: '#666', fontSize: '14px'}}>
                Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB per file)
              </p>
              
              <div className="file-list">
                {uploadedFiles.map((file, index) => (
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
              
              {uploadedFiles.length > 0 && (
                <p style={{marginTop: '10px', color: '#28a745', fontSize: '14px', fontWeight: 'bold'}}>
                  ✓ {uploadedFiles.length} file(s) ready to upload
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

          {/* Submit Section */}
          <div className="submit-section">
            <div style={{display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Referral Form'}
              </button>
              <button 
                type="button" 
                onClick={handlePrint}
                className="print-btn"
                style={{
                  padding: '15px 30px',
                  fontSize: '18px',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#5a6268'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#6c757d'}
              >
                🖨️ Print Form
              </button>
            </div>
            <p style={{marginTop: '15px', color: '#666'}}>
              Form will be sent to: <strong>info@reliablerecuperative.org</strong>
            </p>
          </div>

          {/* Instructions */}
          <div className="instructions">
            <h3>Instructions for Submission:</h3>
            <ul>
              <li>Complete all required fields marked with <span className="required">*</span></li>
              <li>Attach necessary documents (Discharge Summary, Medication List, Care Plan)</li>
              <li>Click "Submit Referral Form" to send via email</li>
              <li>Alternatively, you can fax this form and documents to (612) 444-8950</li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}