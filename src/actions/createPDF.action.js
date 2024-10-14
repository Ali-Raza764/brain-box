"use server";
import dbConnect from "@/lib/db";
import PdfItemModel from "@/lib/models/pdfItem.model";

export const createPDF = async (payload) => {
  try {
    // Connect to the MongoDB database
    await dbConnect();

    // Parse the request body
    const { pdfName, pdfUrl, category, description } = payload;

    // Validate required fields
    if (!pdfName || !pdfUrl || !category) {
      throw new Error("Fields are missing");
    }

    // Create a new PDFItem document
    const newPDF = new PdfItemModel({
      pdfName,
      pdfUrl,
      category: category,
      description,
    });

    // Save the document to the database
    await newPDF.save();

    return {
      status: 201,
      message: "Pdf created successfully",
    };
  } catch (error) {
    throw new Error("An error occured", error);
  }
};
