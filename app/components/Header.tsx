import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">Portfolio</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <Link href="/" className="px-3 py-2 text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="px-3 py-2 text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link href="/works" className="px-3 py-2 text-gray-700 hover:text-gray-900">
              Works
            </Link>
            <Link href="/contact" className="px-3 py-2 text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;