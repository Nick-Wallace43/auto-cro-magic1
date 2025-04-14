'use client';

import React from 'react';

export default function Blog() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4">
          <h1 className="text-2xl font-bold text-gray-900">Blog</h1>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <div className="prose max-w-none">
          <h2>Latest Articles</h2>
          <p>
            Read our latest insights and tips on conversion rate optimization.
          </p>
        </div>
      </main>
    </main>
  );
} 