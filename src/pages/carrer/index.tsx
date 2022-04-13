import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Layout from 'src/components/layout';
import { getSortedCarrerData } from 'src/lib/getCarrer';
import type { Carrer } from 'src/types/carrer';

type Props = {
  allCarrerData: Omit<Carrer, 'contentHtml'>[];
};

const CarrerList: NextPage<Props> = (props) => {
  return (
    <Layout title={'carrer'}>
      <h2 className='px-1 py-3 sm:px-6 text-3xl'>キャリア概要</h2>
      <section className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 py-8 mx-auto'>
          <div className='-my-8 divide-y-2 divide-gray-100'>
            {props.allCarrerData.map(({ id, title, term, summary, description, skills }) => {
              return (
                <div key={term} className='py-8 flex flex-wrap md:flex-nowrap'>
                  <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
                    <span className='text-2xl font-semibold title-font text-gray-700'>{title}</span>
                    <span className='mt-1 text-gray-500'>{term}</span>
                  </div>
                  <div className='pl-8 md:flex-grow'>
                    <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>{summary}</h2>
                    <p className='leading-relaxed whitespace-pre-wrap'>{description}</p>
                    <Link href={`/carrer/${id}`}>
                      <a className='text-indigo-500 inline-flex items-center mt-4 hover:text-blue-400'>
                        Detail
                        <svg
                          className='w-4 h-4 ml-2'
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
                      </a>
                    </Link>
                  </div>
                  <div className='px-8 md:w-80 md:mb-0 mb-6 flex-shrink-0 flex'>
                    <ul className='text-xl'>
                      <div>
                        {skills.map((skill) => {
                          return <li key={skill}>{skill}</li>;
                        })}
                      </div>
                    </ul>
                  </div>
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
  const allCarrerData = getSortedCarrerData();
  return {
    props: {
      allCarrerData,
    },
  };
};

export default CarrerList;
