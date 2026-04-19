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

export default function Experience(props: StaticPropsProps) {
  const title = `Experience | ${process.env.baseTitle}`;

  const experience = props.experienceItems.map((exp) => ({
    year: exp.startYear,
    yearEnd: exp.endYear,
    heading: exp.company,
    subheading: exp.title,
    location: exp.location,
  }));

  const education = props.educationItems.map((edu) => ({
    year: edu.startYear,
    yearEnd: edu.endYear,
    heading: edu.school,
    subheading: edu.degree,
    detail: edu.fieldOfStudy,
    location: edu.location,
  }));

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <div className="container mx-auto px-4">
        <div className="my-8">
          <h1 className="text-3xl font-bold mb-8 md:text-center">Experience</h1>
          <Timeline items={experience} />

          <h2 className="text-2xl font-bold mt-12 mb-8 md:text-center">Education</h2>
          <Timeline items={education} />
        </div>
      </div>
    </>
  );
}
