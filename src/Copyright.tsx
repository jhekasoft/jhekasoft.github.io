import * as React from 'react';

export default function Copyright() {
  return (
    <p className="text-sm text-gray-500 dark:text-gray-400">
      &copy; 2013-{new Date().getFullYear()}{' '}
      <a href="https://jhekasoft.github.io/" className="hover:underline">
        Jhekasoft
      </a>
    </p>
  );
}
