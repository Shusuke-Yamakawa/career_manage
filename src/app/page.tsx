import type { MicroCMSListResponse } from 'microcms-js-sdk';
import { client } from 'src/lib/client';

type Profile = {
  item: string;
  content: string;
};

const whiteRow = 'bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6';
const grayRow = 'bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6';

const Profile = async () => {
  const data: MicroCMSListResponse<Profile> = await client.get({ endpoint: 'profile' });
  return (
    <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
      <h2 className='py-5 px-1 text-3xl sm:px-6'>プロフィール</h2>
      <div className='border-t'>
        <dl>
          {data.contents.map(({ item, content }, index) => {
            return (
              <div key={item} className={index % 2 === 0 ? grayRow : whiteRow}>
                <dt className='text-sm font-medium text-gray-500'>{item}</dt>
                <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>{content}</dd>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
};

export default Profile;
