import dynamic from 'next/dynamic';
import { memo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useConfiguratorStore } from '@/hooks/useConfigurator';
import type { Product } from '@/types/product';
import { useCartStore } from '@/hooks/useCart';

const ProductViewer = dynamic(() => import('./ProductViewer'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[480px] items-center justify-center rounded-3xl bg-white/5">
      <span className="text-gray-400">Đang tải mô hình 3D...</span>
    </div>
  ),
});

interface ConfiguratorProps {
  product: Product;
}

const ConfiguratorComponent: React.FC<ConfiguratorProps> = ({ product }) => {
  const {
    product: selectedProduct,
    setProduct,
    color,
    setColor,
    material,
    setMaterial,
    size,
    setSize,
    addOns,
    toggleAddOn,
    totalPrice,
  } = useConfiguratorStore();
  const { addItem, toggle } = useCartStore();

  useEffect(() => {
    setProduct(product);
  }, [product, setProduct]);

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    addItem({
      id: selectedProduct.id,
      name: `${selectedProduct.name} - ${size?.toUpperCase() ?? 'MEDIUM'}`,
      price: totalPrice,
      quantity: 1,
      customizationSummary: `${color?.name ?? 'Default'} • ${material ?? 'Standard'} • ${addOns.length} phụ kiện`,
    });
    toggle();
  };

  return (
    <section id="configurator" className="section-padding py-24">
      <div className="mb-16 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.5em] text-blue-500">Configurator</p>
          <h2 className="section-title">Tùy biến chuẩn Tesla cho nội thất của bạn</h2>
          <p className="section-subtitle">
            Điều chỉnh từng chi tiết theo phong cách sống: màu sắc, chất liệu, kích thước và các module thông minh.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-gray-200">
          <p>
            <strong>Tip:</strong> Hãy thử phối màu Electric Blue với chất liệu Nhôm tái chế để nổi bật trong không gian tối giản.
          </p>
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="card-surface h-full p-6 lg:p-10">
          <ProductViewer product={selectedProduct ?? product} color={color} />
        </div>
        <div className="card-surface flex flex-col gap-8 p-6 lg:p-10">
          <div>
            <h3 className="text-2xl font-semibold">Tùy chỉnh</h3>
            <p className="text-sm text-gray-300">Mọi thay đổi được đồng bộ real-time với mô hình 3D.</p>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm uppercase tracking-[0.3em] text-gray-400">Màu sắc</h4>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.customizations.colors.map((option) => (
                  <button
                    key={option.name}
                    type="button"
                    onClick={() => setColor(option)}
                    className={`h-12 w-12 rounded-full border-2 transition ${
                      color?.name === option.name ? 'border-white scale-110' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: option.hex }}
                    aria-label={option.name}
                  />
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-[0.3em] text-gray-400">Chất liệu</h4>
              <div className="mt-3 grid gap-3 md:grid-cols-3">
                {product.customizations.materials.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setMaterial(option)}
                    className={`rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                      material === option ? 'border-white bg-white/10 text-white' : 'border-white/10 text-gray-300 hover:border-white/30'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-[0.3em] text-gray-400">Kích thước</h4>
              <div className="mt-3 flex gap-3">
                {(['small', 'medium', 'large'] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSize(option)}
                    className={`rounded-full border px-5 py-2 text-sm uppercase tracking-wide transition ${
                      size === option ? 'border-white bg-white text-black' : 'border-white/20 text-gray-200 hover:border-white/40'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-[0.3em] text-gray-400">Phụ kiện</h4>
              <div className="mt-3 space-y-3">
                {product.customizations.addOns.map((addon) => {
                  const isSelected = addOns.some((item) => item.name === addon.name);
                  return (
                    <motion.button
                      key={addon.name}
                      type="button"
                      onClick={() => toggleAddOn(addon)}
                      className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left text-sm transition ${
                        isSelected
                          ? 'border-blue-500 bg-blue-500/20 text-white'
                          : 'border-white/10 text-gray-200 hover:border-white/30'
                      }`}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span>{addon.name}</span>
                      <span>+{addon.price.toLocaleString('vi-VN')}đ</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl bg-white/10 p-6">
            <div className="flex items-center justify-between text-sm text-gray-300">
              <span>Tổng cộng</span>
              <span className="text-2xl font-semibold text-white">{totalPrice.toLocaleString('vi-VN')}đ</span>
            </div>
            <motion.button
              type="button"
              onClick={handleAddToCart}
              className="rounded-full bg-highlight px-8 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Thêm vào giỏ
            </motion.button>
            <button type="button" className="text-xs text-gray-400 underline">
              Lưu cấu hình / Chia sẻ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Configurator = memo(ConfiguratorComponent);
