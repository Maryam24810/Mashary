import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          {/* Replace with your actual logo path */}
          <Image
            src="/logo.png" // Path to your logo in public folder
            alt="Mashary Logo"
            width={400} // Adjust width as needed
            height={120} // Adjust height as needed
            className="h-10 w-auto" // Additional styling
          />
        </Link>
        <nav className="flex space-x-4 space-x-reverse">
          <Link
            href="/dashboard"
            className="px-3 py-2 font-medium hover:text-blue-600"
          >
            لوحة التحكم
          </Link>
          <Link
            href="/pageview"
            className="px-3 py-2 text-gray-600 hover:text-blue-800"
          >
            عرض البيانات
          </Link>
          <Link
            href="/adddata"
            className="px-3 py-2 text-gray-600 hover:text-blue-800"
          >
            رفع البيانات
          </Link>
          <Link
            href="/"
            className="px-3 py-2 text-gray-600 hover:text-blue-800"
          >
            من نحن
          </Link>
        </nav>
      </div>
    </header>
  );
}
