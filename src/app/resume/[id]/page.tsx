import type { MicroCMSListResponse } from 'microcms-js-sdk';
import type { ResumeData } from 'src/app/resume/page';
import { client } from 'src/lib/client';

const ResumeDetail = async ({ params }: { params: { id: string } }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const data: MicroCMSListResponse<ResumeData> = await client.getListDetail({
    endpoint: 'resumes-me',
    contentId: params.id,
  });

  return (
    <article>
      <div className='px-2 my-12 mx-auto max-w-2xl prose' dangerouslySetInnerHTML={{ __html: data.detail }} />
    </article>
  );
};

export const generateStaticParams = async () => {
  const data = await client.getList({ endpoint: 'resumes-me', queries: { limit: 100 } });
  return data.contents.map((content) => ({ id: `/resume/${content.id}` }));
};

export default ResumeDetail;
