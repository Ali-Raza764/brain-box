"use client"; // This is required for Next.js to make the form interactive

import { createPDF } from "@/actions/createPDF.action";
import { UploadButton } from "@uploadthing/react";
import { useState } from "react";

const CreatePDFForm = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    if (!pdfUrl) {
      setErrorMessage("Please upload a PDF file first.");
      setLoading(false);
      return;
    }

    const data = {
      pdfName: e.target.pdfName.value,
      pdfUrl: pdfUrl,
      category: e.target.category.value,
      description: e.target.description.value,
    };

    console.log(data);

    try {
      const response = await createPDF(data);
      if (response.status === 201) {
        setSuccessMessage("PDF document created successfully!");
      } else {
        setErrorMessage(result.message || "Failed to create PDF document");
      }
    } catch (error) {
      setErrorMessage("An error occurred while creating the PDF document");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Create a PDF Document
      </h1>

      {successMessage && (
        <p className="text-green-500 text-center mb-4">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="text-red-500 text-center mb-4">{errorMessage}</p>
      )}

      <form onSubmit={handleSubmit}>
        {/* PDF Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            PDF Name
          </label>
          <input
            name="pdfName"
            type="text"
            placeholder="Enter PDF name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            disabled={loading}
          />
        </div>

        {/* PDF URL */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            PDF
          </label>
          <UploadButton
            endpoint="pdfUploader"
            onUploadBegin={() => {
              setUploading(true);
            }}
            onClientUploadComplete={(res) => {
              setPdfUrl(res[0].url);
              setUploading(false);
            }}
            onUploadError={(error) => {
              setErrorMessage(error.message);
            }}
          />
        </div>
        <div>{pdfUrl && pdfUrl}</div>

        {/* PDF Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            PDF Type
          </label>
          <select
            name="category"
            required
            disabled={loading}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="book">Book</option>
            <option value="paper">Paper</option>
            <option value="grammar">Grammar</option>
            <option value="notes">Notes</option>
          </select>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description (Optional)
          </label>
          <textarea
            name="description"
            placeholder="Enter a short description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            disabled={loading}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || uploading}
          className={`w-full py-2 px-4 text-white font-bold rounded-md ${
            loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          } transition-all duration-200`}
        >
          {loading ? "Creating..." : "Create PDF"}
        </button>
      </form>
    </div>
  );
};

export default CreatePDFForm;
