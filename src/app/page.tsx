'use client';

import { PageAnalyzer } from '@/components/PageAnalyzer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4">
          <h1 className="text-2xl font-bold text-gray-900">AutoCRO</h1>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <PageAnalyzer />
      </main>
    </main>
  );
} 