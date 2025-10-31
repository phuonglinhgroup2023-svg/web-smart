import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { products } from '@/utils/data';
import type { Product } from '@/types/product';

const ProductDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = products.find((item) => item.id === slug) as Product | undefined;

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col bg-black text-white">
        <Header onSearch={() => undefined} />
        <main className="flex flex-1 flex-col items-center justify-center gap-6 p-12 text-center">
          <h1 className="text-4xl font-semibold">Không tìm thấy sản phẩm</h1>
          <p className="text-gray-400">Sản phẩm bạn tìm kiếm có thể đã bị di chuyển hoặc tạm thời không khả dụng.</p>
          <Link href="/" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black">
            Quay lại trang chủ
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{product.name} | SmartFurn</title>
        <meta name="description" content={product.features.join(', ')} />
      </Head>
      <div className="flex min-h-screen flex-col bg-black text-white">
        <Header onSearch={() => undefined} />
        <main className="section-padding flex-1 py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="aspect-video overflow-hidden rounded-3xl border border-white/10">
                <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image) => (
                  <div key={image} className="overflow-hidden rounded-2xl border border-white/10">
                    <img src={image} alt={product.name} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold">{product.name}</h1>
                <p className="mt-2 text-sm uppercase tracking-[0.5em] text-blue-500">{product.category}</p>
              </div>
              <div className="space-y-4 text-gray-300">
                <h2 className="text-xl font-semibold text-white">Tính năng nổi bật</h2>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span>•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">Thông số kỹ thuật</h3>
                <dl className="mt-4 space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <dt>Kích thước</dt>
                    <dd>{product.specs.dimensions}</dd>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <dt>Trọng lượng</dt>
                    <dd>{product.specs.weight}</dd>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <dt>Chất liệu</dt>
                    <dd>{product.specs.materials.join(', ')}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Màu sắc</dt>
                    <dd>{product.specs.colors.join(', ')}</dd>
                  </div>
                </dl>
              </div>
              <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.4em] text-gray-400">Giá từ</p>
                <p className="text-3xl font-semibold text-white">{product.price.toLocaleString('vi-VN')}đ</p>
                <Link
                  href="/configurator"
                  className="rounded-full bg-highlight px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.4em] text-white"
                >
                  Tùy chỉnh ngay
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ProductDetailPage;
