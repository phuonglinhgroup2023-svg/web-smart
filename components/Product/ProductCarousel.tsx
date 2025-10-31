import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ProductCard } from './ProductCard';
import type { Product } from '@/types/product';

interface ProductCarouselProps {
  products: Product[];
  onCustomize: (productId: string) => void;
}

const scrollVariants = {
  animate: {
    x: ['0%', '-50%'],
    transition: {
      duration: 40,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, onCustomize }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('animate').catch(() => undefined);
  }, [controls]);

  return (
    <section id="products" className="section-padding py-24">
      <div className="mb-12 flex flex-col gap-4 text-left">
        <p className="text-sm uppercase tracking-[0.5em] text-blue-500">Signature Collection</p>
        <h2 className="section-title">Dòng sản phẩm nổi bật</h2>
        <p className="section-subtitle">
          Thiết kế thông minh, vật liệu bền vững và tích hợp công nghệ AI cho trải nghiệm sống tương lai.
        </p>
      </div>
      <div className="relative">
        <motion.div
          className="flex gap-8"
          variants={scrollVariants}
          animate={controls}
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() => {
            controls.start('animate').catch(() => undefined);
          }}
        >
          {[...products, ...products].map((product, index) => (
            <ProductCard
              key={`${product.id}-${index}`}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.images[0]}
              features={product.features}
              onCustomize={onCustomize}
            />
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
      </div>
    </section>
  );
};
