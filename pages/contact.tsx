import * as React from 'react';
import Head from 'next/head';
import { Mail } from 'lucide-react';
import { GitHubIcon, TelegramIcon, LinkedInIcon } from '../src/BrandIcons';

export default function Contact() {
  const title = `Contact | ${process.env.baseTitle}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <div className="container mx-auto px-4">
        <div className="my-8">
          <h1 className="text-3xl font-bold mb-6">Contact</h1>
          <div className="flex flex-col gap-3">
            <p className="flex items-center gap-2">
              <Mail size={20} className="flex-shrink-0 text-gray-600 dark:text-gray-400" />
              Email:{' '}
              <a href="mailto:jhekasoft@gmail.com" className="text-teal-600 dark:text-teal-400 hover:underline">
                jhekasoft@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <TelegramIcon size={20} className="flex-shrink-0 text-gray-600 dark:text-gray-400" />
              Telegram:{' '}
              <a href="https://t.me/jhekasoft" target="_blank" rel="noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
                @jhekasoft
              </a>
            </p>
            <p className="flex items-center gap-2">
              <GitHubIcon size={20} className="flex-shrink-0 text-gray-600 dark:text-gray-400" />
              Github:{' '}
              <a href="https://github.com/jhekasoft" target="_blank" rel="noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
                @jhekasoft
              </a>
            </p>
            <p className="flex items-center gap-2">
              <LinkedInIcon size={20} className="flex-shrink-0 text-gray-600 dark:text-gray-400" />
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/jhekasoft" target="_blank" rel="noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
                @jhekasoft
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
