import type { MicroCMSListResponse } from 'microcms-js-sdk';
import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Layout from 'src/components/layout';
import { client } from 'src/lib/client';

export type Resume = {
  id: string;
  title: string;
  term: string;
  summary: string;
  description: string;
  skills: any;
  detail: any;
};

type Props = MicroCMSListResponse<Resume>;

const CarrerList: NextPage<Props> = (props) => {
  return (
    <Layout title={'carrer'}>
      <h2 className='py-3 px-1 text-3xl sm:px-6'>キャリア概要</h2>
      <section className='overflow-hidden text-gray-600'>
        <div className='container py-8 px-5 mx-auto'>
          <div className='-my-8 divide-y-2 divide-gray-100'>
            {props.contents.map(({ id, title, term, summary, description, skills }) => {
              return (
                <div key={term} className='flex flex-wrap py-8 md:flex-nowrap'>
                  <div className='flex flex-col shrink-0 mb-6 md:mb-0 md:w-64'>
                    <span className='text-2xl font-semibold text-gray-700 '>{title}</span>
                    <span className='mt-1 text-gray-500'>{term}</span>
                  </div>
                  <div className='pl-8 md:grow'>
                    <h2 className='mb-2 text-2xl font-medium text-gray-900'>{summary}</h2>
                    <div
                      className='leading-relaxed whitespace-pre-wrap'
                      dangerouslySetInnerHTML={{
                        __html: `${description}`,
                      }}
                    />
                    <Link
                      className='inline-flex items-center mt-4 text-indigo-500 hover:text-blue-400'
                      href={`/carrer/${id}`}
                      passHref
                    >
                      Detail
                      <svg
                        className='ml-2 w-4 h-4'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='2'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path d='M5 12h14'></path>
                        <path d='M12 5l7 7-7 7'></path>
                      </svg>
                    </Link>
                  </div>
                  <div
                    className='flex shrink-0 px-8 mb-6 text-xl md:mb-0 md:w-80'
                    dangerouslySetInnerHTML={{
                      __html: `${skills}`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.get({ endpoint: 'resumes-me', queries: { orders: '-startDate' } });
  return {
    props: data,
  };
};

export default CarrerList;
