
export interface TimelineEntry {
  year: number;
  yearEnd?: number;    // omit = single year; 0 = "present"
  heading?: string;    // company | school name
  subheading?: string; // job title | degree
  detail?: string;     // field of study (education)
  location?: string;
  lines?: string[];    // description lines, supports **bold** → <i> markup
}

function formatYear(year: number, yearEnd?: number): string {
  if (yearEnd === undefined || year === yearEnd) return String(year);
  return `${year} – ${yearEnd || 'present'}`;
}

function EntryContent({ entry }: { entry: TimelineEntry }) {
  return (
    <>
      {entry.heading && (
        <h3 className="font-semibold text-base text-gray-900 dark:text-gray-100">{entry.heading}</h3>
      )}
      {entry.subheading && (
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-0.5">{entry.subheading}</p>
      )}
      {entry.detail && (
        <p className="text-sm text-gray-600 dark:text-gray-400">{entry.detail}</p>
      )}
      {entry.location && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{entry.location}</p>
      )}
      {entry.lines && (
        <div className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
          {entry.lines.map((line, j) => (
            <p
              key={j}
              dangerouslySetInnerHTML={{
                __html: line.replace(/\*\*(\S(.*?\S)?)\*\*/gm, '<i>$1</i>'),
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <ol className="relative">
      <div
        aria-hidden
        className="absolute top-5 bottom-5 w-0.5 bg-gradient-to-b from-teal-500/20 via-teal-500/60 to-teal-500/20 left-[7px] md:left-1/2 md:-translate-x-1/2"
      />
      {items.map((item, i) => {
        const flipped = i % 2 === 1;
        const yearLabel = formatYear(item.year, item.yearEnd);
        return (
          <li key={i} className="relative mb-10 last:mb-0">
            <div
              aria-hidden
              className="absolute left-0 md:left-1/2 top-5 w-4 h-4 md:-translate-x-1/2 rounded-full bg-teal-500 ring-4 ring-white dark:ring-gray-900 shadow-md shadow-teal-500/30 z-10"
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
                      {yearLabel}
                    </span>
                  </div>
                  <EntryContent entry={item} />
                </div>
              </div>
              <div className={`hidden md:block md:flex-1 md:pt-4 ${flipped ? 'md:text-right' : ''}`}>
                <span className="font-semibold text-teal-600 dark:text-teal-400">
                  {yearLabel}
                </span>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
