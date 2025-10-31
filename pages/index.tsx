import Head from 'next/head';
import { useMemo, useState } from 'react';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { ProductCarousel } from '@/components/Product/ProductCarousel';
import { Configurator } from '@/components/Configurator/Configurator';
import { FeaturesGrid } from '@/components/Features/FeaturesGrid';
import { ComparisonTable } from '@/components/Comparison/ComparisonTable';
import { TestimonialsCarousel } from '@/components/Testimonials/TestimonialsCarousel';
import { Footer } from '@/components/Footer/Footer';
import { products, comparisonFeatures } from '@/utils/data';
import type { Product } from '@/types/product';
import { useConfiguratorStore } from '@/hooks/useConfigurator';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchQuery) return products;
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleCustomize = (productId: string) => {
    const selected = products.find((item) => item.id === productId) ?? products[0];
    useConfiguratorStore.getState().setProduct(selected as Product);
    document.getElementById('configurator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Head>
        <title>SmartFurn | Nội thất thông minh chuẩn Tesla</title>
        <meta
          name="description"
          content="Khám phá nội thất thông minh lấy cảm hứng từ Tesla với AI, vật liệu bền vững và thiết kế tối giản."
        />
        <meta property="og:title" content="SmartFurn | Nội thất thông minh chuẩn Tesla" />
        <meta
          property="og:description"
          content="Khám phá nội thất thông minh lấy cảm hứng từ Tesla với AI, vật liệu bền vững và thiết kế tối giản."
        />
        <meta property="og:image" content="/media/og-image.webp" />
      </Head>
      <Header onSearch={setSearchQuery} />
      <main className="bg-black text-white">
        <Hero
          title="Nội Thất Thông Minh Cho Tương Lai"
          subtitle="Kết hợp công nghệ AI với thiết kế tối giản"
          videoUrl="/media/hero-smart-furniture.mp4"
          ctas={[
            { label: 'Khám phá sản phẩm', href: '#products' },
            { label: 'Xem demo 3D', href: '#configurator' },
          ]}
        />
        <ProductCarousel products={filteredProducts} onCustomize={handleCustomize} />
        <Configurator product={products[0] as Product} />
        <FeaturesGrid />
        <ComparisonTable features={comparisonFeatures} />
        <TestimonialsCarousel />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
