import Image from "next/image";

const Header = () => {
  return (
    <header className="border-b border-gray-400">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Image src={"/images/icon.svg"} width={40} height={40} alt="Logo" />
          <h1 className="ml-2 text-xl font-semibold">Brain Box</h1>
        </div>
      </nav>
    </header>
  );
};

export default Header;
