import Head from 'next/head';
import BaseLayout from '../layouts/BaseLayout';

export default function IndexView() {
  return (
    <BaseLayout>
      <Head>
        <title>메인 :: 그로테스큐 GrotesQ</title>
      </Head>
      main content

      <div className="flex">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </BaseLayout>
  );
}
