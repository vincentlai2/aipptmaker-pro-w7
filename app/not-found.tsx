import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Page Not Found - AIPPTMaker",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex flex-col items-center justify-center bg-white px-4">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl text-center">
          Sorry, the page you are looking for does not exist or has been moved.<br />
          Please check the URL or return to the homepage.
        </p>
        <Link href="/">
          <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
            Back to Home
          </span>
        </Link>
      </main>
      <Footer />
    </>
  );
}
