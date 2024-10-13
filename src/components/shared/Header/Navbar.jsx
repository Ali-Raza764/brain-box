import { FiBookOpen, FiChevronDown, FiFileText } from "react-icons/fi"; // Add relevant icons
import { MdOutlineClass } from "react-icons/md";

export default function Navbar() {
  return (
    <header className="border-b border-gray-400">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <FiBookOpen className="text-2xl" />
          <h1 className="ml-2 text-xl font-semibold">Class PDFs</h1>
        </div>
      </nav>
    </header>
  );
}
