import PDFList from "@/components/ui/PDFList";
import { connectDb } from "@/lib/db";
import PDFItem from "@/lib/models/pdfItem.model";

export const revalidate = 100;

const Home = async () => {
  let pdfItems = [];
  try {
    await connectDb();
    pdfItems = await PDFItem.find({}).exec();
  } catch (error) {
    console.log(error);
  }

  if (!pdfItems) return <div>No PDF found Some error occured</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <PDFList pdfs={pdfItems} />
    </div>
  );
};

export default Home;
