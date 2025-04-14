'use client';

import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <span className="text-2xl font-bold text-gray-900">AutoCRO</span>
    </Link>
  );
}
