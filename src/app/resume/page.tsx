import type { MicroCMSListResponse } from 'microcms-js-sdk';
import Link from 'next/link';
import { client } from 'src/lib/client';

export type ResumeData = {
  id: string;
  title: string;
  term: string;
  summary: string;
  description: string;
  skills: any;
  detail: any;
};

const Resume = async () => {
  const data: MicroCMSListResponse<ResumeData> = await client.get({
    endpoint: 'resumes-me',
    queries: { orders: '-startDate', limit: 100 },
  });
  return (
    <>
      <h2 className='px-1 py-3 text-3xl sm:px-6'>キャリア概要</h2>
      <section className='overflow-hidden text-gray-600'>
        <div className='container mx-auto px-5 py-8'>
          <div className='-my-8 divide-y-2 divide-gray-100'>
            {data.contents.map(({ id, title, term, summary, description, skills }) => {
              return (
                <div key={term} className='flex flex-wrap py-8 md:flex-nowrap'>
                  <div className='mb-6 flex shrink-0 flex-col md:mb-0 md:w-64'>
                    <span className='text-2xl font-semibold text-gray-700 '>{title}</span>
                    <span className='mt-1 text-gray-500'>{term}</span>
                  </div>
                  <div className='pl-8 md:grow'>
                    <h2 className='mb-2 text-2xl font-medium text-gray-900'>{summary}</h2>
                    <div
                      className='whitespace-pre-wrap leading-relaxed'
                      dangerouslySetInnerHTML={{
                        __html: `${description}`,
                      }}
                    />
                    <Link
                      className='mt-4 inline-flex items-center text-indigo-500 hover:text-blue-400'
                      href={`/resume/${id}`}
                      passHref
                    >
                      Detail
                      <svg
                        className='ml-2 h-4 w-4'
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
                    className='mb-6 flex shrink-0 px-8 text-xl md:mb-0 md:w-80'
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
    </>
  );
};

export default Resume;
