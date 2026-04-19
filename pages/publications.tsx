import * as React from 'react';
import Head from 'next/head';
import { fetchCv } from '../src/api';
import { CvPublicationItem } from '../src/api/types';
import Image from 'next/image';

interface StaticPropsProps {
  publicationItems: CvPublicationItem[];
}

interface StaticProps {
  props: StaticPropsProps;
}

export async function getStaticProps(): Promise<StaticProps> {
  const data = await fetchCv();
  return {
    props: {
      publicationItems: data.data.publications,
    },
  };
}

export default function Publications(props: StaticPropsProps) {
  const title = `Publications | ${process.env.baseTitle}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <div className="container mx-auto px-4">
        <div className="my-8">
          <h1 className="text-3xl font-bold mb-6">Publications</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {props.publicationItems.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col h-full rounded-lg shadow hover:shadow-md overflow-hidden bg-white dark:bg-gray-800 transition-shadow"
              >
                <Image
                  src={item.imageUrl}
                  width={840}
                  height={460}
                  alt={item.title}
                  className="w-full object-cover"
                />
                <div className="flex flex-col flex-grow p-4">
                  <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.year}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
