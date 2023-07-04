import type { MicroCMSListResponse } from 'microcms-js-sdk';
import type { ResumeData } from 'src/app/resume/page';
import { client } from 'src/lib/client';

const ResumeDetail = async ({ params }: { params: { id: string } }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const data: ResumeData = await client.getListDetail({
    endpoint: 'resumes-me',
    contentId: params.id,
  });

  return (
    <article>
      <div className='prose mx-auto my-12 max-w-2xl px-2' dangerouslySetInnerHTML={{ __html: data.detail }} />
    </article>
  );
};

export const generateStaticParams = async () => {
  const data: MicroCMSListResponse<ResumeData> = await client.getList({
    endpoint: 'resumes-me',
    queries: { limit: 100 },
  });
  return data.contents.map((content) => ({ id: content.id }));
};

export default ResumeDetail;
