import Head from 'next/head';
import { fetchDeveloperTimeline } from '../src/api';
import { TimelineItem as TimelineItm } from '../src/api/types';
import Timeline from '../src/Timeline';

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

  const entries = props.timelineItems.map((item) => ({
    year: item.year,
    lines: item.desc,
  }));

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <div className="container mx-auto px-4">
        <div className="my-8">
          <h1 className="text-3xl font-bold mb-8 md:text-center">Developer timeline</h1>
          <Timeline items={entries} />
        </div>
      </div>
    </>
  );
}
