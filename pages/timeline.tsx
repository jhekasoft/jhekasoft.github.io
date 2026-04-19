import * as React from 'react';
import Head from 'next/head';
import { fetchDeveloperTimeline } from '../src/api';
import { TimelineItem as TimelineItm } from '../src/api/types';

interface StaticPropsProps {
  timelineItems: TimelineItm[];
}

interface StaticProps {
  props: StaticPropsProps;
}

export async function getStaticProps(): Promise<StaticProps> {
  const data = await fetchDeveloperTimeline();
  return {
    props: {
      timelineItems: data.data,
    },
  };
}

export default function TimelineApp(props: StaticPropsProps) {
  const title = `Developer timeline | ${process.env.baseTitle}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <div className="container mx-auto px-4">
        <div className="my-8">
          <h1 className="text-3xl font-bold mb-6">Developer timeline</h1>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-teal-500 -translate-x-1/2" />
            {props.timelineItems.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className={`flex mb-8 items-start ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-[calc(50%-1.5rem)] ${isLeft ? 'text-right pr-4' : 'pl-4'}`}>
                    <div className="inline-block bg-white dark:bg-gray-800 rounded shadow p-3 text-left">
                      {item.desc.map((descItem, j) => (
                        <p key={j} dangerouslySetInnerHTML={{
                          __html: descItem.replace(
                            /\*\*(\S(.*?\S)?)\*\*/gm,
                            '<i>$1</i>'
                          )
                        }} />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-center z-10">
                    <div className="w-3 h-3 rounded-full bg-teal-500 flex-shrink-0 mt-1" />
                  </div>
                  <div className={`w-[calc(50%-1.5rem)] ${isLeft ? 'pl-4' : 'pr-4 text-right'}`}>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.year}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
