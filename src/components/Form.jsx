import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    patientFirstName: "",
    patientLastName: "",
    medicalRecordNumber: "",
    dateOfBirth: "",
    gender: "",
    primaryLanguage: "",
    dateOfReferral: "",
    referringHospitalFacility: "",
    referringPartyName: "",
    referringPartyEmail: "",
    referringPartyPhone: "",
    referringPartyExtension: "",
    reasonForHospitalization: "",
    hasWounds: "",
    woundDescription: "",
    patientHistory: "",
    otherConditions: "",
    tbXray: "",
    ambulatoryStatus: "",
    adls: "",
    bowelContinent: "",
    bladderContinent: "",
    comments: "",
    inIsolation: "",
    isolationExplanation: "",
    daysAuthorized: "",
    transportationNeeded: "",
    allergies: "",
    allergyDescription: "",
    emergencyContactName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formUrl =
      "https://docs.google.com/forms/d/e/14Tpu9dSeHoJpDQHAvtHMNyuBM0Jbl1qUDUJ0QQjEHWM/formResponse";

    const data = new FormData();
    data.append("entry.1670498157", formData.patientFirstName);
    data.append("entry.2115813564", formData.patientLastName);
    data.append("entry.2068755761", formData.medicalRecordNumber);
    if (formData.dateOfBirth) {
      const dob = new Date(formData.dateOfBirth);
      data.append("entry.751086816_day", dob.getDate());
      data.append("entry.751086816_month", dob.getMonth() + 1);
      data.append("entry.751086816_year", dob.getFullYear());
    }
    data.append("entry.1211340272", formData.gender);
    data.append("entry.705753954", formData.primaryLanguage);
    if (formData.dateOfReferral) {
      const dor = new Date(formData.dateOfReferral);
      data.append("entry.1830303958_day", dor.getDate());
      data.append("entry.1830303958_month", dor.getMonth() + 1);
      data.append("entry.1830303958_year", dor.getFullYear());
    }
    data.append("entry.278185450", formData.referringHospitalFacility);
    data.append("entry.593356424", formData.referringPartyName);
    data.append("entry.1633853138", formData.referringPartyEmail);
    data.append("entry.1555136781", formData.referringPartyPhone);
    data.append("entry.2026708265", formData.referringPartyExtension);
    data.append("entry.348968374", formData.reasonForHospitalization);
    data.append("entry.501296071", formData.hasWounds);
    data.append("entry.1382567386", formData.woundDescription);
    data.append("entry.1374483399", formData.patientHistory);
    data.append("entry.1548792520", formData.otherConditions);
    data.append("entry.1689804617", formData.tbXray);
    data.append("entry.624111290", formData.ambulatoryStatus);
    data.append("entry.54614790", formData.adls);
    data.append("entry.1787791741", formData.bowelContinent);
    data.append("entry.176133656", formData.bladderContinent);
    data.append("entry.1186839390", formData.comments);
    data.append("entry.795689652", formData.inIsolation);
    data.append("entry.1088916922", formData.isolationExplanation);
    data.append("entry.1848465819", formData.daysAuthorized);
    data.append("entry.1261777035", formData.transportationNeeded);
    data.append("entry.1326728207", formData.allergies);
    data.append("entry.1049687159", formData.allergyDescription);
    data.append("entry.1182054935", formData.emergencyContactName);

    fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: data,
    }).then(() => {
      alert("Referral submitted successfully!");
      setFormData({
        patientFirstName: "",
        patientLastName: "",
        medicalRecordNumber: "",
        dateOfBirth: "",
        gender: "",
        primaryLanguage: "",
        dateOfReferral: "",
        referringHospitalFacility: "",
        referringPartyName: "",
        referringPartyEmail: "",
        referringPartyPhone: "",
        referringPartyExtension: "",
        reasonForHospitalization: "",
        hasWounds: "",
        woundDescription: "",
        patientHistory: "",
        otherConditions: "",
        tbXray: "",
        ambulatoryStatus: "",
        adls: "",
        bowelContinent: "",
        bladderContinent: "",
        comments: "",
        inIsolation: "",
        isolationExplanation: "",
        daysAuthorized: "",
        transportationNeeded: "",
        allergies: "",
        allergyDescription: "",
        emergencyContactName: "",
      });
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Patient Referral Submission
        </h2>

        {/* Patient Information Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">
            Patient Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="patientFirstName"
              value={formData.patientFirstName}
              onChange={handleChange}
              placeholder="Patient First Name"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
            <input
              type="text"
              name="patientLastName"
              value={formData.patientLastName}
              onChange={handleChange}
              placeholder="Patient Last Name"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
          <input
            type="text"
            name="medicalRecordNumber"
            value={formData.medicalRecordNumber}
            onChange={handleChange}
            placeholder="Medical Record Number"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input
            type="text"
            name="primaryLanguage"
            value={formData.primaryLanguage}
            onChange={handleChange}
            placeholder="Primary Language"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Referral Information Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">
            Referral Information
          </h3>
          <input
            type="date"
            name="dateOfReferral"
            value={formData.dateOfReferral}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="text"
            name="referringHospitalFacility"
            value={formData.referringHospitalFacility}
            onChange={handleChange}
            placeholder="Referring Hospital Facility"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="text"
            name="referringPartyName"
            value={formData.referringPartyName}
            onChange={handleChange}
            placeholder="Name of Referring Party"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              name="referringPartyEmail"
              value={formData.referringPartyEmail}
              onChange={handleChange}
              placeholder="Referring Party Email"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="tel"
              name="referringPartyPhone"
              value={formData.referringPartyPhone}
              onChange={handleChange}
              placeholder="Referring Party Phone"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <input
            type="text"
            name="referringPartyExtension"
            value={formData.referringPartyExtension}
            onChange={handleChange}
            placeholder="Phone Extension"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Medical Details Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">
            Medical Details
          </h3>
          <textarea
            name="reasonForHospitalization"
            value={formData.reasonForHospitalization}
            onChange={handleChange}
            placeholder="Reason for Recent Hospitalization"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            rows="4"
          />
          <select
            name="hasWounds"
            value={formData.hasWounds}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="">Does Patient Have Wounds?</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <textarea
            name="woundDescription"
            value={formData.woundDescription}
            onChange={handleChange}
            placeholder="Describe Wounds"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            rows="4"
          />
          <textarea
            name="patientHistory"
            value={formData.patientHistory}
            onChange={handleChange}
            placeholder="Patient History"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            rows="4"
          />
          <textarea
            name="otherConditions"
            value={formData.otherConditions}
            onChange={handleChange}
            placeholder="Other Conditions"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            rows="4"
          />
          <select
            name="tbXray"
            value={formData.tbXray}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="">TB X-ray Availability</option>
            <option>Available</option>
            <option>Not Available</option>
          </select>
          <input
            type="text"
            name="ambulatoryStatus"
            value={formData.ambulatoryStatus}
            onChange={handleChange}
            placeholder="Ambulatory Status and DME Devices"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <select
            name="adls"
            value={formData.adls}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="">Can Patient Accomplish ADLs?</option>
            <option>Yes</option>
            <option>No</option>
            <option>Partially</option>
          </select>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select
              name="bowelContinent"
              value={formData.bowelContinent}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="">Continent of Bowel</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            <select
              name="bladderContinent"
              value={formData.bladderContinent}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="">Continent of Bladder</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">
            Additional Information
          </h3>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Additional Comments"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            rows="4"
          />
          <select
            name="inIsolation"
            value={formData.inIsolation}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="">Is Patient in Isolation?</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <textarea
            name="isolationExplanation"
            value={formData.isolationExplanation}
            onChange={handleChange}
            placeholder="Isolation Explanation"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            rows="4"
          />
          <input
            type="number"
            name="daysAuthorized"
            value={formData.daysAuthorized}
            onChange={handleChange}
            placeholder="Days Authorized in Recuperative Care"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <select
            name="transportationNeeded"
            value={formData.transportationNeeded}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="">Is Transportation Needed?</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <input
            type="text"
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            placeholder="Diet / Medication Allergies"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <textarea
            name="allergyDescription"
            value={formData.allergyDescription}
            onChange={handleChange}
            placeholder="Describe Allergies"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            rows="4"
          />
          <input
            type="text"
            name="emergencyContactName"
            value={formData.emergencyContactName}
            onChange={handleChange}
            placeholder="Emergency Contact Name"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-md w-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          Submit Referral
        </button>
      </form>
    </div>
  );
};

export default Form;