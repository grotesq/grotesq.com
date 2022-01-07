import Head from 'next/head';
import BaseLayout from '../components/layouts/BaseLayout'

export default function Home() {
  return (
    <BaseLayout>
      <Head>
        <title>메인 :: 그로테스큐 GrotesQ</title>
      </Head>
    </BaseLayout>
  );
}
