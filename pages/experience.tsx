import * as React from 'react';
import Head from 'next/head';
import { fetchCv } from '../src/api';
import { CvEducationItem, CvExperienceItem } from '../src/api/types';
import Timeline from '../src/Timeline';

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

function yearRange(start: number, end: number): React.ReactNode {
  if (start === end) return start;
  return (
    <>
      {start} – {end || 'present'}
    </>
  );
}

export default function Experience(props: StaticPropsProps) {
  const title = `Experience | ${process.env.baseTitle}`;

  const experience = props.experienceItems.map((exp) => ({
    year: yearRange(exp.startYear, exp.endYear),
    content: (
      <>
        <h3 className="font-semibold text-base text-gray-900 dark:text-gray-100">{exp.company}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-0.5">{exp.title}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{exp.location}</p>
      </>
    ),
  }));

  const education = props.educationItems.map((edu) => ({
    year: yearRange(edu.startYear, edu.endYear),
    content: (
      <>
        <h3 className="font-semibold text-base text-gray-900 dark:text-gray-100">{edu.school}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-0.5">{edu.degree}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{edu.fieldOfStudy}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{edu.location}</p>
      </>
    ),
  }));

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <div className="container mx-auto px-4">
        <div className="my-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Experience</h1>
          <Timeline items={experience} />

          <h2 className="text-2xl font-bold mt-12 mb-8 text-center">Education</h2>
          <Timeline items={education} />
        </div>
      </div>
    </>
  );
}
