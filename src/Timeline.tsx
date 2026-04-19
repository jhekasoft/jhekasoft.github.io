import * as React from 'react';

export interface TimelineEntry {
  year: React.ReactNode;
  content: React.ReactNode;
}

export default function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <ol className="relative">
      <div
        aria-hidden
        className="absolute top-2 bottom-2 w-0.5 bg-gradient-to-b from-teal-500/20 via-teal-500/60 to-teal-500/20 left-[7px] md:left-1/2 md:-translate-x-1/2"
      />
      {items.map((item, i) => {
        const flipped = i % 2 === 1;
        return (
          <li key={i} className="relative mb-10 last:mb-0">
            <div
              aria-hidden
              className="absolute left-0 md:left-1/2 top-2 w-4 h-4 md:-translate-x-1/2 rounded-full bg-teal-500 ring-4 ring-white dark:ring-gray-900 shadow-md shadow-teal-500/30 z-10"
            />
            <div
              className={`pl-10 md:pl-0 md:flex md:items-start md:gap-8 ${
                flipped ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`md:flex-1 ${flipped ? '' : 'md:text-right'}`}>
                <div className="inline-block text-left w-full md:w-auto md:max-w-md bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg hover:border-teal-500/40 transition-all duration-200 p-4">
                  <div className="md:hidden mb-2">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wide text-teal-600 dark:text-teal-400">
                      {item.year}
                    </span>
                  </div>
                  {item.content}
                </div>
              </div>
              <div className={`hidden md:block md:flex-1 md:pt-3 ${flipped ? 'md:text-right' : ''}`}>
                <span className="font-semibold text-teal-600 dark:text-teal-400">
                  {item.year}
                </span>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
