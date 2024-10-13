import mongoose from "mongoose";

const PDFItemSchema = new mongoose.Schema({
  pdfName: {
    type: String,
    required: true,
  },
  pdfUrl: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["book", "paper", "grammar", "notes"], // Optional category for further organization
  },
  description: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the date of creation
  },
});

// Create the PDFItem model
const PDFItem =
  mongoose.models?.PDFItem || mongoose?.model("PDFItem", PDFItemSchema);

export default PDFItem;
