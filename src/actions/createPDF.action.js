"use server";
import { connectDb } from "@/lib/db";
import PDFItem from "@/lib/models/pdfItem.model";

export const createPDF = async (payload) => {
  try {
    // Connect to the MongoDB database
    await connectDb();

    // Parse the request body
    const { pdfName, pdfUrl, pdfType, category, description } = payload;

    // Validate required fields
    if (!pdfName || !pdfUrl || !category) {
      throw new Error("Fields are missing");
    }

    // Create a new PDFItem document
    const newPDF = new PDFItem({
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
    throw new Error("An error occured");
  }
};
