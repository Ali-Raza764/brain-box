import PDFList from "@/components/ui/PDFList";
import { connectDb } from "@/lib/db";
import PDFItem from "@/lib/models/pdfItem.model";

const Home = async () => {
  await connectDb();
  const pdfItems = await PDFItem.find({}).exec();

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <PDFList pdfs={pdfItems} />
    </div>
  );
};

export default Home;
