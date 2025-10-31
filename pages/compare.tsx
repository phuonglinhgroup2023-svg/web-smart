import Head from 'next/head';
import { useMemo, useState } from 'react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { products } from '@/utils/data';
import type { Product } from '@/types/product';

const ComparePage = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>(products.slice(0, 2).map((p) => p.id));

  const selectedProducts = useMemo(
    () => products.filter((product) => selectedIds.includes(product.id)),
    [selectedIds]
  );

  const toggleProduct = (productId: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      if (prev.length >= 4) {
        return [...prev.slice(1), productId];
      }
      return [...prev, productId];
    });
  };

  const renderSpecRow = (label: string, accessor: (product: Product) => string) => (
    <tr key={label} className="border-b border-white/10">
      <th scope="row" className="px-6 py-4 text-left text-sm text-gray-400">
        {label}
      </th>
      {selectedProducts.map((product) => (
        <td key={product.id} className="px-6 py-4 text-sm text-white">
          {accessor(product)}
        </td>
      ))}
    </tr>
  );

  return (
    <>
      <Head>
        <title>So sánh sản phẩm | SmartFurn</title>
      </Head>
      <div className="flex min-h-screen flex-col bg-black text-white">
        <Header onSearch={() => undefined} />
        <main className="section-padding flex-1 py-24">
          <div className="space-y-10">
            <div className="space-y-4 text-center">
              <p className="text-sm uppercase tracking-[0.5em] text-blue-500">Compare</p>
              <h1 className="section-title">So sánh các sản phẩm SmartFurn</h1>
              <p className="section-subtitle mx-auto">Chọn tối đa 4 sản phẩm để so sánh chi tiết thông số và tính năng.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {products.map((product) => {
                const isActive = selectedIds.includes(product.id);
                return (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => toggleProduct(product.id)}
                    className={`rounded-full border px-6 py-3 text-sm transition ${
                      isActive ? 'border-white bg-white text-black' : 'border-white/20 text-gray-200 hover:border-white/40'
                    }`}
                  >
                    {product.name}
                  </button>
                );
              })}
            </div>
            <div className="overflow-x-auto rounded-3xl border border-white/10">
              <table className="min-w-full divide-y divide-white/10">
                <thead className="bg-white/5 text-left text-xs uppercase tracking-[0.4em] text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Thông số
                    </th>
                    {selectedProducts.map((product) => (
                      <th scope="col" key={product.id} className="px-6 py-4 text-white">
                        {product.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {renderSpecRow('Giá', (product) => `${product.price.toLocaleString('vi-VN')}đ`)}
                  {renderSpecRow('Danh mục', (product) => product.category)}
                  {renderSpecRow('Kích thước', (product) => product.specs.dimensions)}
                  {renderSpecRow('Trọng lượng', (product) => product.specs.weight)}
                  {renderSpecRow('Chất liệu', (product) => product.specs.materials.join(', '))}
                  {renderSpecRow('Màu sắc', (product) => product.specs.colors.join(', '))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ComparePage;
