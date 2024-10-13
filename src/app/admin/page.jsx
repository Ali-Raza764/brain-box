import { auth } from "@/auth";
import { redirect } from "next/navigation";
import CreatePDFForm from "./CreatePDFFrom";

const AdminPage = async () => {
  const session = await auth();
  if (!session) redirect("/");
  return (
    <div>
      <CreatePDFForm />
    </div>
  );
};

export default AdminPage;
