import type { MicroCMSContentId } from 'microcms-js-sdk';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Layout from 'src/components/layout';
import { client } from 'src/lib/client';
import type { Resume } from 'src/pages/carrer';

type Props = Resume & MicroCMSContentId;

const CarrerDetail: NextPage<Props> = (props) => {
  return (
    <Layout title='carrer'>
      <article>
        <div className='px-2 my-12 mx-auto max-w-2xl prose' dangerouslySetInnerHTML={{ __html: props.detail }} />
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: 'resumes-me' });
  const ids = data.contents.map((content) => `/carrer/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const data = await client.getListDetail({ endpoint: 'resumes-me', contentId: params.id });

  return {
    props: data,
  };
};

export default CarrerDetail;
