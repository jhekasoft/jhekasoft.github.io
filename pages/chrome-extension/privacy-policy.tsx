import * as React from 'react';
import Head from 'next/head';

export default function PrivacyPolicy() {
  const title = `Privacy Policy | ${process.env.baseTitle}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <div className="container mx-auto px-4">
        <div className="my-8 prose dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <h2 className="text-xl font-semibold mt-6 mb-3">Personal data</h2>
          <p>
            The extention had never collected and will never collect any personal
            data, browsing history etc.
          </p>
          <p>
            In future extention may collect browser version, platform name,
            display settings and user&apos;s filter settings (except website list or
            any other data which can help identify user). This information is
            needed for decision on implementing new features, removing unused
            features or suggesting default settings for new users. It will happen
            only with your permission.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Third party services</h2>
          <p>
            Extension uses Chrome (Chromium) or WebExtensions Storage Sync API for
            storing user&apos;s settings and browser&apos;s Web Storage API (localStorage)
            for storing user&apos;s Developer Tools fixes.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">The website</h2>
          <p>
            For statistical purposes efremov.dev website counts the page visits
            and link clicks. A language and a time zone of a visitor are sent to
            the web server anonymously.
          </p>
        </div>
      </div>
    </>
  );
}
