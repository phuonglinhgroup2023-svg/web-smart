import Head from 'next/head';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Configurator } from '@/components/Configurator/Configurator';
import { products } from '@/utils/data';

const ConfiguratorPage = () => {
  const featured = products[0];

  return (
    <>
      <Head>
        <title>Configurator | SmartFurn</title>
        <meta name="description" content="Tùy chỉnh nội thất thông minh với mô hình 3D tương tác real-time." />
      </Head>
      <div className="flex min-h-screen flex-col bg-black text-white">
        <Header onSearch={() => undefined} />
        <main className="flex-1">
          <Configurator product={featured} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ConfiguratorPage;
