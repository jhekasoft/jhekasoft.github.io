import * as React from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="container mx-auto px-4">
      <div className="my-8">
        <h1 className="text-3xl font-bold mb-6">404 - Page Not Found</h1>
        <Link
          href="/"
          className="inline-block px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded transition-colors"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
