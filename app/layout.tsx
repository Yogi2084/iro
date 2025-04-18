// app/layout.tsx
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Link from "next/link";

export const metadata = {
  title: "Yogi",
  description: "Developer portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white flex items-center justify-center min-h-screen p-4 ">
        <div className="bg-neutral-950 rounded-2xl shadow-lg w-full max-w-7xl flex overflow-hidden">
          <Sidebar />
          <main className="flex-1 p-6 flex flex-col">
            {/* Top Nav */}
            <header className="flex justify-end mb-6 space-x-4">
              <Link
                href="/"
                className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition"
              >
                About
              </Link>
              <Link
                href="/resume"
                className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition"
              >
                Resume
              </Link>
              <Link
                href="/projects"
                className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition"
              >
                Contact
              </Link>
              
            </header>

            {/* Page content */}
            <div className="flex-1">{children}</div>

            
          </main>
        </div>
      </body>
    </html>
  );
}
