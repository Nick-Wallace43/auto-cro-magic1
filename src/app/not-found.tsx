'use client';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4">
          <h1 className="text-2xl font-bold text-gray-900">Page Not Found</h1>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <div className="prose max-w-none">
          <h2>404 - Page Not Found</h2>
          <p>
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
      </main>
    </main>
  );
} 