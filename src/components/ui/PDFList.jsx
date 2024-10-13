"use client";
import { useState } from "react";
import PDFItem from "./PDFItem";

const PDFList = ({ pdfs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter PDFs based on the search term and selected category
  const filteredPDFs = pdfs.filter((pdf) => {
    const matchesName = pdf.pdfName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || pdf.pdfCategory === selectedCategory;
    return matchesName && matchesCategory;
  });

  // Handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="p-6 h-full">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search PDFs..."
        className="mb-4 p-2 border border-gray-300 outline-none rounded w-full"
      />

      {/* Category Selector */}
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="mb-6 p-2 border border-gray-300 outline-none rounded w-full"
      >
        <option value="">All Categories</option>
        <option value="Programming">Programming</option>
        <option value="Design">Design</option>
        <option value="Marketing">Marketing</option>
      </select>

      {/* Render filtered PDFs */}
      <div className="w-full flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
          {filteredPDFs.length > 0 ? (
            filteredPDFs.map((pdf) => (
              <PDFItem
                key={pdf._id}
                pdfName={pdf.pdfName}
                pdfCategory={pdf.category}
                viewLink={pdf.pdfUrl}
                downloadLink={pdf.pdfUrl}
              />
            ))
          ) : (
            <p className="text-center col-span-full">
              No PDFs found matching the criteria.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PDFList;
