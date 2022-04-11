import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Layout from 'src/components/layout';
import { getAllCarrerIds, getCarrerData } from 'src/lib/getCarrer';
import type { Carrer } from 'src/types/carrer';

type Props = { carrerData: Pick<Carrer, 'id' | 'contentHtml'> };

/* eslint-disable @typescript-eslint/naming-convention */
const CarrerDetail: NextPage<Props> = ({ carrerData }) => {
  return (
    <Layout title={'carrer'}>
      <div
        className='prose my-12 mx-auto px-2 max-w-2xl'
        dangerouslySetInnerHTML={{ __html: carrerData.contentHtml }}
      />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths<Pick<Carrer, 'id'>> = async () => {
  const paths = getAllCarrerIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const carrerData = await getCarrerData(params.id);
  return {
    props: {
      carrerData,
    },
  };
};

export default CarrerDetail;
