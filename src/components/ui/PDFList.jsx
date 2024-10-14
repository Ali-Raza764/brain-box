"use client";
import { useState } from "react";
import PDFItem from "./PDFItem";

const PDFList = ({ pdfs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter PDFs based on the search term and selected category
  const filteredPDFs = pdfs.filter((pdf) => {
    if (selectedCategory === "all") return pdfs;
    const matchesName = pdf.pdfName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || pdf.category === selectedCategory;
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
      <div className="w-full mx-auto">
        <div className="mb-6 w-full">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search PDFs..."
            className="mb-4 p-2 border border-gray-300 outline-none rounded w-full"
          />

          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="p-2 border border-gray-300 outline-none rounded w-full"
          >
            <option value="all">All</option>
            <option value="book">Book</option>
            <option value="paper">Paper</option>
            <option value="grammar">Grammar</option>
            <option value="notes">Notes</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="w-full">
          {filteredPDFs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPDFs.map((pdf) => (
                <PDFItem
                  key={pdf.id}
                  pdfName={pdf.pdfName}
                  pdfCategory={pdf.category}
                  viewLink={pdf.pdfUrl}
                  downloadLink={pdf.pdfUrl}
                />
              ))}
            </div>
          ) : (
            <p className="text-center w-full">
              No PDFs found matching the criteria.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PDFList;
