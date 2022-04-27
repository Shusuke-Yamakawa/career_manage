import Layout from 'src/components/layout';

const whiteRow = 'bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6';
const grayRow = 'bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6';

const items = [
  { item: '氏名', content: '山川 周介', style: 'bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6' },
  {
    item: '特徴/強み',
    content: 'フルスタックエンジニア/開発者＆マネジメント',
    style: whiteRow,
  },
  {
    item: '得意言語',
    content: 'Java/Kotlin/TypeScript/Python',
    style: grayRow,
  },
  {
    item: 'フレームワーク',
    content: 'Spring Boot/React/Next.js/Angular/React Native/Django',
    style: whiteRow,
  },
  {
    item: 'その他技術',
    content: 'MySQL/Postgres/Oracle/AWS/GCP/Firebase/Sentry/GitHub Actions/Docker/Notion',
    style: grayRow,
  },
  {
    item: '対応業務',
    content: 'Webシステム開発/モバイルアプリ開発/プロジェクトリード/システム刷新/保守・運用',
    style: whiteRow,
  },
  {
    item: '趣味/業務外活動',
    content: 'スポーツ/読書/音楽/歴史/テニスサークル運営',
    style: grayRow,
  },
  {
    item: '影響を受けた本',
    content: '7つの習慣/Team Geek/嫌われる勇気/人を動かす/リーダブルコード/スラムダンク',
    style: whiteRow,
  },
];

const Profile = () => {
  return (
    <Layout title={'profile'}>
      <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
        <h2 className='py-5 px-1 text-3xl sm:px-6'>プロフィール</h2>
        <div className='border-t'>
          <dl>
            {items.map(({ item, content, style }) => {
              return (
                <div key={item} className={style}>
                  <dt className='text-sm font-medium text-gray-500'>{item}</dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>{content}</dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
