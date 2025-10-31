import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  features: string[];
  onCustomize: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, features, onCustomize }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className="group relative h-[28rem] w-80 overflow-hidden rounded-3xl border border-white/10 bg-white/5"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -12 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <Image src={image} alt={name} fill className="object-cover" sizes="320px" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 text-white"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: isHovered ? 1 : 0.8 }}
      >
        <div className="flex h-full flex-col justify-end gap-4">
          <div>
            <h3 className="text-2xl font-semibold">{name}</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-200">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span aria-hidden>✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Từ {price.toLocaleString('vi-VN')}đ</span>
            <motion.button
              type="button"
              onClick={() => onCustomize(id)}
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
              whileTap={{ scale: 0.95 }}
            >
              Tùy chỉnh
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};
