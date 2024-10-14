import PDFList from "@/components/ui/PDFList";
import dbConnect from "@/lib/db";
import PdfItemModel from "@/lib/models/pdfItem.model";

export const revalidate = 100;

const Home = async () => {
  let pdfItems = [];
  try {
    await dbConnect();
    const docs = await PdfItemModel.find({}).lean().exec();
    pdfItems = docs.map((doc) => ({
      id: doc._id.toString(),
      pdfName: doc.pdfName,
      pdfUrl: doc.pdfUrl,
      category: doc.category,
      description: doc.description,
      createdAt: doc.createdAt.toISOString(),
    }));
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <PDFList pdfs={pdfItems} />
    </div>
  );
};

export default Home;
