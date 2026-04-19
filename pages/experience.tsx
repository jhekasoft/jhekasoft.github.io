import * as React from 'react';
import Head from 'next/head';
import { fetchCv } from '../src/api';
import { CvEducationItem, CvExperienceItem } from '../src/api/types';

interface StaticPropsProps {
  experienceItems: CvExperienceItem[];
  educationItems: CvEducationItem[];
}

interface StaticProps {
  props: StaticPropsProps;
}

export async function getStaticProps(): Promise<StaticProps> {
  const data = await fetchCv();
  return {
    props: {
      experienceItems: data.data.experience,
      educationItems: data.data.education,
    },
  };
}

function TimelineSection({ items, renderContent }: {
  items: (CvExperienceItem | CvEducationItem)[];
  renderContent: (item: CvExperienceItem | CvEducationItem) => React.ReactNode;
}) {
  return (
    <div className="relative my-6">
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-teal-500 -translate-x-1/2" />
      {items.map((item, i) => {
        const isLeft = i % 2 === 0;
        return (
          <div key={i} className={`flex mb-8 items-center ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`w-[calc(50%-1.5rem)] ${isLeft ? 'text-right pr-4' : 'pl-4'}`}>
              <div className="inline-block bg-white dark:bg-gray-800 rounded shadow p-3 text-left">
                {renderContent(item)}
              </div>
            </div>
            <div className="w-3 h-3 rounded-full bg-teal-500 flex-shrink-0 z-10" />
            <div className="w-[calc(50%-1.5rem)]" />
          </div>
        );
      })}
    </div>
  );
}

export default function Experience(props: StaticPropsProps) {
  const title = `Experience | ${process.env.baseTitle}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <div className="container mx-auto px-4">
        <div className="my-8">
          <h1 className="text-3xl font-bold mb-6">Experience</h1>

          <TimelineSection
            items={props.experienceItems}
            renderContent={(item) => {
              const exp = item as CvExperienceItem;
              return (
                <>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {exp.startYear}
                    {exp.startYear !== exp.endYear && (
                      <> &ndash; {exp.endYear ? exp.endYear : 'present'}</>
                    )}
                  </p>
                  <h3 className="font-semibold">{exp.company}</h3>
                  <p className="text-sm">{exp.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
                </>
              );
            }}
          />

          <h2 className="text-xl font-semibold text-center mt-8 mb-2">Education</h2>

          <TimelineSection
            items={props.educationItems}
            renderContent={(item) => {
              const edu = item as CvEducationItem;
              return (
                <>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {edu.startYear}
                    {edu.startYear !== edu.endYear && (
                      <> &ndash; {edu.endYear ? edu.endYear : 'present'}</>
                    )}
                  </p>
                  <h3 className="font-semibold">{edu.school}</h3>
                  <p className="text-sm">{edu.degree}</p>
                  <p className="text-sm">{edu.fieldOfStudy}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.location}</p>
                </>
              );
            }}
          />
        </div>
      </div>
    </>
  );
}
