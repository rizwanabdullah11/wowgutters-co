import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-black text-slate-900 mb-2">Page not found</h1>
      <p className="text-slate-600 mb-8 max-w-md">
        That page does not exist. Try our homepage or gutter cleaning areas across the West Midlands.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white bg-[#19C58B] hover:opacity-90"
      >
        Back to homepage
      </Link>
    </main>
  );
}
