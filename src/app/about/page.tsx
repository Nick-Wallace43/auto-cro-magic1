export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4">
          <h1 className="text-2xl font-bold text-gray-900">About Us</h1>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <div className="prose max-w-none">
          <h2>Our Story</h2>
          <p>
            We are a team of passionate individuals dedicated to creating innovative solutions
            that make a difference in people's lives.
          </p>
        </div>
      </main>
    </main>
  );
} 